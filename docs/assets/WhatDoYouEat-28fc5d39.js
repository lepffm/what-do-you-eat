import{_ as u,r as l,a as m,o as g,b as i,c as r,d as o,F as x,e as v,t as d,f as w,p as f,g as k}from"./index-b0be2b42.js";const p=s=>(f("data-v-095ee109"),s=s(),k(),s),y={class:"what-do-you-eat"},b=p(()=>o("h1",null,"This is an what-do-you-eat page",-1)),j={class:"carousel rounded-box grid grid-cols-4 gap-4"},S={class:"carousel-item"},B={class:"card w-96 bg-base-100 shadow-xl"},C={class:"card-body items-center justify-between"},D={class:"card-title"},E=["src"],I={class:"card-actions"},L=["onClick"],V=p(()=>o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})],-1)),W={__name:"WhatDoYouEat",setup(s){const n=[{id:"muktae",image:"https://image.nongshim.com/non/pro/434_muktae.jpg",name:"muktae kkang"},{id:"banana",name:"xxx1",image:"https://image.nongshim.com/non/pro/1675041866987.jpg"},{name:"xxx2",image:"https://image.nongshim.com/non/pro/1675041866987.jpg"},{name:"xxx3",image:"https://image.nongshim.com/non/pro/1675041866987.jpg"},{name:"xxx4",image:"https://image.nongshim.com/non/pro/1675041866987.jpg"}];l({count:0}),m(!1),g(()=>{h()});async function h(){try{for(const t of n){const e=await(await fetch(`https://api.counterapi.dev/v1/what-do-you-eat/${t.id}/`)).json();t.count=e.count}}catch(t){console.error(t)}}async function _(t){try{const e=await(await fetch(`https://api.counterapi.dev/v1/what-do-you-eat/${t}/up`)).json();n.find(c=>c.id===t).count=e.count}catch(a){console.error(a)}}return(t,a)=>(i(),r("div",y,[b,o("div",j,[(i(),r(x,null,v(n,e=>o("div",S,[o("div",B,[o("div",C,[o("h2",D,d(e.name),1),o("figure",null,[o("img",{src:e.image,alt:"Shoes"},null,8,E)]),o("div",I,[o("button",{class:"btn",onClick:c=>_(e.id)},[V,w(" "+d(e.count||0),1)],8,L)])])])])),64))])]))}},$=u(W,[["__scopeId","data-v-095ee109"]]);export{$ as default};