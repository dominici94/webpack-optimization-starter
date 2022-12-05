(()=>{"use strict";var e={771:(e,n,r)=>{r.d(n,{Z:()=>c});var t=r(81),o=r.n(t),i=r(645),a=r.n(i)()(o());a.push([e.id,'* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  font: 18px "Helvetica Neue", Helvetica, Arial;\r\n  background-color: #f5f5f5;\r\n  color: #4d4d4d;\r\n  font-weight: 300;\r\n}\r\n\r\n.header-image {\r\n  width: 100%;\r\n  object-fit: cover;\r\n  height: 200px;\r\n}\r\n\r\nh1 {\r\n  font-weight: 200;\r\n  text-align: center;\r\n  font-size: 80px;\r\n  margin: 50px 0;\r\n}\r\n\r\n.todolist-wrapper {\r\n  width: 80%;\r\n  margin: 0 auto;\r\n  background-color: #fff;\r\n  box-shadow: 3px 4px 5px 0px rgba(0, 0, 0, 0.75);\r\n}\r\n\r\n.todolist-wrapper .new-todo {\r\n  margin: 0;\r\n  width: 100%;\r\n  font-family: "Helvetica Neue";\r\n  font-size: 24px;\r\n  font-weight: 300;\r\n  padding: 16px;\r\n  border: none;\r\n  border-bottom: 1px solid #ededed;\r\n  outline: none;\r\n}\r\n\r\n.todolist-wrapper .todo-list {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\n.todolist-wrapper .todo-list li {\r\n  display: flex;\r\n  align-items: center;\r\n  font-size: 20px;\r\n  border-bottom: 1px solid #ededed;\r\n}\r\n\r\n.todolist-wrapper .todo-list li .custom-checkbox {\r\n  position: relative;\r\n  width: 30px;\r\n  height: 30px;\r\n  margin-left: 15px;\r\n  border: 1px solid #777;\r\n  border-radius: 5px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.todolist-wrapper .todo-list li .custom-checkbox img {\r\n  display: none;\r\n}\r\n\r\n.todolist-wrapper .todo-list li .custom-checkbox .real-checkbox {\r\n  width: 30px;\r\n  height: 30px;\r\n  cursor: pointer;\r\n  opacity: 0;\r\n  position: absolute;\r\n  top: -3px;\r\n  left: -5px;\r\n}\r\n\r\n.todolist-wrapper .todo-list li.completed .custom-checkbox img {\r\n  display: block;\r\n}\r\n\r\n.todolist-wrapper .todo-list li label {\r\n  flex: 1;\r\n  word-break: break-all;\r\n  white-space: pre-wrap;\r\n  margin: 0;\r\n  padding: 15px;\r\n}\r\n\r\n.todolist-wrapper .todo-list li .delete {\r\n  width: 30px;\r\n  height: 30px;\r\n  margin-right: 10px;\r\n  cursor: pointer;\r\n  visibility: hidden;\r\n  /* background: url("../../images/delete.png") center no-repeat; */\r\n  background-size: 90%;\r\n}\r\n\r\n.todolist-wrapper .todo-list li:hover .delete {\r\n  visibility: visible;\r\n}\r\n',""]);const c=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r="",t=void 0!==n[5];return n[4]&&(r+="@supports (".concat(n[4],") {")),n[2]&&(r+="@media ".concat(n[2]," {")),t&&(r+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),r+=e(n),t&&(r+="}"),n[2]&&(r+="}"),n[4]&&(r+="}"),r})).join("")},n.i=function(e,r,t,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);t&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function r(e){for(var r=-1,t=0;t<n.length;t++)if(n[t].identifier===e){r=t;break}return r}function t(e,t){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],d=t.base?s[0]+t.base:s[0],l=i[d]||0,p="".concat(d," ").concat(l);i[d]=l+1;var u=r(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var h=o(f,t);t.byIndex=c,n.splice(c,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function o(e,n){var r=n.domAPI(n);return r.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;r.update(e=n)}else r.remove()}}e.exports=function(e,o){var i=t(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=r(i[a]);n[c].references--}for(var s=t(e,o),d=0;d<i.length;d++){var l=r(i[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=s}}},569:e=>{var n={};e.exports=function(e,r){var t=function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,r)=>{e.exports=function(e){var n=r.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(r){!function(e,n,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(t,e,n.options)}(n,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={id:t,exports:{}};return e[t](i,i.exports,r),i.exports}r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),r.nc=void 0,(()=>{var e=r(379),n=r.n(e),t=r(795),o=r.n(t),i=r(569),a=r.n(i),c=r(565),s=r.n(c),d=r(216),l=r.n(d),p=r(589),u=r.n(p),f=r(771),h={};function m(e){const n=e.map((function(e){const n=e.completed?"completed":"",r=e.completed?"checked":"";return`\n            <li data-id="${e.id}" class="${n}">\n                <span class="custom-checkbox">\n                    <img class="check" src="./images/checkmark.svg" width="22" height="22"></img>\n                    <input class="real-checkbox" type="checkbox" ${r} />\n                </span>\n                <label>${e.text}</label>\n                <span class="delete"></span>\n            </li>\n        `}));document.querySelector(".todo-list").innerHTML=n.join("")}function g(e){return parseInt(e.dataset.id||e.parentNode.dataset.id||e.parentNode.parentNode.dataset.id,10)}h.styleTagTransform=u(),h.setAttributes=s(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),n()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;let v=JSON.parse('[{"id":1560865205317,"text":"Buy eggs","completed":false},{"id":1560865205318,"text":"Do 15 min exercise","completed":false}]');function x(){return v}window.addEventListener("load",(function(){m(x())})),document.addEventListener("change",(function(e){e.target.classList.contains("new-todo")&&function(e){let n=e.target.value;var r;r={id:Date.now(),text:n,completed:!1},v.push(r),m(x()),document.querySelector(".new-todo").value=""}(e)})),document.addEventListener("click",(function(e){e.target.classList.contains("delete")&&function(e){var n;n=g(e.target),v=v.filter((function(e){return e.id!==n})),m(x())}(e),e.target.classList.contains("real-checkbox")&&function(e){!function(e,n){const r=v.findIndex((function(n){return n.id===e}));v[r].completed=n}(g(e.target),e.target.checked),m(x())}(e)}))})()})();