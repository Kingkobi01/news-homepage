(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const i=document.querySelector(".nav-toggler"),r=document.querySelector("nav ul"),n=document.querySelector(".nav-toggler img");i.addEventListener("click",()=>{console.log(n.src),r.classList.contains("translate-x-0")?(r.classList.add("translate-x-full"),r.classList.remove("translate-x-0"),n.src="/assets/images/icon-menu.svg"):(r.classList.remove("translate-x-full"),r.classList.add("translate-x-0"),n.src="/assets/images/icon-menu-close.svg")});
