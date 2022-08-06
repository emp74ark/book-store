(()=>{"use strict";var e={807:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(81),a=n.n(o),r=n(645),i=n.n(r)()(a());i.push([e.id,"header{margin:0 auto;display:flex;justify-content:center;width:90%;background:#b8906f;border-radius:2.5rem 2.5rem 0rem 0rem}h1{font-family:'Times New Roman', Times, serif;font-size:2rem;font-style:italic}nav{margin:0 auto;width:90%;display:flex;align-items:center;justify-content:space-between;border-bottom:4px dotted #b8906f}nav img{width:2rem;height:2rem;margin:1rem 0.2rem;cursor:pointer}.basket{cursor:pointer;position:relative}.basket__counter{width:1.2rem;height:1.2rem;position:absolute;left:-0.7rem;top:0.5rem;opacity:0.9;text-align:center;font-size:1.1rem;font-weight:600;color:#af2f2f}h2{font-size:1.6rem;font-style:italic}body{margin:0 auto;padding:1rem;background:#f7f3ce;color:#000000;font-size:10px}body a{color:#000000;text-decoration:none}body a:visited{color:#000000}main{margin:1rem auto;width:90%;display:flex;flex-wrap:wrap;justify-content:space-between;gap:1rem}.shadow{position:fixed;top:0;left:0;width:100%;height:100%;background:#000000;opacity:0.6;z-index:2}.book{display:flex;width:200px;flex-direction:column;align-items:center;justify-content:space-between;background:#f0f0f0;padding:1rem;border:0.1rem dotted #b8906f;border-radius:1rem}.book:hover{background:#ffffff;cursor:pointer}.book__image{max-width:160px;max-height:300px;border-radius:0.5rem}.book__title{font-size:1.3rem;padding:0.3rem 0.5rem;text-align:center}.book__author{font-size:1.1rem;font-style:italic;text-align:center}.book__price{font-size:0.8rem;font-style:italic;text-align:center}.book__more{font-size:0.8rem;font-style:italic;text-align:center;padding:0.2rem 0.6rem;border:0.1rem dotted #7c7575;border-radius:1rem}.book__more:hover{background:#f3dfcf}.book__buy{font-size:1.1rem;font-weight:600;border:0.1rem solid #7c7575;margin:0.3rem;padding:0.2rem 1rem;border-radius:1rem;cursor:pointer}.book__buy:hover{background:#f3dfcf}footer{margin:0 auto;width:90%;display:flex;justify-content:space-around;align-items:center;background:#b8906f;border-radius:0rem 0rem 2.5rem 2.5rem}footer img{margin:0.5rem;width:2rem;height:2rem}.school,.git{display:flex;justify-items:center;align-items:center;font-size:1.2rem;gap:1rem}.modal__window{position:fixed;left:calc(50% - 20rem);top:calc(50% - 10rem);width:40rem;background:#ffffff;border-radius:2rem;display:flex;justify-content:space-between;padding:1rem;z-index:10}.modal__window img{width:20rem;border-radius:1rem}.modal__window-close{position:absolute;top:1rem;right:1.5rem;font-size:2rem;font-weight:800;cursor:pointer}.modal__window-info{width:50%;margin:2rem 1rem;font-size:1.2rem;font-style:italic;list-style:none}.modal__window-info li{margin:1rem}.modal__window__title{font-size:1.5rem;margin:0.5rem 0rem}.modal__window__author::before{content:'Author: '}.modal__window-country::before{content:'Country: '}.modal__window-language::before{content:'Language: '}.modal__window-year::before{content:'Year: '}.modal__window-pages::before{content:'Pages: '}.modal__window-link::before{content:'Additional info: '}.modal__window-buy{position:absolute;right:2rem;bottom:2rem;font-size:1.1rem;font-weight:600;border:0.1rem solid #7c7575;margin:0.3rem;padding:0.2rem 1rem;border-radius:1rem;cursor:pointer}.modal__window-buy:hover{background:#aa9b8e}.basket__wrapper{position:absolute;left:-26rem;top:2.7rem;width:25rem;background:#ffffff;font-size:1.2rem;border:0.1rem solid #000000;border-radius:1rem 0rem 1rem 1rem;font-size:1.1rem;padding:0.5rem;opacity:0.9}.basket__wrapper-checkout{width:max-content;font-size:1.1rem;font-weight:600;border:0.1rem solid #7c7575;margin:0.3rem auto;padding:0.2rem 1rem;border-radius:1rem;cursor:pointer}.basket__wrapper-checkout:hover{background:#aa9b8e}.basket__total-price{display:block;text-align:center;margin:1rem;font-weight:600;color:#7c7575}.checkout__wrapper{font-size:1.2rem;display:flex;justify-content:space-between;width:100%;padding:1rem;font-size:1rem;font-style:italic}.checkout__wrapper label{font-size:1rem;font-style:italic;position:relative}.checkout__wrapper input,.checkout__wrapper fieldset,.checkout__wrapper select{border:0.1rem solid #7c7575;border-radius:1rem;padding:0.3rem 1rem;margin:0.2rem 0rem 0.5rem 0rem}.checkout__wrapper fieldset{text-align:center}.checkout__wrapper fieldset input{margin:0rem 1rem}.checkout__wrapper ul{text-align:start}.checkout__wrapper li{list-style:none}.checkout__wrapper li input{margin:0.2rem 1rem}.checkout__wrapper input:required:invalid{border:0.1rem solid #b84343}.checkout__wrapper-list{width:45%}.checkout__wrapper-remove{font-size:1.5rem;font-weight:600;padding:0.5rem;vertical-align:middle;color:#b84343}.checkout__wrapper-form{display:flex;flex-direction:column;width:45%}.checkout__wrapper-pay{width:max-content;font-size:1.1rem;font-weight:600;border:0.1rem solid #7c7575;margin:1rem auto;padding:0.2rem 1rem;border-radius:1rem;cursor:pointer}.checkout__wrapper-pay:hover{background:#aa9b8e}.checkout__total-price{font-weight:800}.checkout__error{position:fixed;width:30rem;height:4rem;top:40%;left:calc(50% - 15rem);font-size:4rem;color:#6e2626;opacity:0.8;text-align:center}.error__input{background:#ffffff;color:#6e2626;border-radius:1rem 1rem 1rem 0rem;width:fit-content;padding:0.1rem 1rem;position:absolute;top:-0.3 rem;right:0;opacity:0.8;box-shadow:0.1rem 0.1rem 00.1rem}.orders__list li{font-size:1.5rem;color:#5e3636}.orders__list-content{font-style:1.2rem;font-style:italic;color:#000000}\n",""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,a,r){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);o&&i[s[0]]||(void 0!==r&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=r),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),a&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=a):s[4]="".concat(a)),t.push(s))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var r={},i=[],c=0;c<e.length;c++){var d=e[c],l=o.base?d[0]+o.base:d[0],s=r[l]||0,m="".concat(l," ").concat(s);r[l]=s+1;var p=n(m),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(u);else{var h=a(u,o);o.byIndex=c,t.splice(c,0,{identifier:m,updater:h,references:1})}i.push(m)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var r=o(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var c=n(r[i]);t[c].references--}for(var d=o(e,a),l=0;l<r.length;l++){var s=n(r[l]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}r=d}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,a&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),a=n.n(o),r=n(569),i=n.n(r),c=n(565),d=n.n(c),l=n(216),s=n.n(l),m=n(589),p=n.n(m),u=n(807),h={};h.styleTagTransform=p(),h.setAttributes=d(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=s(),t()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals;const f={};class b{static totalAmount=0;static idList=new Set;static totalPrice=0;constructor(e,t=1){this.book=e,this.amount=t}amountUp(e){this.amount+=e,b.totalAmount+=e}amountDown(e){this.amount-=e,b.totalAmount-=e}static getTotalAmount(){return b.totalAmount}static upTotalAmount(e){b.totalAmount+=e}static downTotalAmount(e){b.totalAmount-=e}static upTotalPrice(e){b.totalPrice+=e}static downTotalPrice(e){b.totalPrice-=e}static getTotalPrice(){return b.totalPrice}}function g(e,t=1){const n=document.querySelector(".basket__counter"),o=Object.keys(f).length;if(b.upTotalPrice(e.price),b.idList.has(e.id)||(f[o]=new b(e,t),b.upTotalAmount(t),b.idList.add(e.id)),b.idList.has(e.id))for(let n=0;n<o;n++)f[n].book.id===e.id&&f[n].amountUp(t);n.textContent=`${b.getTotalAmount()}`}const _=[];function w(){const e=document.querySelector("main"),t=document.querySelector(".checkout__error");e.removeChild(t)}function k(){const e=document.body,t=document.createElement("header"),n=document.createElement("h1");n.innerHTML="Book store</a>",t.appendChild(n);const o=document.createElement("nav"),a=document.createElement("img");a.src="./assets/icons/home.png",a.alt="Back to start page",a.addEventListener("click",(()=>{E()}));const r=document.createElement("h2");r.innerHTML="<h2>Shopping cart</h2>",o.appendChild(a),o.appendChild(r);const i=document.createElement("main"),c=document.createElement("div");c.className="checkout__wrapper";const d=Object.keys(f).length;if(d>0){const e=document.createElement("ol");e.className="checkout__wrapper-list";for(let t=0;t<d;t++){const n=document.createElement("li");n.className="checkout__wrapper-item";const o=document.createElement("span");o.textContent=`${f[t].book.title} - ${f[t].book.author}: ${f[t].amount} pcs`;const a=document.createElement("span");a.className="checkout__wrapper-remove",a.innerHTML="&times;",a.addEventListener("click",(()=>{e.removeChild(n),b.downTotalAmount(f[t].amount),delete f[t]})),n.appendChild(o),n.appendChild(a),e.appendChild(n)}const t=document.createElement("li");t.className="checkout__total-price",t.textContent=`Total price: ${b.getTotalPrice()} pesso`,e.appendChild(t),c.appendChild(e)}0===d&&(c.textContent="Nothing was added");const l=document.createElement("form");l.className="checkout__wrapper-form",l.name="checkout",l.action=" ",l.method="post",l.autocomplete="off",l.innerHTML='<label for="name">Name</label> <input type="text" name="name" id="buyer-name" required pattern="[A-za-z]{4,}"> <label for="surname">Surname</label> <input type="text" name="surname" id="surname" required pattern="[A-Za-z]{5,}"> <label for="email">Email</label> <input type="email" name="email" id="email" required> <label for="date">Delivery date</label> <input type="date" name="date" id="date" required> <label for="street">Street</label> <input type="text" name="street" id="street" required pattern="[A-Za-z0-9 ]{5,}"> <label for="house">House number</label> <input type="number" name="house" id="house" required min="1"> <label for="flat">Flat number</label> <input type="text" name="flat" id="flat" required min="0" pattern="([1-9]{1,})/?-?([1-9]{1,})?"> <fieldset> <legend for="payment">Payment method:</legend> <input type="radio" name="payment" id="card" value="card" required checked> <label for="card">Card</label> <input type="radio" name="payment" id="cash" value="cash" required> <label for="cash">Cash</label> </fieldset><fieldset> <legend>Select gift:</legend> <ul> <li> <input type="checkbox" name="gift" value="pack">pack as a gift</input> </li> <li> <input type="checkbox" name="gift" value="postcard">postcard</input> </li> <li> <input type="checkbox" name="gift" value="discount">2% discount to the next time</input> </li> <li> <input type="checkbox" name="gift" value="pen">branded pen</input> </li> <li> <input type="checkbox" name="gift" value="pencil">branded pencil</input> </li> </ul> </fieldset>';const s=document.createElement("input");s.value="Confirm and pay",s.type="submit",s.className="checkout__wrapper-pay",s.disabled="true",l.addEventListener("input",(e=>{const t=e.target.form,n=t.checkValidity();s.disabled=!n;const o=document.createElement("span");o.className="error__input";const a=t.querySelector(`label[for=${e.target.name}]`),r=t.querySelector(`legend[for=${e.target.name}]`);try{null===r&&(e.target.checkValidity()||1!==a.childNodes.length||(o.textContent=`check your ${e.target.name}`,a.appendChild(o)),e.target.checkValidity()&&a.childNodes.length>1&&a.removeChild(a.childNodes[1]))}catch(e){}})),s.addEventListener("click",(e=>{var t;e.preventDefault(),b.getTotalAmount()>0&&(t=new FormData(l),_.push([Array.from(t.entries()),["price",b.getTotalPrice()]]),document.body.innerHTML="",function(){const e=document.body,t=document.createElement("header"),n=document.createElement("h1");n.innerHTML="Book store</a>",t.appendChild(n);const o=document.createElement("nav"),a=document.createElement("img");a.src="./assets/icons/home.png",a.alt="Back to start page",a.addEventListener("click",(()=>{E()}));const r=document.createElement("h2");r.innerHTML="<h2>Your order</h2>",o.appendChild(a),o.appendChild(r);const i=document.createElement("main"),c=document.createElement("ol");c.className="orders__list";for(let e=_.length-1;e>=0;e--){const t=document.createElement("li");t.textContent=_[e][0][3][1];for(let n=0;n<_[e][0].length;n++){const o=document.createElement("div");o.className="orders__list-content",o.innerHTML=`<b>${_[e][0][n][0]}:</b> ${_[e][0][n][1]}`,t.appendChild(o)}const n=document.createElement("div");n.className="orders__list-content",n.innerHTML=`<b>Total price:</b> ${_[e][1][1]} pesso`,t.appendChild(n),c.appendChild(t)}i.appendChild(c);const d=document.createElement("footer");d.innerHTML='<a href="#" target="_blank" class="school"> <img src="./assets/icons/school.png" alt="UpSkill Me"> <span>UpSkill Me</span> </a> <a href="https://github.com/emp74ark" target="_blank" class="git"> <img src="./assets/icons/github.png" alt="Github"> <span>emp74ark</span> </a>',e.appendChild(t),e.appendChild(o),e.appendChild(i),e.appendChild(d)}()),0===b.getTotalAmount()&&(function(e){const t=document.querySelector("main"),n=document.createElement("span");n.className="checkout__error",n.textContent="You have not selected any book",t.appendChild(n)}(),setTimeout(w,1500))})),l.appendChild(s),c.appendChild(l),i.appendChild(c);const m=document.createElement("footer");m.innerHTML='<a href="#" target="_blank" class="school"> <img src="./assets/icons/school.png" alt="UpSkill Me"> <span>UpSkill Me</span> </a> <a href="https://github.com/emp74ark" target="_blank" class="git"> <img src="./assets/icons/github.png" alt="Github"> <span>emp74ark</span> </a>',e.appendChild(t),e.appendChild(o),e.appendChild(i),e.appendChild(m)}function y(){document.body.innerHTML="",k();const e=document.querySelector("#date"),t=new Date,n=new Date(t);n.setDate(n.getDate()+1),e.min=n.toISOString().split("T")[0]}function v(e){const t=document.querySelector("main");if(0===e){document.body.style.overflow="auto";const e=document.querySelector(".shadow");t.removeChild(e)}if(1===e){document.body.style.overflow="hidden";const e=document.createElement("div");e.className="shadow",t.appendChild(e)}}const C=document.body;async function x(){const e=new DocumentFragment;(await async function(){const e=await fetch("./assets/books.json");return await e.json()}()).forEach((t=>{const n=function(e){const t=document.createElement("div");t.className="book",t.dataset.id=e.id;const n=document.createElement("img");n.className="book__image",n.src=e.imageLink;const o=document.createElement("span");o.className="book__title",o.textContent=e.title;const a=document.createElement("span");a.className="book__author",a.textContent=e.author;const r=document.createElement("span");r.className="book__price",r.textContent=`Price: ${e.price}pesso`;const i=document.createElement("span");i.className="book__more",i.textContent="Show more...",t.addEventListener("click",(()=>{!function(e){const t=document.querySelector("main"),n=document.createElement("div");n.className="modal__window";const o=document.createElement("div");o.className="modal__window-close",o.innerHTML="&times;",o.addEventListener("click",(()=>{t.removeChild(n),v(0)}));const a=document.createElement("img");a.src=e.imageLink;const r=document.createElement("ul");r.className="modal__window-info";const i=document.createElement("li");i.className="modal__window__title",i.textContent=e.title;const c=document.createElement("li");c.className="modal__window__author",c.textContent=e.author;const d=document.createElement("li");d.textContent=e.country,d.className="modal__window-country";const l=document.createElement("li");l.className="modal__window-language",l.textContent=e.language;const s=document.createElement("li");s.className="modal__window-year",s.textContent=e.year;const m=document.createElement("li");m.className="modal__window-pages",m.textContent=e.pages;const p=document.createElement("li");p.className="modal__window-link",p.innerHTML=`<a href='${e.link}' target='_blank'>Wikipedia</a>`;const u=document.createElement("div");u.className="modal__window-buy",u.textContent="Add to cart",u.addEventListener("click",(t=>{t.stopPropagation(),g(e)})),r.appendChild(i),r.appendChild(c),r.appendChild(s),r.appendChild(d),r.appendChild(l),r.appendChild(m),r.appendChild(p),r.appendChild(u),n.appendChild(o),n.appendChild(a),n.appendChild(r),t.appendChild(n),v(1)}(e)}));const c=document.createElement("div");return c.className="book__buy",c.textContent="Add to cart",c.addEventListener("click",(t=>{t.stopPropagation(),g(e)})),t.appendChild(n),t.appendChild(o),t.appendChild(a),t.appendChild(r),t.appendChild(i),t.appendChild(c),t}(t);e.appendChild(n)})),document.querySelector("main").appendChild(e)}function E(){document.body.innerHTML="",function(){const e=document.createElement("header"),t=document.createElement("h1");t.textContent="Book store",e.appendChild(t);const n=document.createElement("nav"),o=document.createElement("a");o.href="#",o.innerHTML='<img src="./assets/icons/home.png" alt="home">';const a=document.createElement("h2");a.innerHTML="<h2>Top 100</h2>";const r=document.createElement("div");r.className="basket",r.innerHTML='<img src="./assets/icons/basket.png" alt="shopping cart">',r.addEventListener("click",(()=>{!function(){const e=document.querySelector(".basket"),t=document.querySelector(".basket__wrapper");if(null===t){const t=document.createElement("div");t.className="basket__wrapper";const n=Object.keys(f).length;if(n>0){const e=document.createElement("ol");e.className="basket__wrapper-list";for(let t=0;t<n;t++){const n=document.createElement("li");n.className="basket__wrapper-item",n.textContent=`${f[t].book.title} - ${f[t].book.author}: ${f[t].amount} pcs`,e.appendChild(n)}const o=document.createElement("span");o.className="basket__total-price",o.textContent=`Total price: ${b.getTotalPrice()} pesso`,t.appendChild(e),t.appendChild(o)}0===n&&(t.textContent="Nothing was added");const o=document.createElement("div");o.className="basket__wrapper-checkout",o.textContent="Edit or checkout",o.addEventListener("click",(()=>{setTimeout(y,100)})),t.appendChild(o),e.appendChild(t)}else e.removeChild(t)}()}));const i=document.createElement("span");i.className="basket__counter",r.appendChild(i),n.appendChild(o),n.appendChild(a),n.appendChild(r);const c=document.createElement("main"),d=document.createElement("footer");d.innerHTML='<a href="#" target="_blank" class="school"> <img src="./assets/icons/school.png" alt="UpSkill Me"> <span>UpSkill Me</span> </a> <a href="https://github.com/emp74ark" target="_blank" class="git"> <img src="./assets/icons/github.png" alt="Github"> <span>emp74ark</span> </a>',C.appendChild(e),C.appendChild(n),C.appendChild(c),C.appendChild(d)}(),x()}E()})()})();