import {init} from 'snabbdom/build/package/init'
import { h } from 'snabbdom/build/package/h' // helper function for creating vnodes

let patch = init([])
// 添加嵌套的 DOM 结构
let vnode = h('h1#container', [
    h('p.text', 'h1的文案'),
    h('sapn.text', 'span的文案'),
])
let app = document.querySelector('#app')
let oldNode = patch(app, vnode)

setTimeout(()=>{
    vnode = h('h1#container', [
        h('h4.text', 'h4的文案'),
        h('h6.text', 'h6的文案'),
    ])
    patch(oldNode, vnode)
}, 2000)
