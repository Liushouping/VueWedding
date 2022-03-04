import{o as a,c as d,r as z,a as u,F as g,b as h,d as B,e as j,f as w,g as e,n as C,w as m,v as p,h as b,i as c,j as V,k as O,l as L}from"./vendor.a078e9e4.js";const A=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}};A();var v=(l,o)=>{const r=l.__vccOpts||l;for(const[t,s]of o)r[t]=s;return r};const E={},S={id:"audio",src:"/mp3music.mp3",autoplay:"",loop:""};function N(l,o){return a(),d("audio",S)}var H=v(E,[["render",N]]);const U={setup(l){return(o,r)=>{const t=z("router-view");return a(),d(g,null,[u(t),u(H)],64)}}},q={name:"Banner",setup(){const l=h(!1),o=h(!1),r=h(!1),t=h(!0),s=B({img:"/bubble.png"});function i(){document.getElementById("audio").play()}function n(){document.getElementById("audio").pause()}function _(){var f=navigator.userAgent,k=f.indexOf("Android")>-1||f.indexOf("Adr")>-1,M=!!f.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),x={android:"https://calndr.link/e/JzUSlfiEm4?s=google&openExternalBrowser=1",ios:"https://calndr.link/e/JzUSlfiEm4?s=apple&openExternalBrowser=1",other:"https://calndr.link/e/JzUSlfiEm4?s=google&openExternalBrowser=1"};k?window.location.href=x.android:M?window.location.href=x.ios:window.location.href=x.other}return j(()=>{setTimeout(()=>{t.value=!1},1200)}),{bubble:s,bgshow:t,MenuOpen:l,isVisible:o,showModal:r,play:i,pause:n,calndr:_}}},F={key:0,class:"w-screen h-screen z-50 flex justify-center items-center opacity-90 bg-gray-900 absolute overflow-hidden"},I=e("div",{class:"spinner"},[e("div",{class:"bounce1"}),e("div",{class:"bounce2"}),e("div",{class:"bounce3"})],-1),J=[I],P={id:"banner",class:"relative h-screen bg-cover bg-top overflow-hidden",style:{"background-image":"url('/banner.jpeg')"}},T={class:"flex flex-col max-w-7xl md:px-4 px-0 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8"},X={class:"flex flex-row items-center justify-between px-8 py-4 md:px-0 md:py-4 text-white"},G=e("svg",{fill:"currentColor",viewBox:"0 0 20 20",class:"w-6 h-6"},[e("path",{"fill-rule":"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z","clip-rule":"evenodd",fill:"#fff"})],-1),D=c(" \u9078 \u55AE "),K=[G,D],R=e("svg",{fill:"currentColor",viewBox:"0 0 20 20",class:"w-6 h-6"},[e("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),W=[R],Z=e("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none"},[e("g",{style:{animation:"notify 1s cubic-bezier(.455,.03,.515,.955) both infinite"},"stroke-width":"1.5"},[e("path",{stroke:"#fff",d:"M12.29 3.398a5 5 0 00-5 5v2c0 .758-.441 1.505-1.005 2.012a3 3 0 002.005 5.232h8a3 3 0 002.006-5.232c-.564-.507-1.005-1.254-1.005-2.012v-2a5 5 0 00-5-5z"}),e("path",{stroke:"#fff","stroke-linecap":"round",d:"M14.68 20.312l-.042.01a9.713 9.713 0 01-4.67-.01"})])],-1),Q=c(" \u884C\u4E8B\u66C6 "),Y=[Z,Q],$=e("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:"42",height:"42",fill:"none"},[e("g",{style:{animation:"notify 1s cubic-bezier(.455,.03,.515,.955) both infinite"},"stroke-width":"1.5"},[e("path",{stroke:"#fff",d:"M12.29 3.398a5 5 0 00-5 5v2c0 .758-.441 1.505-1.005 2.012a3 3 0 002.005 5.232h8a3 3 0 002.006-5.232c-.564-.507-1.005-1.254-1.005-2.012v-2a5 5 0 00-5-5z"}),e("path",{stroke:"#fff","stroke-linecap":"round",d:"M14.68 20.312l-.042.01a9.713 9.713 0 01-4.67-.01"})])],-1),ee=c(" \u884C\u4E8B\u66C6 "),te=[$,ee],oe=b('<a class="px-4 py-3 mt-2 font-black bg-transparent md:mt-0 md:ml-4 text-white hover:text-yellow-300 md:flex hidden justify-center items-center nav-02" href="https://goo.gl/maps/BU4xhV5G2dSbqsXq8" style="text-shadow:1px 1px 3px #555;" target="_blank"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none"><g style="animation:slide-right 1s cubic-bezier(.75,.02,.2,1.06) infinite alternate both;" stroke-width="1.5"><path stroke="#fff" d="M17 10.193c0 2.867-4.5 8.307-5 8.307s-5-5.44-5-8.307C7 7.325 9.239 5 12 5s5 2.325 5 5.193z"></path><circle cx="12" cy="10" r="2" stroke="#fff"></circle></g></svg> \u5A5A\u5BB4\u5730\u9EDE </a><a class="md:hidden px-4 py-3 mt-2 font-black bg-transparent md:mt-0 md:ml-4 text-white hover:text-yellow-300 flex justify-center items-center" href="https://goo.gl/maps/BU4xhV5G2dSbqsXq8" style="text-shadow:1px 1px 3px #555;" target="_blank"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="52" height="52" fill="none"><g style="animation:slide-right 1s cubic-bezier(.75,.02,.2,1.06) infinite alternate both;" stroke-width="1.5"><path stroke="#fff" d="M17 10.193c0 2.867-4.5 8.307-5 8.307s-5-5.44-5-8.307C7 7.325 9.239 5 12 5s5 2.325 5 5.193z"></path><circle cx="12" cy="10" r="2" stroke="#fff"></circle></g></svg> \u5A5A\u5BB4\u5730\u9EDE </a>',2),se=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 mr-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})],-1),ne=c(" \u5A5A\u5BB4\u51FA\u5E2D\u8868 "),ie=[se,ne],le=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-8 w-8 mr-1 mt-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})],-1),re=c(" \u5A5A\u5BB4\u51FA\u5E2D\u8868 "),ae=[le,re],de=e("div",{class:"absolute bottom-5 md:hidden flex flex-col text-white justify-center items-start text-xs font-black"},[e("p",null,"\u4E00\u540C\u898B\u8B49\u6211\u5011\u4EBA\u751F\u6700\u91CD\u8981\u7684\u6642\u523B\uFF01")],-1),ce={class:"flex flex-col justify-center items-center w-full h-full pt-40"},he=b('<h1 class="b-h1 text-5xl font-black text-white flex justify-center items-center" style="text-shadow:1px 1px 3px #555;"> \u76C8\u6176 <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none"><g style="animation:pulsate .5s ease-in-out infinite both;transform-origin:center center;" stroke-width="1.5"><path stroke="#fff" d="M11.515 6.269l.134.132a.5.5 0 00.702 0l.133-.132A4.44 4.44 0 0115.599 5c.578 0 1.15.112 1.684.33a4.41 4.41 0 011.429.939c.408.402.733.88.954 1.406a4.274 4.274 0 010 3.316 4.331 4.331 0 01-.954 1.405l-6.36 6.259a.5.5 0 01-.702 0l-6.36-6.259A4.298 4.298 0 014 9.333c0-1.15.464-2.252 1.29-3.064A4.439 4.439 0 018.401 5c1.168 0 2.288.456 3.114 1.269z"></path><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M15.5 7.5c.802.304 1.862 1.43 2 2"></path></g></svg> \u6C9B\u7A4E </h1><h2 class="font-black mt-3 text-white px-2 tracking-[3px]" style="text-shadow:1px 1px 1px #555;">\u65BD\u6797\u5A5A\u5BB4</h2><h2 class="font-black my-6 text-white tracking-[3px]" style="text-shadow:1px 1px 3px #555;">05\u6708 08\u65E5 \u9031\u65E5, 2022\u5E74 | \u5F70\u5316\u5E02 \u552F\u611B\u5EAD\u5712</h2>',3),fe={class:"b-h4 flex justify-center items-center flex-col"},xe=e("span",{class:"mt-3"},[e("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none"},[e("path",{fill:"#fff",d:"M18.215 13.484a.857.857 0 11-1.098 1.317l-4.594-3.828L7.93 14.8a.857.857 0 11-1.097-1.317l5.131-4.276a.854.854 0 011.12 0l5.132 4.276z",style:{animation:"slide-20 1s infinite alternate both cubic-bezier(1,-.01,0,.98)"}})])],-1),me=e("p",{class:"text-white text-sm font-bold tracking-[3px]",style:{"text-shadow":"1px 1px 3px #555"}},"\u9EDE\u64CA\u5A5A\u5BB4\u51FA\u5E2D\u8868",-1),pe=e("div",{class:"absolute left-7 md:left-24 lg:left-40 top-40 lg:top-20 text-gray-900 flex-col font-black text-xl",style:{direction:"ltr","writing-mode":"tb-rl"}},[e("h3",{class:"text-white hidden md:flex",style:{"text-shadow":"1px 1px 3px #555","letter-spacing":"0.2em"}},"\u5A5A\u5BB4\u9080\u8ACB\u51FD \u9080\u60A8\u4E00\u540C\u5230\u4F86\uFF01 ")],-1),ue=e("div",{class:"absolute right-7 md:right-24 lg:right-40 top-40 lg:top-20 text-gray-900 flex-col font-black text-xl",style:{direction:"ltr","writing-mode":"tb-rl"}},[e("h3",{class:"text-white hidden md:flex",style:{"text-shadow":"1px 1px 3px #555","letter-spacing":"0.2em"}},"\u4E00\u8D77\u898B\u8B49\u6211\u5011\u4EBA\u751F\u6700\u91CD\u8981\u7684\u6642\u523B\uFF0C")],-1),we={class:"bubbles opacity-40"},ge=["src"],be=["src"],ve=["src"],ye=["src"],_e=["src"],ke=["src"],Me=["src"],ze=e("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z","clip-rule":"evenodd"},null,-1),Be=[ze],je=e("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z","clip-rule":"evenodd"},null,-1),Ce=[je],Ve={key:1,class:"fixed text-gray-500 flex items-center justify-center overflow-auto z-50 bg-gray-900 bg-opacity-100 left-0 right-0 top-0 bottom-0 z-50"},Oe=e("iframe",{id:"iframe",width:"100%",height:"370px",src:"https://www.surveycake.com/s/97ZoO",allowTransparency:"true",frameborder:"0"},null,-1),Le={class:"text-right space-x-1 mt-1"};function Ae(l,o,r,t,s,i){return a(),d(g,null,[t.bgshow?(a(),d("div",F,J)):w("",!0),e("div",P,[e("div",null,[e("div",T,[e("div",X,[e("button",{onClick:o[0]||(o[0]=n=>t.MenuOpen=!0),class:"rounded-lg md:hidden focus:outline-none focus:shadow-outline z-10 font-black text-xs flex justify-center items-center flex-col backdrop-saturate-150 p-3 absolute right-7 top-5"},K)]),e("nav",{class:C([t.MenuOpen?"flex":"hidden","flex-col flex-grow flex pb-4 md:pb-0 md:flex md:flex-row md:relative fixed w-full h-screen md:h-auto z-30 items-center justify-center md:bg-black md:bg-opacity-0 md:text-gray-600 bg-gray-800 text-white md:text-base text-3xl tracking-[3px]"])},[e("button",{class:"mobile-menu-button rounded-lg md:hidden focus:outline-none focus:shadow-outline z-30 absolute top-7 right-10",onClick:o[1]||(o[1]=n=>t.MenuOpen=!1)},W),e("a",{onClick:o[2]||(o[2]=(...n)=>t.calndr&&t.calndr(...n)),class:"px-4 py-3 mt-2 font-black bg-transparent md:mt-0 md:ml-4 text-white hover:text-yellow-300 md:flex hidden justify-center items-center nav-01",href:"javascript:;",style:{"text-shadow":"1px 1px 3px #555"}},Y),e("a",{onClick:o[3]||(o[3]=(...n)=>t.calndr&&t.calndr(...n)),class:"md:hidden px-4 py-3 mt-2 font-black bg-transparent md:mt-0 md:ml-4 text-white hover:text-yellow-300 flex justify-center items-center",href:"javascript:;",style:{"text-shadow":"1px 1px 3px #555"}},te),oe,e("a",{onClick:o[4]||(o[4]=n=>{t.play(),t.showModal=!0}),class:"px-4 py-3 mt-2 font-black bg-transparent md:mt-0 md:ml-4 text-white hover:text-yellow-300 md:flex hidden items-center justify-center nav-03 cursor-pointer",style:{"text-shadow":"1px 1px 3px #555"}},ie),e("a",{onClick:o[5]||(o[5]=n=>{t.play(),t.showModal=!0}),class:"md:hidden px-4 py-3 mt-2 font-black bg-transparent md:mt-0 md:ml-4 text-white hover:text-yellow-300 flex items-center justify-center cursor-pointer",style:{"text-shadow":"1px 1px 3px #555"}},ae),de],2)])]),e("div",ce,[he,e("div",fe,[e("button",{onClick:o[6]||(o[6]=n=>{t.play(),t.showModal=!0}),class:"border border-2 border-white rounded py-1 px-4 text-white font-black text-md hover:bg-orange-300 bg-orange-400 flex flex-row items-center justify-center animate-bounce"},"\u9080\u8ACB\u51FD"),xe,me])]),pe,ue,e("div",we,[e("img",{src:t.bubble.img},null,8,ge),e("img",{src:t.bubble.img},null,8,be),e("img",{src:t.bubble.img},null,8,ve),e("img",{src:t.bubble.img},null,8,ye),e("img",{src:t.bubble.img},null,8,_e),e("img",{src:t.bubble.img},null,8,ke),e("img",{src:t.bubble.img},null,8,Me)]),e("div",{onClick:o[9]||(o[9]=n=>{t.isVisible=!t.isVisible}),class:"absolute bottom-16 right-7 cursor-pointer"},[m((a(),d("svg",{onClick:o[7]||(o[7]=n=>{t.pause()}),xmlns:"http://www.w3.org/2000/svg",class:"h-12 w-12 text-white",viewBox:"0 0 20 20",fill:"currentColor"},Be,512)),[[p,t.isVisible]]),m((a(),d("svg",{onClick:o[8]||(o[8]=n=>{t.play()}),xmlns:"http://www.w3.org/2000/svg",class:"h-12 w-12 text-white",viewBox:"0 0 20 20",fill:"currentColor"},Ce,512)),[[p,!t.isVisible]])])]),t.showModal?(a(),d("div",Ve,[m(e("div",{class:"bg-white rounded-xl shadow-2xl p-2 w-full md:w-1/2 mx-4",onClick:o[11]||(o[11]=n=>t.showModal=!1)},[Oe,e("div",Le,[e("button",{onClick:o[10]||(o[10]=n=>{t.showModal=!t.showModal,t.pause()}),class:"px-4 py-2 text-sm bg-white rounded-xl border transition-colors duration-150 ease-linear border-gray-200 text-gray-500 focus:outline-none focus:ring-0 font-bold hover:bg-gray-50 focus:bg-indigo-50 focus:text-indigo"}," \u78BA\u8A8D ")])],512),[[p,t.showModal]])])):w("",!0)],64)}var Ee=v(q,[["render",Ae]]);const Se=[{path:"/",name:"Banner",component:Ee}],Ne=V({history:O(),routes:Se});const y=L(U);y.use(Ne);y.mount("#app");
