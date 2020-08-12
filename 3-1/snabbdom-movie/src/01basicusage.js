import {init} from 'snabbdom/build/package/init'
import { h } from 'snabbdom/build/package/h' // helper function for creating vnodes

// 一个虚拟节点被添加
// 当patch过程中发现新的虚拟节点时，这个hook会被调用。这个hook在Snabbdom以任何方式处理节点之前被调用。即，在它创建基于vnode的DOM节点之前。
// init返回的patch函数有两个参数。第一个是表示当前视图的DOM元素或vnode。第二个是表示更新后的新视图的vnode
let patch = init([])
let vnode = h('div#container.box', "hello-snabbdom")
let app = document.querySelector('#app')

// 如果传递带有父节点的DOM元素，newVnode将被转换为DOM节点，传递的元素将被创建的DOM节点替换。如果传递旧的vnode, Snabbdom将有效地修改它以匹配新vnode中的描述。
// 这里就是 将app真实Dom想转成虚拟DOM， 然后和新虚拟dom比较，更新DOM ，并返回DOM
let oldNode =  patch(app, vnode)


setTimeout(() => {
    vnode = h('div#container.box', '变身----呵呵怪')
    patch(oldNode, vnode)
},2000)
