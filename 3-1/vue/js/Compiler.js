class Compiler{
    constructor (vm){
        this.el = vm.$el
        this.vm = vm
        this.compile(this.el)
    }

    //编译模板 处理文本节点 元素节点
    compile(el){
        let childNodes = el.childNodes
        Array.from(childNodes).forEach(node => {
            if(this.isTextNode(node)){
                this.compileText(node)
            }else if (this.isElementNode(node)){
                this.compileElement(node)
            }

            //是否有子节点
            if(node.childNodes && node.childNodes.length ){
                this.compile(node)
            }

        })


    }

    // 编译模板 处理文本节点和元素节点
    compileElement(node){
        // console.log(node.attributes)
        // 遍历所有的属性节点
        Array.from(node.attributes).forEach(attr =>{
            let attrname = attr.name
            if(this.isDiretive(attrname)){
                // v-text --> text
                attrname = attrname.substr(2)
                let key = attr.value
                this.update(node,key,attrname)
            }
        })



    }
    update(node,key,attrName){
        // console.log(node, key, attrName);
        // 指令名
        let orderName = ''
        // 事件名
        let eventName = ''
        // 处理事件绑定的冒号
        if(attrName.indexOf(':') !== -1){
            [orderName, eventName] = attrName.split(':')
        }
        orderName = orderName || attrName
        // console.log(orderName, key, eventName);
        const updaterFnc = this[`${orderName}Updater`]
        let value = eventName ? this.vm.$options.methods[key]: this.vm[key]
        updaterFnc && updaterFnc.call(this, node, value, key, eventName)
    }

    textUpdater(node,value,key) {
        node.textContent = value
        new Wather(this.vm, key, (newValue) =>{
            node.textContent = newValue
        })
    }

    modelUpdater(node,value,key) {
        node.value = value
        new Wather(this.vm, key, (newValue) =>{
            node.value = newValue
        })

        //双向绑定
        node.addEventListener('input',()=>{
            this.vm[key] = node.value
        })
    }

    // v-html 指令: 将html文本解析为html
    htmlUpdater(node, value, key){
        node.innerHTML = value
        new Wather(this.vm, key, (newValue) => {
            node.innerHTML = newValue
        })
    }

    // v-on 指令: 为DOM绑定事件回调
    // 形式： v-on:事件名='事件回调函数'  举例： <button v-on:click="doThis"></button>
    // 事件处理函数是不是响应式数据？  代码中更改了事件处理函数，会导致页面重渲染， 所以它是响应式数据
    onUpdater(node, value, key, eventName){
        node.addEventListener(eventName, value)
        new Wather(this.vm.$options.methods, key, (newValue) => {
            node.addEventListener(eventName, newValue)
        },(oldVlaue)=>{
            // 先把之前的事件处理函数卸载掉
            console.log('....执行了....', oldVlaue);
            node.removeEventListener(eventName, oldVlaue)
        })
    }


    //编译文本节点 处理差值表达式
    compileText(node){
        // console.dir(node)
        // {{ msg }}
        let reg = /\{\{(.+?)\}\}/
        let value = node.textContent
        if(reg.test(value)){
            let key = RegExp.$1.trim()
            node.textContent = value.replace(reg, this.vm[key])

            // 创建watcher
            new Wather(this.vm , key, (newValue) =>{
                node.textContent = newValue
            })
        }
    }

    //判断元素属性是否是指令
    isDiretive(attrname){
        return attrname.startsWith('v-')

    }

    //判断节点是否是文本节点
    isTextNode(node){
        return node.nodeType === 3
    }

    //判断节点是否是元素节点
    isElementNode(node){
        return node.nodeType === 1
    }

}
