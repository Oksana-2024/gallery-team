import{a}from"./assets/vendor-CNNbG8jS.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();async function l(o,t){const s="https://api.unsplash.com",i="LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc",e="/search/photos";try{return(await a.get(`${s}${e}`,{params:{query:o,page:t,per_page:12,orientation:"portrait",client_id:i}})).data}catch(r){console.log(r)}}const n={form:document.querySelector(".js-search-form "),list:document.querySelector(".js-gallery "),loader:document.querySelector(".loader")};function u(o){return o.map(t=>` <li class="gallery__item">
                <img src="${t.urls.small}" alt="${t.description}">
            </li>`).join("")}function d(){n.loader.classList.remove("is-hidden")}function f(){n.loader.classList.add("is-hidden")}n.form.addEventListener("submit",m);let p=1;async function m(o){o.preventDefault(),n.list.innerHTML="",d();const t=o.target.elements["user-search-query"].value.trim();try{const s=await l(t,p);n.list.innerHTML=u(s.results)}catch(s){console.log(s)}finally{f()}}console.log(n.loader);
//# sourceMappingURL=index.js.map