(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))g(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&g(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function g(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const d=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"../img/save-the-children.png",img2x:"../img/save-the-children-2x.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"../img/project-hope.png",img2x:"../img/project-hope-2x.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"../img/international-medical-corps.png",img2x:"../img/international-medical-corps-2x.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"../img/razom.png",img2x:"../img/razom-2x.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"../img/action-against-hunger.png",img2x:"../img/action-against-hunger-2x.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"../img/charity-foundation-sergiy-prytula.png",img2x:"../img/charity-foundation-sergiy-prytula-2x.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"../img/medecins-sans-frontieres.png",img2x:"../img/medecins-sans-frontieres-2x.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"../img/world-vision.png",img2x:"../img/world-vision-2x.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"../img/united24.png",img2x:"../img/united24-2x.png"}],c=document.querySelector(".list"),a=document.getElementById("toggleButton"),p=a.querySelector("svg use");let s=!0;function u(){c.innerHTML="";const l=s?0:3,r=s?6:9;d.slice(l,r).forEach((i,g)=>{const e=document.createElement("li"),t=document.createElement("a"),n=document.createElement("span"),m=(l+g+1).toString().padStart(2,"0");n.textContent=m;const o=document.createElement("img");o.srcset=`${i.img} 1x, ${i.img2x} 2x`,o.src=i.img,o.alt=i.title,o.classList.add("white-image"),t.href=i.url,n.classList.add("number"),t.appendChild(o),e.appendChild(n),e.appendChild(t),c.appendChild(e)}),s=!s,p.setAttribute("href",s?"../img/icon.svg#icon-support-ukr-scroll-up":"../img/icon.svg#icon-support-ukr-scroll-down")}a.addEventListener("click",u);u();
