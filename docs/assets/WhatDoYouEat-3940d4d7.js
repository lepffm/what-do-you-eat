import{_ as m,r as g,a as v,o as f,b as r,c as i,d as t,F as w,e as b,u as x,t as d,p as y,f as k}from"./index-31b1362e.js";const l=s=>(y("data-v-ab4a6e50"),s=s(),k(),s),j={class:"what-do-you-eat"},S=l(()=>t("h1",null,"This is an what-do-you-eat page",-1)),B={class:"carousel rounded-box grid grid-cols-4 gap-4"},C={class:"carousel-item"},D={class:"card w-96 bg-base-100 shadow-xl"},E={class:"card-body items-center justify-between"},I={class:"card-title"},L=["src"],W={class:"card-actions"},Y=["onClick","disabled"],$=l(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("g",{color:"pink"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})])],-1)),F={__name:"WhatDoYouEat",setup(s){const u=[{name:"muktae",image:"https://image.nongshim.com/non/pro/434_muktae.jpg",text:"먹태깡"},{name:"banana",text:"딸기 바나나킥",image:"https://image.nongshim.com/non/pro/1675041866987.jpg"}];let n=g([]);v(!1),f(()=>{_()});async function _(){try{for(const e of u){const o=await(await fetch(`https://api.counterapi.dev/v1/what-do-you-eat/${e.name}/`)).json();n.push({text:e.text,name:e.name,count:o.count,image:e.image,voted:!1})}}catch(e){console.error(e)}}async function p(e){try{const o=await(await fetch(`https://api.counterapi.dev/v1/what-do-you-eat/${e}/up`)).json();let c=n.find(h=>h.name===e);c.count=o.count,c.voted=!0}catch(a){console.error(a)}}return(e,a)=>(r(),i("div",j,[S,t("div",B,[(r(!0),i(w,null,b(x(n),o=>(r(),i("div",C,[t("div",D,[t("div",E,[t("h2",I,d(o.text),1),t("figure",null,[t("img",{src:o.image,alt:"Shoes"},null,8,L)]),t("div",W,[t("button",{class:"btn btn-outline btn-error",onClick:c=>p(o.name),disabled:o.voted},[$,t("b",null,d(o.count||0),1)],8,Y)])])])]))),256))])]))}},V=m(F,[["__scopeId","data-v-ab4a6e50"]]);export{V as default};