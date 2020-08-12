import { init } from "snabbdom/build/package/init";
import { h } from "snabbdom/build/package/h"; // helper function for creating vnodes
import { classModule } from "snabbdom/build/package/modules/class.js";
import { propsModule } from "snabbdom/build/package/modules/props.js";
import { styleModule } from "snabbdom/build/package/modules/style";
import { eventListenersModule } from "snabbdom/build/package/modules/eventlisteners";

const originalData = [
	{
		rank: 1,
		title: "肖申克的救赎 ",
		desc:
			"20世纪40年代末，小有成就的青年银行家安迪（蒂姆·罗宾斯 Tim Robbins 饰）因涉嫌杀害妻子及她的情人而锒铛入狱。在这座名为鲨堡的监狱内，希望似乎虚无缥缈，终身监禁的惩罚无疑注定了安迪接下来灰暗绝望的人生。",
		elmHeight: 0,
		score: 9.7,
	},
	{
		rank: 2,
		title: "霸王别姬",
		desc:
			"T段小楼（张丰毅）与程蝶衣（张国荣）是一对打小一起长大的师兄弟，两人一个演生，一个饰旦，一向配合天衣无缝，尤其一出《霸王别姬》，更是誉满京城，",
		elmHeight: 0,
		score: 9.6,
	},
	{
		rank: 3,
		title: "阿甘正传",
		desc:
			"阿甘（汤姆·汉克斯 饰）于二战结束后不久出生在美国南方阿拉巴马州一个闭塞的小镇，他先天弱智，智商只有75，然而他的妈妈是一个性格坚强的女性，她常常鼓励阿甘“傻人有傻福”，要他自强不息。",
		elmHeight: 0,
		score: 9.2,
	},
	{
		rank: 4,
		title: "这个杀手不太冷 Léon",
		desc:
			"里昂（让·雷诺饰）是名孤独的职业杀手，受人雇佣。一天，邻居家小姑娘马蒂尔达（纳塔丽·波特曼饰)敲开他的房门，要求在他那里暂避杀身之祸",
		elmHeight: 0,
		score: 9.4,
	},
	{
		rank: 5,
		title: "泰坦尼克号",
		desc:
			"1912年4月10日，号称 “世界工业史上的奇迹”的豪华客轮泰坦尼克号开始了自己的处女航，从英国的南安普顿出发驶往美国纽约。",
		elmHeight: 0,
		score:  9.3,
	},
	{
		rank: 6,
		title: "忠犬八公的故事",
		desc:
			"八公（Forest 饰）是一条谜一样的犬，因为没有人知道它从哪里来。教授帕克（理查·基尔 Richard Gere 饰）在小镇的火车站拣到一只走失的小狗",
		elmHeight: 0,
		score:  9.3,
	},
];
let data = [
	originalData[0],
	originalData[1],
	originalData[2],
	originalData[3],
	originalData[4],
	originalData[5],
];
let vnode = null

const patch = init([
	classModule,
	propsModule,
	styleModule,
	eventListenersModule,
]);

// 渲染每条movie
function movieView(movie){
	return h('div.row',{
		key: movie.rank,
		style:{
			opacity:0,
			transform: 'translate(-200px)',
			delayed: {transform: `translateY(${movie.offset}px)`, opacity: '1'},
			remove: {opacity: '0', transform: `translateY(${movie.offset}px) translateX(200px)` }
		}
	},[
		h('div', { style: { fontWeight: 'bold' } }, movie.rank),
		h('div', movie.title),
		h('div', movie.desc),
		h('div', movie.score),
		h('div.btn.rm-btn', { on: { click: [remove, movie] } }, 'x'),
	])
}

function remove(movie){
	console.log(movie);
	let tmp = []
	data.forEach(movieItem =>{
		if(movie.title !== movieItem.title){
			tmp.push(movieItem)
		}
	})
	
	data = tmp
	console.log(data);
	render()
}


function render(){
	
	data.forEach((movie, index) => {
		movie.offset = index*80
	})
	let newvnode = h('div.list',{}, view(data))
	vnode = patch(vnode, newvnode)
}

function view(data){
	return h('div', [
		h('h1', '豆瓣 TOP250--我有故事，你有酒吗🤪'),
		h('div',[
			h('span','按以下排序： '),
			h('button', {
				on: {
					click: [sortByType, 'rank']
				}
			}, 'Rank'),
			h('button', {
				on: {
					click: [sortByType, 'title']
				}
			}, 'Title'),
		
		]),
		h('div', [
			h('button', {
				on: {
					click: [addOne]
				}
			}, '新增一条')
		]),
		h('div', data.map(movieView))
	])
}

function sortByType(prop){
	data.sort((a, b) => {
		if (a[prop] > b[prop]) {
		  return 1
		}
		if (a[prop] < b[prop]) {
		  return -1
		}
		return 0
	})
	  render()
}

function addOne(){
	data.push(
		{
			rank: data.length,
			title: "泰坦尼克号"+ data.length,
			desc:
				"1912年4月10日，号称 “世界工业史上的奇迹”的豪华客轮泰坦尼克号开始了自己的处女航，从英国的南安普顿出发驶往美国纽约。",
			elmHeight: 9.4,
		}
	)
	render()
}

window.addEventListener("DOMContentLoaded", () => {
	let app = document.querySelector("div#app");
	vnode = patch(app,view(data))
	render()
});


