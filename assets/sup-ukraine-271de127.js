(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const i={openBurgerBtn:document.querySelector(".burger-menu"),closeBurgerBtn:document.querySelector(".mobile-menu__button"),burger:document.querySelector(".mobile-menu-container"),themeSwitcher:document.querySelector('input[type="checkbox"]')};console.dir(i.themeSwitcher);document.querySelector("body");const g="theme";let u;const d=localStorage.getItem(g);console.log(d);d===null&&(u="light",localStorage.setItem(g,JSON.stringify(u)),i.themeSwitcher.checked=!1);const w=JSON.parse(localStorage.getItem(g));w==="dark"?(i.themeSwitcher.checked=!0,console.log("1111111")):(i.themeSwitcher.checked=!1,console.log("222222"));i.themeSwitcher.addEventListener("change",S);i.openBurgerBtn.addEventListener("click",p);i.closeBurgerBtn.addEventListener("click",p);function p(){i.burger.classList.toggle("is-hidden-header")}function S(c){const n=c.target.checked;console.log(n),n?localStorage.setItem(g,"dark"):localStorage.setItem(g,"light")}const x=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"./img/save-the-children.png",img2x:"./img/save-the-children-2x.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"./img/project-hope.png",img2x:"./img/project-hope-2x.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"./img/international-medical-corps.png",img2x:"./img/international-medical-corps-2x.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"./img/razom.png",img2x:"./img/razom-2x.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"./img/action-against-hunger.png",img2x:"./img/action-against-hunger-2x.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"./img/charity-foundation-sergiy-prytula.png",img2x:"./img/charity-foundation-sergiy-prytula-2x.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"./img/medecins-sans-frontieres.png",img2x:"./img/medecins-sans-frontieres-2x.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"./img/world-vision.png",img2x:"./img/world-vision-2x.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"./img/united24.png",img2x:"./img/united24-2x.png"}],m=document.querySelector(".list"),h=document.getElementById("toggleButton"),k=h.querySelector("svg use");let l=!0;function f(){m.innerHTML="";const c=l?0:3,n=l?6:9;x.slice(c,n).forEach((r,a)=>{const e=document.createElement("li"),t=document.createElement("a"),o=document.createElement("span"),y=(c+a+1).toString().padStart(2,"0");o.textContent=y;const s=document.createElement("img");s.srcset=`${r.img} 1x, ${r.img2x} 2x`,s.src=r.img,s.alt=r.title,s.classList.add("white-image"),t.href=r.url,o.classList.add("number"),t.appendChild(s),e.appendChild(o),e.appendChild(t),m.appendChild(e)}),l=!l,k.setAttribute("href",l?"./img/icon.svg#icon-support-ukr-scroll-up":"./img/icon.svg#icon-support-ukr-scroll-down")}h.addEventListener("click",f);f();