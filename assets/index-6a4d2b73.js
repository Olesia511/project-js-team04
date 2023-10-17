import"./support-ukraine-ddac8a9f.js";const b="https://books-backend.p.goit.global/",M="books/category-list",W="books/top-books",R="books/category",F="books/";async function H(){return await(await axios.get(`${b}${M}`)).data}async function N(){return await(await axios.get(`${b}${W}`)).data}async function K(t){return await(await axios.get(`${b}${R}?category=${t}`)).data}async function T(t){return await(await axios.get(`${b}${F}${t}`)).data}let L="";const B=document.querySelector(".title-category");function G(t){L=t,K(t).then(e=>{console.log("Get book by category",e),J(e)}).catch(e=>console.log(e))}function J(t){const e=document.querySelector(".list-books-by-category"),n=t.map(({book_image:o,title:a,author:i,_id:c})=>`<li data-book-id='${c}' class="element-books-by-category js-target">
      <div class="cover-wrap">
      <img src="${o}" alt="${a}" class="img-books-by-category js-target" />
       <p class="cover-text">quick view</p>
       </div>
      <div class="title-container js-target">
      <h3 class="name-books-by-category js-target">${a}</h3>
      <p class="title-books-by-category js-target">${i}</p>
      </div>
      </li>`).join("");return e.innerHTML=n,B.textContent=L,Y(B,L),document.querySelectorAll(".name-books-by-category").forEach(o=>{D()}),P(),n}function Y(t,e){const n=e.split(" "),s=n[n.length-1];let o="";n.forEach(a=>{o!==""&&(o+=" "),a===s?o+=`<span class="title-category-part">${a}</span>`:o+=a}),t.innerHTML=o}function D(){const t=window.innerWidth;let e;t<768?e=31:e=19,document.querySelectorAll(".name-books-by-category").forEach(s=>{let o=s.textContent;if(o.length>e){const a=o.split(" ");let i="";for(const c of a)if(i.length+c.length<=e)i+=(i===""?"":" ")+c;else break;s.textContent=i+(i.length<o.length?"...":"")}})}function P(){const t=window.innerWidth;let e,n;t>=1440?(e=30,n=5):t>=768?(e=40,n=6):(e=50,n=8),document.querySelectorAll(".title-books-by-category").forEach(o=>{const a=o.textContent;let c=a.split(" ").slice(0,n).join(" ");a.slice(0,e),c.length>e&&(c=c.slice(0,e)),o.textContent=`${c.length>e?c+"...":c}`})}const U=document.querySelector(".container-best-books");async function q(){await N().then(t=>{const e=t.map(o=>{const{list_name:a,books:i}=o,c=i.map(({_id:p,author:h,book_image:z,title:$})=>`
              <li data-book-id="${p}" class="book-item js-target">
                <div class="cover-wrap">
                  <img class="book-img js-target" data-src="${z}" alt="${$}" loading="lazy"/>
                  <p class="cover-text">quick view</p>
                </div>
                <div class="title-author-container">
                  <h2 class="book-title js-target">${$}</h2>
                  <h3 class="author js-target">${h}</h3>
                </div>
              </li>`).join("");return`
            <div class="category-container">
              <h2 class="category-title">${a}</h2>
              <ul class="book-list">${c}</ul>
              <button data-category="${a}" class="see-more-btn">SEE MORE</button>
            </div>`}).join(""),n=`
        <h1 class="title">
          Best Sellers <span class="highlighted-text">Books</span>
        </h1>`;U.innerHTML=n+e,document.querySelectorAll(".book-img").forEach(o=>{o.setAttribute("src",o.getAttribute("data-src")),o.onload=()=>o.removeAttribute("data-src")})}).catch(t=>console.log("rej",t))}const k=document.querySelector(".categories-list"),I=document.querySelector(".container-books-by-category"),j=document.querySelector(".top-books-box");let r=null;q();function Q(){j.style.display="none"}function C(){j.style.display="flex"}function E(){I.style.display="none"}function V(){I.style.display="block"}H().then(t=>{const e='<li class="list-categories-item">All categories</li>'+t.map(({list_name:s})=>`<li class="list-categories-item">${s}</li>`).join("");k.insertAdjacentHTML("beforeend",e),r=k.firstChild,Z()}).catch(t=>console.log("rej",t));k.addEventListener("click",X);function X(t){if(t.target.textContent!==r){{if(t.target===t.currentTarget)return;if(t.target===k.firstChild)document.querySelector(".container-best-books")?(f(),C(),E()):(f(),E(),q(),C());else{f(),Q();const e=t.target.textContent;console.log(e),G(e),V()}}r=t.target,r.classList.add("active-list-item")}}function Z(){r.classList.add("active-list-item")}function f(){r.classList.remove("active-list-item")}const A=document.body,x=document.querySelector(".js-backdrop"),tt=document.querySelector(".close-btn-modal"),m=document.querySelector(".btn-add-local"),d=document.querySelector(".add-local"),g=document.querySelector(".remove-local"),u=document.querySelector(".text-box"),y="user-books";let l;localStorage.getItem(y)?l=JSON.parse(localStorage.getItem(y)):l=[];const _=document.querySelector(".add-books-backend");x.addEventListener("click",et);tt.addEventListener("click",v);window.addEventListener("keydown",w);function v(){x.classList.add("is-hidden"),window.removeEventListener("keydown",w),A.classList.remove("disasble-scroll")}function et(t){t.currentTarget===t.target&&v()}function w(t){t.code==="Escape"&&v()}const ot=document.querySelector(".list-books-by-category"),st=document.querySelector(".container-best-books");ot.addEventListener("click",O);st.addEventListener("click",O);m.addEventListener("click",at);async function O(t){if(x.classList.remove("is-hidden"),window.addEventListener("keydown",w),A.classList.add("disasble-scroll"),!t.target.classList.contains("js-target"))return;const e=t.target.dataset.bookId??t.target.closest("li").dataset.bookId;l.findIndex(s=>s._id===`${e}`)!==-1?(d.hidden=!0,g.hidden=!1,u.classList.remove("text-off")):(d.hidden=!1,g.hidden=!0,u.classList.add("text-off")),await T(e).then(s=>{let o=s.book_image,a=s.title,i=s.description,c=s.author,S=s._id,p=s.buy_links[0].url,h=s.buy_links[1].url;_.innerHTML=nt(o,a,i,c,S,p,h)}).catch(s=>console.log(s))}function nt(t,e,n,s,o,a,i){return`
  <div class="backend-box" data-book="${o}">
  <div class="cover-modal">

  <img class="img-book" src="${t}" loading="lazy" alt="${e}" />

  </div>
  <div>
 <h2 class="title-book">${e}</h2>
 <h4 class="author-book">${s}</h4>
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
  `}async function at(t){const e=t.target.textContent,n="add to shopping list",s=_.childNodes[1].dataset.book;if(e===n)d.hidden=!1,g.hidden=!0,u.classList.add("text-off"),m.blur(),await T(s).then(o=>l.push({...o})).catch(o=>console.log(o)),console.log(l),await localStorage.setItem(y,JSON.stringify(l)),d.hidden=!0,g.hidden=!1,u.classList.remove("text-off"),m.blur();else{const o=l.findIndex(a=>a._id===s);o!==-1&&(l.splice(o,1),await localStorage.setItem(y,JSON.stringify(l)),d.hidden=!1,g.hidden=!0,u.classList.add("text-off"),m.blur())}}
