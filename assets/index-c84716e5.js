import"./support-ukraine-e701a478.js";const p="https://books-backend.p.goit.global/",D="books/category-list",P="books/top-books",U="books/category",Q="books/";async function V(){return await(await axios.get(`${p}${D}`)).data}async function X(){return await(await axios.get(`${p}${P}`)).data}async function Z(t){return await(await axios.get(`${p}${U}?category=${t}`)).data}async function _(t){return await(await axios.get(`${p}${Q}${t}`)).data}let x="";const A=document.querySelector(".title-category");function O(t){x=t,Z(t).then(e=>{console.log("Get book by category",e),tt(e)}).catch(e=>console.log(e))}function tt(t){const e=document.querySelector(".list-books-by-category"),n=t.map(({book_image:o,title:c,author:l,_id:a})=>`<li data-book-id='${a}' class="element-books-by-category js-target">
      <div class="cover-wrap">
      <img src="${o}" alt="${c}" class="img-books-by-category js-target" />
       <p class="cover-text">quick view</p>
       </div>
      <div class="title-container js-target">
      <h3 class="name-books-by-category js-target">${c}</h3>
      <p class="title-books-by-category js-target">${l}</p>
      </div>
      </li>`).join("");return e.innerHTML=n,A.textContent=x,et(A,x),document.querySelectorAll(".name-books-by-category").forEach(o=>{ot()}),st(),n}function et(t,e){const n=e.split(" "),s=n[n.length-1];let o="";n.forEach(c=>{o!==""&&(o+=" "),c===s?o+=`<span class="title-category-part">${c}</span>`:o+=c}),t.innerHTML=o}function ot(){const t=window.innerWidth;let e;t<768?e=31:e=19,document.querySelectorAll(".name-books-by-category").forEach(s=>{let o=s.textContent;if(o.length>e){const c=o.split(" ");let l="";for(const a of c)if(l.length+a.length<=e)l+=(l===""?"":" ")+a;else break;s.textContent=l+(l.length<o.length?"...":"")}})}function st(){const t=window.innerWidth;let e,n;t>=1440?(e=30,n=5):t>=768?(e=40,n=6):(e=50,n=8),document.querySelectorAll(".title-books-by-category").forEach(o=>{const c=o.textContent;let a=c.split(" ").slice(0,n).join(" ");c.slice(0,e),a.length>e&&(a=a.slice(0,e)),o.textContent=`${a.length>e?a+"...":a}`})}const w=document.querySelector(".container-best-books");async function M(){w.classList.add("loader"),await X().then(t=>{const e=t.map(o=>{const{list_name:c,books:l}=o,a=l.map(({_id:L,author:v,book_image:Y,title:T})=>`
              <li data-book-id="${L}" class="book-item js-target">
                <div class="cover-wrap">
                  <img class="book-img js-target" data-src="${Y}" alt="${T}" loading="lazy"/>
                  <p class="cover-text">quick view</p>
                </div>
                <div class="title-author-container">
                  <h2 class="book-title js-target">${T}</h2>
                  <h3 class="author js-target">${v}</h3>
                </div>
              </li>`).join("");return`
            <div class="category-container">
              <h2 class="category-title">${c}</h2>
              <ul class="book-list">${a}</ul>
              <button data-category="${c}" class="see-more-btn">SEE MORE</button>
            </div>`}).join(""),n=`
        <h1 class="title">
          Best Sellers <span class="highlighted-text">Books</span>
        </h1>`;w.innerHTML=n+e,document.querySelectorAll(".book-img").forEach(o=>{o.setAttribute("src",o.getAttribute("data-src")),o.onload=()=>o.removeAttribute("data-src")}),w.classList.remove("loader")}).catch(t=>console.log("rej",t))}const f=document.querySelector(".categories-list"),W=document.querySelector(".container-books-by-category"),F=document.querySelector(".top-books-box");let r=null;M();function R(){F.style.display="none"}function I(){F.style.display="flex"}function j(){W.style.display="none"}function H(){W.style.display="block"}let S,$;V().then(t=>{const e='<li class="list-categories-item">All categories</li>'+t.map(({list_name:s})=>`<li class="list-categories-item">${s}</li>`).join("");f.insertAdjacentHTML("beforeend",e),r=f.firstChild,N(),S=document.querySelectorAll(".list-categories-item"),console.log(S),$=[...S],console.log($)}).catch(t=>console.log("rej",t)).finally(()=>{});f.addEventListener("click",nt);function nt(t){if(t.target.textContent!==r){{if(t.target===t.currentTarget)return;if(t.target===f.firstChild)document.querySelector(".container-best-books")?(k(),I(),j(),d.addEventListener("click",u)):(k(),j(),M(),I(),d.addEventListener("click",u));else{k(),R();const e=t.target.textContent;console.log(e),O(e),H(),d.removeEventListener("click",u)}}r=t.target,r.classList.add("active-list-item")}}function N(){r.classList.add("active-list-item")}function k(){r.classList.remove("active-list-item")}const d=document.querySelector(".container-best-books");console.log();d.addEventListener("click",u);function u(t){if(!t.target.classList.contains("see-more-btn"))return;const e=t.target.dataset.category;console.log(typeof e),k(),R(),O(e),H(),r=$.find(({textContent:n})=>n===`${e}`),N(),d.removeEventListener("click",u)}const z=document.body,E=document.querySelector(".js-backdrop"),ct=document.querySelector(".close-btn-modal"),K=document.querySelector(".modal"),b=document.querySelector(".btn-add-local"),g=document.querySelector(".add-local"),m=document.querySelector(".remove-local"),y=document.querySelector(".text-box");document.querySelector(".icon-close-modal");const h="user-books";let i;localStorage.getItem(h)?i=JSON.parse(localStorage.getItem(h)):i=[];const G=document.querySelector(".add-books-backend");E.addEventListener("click",at);ct.addEventListener("click",B);window.addEventListener("keydown",C);function B(){E.classList.add("is-hidden"),K.classList.add("is-hidden"),window.removeEventListener("keydown",C),z.classList.remove("disasble-scroll")}function at(t){t.currentTarget===t.target&&B()}function C(t){t.code==="Escape"&&B()}const lt=document.querySelector(".list-books-by-category"),it=document.querySelector(".container-best-books");lt.addEventListener("click",J);it.addEventListener("click",J);b.addEventListener("click",dt);async function J(t){if(t.target.classList.contains("js-target"))E.classList.remove("is-hidden"),K.classList.remove("is-hidden"),window.addEventListener("keydown",C),z.classList.add("disasble-scroll");else return;const e=t.target.dataset.bookId??t.target.closest("li").dataset.bookId;i.findIndex(s=>s._id===`${e}`)!==-1?(g.hidden=!0,m.hidden=!1,y.classList.remove("text-off")):(g.hidden=!1,m.hidden=!0,y.classList.add("text-off")),await _(e).then(s=>{let o=s.book_image,c=s.title,l=s.description,a=s.author,q=s._id,L=s.buy_links[0].url,v=s.buy_links[1].url;G.innerHTML=rt(o,c,l,a,q,L,v)}).catch(s=>console.log(s))}function rt(t,e,n,s,o,c,l){return`
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
          <a class="hover-img" href="${c}" target="_blank" rel="noopener noreferrer nofollow">
          <div class="img-modal-amazon">
          </div>
          </a>
        </li>
        <li>
          <a class="hover-img" href="${l}" target="_blank" rel="noopener noreferrer nofollow">
          <div class="img-modal-bookshop">
          </div>
          </a>
        </li>
      </ul>
 </div>
 </div>
  `}async function dt(t){const e=t.target.textContent,n="add to shopping list",s=G.childNodes[1].dataset.book;if(e===n)g.hidden=!1,m.hidden=!0,y.classList.add("text-off"),b.blur(),await _(s).then(o=>i.push({...o})).catch(o=>console.log(o)),console.log(i),await localStorage.setItem(h,JSON.stringify(i)),g.hidden=!0,m.hidden=!1,y.classList.remove("text-off"),b.blur();else{const o=i.findIndex(c=>c._id===s);o!==-1&&(i.splice(o,1),await localStorage.setItem(h,JSON.stringify(i)),g.hidden=!1,m.hidden=!0,y.classList.add("text-off"),b.blur())}}
