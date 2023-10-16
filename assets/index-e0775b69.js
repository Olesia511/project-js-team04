import"./support-ukraine-7b5dc033.js";const y="https://books-backend.p.goit.global/",T="books/category-list",I="books/top-books",q="books/category",j="books/";async function A(){return await(await axios.get(`${y}${T}`)).data}async function _(){return await(await axios.get(`${y}${I}`)).data}async function O(t){return await(await axios.get(`${y}${q}?category=${t}`)).data}async function S(t){return await(await axios.get(`${y}${j}${t}`)).data}let L="";const $=document.querySelector(".title-category");function z(t){L=t,O(t).then(e=>{console.log("Get book by category",e),M(e)}).catch(e=>console.log(e))}function M(t){const e=document.querySelector(".list-books-by-category"),n=t.map(({book_image:s,title:a,author:i,_id:c})=>`<li data-book-id='${c}' class="element-books-by-category js-target">
      <div class="cover-wrap">
      <img src="${s}" alt="${a}" class="img-books-by-category js-target" />
       <p class="cover-text">quick view</p>
       </div>
      <div class="title-container js-target">
      <h3 class="name-books-by-category js-target">${a}</h3>
      <p class="title-books-by-category js-target">${i}</p>
      </div>
      </li>`).join("");return e.innerHTML=n,$.textContent=L,W($,L),document.querySelectorAll(".name-books-by-category").forEach(s=>{R()}),H(),n}function W(t,e){const n=e.split(" "),o=n[n.length-1];let s="";n.forEach(a=>{s!==""&&(s+=" "),a===o?s+=`<span class="title-category-part">${a}</span>`:s+=a}),t.innerHTML=s}function R(){const t=window.innerWidth;let e;t<768?e=31:e=19,document.querySelectorAll(".name-books-by-category").forEach(o=>{let s=o.textContent;if(s.length>e){const a=s.split(" ");let i="";for(const c of a)if(i.length+c.length<=e)i+=(i===""?"":" ")+c;else break;o.textContent=i+(i.length<s.length?"...":"")}})}function H(){const t=window.innerWidth;let e,n;t>=1440?(e=30,n=5):t>=768?(e=40,n=6):(e=50,n=8),document.querySelectorAll(".title-books-by-category").forEach(s=>{const a=s.textContent;let c=a.split(" ").slice(0,n).join(" ");a.slice(0,e),c.length>e&&(c=c.slice(0,e)),s.textContent=`${c.length>e?c+"...":c}`})}const N=document.querySelector(".container-best-books");function K(){_().then(t=>{const e=t.map(n=>{const{list_name:o,books:s}=n,a=s.map(({_id:c,author:f,book_image:h,title:m})=>` 
  <li data-book-id="${c}" class="book-item js-target">
              <div class="cover-wrap">
                <img class="book-img js-target" src="${h}" alt="${m}" />
                <p class="cover-text">quick view</p>
              </div>
              <div class="title-author-container">
                <h2 class="book-title js-target">${m}</h2>
                <h3 class="author js-target">${f}</h3>
              </div>
  </li>`).join("");return`<div class="category-container"><h2 class="category-title">${o}</h2>
          <ul class="book-list">${a}</ul>
          <button data-category="${o}" class="see-more-btn">
            SEE MORE
          </button>
          </div>`}).join("");N.innerHTML=e}).catch(t=>console.log("rej",t))}K();const b=document.querySelector(".categories-list");let r=null;A().then(t=>{const e='<li class="list-categories-item">All categories</li>'+t.map(({list_name:o})=>`<li class="list-categories-item">${o}</li>`).join("");b.insertAdjacentHTML("beforeend",e),r=b.firstChild,J()}).catch(t=>console.log("rej",t));b.addEventListener("click",G);function G(t){if(t.target===r)return;if(t.target===t.currentTarget)return;t.target,b.firstChild,Y();const e=t.target.textContent;console.log(e),z(e),r=t.target,r.classList.add("active-list-item")}function J(){r.classList.add("active-list-item")}function Y(){r.classList.remove("active-list-item")}const E=document.body,v=document.querySelector(".js-backdrop"),D=document.querySelector(".close-btn-modal"),k=document.querySelector(".btn-add-local"),d=document.querySelector(".add-local"),g=document.querySelector(".remove-local"),u=document.querySelector(".text-box"),p="user-books";localStorage.setItem("user-books","");let l;localStorage.getItem(p)?l=JSON.parse(localStorage.getItem(p)):l=[];const B=document.querySelector(".add-books-backend");v.addEventListener("click",P);D.addEventListener("click",w);window.addEventListener("keydown",x);function w(){v.classList.add("is-hidden"),window.removeEventListener("keydown",x),E.classList.remove("disasble-scroll")}function P(t){t.currentTarget===t.target&&w()}function x(t){t.code==="Escape"&&w()}const U=document.querySelector(".list-books-by-category"),F=document.querySelector(".container-best-books");U.addEventListener("click",C);F.addEventListener("click",C);k.addEventListener("click",V);async function C(t){if(v.classList.remove("is-hidden"),window.addEventListener("keydown",x),E.classList.add("disasble-scroll"),!t.target.classList.contains("js-target"))return;const e=t.target.dataset.bookId??t.target.closest("li").dataset.bookId;l.findIndex(o=>o._id===`${e}`)!==-1?(d.hidden=!0,g.hidden=!1,u.classList.remove("text-off")):(d.hidden=!1,g.hidden=!0,u.classList.add("text-off")),await S(e).then(o=>{let s=o.book_image,a=o.title,i=o.description,c=o.author,f=o._id,h=o.buy_links[0].url,m=o.buy_links[1].url;B.innerHTML=Q(s,a,i,c,f,h,m)}).catch(o=>console.log(o))}function Q(t,e,n,o,s,a,i){return`
  <div class="backend-box" data-book="${s}">
  <div class="cover-modal">

  <img class="img-book" src="${t}" loading="lazy" alt="${e}" />

  </div>
  <div>
 <h2 class="title-book">${e}</h2>
 <h4 class="author-book">${o}</h4>
 <p class="descr-book">${n}</p>
 <ul class="modal-img-list">
        <li>
          <a href="${a}" target="_blank" rel="noopener noreferrer nofollow">
            <picture>
              <source
                srcset="
                  ./img/shop-logo-amazon.png 1x,
                  ./img/shop-logo-amazon.png 2x
                "
              />
              
              <img
                class="img-modal-amazon hover-img"
                src="./img/shop-logo-amazon.png"
                alt="link-amazon"
              />
            </picture>
          </a>
        </li>
        <li>
          <a href="${i}" target="_blank" rel="noopener noreferrer nofollow">
            <picture>
              
              <source
                srcset="./img/shop-logo.png 1x, ./img/shop-logo.png 2x"
              />
              <img
                class="img-modal-bookshop hover-img"
                src="./img/shop-logo.png"
                alt="link-amazon"
              />
            </picture>
          </a>
        </li>
      </ul>
 </div>
 </div>
  `}async function V(t){const e=t.target.textContent,n="add to shopping list",o=B.childNodes[1].dataset.book;if(e===n)d.hidden=!1,g.hidden=!0,u.classList.add("text-off"),k.blur(),await S(o).then(s=>l.push({...s})).catch(s=>console.log(s)),console.log(l),await localStorage.setItem(p,JSON.stringify(l)),d.hidden=!0,g.hidden=!1,u.classList.remove("text-off"),k.blur();else{const s=l.findIndex(a=>a._id===o);s!==-1&&(l.splice(s,1),await localStorage.setItem(p,JSON.stringify(l)),d.hidden=!1,g.hidden=!0,u.classList.add("text-off"),k.blur())}}
