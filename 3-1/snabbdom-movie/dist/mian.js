/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/01basicusage.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/snabbdom/build/package/htmldomapi.js":
/*!***********************************************************!*\
  !*** ./node_modules/snabbdom/build/package/htmldomapi.js ***!
  \***********************************************************/
/*! exports provided: htmlDomApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"htmlDomApi\", function() { return htmlDomApi; });\nfunction createElement(tagName) {\n  return document.createElement(tagName);\n}\n\nfunction createElementNS(namespaceURI, qualifiedName) {\n  return document.createElementNS(namespaceURI, qualifiedName);\n}\n\nfunction createTextNode(text) {\n  return document.createTextNode(text);\n}\n\nfunction createComment(text) {\n  return document.createComment(text);\n}\n\nfunction insertBefore(parentNode, newNode, referenceNode) {\n  parentNode.insertBefore(newNode, referenceNode);\n}\n\nfunction removeChild(node, child) {\n  node.removeChild(child);\n}\n\nfunction appendChild(node, child) {\n  node.appendChild(child);\n}\n\nfunction parentNode(node) {\n  return node.parentNode;\n}\n\nfunction nextSibling(node) {\n  return node.nextSibling;\n}\n\nfunction tagName(elm) {\n  return elm.tagName;\n}\n\nfunction setTextContent(node, text) {\n  node.textContent = text;\n}\n\nfunction getTextContent(node) {\n  return node.textContent;\n}\n\nfunction isElement(node) {\n  return node.nodeType === 1;\n}\n\nfunction isText(node) {\n  return node.nodeType === 3;\n}\n\nfunction isComment(node) {\n  return node.nodeType === 8;\n}\n\nvar htmlDomApi = {\n  createElement: createElement,\n  createElementNS: createElementNS,\n  createTextNode: createTextNode,\n  createComment: createComment,\n  insertBefore: insertBefore,\n  removeChild: removeChild,\n  appendChild: appendChild,\n  parentNode: parentNode,\n  nextSibling: nextSibling,\n  tagName: tagName,\n  setTextContent: setTextContent,\n  getTextContent: getTextContent,\n  isElement: isElement,\n  isText: isText,\n  isComment: isComment\n};\n\n//# sourceURL=webpack:///./node_modules/snabbdom/build/package/htmldomapi.js?");

/***/ }),

/***/ "./node_modules/snabbdom/build/package/init.js":
/*!*****************************************************!*\
  !*** ./node_modules/snabbdom/build/package/init.js ***!
  \*****************************************************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony import */ var _vnode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vnode.js */ \"./node_modules/snabbdom/build/package/vnode.js\");\n/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is.js */ \"./node_modules/snabbdom/build/package/is.js\");\n/* harmony import */ var _htmldomapi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./htmldomapi.js */ \"./node_modules/snabbdom/build/package/htmldomapi.js\");\n\n\n\n\nfunction isUndef(s) {\n  return s === undefined;\n}\n\nfunction isDef(s) {\n  return s !== undefined;\n}\n\nvar emptyNode = Object(_vnode_js__WEBPACK_IMPORTED_MODULE_0__[\"vnode\"])('', {}, [], undefined, undefined);\n\nfunction sameVnode(vnode1, vnode2) {\n  return vnode1.key === vnode2.key && vnode1.sel === vnode2.sel;\n}\n\nfunction isVnode(vnode) {\n  return vnode.sel !== undefined;\n}\n\nfunction createKeyToOldIdx(children, beginIdx, endIdx) {\n  var _a;\n\n  var map = {};\n\n  for (var i = beginIdx; i <= endIdx; ++i) {\n    var key = (_a = children[i]) === null || _a === void 0 ? void 0 : _a.key;\n\n    if (key !== undefined) {\n      map[key] = i;\n    }\n  }\n\n  return map;\n}\n\nvar hooks = ['create', 'update', 'remove', 'destroy', 'pre', 'post'];\nfunction init(modules, domApi) {\n  var i;\n  var j;\n  var cbs = {\n    create: [],\n    update: [],\n    remove: [],\n    destroy: [],\n    pre: [],\n    post: []\n  };\n  var api = domApi !== undefined ? domApi : _htmldomapi_js__WEBPACK_IMPORTED_MODULE_2__[\"htmlDomApi\"];\n\n  for (i = 0; i < hooks.length; ++i) {\n    cbs[hooks[i]] = [];\n\n    for (j = 0; j < modules.length; ++j) {\n      var hook = modules[j][hooks[i]];\n\n      if (hook !== undefined) {\n        cbs[hooks[i]].push(hook);\n      }\n    }\n  }\n\n  function emptyNodeAt(elm) {\n    var id = elm.id ? '#' + elm.id : '';\n    var c = elm.className ? '.' + elm.className.split(' ').join('.') : '';\n    return Object(_vnode_js__WEBPACK_IMPORTED_MODULE_0__[\"vnode\"])(api.tagName(elm).toLowerCase() + id + c, {}, [], undefined, elm);\n  }\n\n  function createRmCb(childElm, listeners) {\n    return function rmCb() {\n      if (--listeners === 0) {\n        var parent = api.parentNode(childElm);\n        api.removeChild(parent, childElm);\n      }\n    };\n  }\n\n  function createElm(vnode, insertedVnodeQueue) {\n    var _a, _b;\n\n    var i;\n    var data = vnode.data;\n\n    if (data !== undefined) {\n      var _init = (_a = data.hook) === null || _a === void 0 ? void 0 : _a.init;\n\n      if (isDef(_init)) {\n        _init(vnode);\n\n        data = vnode.data;\n      }\n    }\n\n    var children = vnode.children;\n    var sel = vnode.sel;\n\n    if (sel === '!') {\n      if (isUndef(vnode.text)) {\n        vnode.text = '';\n      }\n\n      vnode.elm = api.createComment(vnode.text);\n    } else if (sel !== undefined) {\n      // Parse selector\n      var hashIdx = sel.indexOf('#');\n      var dotIdx = sel.indexOf('.', hashIdx);\n      var hash = hashIdx > 0 ? hashIdx : sel.length;\n      var dot = dotIdx > 0 ? dotIdx : sel.length;\n      var tag = hashIdx !== -1 || dotIdx !== -1 ? sel.slice(0, Math.min(hash, dot)) : sel;\n      var elm = vnode.elm = isDef(data) && isDef(i = data.ns) ? api.createElementNS(i, tag) : api.createElement(tag);\n      if (hash < dot) elm.setAttribute('id', sel.slice(hash + 1, dot));\n      if (dotIdx > 0) elm.setAttribute('class', sel.slice(dot + 1).replace(/\\./g, ' '));\n\n      for (i = 0; i < cbs.create.length; ++i) {\n        cbs.create[i](emptyNode, vnode);\n      }\n\n      if (_is_js__WEBPACK_IMPORTED_MODULE_1__[\"array\"](children)) {\n        for (i = 0; i < children.length; ++i) {\n          var ch = children[i];\n\n          if (ch != null) {\n            api.appendChild(elm, createElm(ch, insertedVnodeQueue));\n          }\n        }\n      } else if (_is_js__WEBPACK_IMPORTED_MODULE_1__[\"primitive\"](vnode.text)) {\n        api.appendChild(elm, api.createTextNode(vnode.text));\n      }\n\n      var _hook = vnode.data.hook;\n\n      if (isDef(_hook)) {\n        (_b = _hook.create) === null || _b === void 0 ? void 0 : _b.call(_hook, emptyNode, vnode);\n\n        if (_hook.insert) {\n          insertedVnodeQueue.push(vnode);\n        }\n      }\n    } else {\n      vnode.elm = api.createTextNode(vnode.text);\n    }\n\n    return vnode.elm;\n  }\n\n  function addVnodes(parentElm, before, vnodes, startIdx, endIdx, insertedVnodeQueue) {\n    for (; startIdx <= endIdx; ++startIdx) {\n      var ch = vnodes[startIdx];\n\n      if (ch != null) {\n        api.insertBefore(parentElm, createElm(ch, insertedVnodeQueue), before);\n      }\n    }\n  }\n\n  function invokeDestroyHook(vnode) {\n    var _a, _b;\n\n    var data = vnode.data;\n\n    if (data !== undefined) {\n      (_b = (_a = data === null || data === void 0 ? void 0 : data.hook) === null || _a === void 0 ? void 0 : _a.destroy) === null || _b === void 0 ? void 0 : _b.call(_a, vnode);\n\n      for (var _i = 0; _i < cbs.destroy.length; ++_i) {\n        cbs.destroy[_i](vnode);\n      }\n\n      if (vnode.children !== undefined) {\n        for (var _j = 0; _j < vnode.children.length; ++_j) {\n          var child = vnode.children[_j];\n\n          if (child != null && typeof child !== 'string') {\n            invokeDestroyHook(child);\n          }\n        }\n      }\n    }\n  }\n\n  function removeVnodes(parentElm, vnodes, startIdx, endIdx) {\n    var _a, _b;\n\n    for (; startIdx <= endIdx; ++startIdx) {\n      var listeners = void 0;\n      var rm = void 0;\n      var ch = vnodes[startIdx];\n\n      if (ch != null) {\n        if (isDef(ch.sel)) {\n          invokeDestroyHook(ch);\n          listeners = cbs.remove.length + 1;\n          rm = createRmCb(ch.elm, listeners);\n\n          for (var _i2 = 0; _i2 < cbs.remove.length; ++_i2) {\n            cbs.remove[_i2](ch, rm);\n          }\n\n          var removeHook = (_b = (_a = ch === null || ch === void 0 ? void 0 : ch.data) === null || _a === void 0 ? void 0 : _a.hook) === null || _b === void 0 ? void 0 : _b.remove;\n\n          if (isDef(removeHook)) {\n            removeHook(ch, rm);\n          } else {\n            rm();\n          }\n        } else {\n          // Text node\n          api.removeChild(parentElm, ch.elm);\n        }\n      }\n    }\n  }\n\n  function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue) {\n    var oldStartIdx = 0;\n    var newStartIdx = 0;\n    var oldEndIdx = oldCh.length - 1;\n    var oldStartVnode = oldCh[0];\n    var oldEndVnode = oldCh[oldEndIdx];\n    var newEndIdx = newCh.length - 1;\n    var newStartVnode = newCh[0];\n    var newEndVnode = newCh[newEndIdx];\n    var oldKeyToIdx;\n    var idxInOld;\n    var elmToMove;\n    var before;\n\n    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {\n      if (oldStartVnode == null) {\n        oldStartVnode = oldCh[++oldStartIdx]; // Vnode might have been moved left\n      } else if (oldEndVnode == null) {\n        oldEndVnode = oldCh[--oldEndIdx];\n      } else if (newStartVnode == null) {\n        newStartVnode = newCh[++newStartIdx];\n      } else if (newEndVnode == null) {\n        newEndVnode = newCh[--newEndIdx];\n      } else if (sameVnode(oldStartVnode, newStartVnode)) {\n        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);\n        oldStartVnode = oldCh[++oldStartIdx];\n        newStartVnode = newCh[++newStartIdx];\n      } else if (sameVnode(oldEndVnode, newEndVnode)) {\n        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);\n        oldEndVnode = oldCh[--oldEndIdx];\n        newEndVnode = newCh[--newEndIdx];\n      } else if (sameVnode(oldStartVnode, newEndVnode)) {\n        // Vnode moved right\n        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);\n        api.insertBefore(parentElm, oldStartVnode.elm, api.nextSibling(oldEndVnode.elm));\n        oldStartVnode = oldCh[++oldStartIdx];\n        newEndVnode = newCh[--newEndIdx];\n      } else if (sameVnode(oldEndVnode, newStartVnode)) {\n        // Vnode moved left\n        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);\n        api.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);\n        oldEndVnode = oldCh[--oldEndIdx];\n        newStartVnode = newCh[++newStartIdx];\n      } else {\n        if (oldKeyToIdx === undefined) {\n          oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);\n        }\n\n        idxInOld = oldKeyToIdx[newStartVnode.key];\n\n        if (isUndef(idxInOld)) {\n          // New element\n          api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);\n        } else {\n          elmToMove = oldCh[idxInOld];\n\n          if (elmToMove.sel !== newStartVnode.sel) {\n            api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);\n          } else {\n            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);\n            oldCh[idxInOld] = undefined;\n            api.insertBefore(parentElm, elmToMove.elm, oldStartVnode.elm);\n          }\n        }\n\n        newStartVnode = newCh[++newStartIdx];\n      }\n    }\n\n    if (oldStartIdx <= oldEndIdx || newStartIdx <= newEndIdx) {\n      if (oldStartIdx > oldEndIdx) {\n        before = newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].elm;\n        addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);\n      } else {\n        removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);\n      }\n    }\n  }\n\n  function patchVnode(oldVnode, vnode, insertedVnodeQueue) {\n    var _a, _b, _c, _d, _e;\n\n    var hook = (_a = vnode.data) === null || _a === void 0 ? void 0 : _a.hook;\n    (_b = hook === null || hook === void 0 ? void 0 : hook.prepatch) === null || _b === void 0 ? void 0 : _b.call(hook, oldVnode, vnode);\n    var elm = vnode.elm = oldVnode.elm;\n    var oldCh = oldVnode.children;\n    var ch = vnode.children;\n    if (oldVnode === vnode) return;\n\n    if (vnode.data !== undefined) {\n      for (var _i3 = 0; _i3 < cbs.update.length; ++_i3) {\n        cbs.update[_i3](oldVnode, vnode);\n      }\n\n      (_d = (_c = vnode.data.hook) === null || _c === void 0 ? void 0 : _c.update) === null || _d === void 0 ? void 0 : _d.call(_c, oldVnode, vnode);\n    }\n\n    if (isUndef(vnode.text)) {\n      if (isDef(oldCh) && isDef(ch)) {\n        if (oldCh !== ch) updateChildren(elm, oldCh, ch, insertedVnodeQueue);\n      } else if (isDef(ch)) {\n        if (isDef(oldVnode.text)) api.setTextContent(elm, '');\n        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);\n      } else if (isDef(oldCh)) {\n        removeVnodes(elm, oldCh, 0, oldCh.length - 1);\n      } else if (isDef(oldVnode.text)) {\n        api.setTextContent(elm, '');\n      }\n    } else if (oldVnode.text !== vnode.text) {\n      if (isDef(oldCh)) {\n        removeVnodes(elm, oldCh, 0, oldCh.length - 1);\n      }\n\n      api.setTextContent(elm, vnode.text);\n    }\n\n    (_e = hook === null || hook === void 0 ? void 0 : hook.postpatch) === null || _e === void 0 ? void 0 : _e.call(hook, oldVnode, vnode);\n  }\n\n  return function patch(oldVnode, vnode) {\n    var i, elm, parent;\n    var insertedVnodeQueue = [];\n\n    for (i = 0; i < cbs.pre.length; ++i) {\n      cbs.pre[i]();\n    }\n\n    if (!isVnode(oldVnode)) {\n      oldVnode = emptyNodeAt(oldVnode);\n    }\n\n    if (sameVnode(oldVnode, vnode)) {\n      patchVnode(oldVnode, vnode, insertedVnodeQueue);\n    } else {\n      elm = oldVnode.elm;\n      parent = api.parentNode(elm);\n      createElm(vnode, insertedVnodeQueue);\n\n      if (parent !== null) {\n        api.insertBefore(parent, vnode.elm, api.nextSibling(elm));\n        removeVnodes(parent, [oldVnode], 0, 0);\n      }\n    }\n\n    for (i = 0; i < insertedVnodeQueue.length; ++i) {\n      insertedVnodeQueue[i].data.hook.insert(insertedVnodeQueue[i]);\n    }\n\n    for (i = 0; i < cbs.post.length; ++i) {\n      cbs.post[i]();\n    }\n\n    return vnode;\n  };\n}\n\n//# sourceURL=webpack:///./node_modules/snabbdom/build/package/init.js?");

/***/ }),

/***/ "./node_modules/snabbdom/build/package/is.js":
/*!***************************************************!*\
  !*** ./node_modules/snabbdom/build/package/is.js ***!
  \***************************************************/
/*! exports provided: array, primitive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"array\", function() { return array; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"primitive\", function() { return primitive; });\nvar array = Array.isArray;\nfunction primitive(s) {\n  return typeof s === 'string' || typeof s === 'number';\n}\n\n//# sourceURL=webpack:///./node_modules/snabbdom/build/package/is.js?");

/***/ }),

/***/ "./node_modules/snabbdom/build/package/vnode.js":
/*!******************************************************!*\
  !*** ./node_modules/snabbdom/build/package/vnode.js ***!
  \******************************************************/
/*! exports provided: vnode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"vnode\", function() { return vnode; });\nfunction vnode(sel, data, children, text, elm) {\n  var key = data === undefined ? undefined : data.key;\n  return {\n    sel: sel,\n    data: data,\n    children: children,\n    text: text,\n    elm: elm,\n    key: key\n  };\n}\n\n//# sourceURL=webpack:///./node_modules/snabbdom/build/package/vnode.js?");

/***/ }),

/***/ "./src/01basicusage.js":
/*!*****************************!*\
  !*** ./src/01basicusage.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var snabbdom_build_package_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! snabbdom/build/package/init */ \"./node_modules/snabbdom/build/package/init.js\");\n\nconsole.log(snabbdom_build_package_init__WEBPACK_IMPORTED_MODULE_0__[\"init\"]);\n\n//# sourceURL=webpack:///./src/01basicusage.js?");

/***/ })

/******/ });