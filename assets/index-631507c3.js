import"./support-ukraine-8bb8992a.js";const L="https://books-backend.p.goit.global/",P="books/category-list",U="books/top-books",Q="books/category",V="books/";async function X(){return await(await axios.get(`${L}${P}`)).data}async function Z(){return await(await axios.get(`${L}${U}`)).data}async function tt(t){return await(await axios.get(`${L}${Q}?category=${t}`)).data}async function _(t){return await(await axios.get(`${L}${V}${t}`)).data}let x="";const I=document.querySelector(".title-category");function O(t){x=t,tt(t).then(e=>{console.log("Get book by category",e),et(e)}).catch(e=>console.log(e))}function et(t){const e=document.querySelector(".list-books-by-category"),n=t.map(({book_image:o,title:c,author:a,_id:i})=>`<li data-book-id='${i}' class="element-books-by-category js-target">
      <div class="cover-wrap">
      <img src="${o}" alt="${c}" class="img-books-by-category js-target" />
       <p class="cover-text">quick view</p>
       </div>
      <div class="title-container js-target">
      <h3 class="name-books-by-category js-target">${c}</h3>
      <p class="title-books-by-category js-target">${a}</p>
      </div>
      </li>`).join("");return e.innerHTML=n,I.textContent=x,ot(I,x),document.querySelectorAll(".name-books-by-category").forEach(o=>{st()}),nt(),n}function ot(t,e){const n=e.split(" "),s=n[n.length-1];let o="";n.forEach(c=>{o!==""&&(o+=" "),c===s?o+=`<span class="title-category-part">${c}</span>`:o+=c}),t.innerHTML=o}function st(){const t=window.innerWidth;let e;t<768?e=31:e=19,document.querySelectorAll(".name-books-by-category").forEach(s=>{let o=s.textContent;if(o.length>e){const c=o.split(" ");let a="";for(const i of c)if(a.length+i.length<=e)a+=(a===""?"":" ")+i;else break;s.textContent=a+(a.length<o.length?"...":"")}})}function nt(){const t=window.innerWidth;let e,n;t>=1440?(e=30,n=5):t>=768?(e=40,n=6):(e=50,n=8),document.querySelectorAll(".title-books-by-category").forEach(o=>{const c=o.textContent;let i=c.split(" ").slice(0,n).join(" ");c.slice(0,e),i.length>e&&(i=i.slice(0,e)),o.textContent=`${i.length>e?i+"...":i}`})}const ct=document.querySelector(".container-best-books");async function F(){await Z().then(t=>{const e=t.map(o=>{const{list_name:c,books:a}=o,i=a.map(({_id:v,author:w,book_image:D,title:T})=>`
              <li data-book-id="${v}" class="book-item js-target">
                <div class="cover-wrap">
                  <img class="book-img js-target" data-src="${D}" alt="${T}" loading="lazy"/>
                  <p class="cover-text">quick view</p>
                </div>
                <div class="title-author-container">
                  <h2 class="book-title js-target">${T}</h2>
                  <h3 class="author js-target">${w}</h3>
                </div>
              </li>`).join("");return`
            <div class="category-container">
              <h2 class="category-title">${c}</h2>
              <ul class="book-list">${i}</ul>
              <button data-category="${c}" class="see-more-btn">SEE MORE</button>
            </div>`}).join(""),n=`
        <h1 class="title">
          Best Sellers <span class="highlighted-text">Books</span>
        </h1>`;ct.innerHTML=n+e,document.querySelectorAll(".book-img").forEach(o=>{o.setAttribute("src",o.getAttribute("data-src")),o.onload=()=>o.removeAttribute("data-src")})}).catch(t=>console.log("rej",t))}const h=document.querySelector(".categories-list"),M=document.querySelector(".container-books-by-category"),W=document.querySelector(".top-books-box"),E=document.querySelector('input[type="checkbox"]');let r=null;F();function R(){W.style.display="none"}function A(){W.style.display="flex"}function j(){M.style.display="none"}function H(){M.style.display="block"}let S,y;X().then(t=>{const e='<li class="list-categories-item">All categories</li>'+t.map(({list_name:s})=>`<li class="list-categories-item">${s}</li>`).join("");h.insertAdjacentHTML("beforeend",e),r=h.firstChild,N(),S=document.querySelectorAll(".list-categories-item"),console.log(S),y=[...S],console.log(y),E.checked&&z()}).catch(t=>console.log("rej",t)).finally(()=>{});h.addEventListener("click",it);function it(t){if(t.target.textContent!==r){{if(t.target===t.currentTarget)return;if(t.target===h.firstChild)document.querySelector(".container-best-books")?(b(),A(),j(),d.addEventListener("click",u)):(b(),j(),F(),A(),d.addEventListener("click",u));else{b(),R();const e=t.target.textContent;console.log(e),O(e),H(),d.removeEventListener("click",u)}}r=t.target,r.classList.add("active-list-item")}}function N(){r.classList.add("active-list-item")}function b(){r.classList.remove("active-list-item")}console.log(E);E.addEventListener("change",at);function at(t){t.target.checked?z():lt()}function lt(){y.map(t=>t.classList.remove("dark"))}function z(){y.map(t=>t.classList.add("dark"))}const d=document.querySelector(".container-best-books");console.log();d.addEventListener("click",u);function u(t){if(!t.target.classList.contains("see-more-btn"))return;const e=t.target.dataset.category;console.log(typeof e),b(),R(),O(e),H(),r=y.find(({textContent:n})=>n===`${e}`),N(),d.removeEventListener("click",u)}const K=document.body,$=document.querySelector(".js-backdrop"),rt=document.querySelector(".close-btn-modal"),G=document.querySelector(".modal"),f=document.querySelector(".btn-add-local"),g=document.querySelector(".add-local"),m=document.querySelector(".remove-local"),k=document.querySelector(".text-box");document.querySelector(".icon-close-modal");const p="user-books";let l;localStorage.getItem(p)?l=JSON.parse(localStorage.getItem(p)):l=[];const J=document.querySelector(".add-books-backend");$.addEventListener("click",dt);rt.addEventListener("click",B);window.addEventListener("keydown",C);function B(){$.classList.add("is-hidden"),G.classList.add("is-hidden"),window.removeEventListener("keydown",C),K.classList.remove("disasble-scroll")}function dt(t){t.currentTarget===t.target&&B()}function C(t){t.code==="Escape"&&B()}const ut=document.querySelector(".list-books-by-category"),gt=document.querySelector(".container-best-books");ut.addEventListener("click",Y);gt.addEventListener("click",Y);f.addEventListener("click",kt);async function Y(t){if(t.target.classList.contains("js-target"))$.classList.remove("is-hidden"),G.classList.remove("is-hidden"),window.addEventListener("keydown",C),K.classList.add("disasble-scroll");else return;const e=t.target.dataset.bookId??t.target.closest("li").dataset.bookId;l.findIndex(s=>s._id===`${e}`)!==-1?(g.hidden=!0,m.hidden=!1,k.classList.remove("text-off")):(g.hidden=!1,m.hidden=!0,k.classList.add("text-off")),await _(e).then(s=>{let o=s.book_image,c=s.title,a=s.description,i=s.author,q=s._id,v=s.buy_links[0].url,w=s.buy_links[1].url;J.innerHTML=mt(o,c,a,i,q,v,w)}).catch(s=>console.log(s))}function mt(t,e,n,s,o,c,a){return`
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
          <a class="hover-img" href="${a}" target="_blank" rel="noopener noreferrer nofollow">
          <div class="img-modal-bookshop">
          </div>
          </a>
        </li>
      </ul>
 </div>
 </div>
  `}async function kt(t){const e=t.target.textContent,n="add to shopping list",s=J.childNodes[1].dataset.book;if(e===n)g.hidden=!1,m.hidden=!0,k.classList.add("text-off"),f.blur(),await _(s).then(o=>l.push({...o})).catch(o=>console.log(o)),console.log(l),await localStorage.setItem(p,JSON.stringify(l)),g.hidden=!0,m.hidden=!1,k.classList.remove("text-off"),f.blur();else{const o=l.findIndex(c=>c._id===s);o!==-1&&(l.splice(o,1),await localStorage.setItem(p,JSON.stringify(l)),g.hidden=!1,m.hidden=!0,k.classList.add("text-off"),f.blur())}}
