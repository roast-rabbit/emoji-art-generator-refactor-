(()=>{var e,t,n,o,r={749:(e,t,n)=>{const o=document.querySelector("#to-picture"),r=document.querySelector("#to-picture .loading");o.addEventListener("click",(async function(e){e.preventDefault(),document.querySelector(".picture")?.remove();let t=document.querySelector("#board");r.classList.remove("hide"),n.e(120).then(n.t.bind(n,120,23)).then((async e=>{const n=e.default,o=await n(t),i=document.createElement("a");document.body.appendChild(i),i.setAttribute("download","emoji-art.png"),i.setAttribute("href",o.toDataURL("image/png").replace("image/png","image/octet-stream")),i.click(),r.classList.add("hide")}))}))}},i={};function a(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={exports:{}};return r[e].call(n.exports,n,n.exports,a),n.exports}a.m=r,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var r=Object.create(null);a.r(r);var i={};e=e||[null,t({}),t([]),t(t)];for(var c=2&o&&n;"object"==typeof c&&!~e.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((e=>i[e]=()=>n[e]));return i.default=()=>n,a.d(r,i),r},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,n)=>(a.f[n](e,t),t)),[])),a.u=e=>e+".bundle"+a.h()+".js",a.miniCssF=e=>{},a.h=()=>"2f6980e0baceceeef4da",a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n={},o="fabric-test:",a.l=(e,t,r,i)=>{if(n[e])n[e].push(t);else{var c,l;if(void 0!==r)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var d=s[u];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==o+r){c=d;break}}c||(l=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.setAttribute("data-webpack",o+r),c.src=e),n[e]=[t];var m=(t,o)=>{c.onerror=c.onload=null,clearTimeout(f);var r=n[e];if(delete n[e],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((e=>e(o))),t)return t(o)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=m.bind(null,c.onerror),c.onload=m.bind(null,c.onload),l&&document.head.appendChild(c)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{var e={179:0};a.f.j=(t,n)=>{var o=a.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var r=new Promise(((n,r)=>o=e[t]=[n,r]));n.push(o[2]=r);var i=a.p+a.u(t),c=new Error;a.l(i,(n=>{if(a.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var r=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",c.name="ChunkLoadError",c.type=r,c.request=i,o[1](c)}}),"chunk-"+t,t)}};var t=(t,n)=>{var o,r,[i,c,l]=n,s=0;if(i.some((t=>0!==e[t]))){for(o in c)a.o(c,o)&&(a.m[o]=c[o]);if(l)l(a)}for(t&&t(n);s<i.length;s++)r=i[s],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0},n=self.webpackChunkfabric_test=self.webpackChunkfabric_test||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var c={};(()=>{"use strict";a.d(c,{a:()=>W});const e=document.querySelector("#stats input[name=height]"),t=document.querySelector("#stats input[name=width]");let n=e.value,o=t.value;const r=function(e){n=e,l(n)},i=function(e){o=e,s(o)},l=t=>{e.value=t},s=e=>{t.value=e};e.addEventListener("input",(e=>{r(e.target.value)})),t.addEventListener("input",(e=>{i(e.target.value)}));let u="😍";const d=e=>{"string"==typeof e&&(f(),u=e,p.textContent=u)};let m=function(){const e=document.querySelector("html").getAttribute("lang");return e}();const f=function(){g.classList.remove("shown")};let h;localStorage.getItem("lastUsedLocal")!==m&&indexedDB.deleteDatabase("PicMo-en"),localStorage.setItem("lastUsedLocal",m);const p=document.querySelector("#current-selection span"),v=document.querySelector("body"),g=document.querySelector("#side-tool-set");g.addEventListener("click",d);const y=document.querySelector("#current-selection .loading");p.addEventListener("click",(()=>{h||(y.classList.remove("hide"),a.e(64).then(a.bind(a,64)).then((async({createPicker:e})=>{const t=await async function(){const e=await fetch(`/emoji/emojiartgenerator/${m}/data.json`);return await e.json()}(),n=await async function(){const e=await fetch(`/emoji/emojiartgenerator/${m}/messages.json`);return await e.json()}();h=e({rootElement:g,emojiData:t,messages:n,i18n:"de"}),y.classList.add("hide"),h.addEventListener("emoji:select",(e=>{d(e.emoji)})),v.addEventListener("click",(e=>{e.target.closest("#side-tool-set")!==g&&e.target.closest("#current-selection span")!==p&&f()}))}))),g.classList.add("shown")}));const b=encodeURI(window.location.href),w=document.querySelector(".facebook"),L=document.querySelector(".twitter"),E=document.querySelector(".linkedin"),S=document.querySelector(".reddit");encodeURIComponent(document.querySelector("title").textContent);w.href=`https://www.facebook.com/share.php?u=${b}`,E.href=`https://www.linkedin.com/sharing/share-offsite/?url=${b}`;let j="";function q(e){if(e)j=e;else{j="";const e=document.querySelectorAll(".tile");if(e)for(let t=0;t<n;t++){for(let n=0;n<o;n++)j+=e[t*o+n].textContent;j+="\n"}}}const x=e=>[...(new Intl.Segmenter).segment(e)].map((e=>e.segment));let k=[],M=0;const A=function(e){e?(k=[e],M=0):k=[]},C=function(e){if(M===k.length-1)k.push(e),M++;else{k.length=M+1;const t=k.length;k.push(e),M++,console.log(`history rewritten, preserved ${t} items`)}},P=function(){return k[M]};function _(){const e=Array.from(document.querySelectorAll(".tile"));let t=j.split("\n");if(t=t.map((e=>x(e))),e)for(let r=0;r<n;r++)for(let n=0;n<o;n++)e[r*o+n]&&(e[r*o+n].textContent=t[r][n])}const D=document.querySelector("#undo"),O=document.querySelector("#redo");D.addEventListener("click",(()=>{!function(){if(0===M)return"cannot undo anymore, you are in initial position";M--}(),q(P()),_()})),O.addEventListener("click",(()=>{!function(){if(M===k.length-1)return"cannot redo !!!";M++}(),q(P()),_()}));let T=document.getElementById("emojify");document.querySelector("#emojify-form");const I=document.querySelector("#expand-image-to-emoji-art-btn"),N=document.querySelector(".form-groups");I.addEventListener("click",(function(e){e.preventDefault(),this.className="p-ss bg_blue text_white border_none radius_1 w-100 mb_1",N.classList.remove("hide")}));let $=document.getElementsByName("emoji_size")[0],B=document.getElementsByName("img_upload")[0],R=document.getElementById("emojify-btn"),U=T.getContext("2d"),z=300,F=300,H="",X=null;U.fillStyle="#c7cad1",U.fillRect(0,0,z,F),U.fillStyle="#8f95a3",U.font="28px Hind",U.textAlign="center",U.textBaseline="middle",U.fillText("Output",z/2,F/2);class Y{constructor(e,t){this.hue=e,this.emojiLevelArrays=t}}const G=[new Y(0,[["🛢","🥊","🌺","🌺"],["🥀","🟥","❤️","👅"]]),new Y(30,[["🟫","🟫","🟫","🟫"],["🟫","🟫","🟫","🟫"]]),new Y(60,[["📻","🐤","🐤","📜"],["🍰","☀️","🟨","🏠"]]),new Y(90,[["🪀","🪀","🪀","🪀"],["🌿","🌳","🤢","🍏"]]),new Y(120,[["🌲","🇸🇦","✅","🍏"],["🌲","🚛","🇸🇦","🇸🇦"]]),new Y(150,[["🔋","🔋","🥦","👗"],["🔋","🔋","📟","🥒"]]),new Y(180,[["🗣","👤","👕","🤖"],["🦋","🐳","🦋","💧"]]),new Y(210,[["📘","🇸🇴","🇪🇺","🟦"],["🟦","🟦","🟦","🟦"]]),new Y(240,[["🌑","🗣","👤","🐦"],["🌑","🔷","🔷","🌌"]]),new Y(270,[["🔮","🔮","🔮","🔮"],["🔮","🔮","🔮","🔮"]]),new Y(300,[["🍆","🍠","👚","🐖"],["📿","🕺","🤰🏼","🦄"]]),new Y(330,[["🧞‍♀️","💗","🎀","👩‍🎤"],["🍇","🧞‍♀️","💖","🏩"]])],J=function(){let e=X.width,t=X.height;e-=e%$.value,t-=t%$.value;const n=t/e;e>512&&(e=512,t=512*n),T.width=e,T.height=t,U.drawImage(X,0,0,e,t),z=T.width,F=T.height},K=function(e){B.files.length&&B.files[0].type.match("image.*")&&$.value>=+$.min&&!isNaN($.value)&&$.value<=+$.max?R.disabled=!1:R.disabled=!0};R.addEventListener("click",(function(e){e.preventDefault(),$.value<+$.min||isNaN($.value)?$.value=+$.min:$.value>+$.max&&($.value=+$.max),R.disabled=!0,R.innerHTML="Emojifying…",H==B.files[0].name?(U.clearRect(0,0,z,F),J()):H=B.files[0].name,setTimeout((function(){let e=U.getImageData(0,0,z,F).data,t=$.value;U.font=t+"px serif",U.textAlign="left",U.textBaseline="top";let n=Math.trunc(F/t),o=Math.trunc(z/t);r(n),i(o),W(n,o);let a="";for(let n=0;n<F/t;++n){for(let o=0;o<z/t;++o){let r=0,i=0,c=0,l=0;for(let a=0;a<t;++a)for(let s=0;s<4*t;s+=4){let u=a*z*4+o*t*4+n*z*t*4;r+=e[s+u]**2,i+=e[s+1+u]**2,c+=e[s+2+u]**2,l+=e[s+3+u]**2}let s=Math.round(Math.sqrt(r/t**2)),u=Math.round(Math.sqrt(i/t**2)),d=Math.round(Math.sqrt(c/t**2)),m=Math.round(Math.sqrt(l/t**2)),f=s/255,h=u/255,p=d/255,v=Math.max(f,h,p),g=Math.min(f,h,p),y=v-g,b=0,w=0,L=0;b=0==y?0:v==f?(h-p)/y%6:v==h?(p-f)/y+2:(f-h)/y+4,b=Math.round(60*b),b<0&&(b+=360),L=(v+g)/2,w=0==y?0:y/(1-Math.abs(2*L-1)),w=Math.round(100*w),L=Math.round(100*L);let E=G.filter((e=>30*Math.ceil(b/30)==e.hue)),S=E.length?E[0]:G[0],j="";m>0&&(L<=0?j="⬛️":L>=100?j="👻":w<=0?j="🌌":(w>100&&(w=100),j=S.emojiLevelArrays[Math.ceil(w/50)-1][Math.ceil(L/25)-1])),a+=j}a+="\n"}q(a),C(j),_(),R.disabled=!1,R.innerHTML="Emojify!"}),500),e.preventDefault()})),$.addEventListener("change",K),B.addEventListener("change",(function(e){!function(e){var t=new FileReader;t.onload=function(e){X=new Image,X.onload=function(){J()},X.src=e.target.result},t.readAsDataURL(e.target.files[0])}(e),K()}));a(749);document.querySelector("#copy").addEventListener("click",(async function(e){console.log(j),e.preventDefault();const{clipboard:t}=navigator;await t.writeText(j)}));const Q=document.querySelector("#board"),V=document.querySelector("#resize");function W(e,t){A(),Q.innerHTML="",Q.style.setProperty("--height",e),Q.style.setProperty("--width",t),t>15?(Q.style.setProperty("--size",80/t+"vmin"),Q.style.fontSize=70/t+"vmin"):(Q.style.setProperty("--size",85/t+"vmin"),Q.style.fontSize=80/t+"vmin");for(let n=0;n<+e;n++)for(let e=0;e<+t;e++){const o=document.createElement("div");o.textContent="⬜️",o.classList.add("tile");const r=n*t+e+1;o.setAttribute("key",r),Q.appendChild(o)}q(),A(j)}W(n,o),document.querySelector("#main .loading").classList.add("hide");const Z=e=>{let t;e.preventDefault(),t=e.touches?document.elementFromPoint(e.touches[0].clientX,e.touches[0].clientY).closest(".tile"):e.target.closest(".tile"),t&&(t.textContent=u),q(),function(e){let t=encodeURIComponent(`I created an emoji art\n${e}`);L.href=`http://twitter.com/share?&url=${b}&text=${t}&hashtags=emoji,emojiart`,S.href=`http://www.reddit.com/submit?title=I created an emoji art&text=${t}`}(j)};Q.addEventListener("click",Z),Q.addEventListener("mousedown",(e=>{e.preventDefault(),Q.addEventListener("mousemove",Z)})),Q.addEventListener("touchstart",(e=>{e.preventDefault(),Z(e),Q.addEventListener("touchmove",Z)})),Q.addEventListener("mouseup",(()=>{C(j),Q.removeEventListener("mousemove",Z)})),Q.addEventListener("mouseleave",(()=>{Q.removeEventListener("mousemove",Z)})),Q.addEventListener("touchend",(()=>{C(j),Q.removeEventListener("touchmove",Z)})),V.addEventListener("click",(e=>{e.preventDefault(),W(n,o)}))})()})();