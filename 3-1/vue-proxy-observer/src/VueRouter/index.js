
// 如何实现一个 vue 插件 https://cn.vuejs.org/v2/guide/plugins.html?
// Vue.js 的插件应该暴露一个 install 方法。这个方法的第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象
let _Vue = null
export default class VueRouter {
    // 静态方法， 注意参数是 Vue构造器
    static install(Vue){
        // 1. 判断是否已经被注册过（单例模式）
        if(VueRouter.install.installed){
            return // 啥也不做
        }
        VueRouter.install.installed = true

        // 2. 将 Vue 构造器 放到全局环境，以后给其他功能用
        _Vue = Vue

        // 3. 将 Vue 实例化时 传入的 router 对象注入到每一个 vue 实例上
        /*
        思考： 通过全局方法 Vue.use() 使用插件。它需要在你调用 new Vue() 启动应用之前完成，
        这时候还没有 vue 实例， 如何才能将 router 挂载到实例上？
        解决 mixin 
        为啥是 mixin ? 
            文档： https://cn.vuejs.org/v2/api/#mixins
            全局注册一个混入，影响注册之后所有创建的每个 Vue 实例。插件作者可以使用混入，向组件注入自定义的行为。不推荐在应用代码中使用。
        */ 
       _Vue.mixin({
            beforeCreate () {
                if(this.$options.router){
                    _Vue.prototype.$router = this.$options.router
                    this.$options.router.init(Vue)
                }
            }
       })

    }

    constructor(options){
        this.options = options
        this.routeMap = {}
        // data 保存当前应用路由， 必须是响应式的，才能让视图自动响应渲染
        this.data = _Vue.observable({
            // 默认是 / 首页
            // this.data.current = window.location.pathname
            current: this.initCurrentPath(options.mode)
        })
    }

    // 将 options 中的 routes 中的每一项 route 拆分成一个 [key：path, value: component]的 map
    createRouteMap(){
        this.options.routes.forEach(route => {
            this.routeMap[route.path] = route.component
        })
    }
    // 创建2个全局组件: route-view  route-link
    // 如何创建一个 vue 全局组件：https://cn.vuejs.org/v2/guide/components.html
    initComponents(Vue){
        const self = this
        Vue.component('router-link', {
            props: {
                to: String
            },
            // template: '<a :href="to"><slot></slot></a>' // 运行时版本不支持
            render(h){
                return h('a', {
                    attrs: {
                        href: this.to
                    },
                    on: {
                        click: this.clickHandler
                    }
                }, [this.$slots.default])
            },
            methods: {
                clickHandler(e){
                    if(self.options.mode === 'history'){
                        this.clickHandlerHistory(e)
                    }else{
                        this.clickHandlerHash(e)
                    }
                },
                clickHandlerHistory(e){
                    // 1. 更新 url
                    // (data: any, title: string, url?: string)  
                    history.pushState({}, '标题', this.to)
                    // 2. 更新 VueRouter 中 data.current
                    // data.current(响应式数据) 的变化会引起视图的变化
                    this.$router.data.current = this.to
                    // 3. 阻止 a 标签点击事件的默认行为，即页面跳转刷新
                    e.preventDefault()
                },
                clickHandlerHash(e){
                    // 将url 中的 hash 更新为组件设置的路由
                    window.location.hash = this.to
                    e.preventDefault()
                }
            }
        })
        Vue.component('router-view', {
            render(h){
                // 1. 找出当前路径 对应的组件
                const component = self.routeMap[self.data.current]
                // 渲染当前组件
                return h(component)
            }
        })
    }

    // 监听 popstate 事件
    initEvent(){
        window.addEventListener('popstate', () =>{
            this.data.current = window.location.pathname
        })

        window.addEventListener('hashchange',() =>{
            const url = window.location.hash.substr(1)
            this.data.current = url
            // 加载对应的 组件
            console.log(url);
         })
    }

    // 根据不同 mode 初始化不同的路径
    initCurrentPath(mode){
        if(mode === 'history'){
            return window.location.pathname || '/'
        }

        // 默认 hash 模式(保证刷新还是当前组件)
        window.location.hash =  window.location.hash ? window.location.hash : '#/'
        return  window.location.hash ? window.location.hash.substr(1) : '#/'
        
    }


    init(Vue){
        this.createRouteMap()
        this.initEvent()
        this.initComponents(Vue)
    }

    

    // vm.$options https://cn.vuejs.org/v2/api/#vm-options
}