import{S as d,i as n}from"./assets/vendor-BrddEoy-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const p="https://pixabay.com/api/",c=new URLSearchParams({key:"46809493-025d46e6636e036ef2e71f554",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0});function g(o){return c.set("q",o),fetch(`${p}?${c}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})}function h(o){return o.map(({webformatURL:r,largeImageURL:s,tags:a,likes:e,views:t,comments:i,downloads:u})=>`
        
        <li class="img-card">
            <a class="gallery-link" href="${s}"><img class="img" src="${r}" alt="${a}" width=360 height=200></a>
           <div class="text-container">
           <p class="text">Likes:</br>${e}</p>
                <p class="text">Downloads:</br>${u}</p>
                <p class="text">Views:</br>${t}</p>
                <p class="text">Comments:</br>${i}</p>
           </div></li>`).join("")}const y=new d(".img-card a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8,widthRatio:.9,heigtRatio:.9}),m=document.querySelector(".search-form"),l=document.querySelector(".img-list"),f=document.querySelector(".span");m.addEventListener("submit",L);function L(o){o.preventDefault(),l.innerHTML="";const r=o.target.elements.imgname.value.trim();r===""?n.show({title:"Please,",message:"fill the field",titleColor:"#fff",messageColor:"#fff",messageSize:"16px",backgroundColor:"#ef4040",position:"center"}):(f.classList.add("loader"),g(r).then(s=>{s.hits.length===0&&n.show({title:"Sorry,",message:"there are no images matching your search query. Please try again!",titleColor:"#fff",messageColor:"#fff",messageSize:"16px",backgroundColor:"#ef4040",position:"center"}),l.innerHTML=h(s.hits),m.reset(),y.refresh()}).catch(s=>n.show({message:"Error",titleColor:"#fff",messageColor:"#fff",messageSize:"16px",backgroundColor:"#ef4040",position:"center"})).finally(()=>f.classList.remove("loader")))}
//# sourceMappingURL=index.js.map
