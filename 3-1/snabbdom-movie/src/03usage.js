import { init } from "snabbdom/build/package/init";
import { h } from "snabbdom/build/package/h"; // helper function for creating vnodes
import { styleModule  } from "snabbdom/build/package/modules/style";
import { eventListenersModule } from "snabbdom/build/package/modules/eventlisteners";

const patch = init([styleModule, eventListenersModule]);

let vnode = h(
	"div#container",
	{
		style: {
			backgroundColor: "orange",
		},
		on: {
			click: clickHandler,
		},
	},
	[h("h3", "h3标签"), h("p", "p标签", [h("span", "p-span标签")])]
);

patch(document.querySelector('#app'), vnode)

function clickHandler() {
	console.log("点击了.....");
}
