import"./support-ukraine-1a97d3f2.js";const L="https://books-backend.p.goit.global/",U="books/category-list",Q="books/top-books",V="books/category",X="books/";async function Z(){return await(await axios.get(`${L}${U}`)).data}async function tt(){return await(await axios.get(`${L}${Q}`)).data}async function et(t){return await(await axios.get(`${L}${V}?category=${t}`)).data}async function O(t){return await(await axios.get(`${L}${X}${t}`)).data}let E="";const A=document.querySelector(".title-category");function F(t){E=t,et(t).then(e=>{console.log("Get book by category",e),ot(e)}).catch(e=>console.log(e))}function ot(t){const e=document.querySelector(".list-books-by-category"),n=t.map(({book_image:o,title:c,author:i,_id:a})=>`<li data-book-id='${a}' class="element-books-by-category js-target">
      <div class="cover-wrap">
      <img src="${o}" alt="${c}" class="img-books-by-category js-target" />
       <p class="cover-text">quick view</p>
       </div>
      <div class="title-container js-target">
      <h3 class="name-books-by-category js-target">${c}</h3>
      <p class="title-books-by-category js-target">${i}</p>
      </div>
      </li>`).join("");return e.innerHTML=n,A.textContent=E,st(A,E),document.querySelectorAll(".name-books-by-category").forEach(o=>{nt()}),ct(),n}function st(t,e){const n=e.split(" "),s=n[n.length-1];let o="";n.forEach(c=>{o!==""&&(o+=" "),c===s?o+=`<span class="title-category-part">${c}</span>`:o+=c}),t.innerHTML=o}function nt(){const t=window.innerWidth;let e;t<768?e=31:e=19,document.querySelectorAll(".name-books-by-category").forEach(s=>{let o=s.textContent;if(o.length>e){const c=o.split(" ");let i="";for(const a of c)if(i.length+a.length<=e)i+=(i===""?"":" ")+a;else break;s.textContent=i+(i.length<o.length?"...":"")}})}function ct(){const t=window.innerWidth;let e,n;t>=1440?(e=30,n=5):t>=768?(e=40,n=6):(e=50,n=8),document.querySelectorAll(".title-books-by-category").forEach(o=>{const c=o.textContent;let a=c.split(" ").slice(0,n).join(" ");c.slice(0,e),a.length>e&&(a=a.slice(0,e)),o.textContent=`${a.length>e?a+"...":a}`})}const S=document.querySelector(".container-best-books");async function M(){S.classList.add("loader"),await tt().then(t=>{const e=t.map(o=>{const{list_name:c,books:i}=o,a=i.map(({_id:v,author:w,book_image:P,title:I})=>`
              <li data-book-id="${v}" class="book-item js-target">
                <div class="cover-wrap">
                  <img class="book-img js-target" data-src="${P}" alt="${I}" loading="lazy"/>
                  <p class="cover-text">quick view</p>
                </div>
                <div class="title-author-container">
                  <h2 class="book-title js-target">${I}</h2>
                  <h3 class="author js-target">${w}</h3>
                </div>
              </li>`).join("");return`
            <div class="category-container">
              <h2 class="category-title">${c}</h2>
              <ul class="book-list">${a}</ul>
              <button data-category="${c}" class="see-more-btn">SEE MORE</button>
            </div>`}).join(""),n=`
        <h1 class="title">
          Best Sellers <span class="highlighted-text">Books</span>
        </h1>`;S.innerHTML=n+e,document.querySelectorAll(".book-img").forEach(o=>{o.setAttribute("src",o.getAttribute("data-src")),o.onload=()=>o.removeAttribute("data-src")}),S.classList.remove("loader")}).catch(t=>console.log("rej",t))}const h=document.querySelector(".categories-list"),W=document.querySelector(".container-books-by-category"),R=document.querySelector(".top-books-box"),$=document.querySelector('input[type="checkbox"]');let r=null;M();function H(){R.style.display="none"}function j(){R.style.display="flex"}function _(){W.style.display="none"}function N(){W.style.display="block"}let x,y;Z().then(t=>{const e='<li class="list-categories-item">All categories</li>'+t.map(({list_name:s})=>`<li class="list-categories-item">${s}</li>`).join("");h.insertAdjacentHTML("beforeend",e),r=h.firstChild,z(),x=document.querySelectorAll(".list-categories-item"),console.log(x),y=[...x],console.log(y),$.checked&&K()}).catch(t=>console.log("rej",t)).finally(()=>{});h.addEventListener("click",at);function at(t){if(t.target.textContent!==r){{if(t.target===t.currentTarget)return;if(t.target===h.firstChild)document.querySelector(".container-best-books")?(b(),j(),_(),d.addEventListener("click",u)):(b(),_(),M(),j(),d.addEventListener("click",u));else{b(),H();const e=t.target.textContent;console.log(e),F(e),N(),d.removeEventListener("click",u)}}r=t.target,r.classList.add("active-list-item")}}function z(){r.classList.add("active-list-item")}function b(){r.classList.remove("active-list-item")}console.log($);$.addEventListener("change",it);function it(t){t.target.checked?K():lt()}function lt(){y.map(t=>t.classList.remove("dark"))}function K(){y.map(t=>t.classList.add("dark"))}const d=document.querySelector(".container-best-books");console.log();d.addEventListener("click",u);function u(t){if(!t.target.classList.contains("see-more-btn"))return;const e=t.target.dataset.category;console.log(typeof e),b(),H(),F(e),N(),r=y.find(({textContent:n})=>n===`${e}`),z(),d.removeEventListener("click",u)}const G=document.body,B=document.querySelector(".js-backdrop"),rt=document.querySelector(".close-btn-modal"),J=document.querySelector(".modal"),f=document.querySelector(".btn-add-local"),g=document.querySelector(".add-local"),m=document.querySelector(".remove-local"),k=document.querySelector(".text-box");document.querySelector(".icon-close-modal");const p="user-books";let l;localStorage.getItem(p)?l=JSON.parse(localStorage.getItem(p)):l=[];const Y=document.querySelector(".add-books-backend");B.addEventListener("click",dt);rt.addEventListener("click",C);window.addEventListener("keydown",q);function C(){B.classList.add("is-hidden"),J.classList.add("is-hidden"),window.removeEventListener("keydown",q),G.classList.remove("disasble-scroll")}function dt(t){t.currentTarget===t.target&&C()}function q(t){t.code==="Escape"&&C()}const ut=document.querySelector(".list-books-by-category"),gt=document.querySelector(".container-best-books");ut.addEventListener("click",D);gt.addEventListener("click",D);f.addEventListener("click",kt);async function D(t){if(t.target.classList.contains("js-target"))B.classList.remove("is-hidden"),J.classList.remove("is-hidden"),window.addEventListener("keydown",q),G.classList.add("disasble-scroll");else return;const e=t.target.dataset.bookId??t.target.closest("li").dataset.bookId;l.findIndex(s=>s._id===`${e}`)!==-1?(g.hidden=!0,m.hidden=!1,k.classList.remove("text-off")):(g.hidden=!1,m.hidden=!0,k.classList.add("text-off")),await O(e).then(s=>{let o=s.book_image,c=s.title,i=s.description,a=s.author,T=s._id,v=s.buy_links[0].url,w=s.buy_links[1].url;Y.innerHTML=mt(o,c,i,a,T,v,w)}).catch(s=>console.log(s))}function mt(t,e,n,s,o,c,i){return`
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
          <a class="hover-img" href="${i}" target="_blank" rel="noopener noreferrer nofollow">
          <div class="img-modal-bookshop">
          </div>
          </a>
        </li>
      </ul>
 </div>
 </div>
  `}async function kt(t){const e=t.target.textContent,n="add to shopping list",s=Y.childNodes[1].dataset.book;if(e===n)g.hidden=!1,m.hidden=!0,k.classList.add("text-off"),f.blur(),await O(s).then(o=>l.push({...o})).catch(o=>console.log(o)),console.log(l),await localStorage.setItem(p,JSON.stringify(l)),g.hidden=!0,m.hidden=!1,k.classList.remove("text-off"),f.blur();else{const o=l.findIndex(c=>c._id===s);o!==-1&&(l.splice(o,1),await localStorage.setItem(p,JSON.stringify(l)),g.hidden=!1,m.hidden=!0,k.classList.add("text-off"),f.blur())}}
