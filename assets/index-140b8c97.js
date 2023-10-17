import"./support-ukraine-16de5bf8.js";const b="https://books-backend.p.goit.global/",N="books/category-list",K="books/top-books",G="books/category",J="books/";async function Y(){return await(await axios.get(`${b}${N}`)).data}async function D(){return await(await axios.get(`${b}${K}`)).data}async function P(t){return await(await axios.get(`${b}${G}?category=${t}`)).data}async function A(t){return await(await axios.get(`${b}${J}${t}`)).data}let x="";const q=document.querySelector(".title-category");function U(t){x=t,P(t).then(e=>{console.log("Get book by category",e),Q(e)}).catch(e=>console.log(e))}function Q(t){const e=document.querySelector(".list-books-by-category"),n=t.map(({book_image:o,title:c,author:i,_id:a})=>`<li data-book-id='${a}' class="element-books-by-category js-target">
      <div class="cover-wrap">
      <img src="${o}" alt="${c}" class="img-books-by-category js-target" />
       <p class="cover-text">quick view</p>
       </div>
      <div class="title-container js-target">
      <h3 class="name-books-by-category js-target">${c}</h3>
      <p class="title-books-by-category js-target">${i}</p>
      </div>
      </li>`).join("");return e.innerHTML=n,q.textContent=x,V(q,x),document.querySelectorAll(".name-books-by-category").forEach(o=>{X()}),Z(),n}function V(t,e){const n=e.split(" "),s=n[n.length-1];let o="";n.forEach(c=>{o!==""&&(o+=" "),c===s?o+=`<span class="title-category-part">${c}</span>`:o+=c}),t.innerHTML=o}function X(){const t=window.innerWidth;let e;t<768?e=31:e=19,document.querySelectorAll(".name-books-by-category").forEach(s=>{let o=s.textContent;if(o.length>e){const c=o.split(" ");let i="";for(const a of c)if(i.length+a.length<=e)i+=(i===""?"":" ")+a;else break;s.textContent=i+(i.length<o.length?"...":"")}})}function Z(){const t=window.innerWidth;let e,n;t>=1440?(e=30,n=5):t>=768?(e=40,n=6):(e=50,n=8),document.querySelectorAll(".title-books-by-category").forEach(o=>{const c=o.textContent;let a=c.split(" ").slice(0,n).join(" ");c.slice(0,e),a.length>e&&(a=a.slice(0,e)),o.textContent=`${a.length>e?a+"...":a}`})}const tt=document.querySelector(".container-best-books");async function j(){await D().then(t=>{const e=t.map(o=>{const{list_name:c,books:i}=o,a=i.map(({_id:p,author:f,book_image:H,title:E})=>`
              <li data-book-id="${p}" class="book-item js-target">
                <div class="cover-wrap">
                  <img class="book-img js-target" data-src="${H}" alt="${E}" loading="lazy"/>
                  <p class="cover-text">quick view</p>
                </div>
                <div class="title-author-container">
                  <h2 class="book-title js-target">${E}</h2>
                  <h3 class="author js-target">${f}</h3>
                </div>
              </li>`).join("");return`
            <div class="category-container">
              <h2 class="category-title">${c}</h2>
              <ul class="book-list">${a}</ul>
              <button data-category="${c}" class="see-more-btn">SEE MORE</button>
            </div>`}).join(""),n=`
        <h1 class="title">
          Best Sellers <span class="highlighted-text">Books</span>
        </h1>`;tt.innerHTML=n+e,document.querySelectorAll(".book-img").forEach(o=>{o.setAttribute("src",o.getAttribute("data-src")),o.onload=()=>o.removeAttribute("data-src")})}).catch(t=>console.log("rej",t))}const k=document.querySelector(".categories-list"),_=document.querySelector(".container-books-by-category"),O=document.querySelector(".top-books-box"),w=document.querySelector('input[type="checkbox"]');let r=null;j();function et(){O.style.display="none"}function T(){O.style.display="flex"}function I(){_.style.display="none"}function ot(){_.style.display="block"}let L,y;Y().then(t=>{const e='<li class="list-categories-item">All categories</li>'+t.map(({list_name:s})=>`<li class="list-categories-item">${s}</li>`).join("");k.insertAdjacentHTML("beforeend",e),r=k.firstChild,nt(),L=document.querySelectorAll(".list-categories-item"),console.log(L),y=[...L],console.log(y),w.checked&&z()}).catch(t=>console.log("rej",t)).finally(()=>{});k.addEventListener("click",st);function st(t){if(t.target.textContent!==r){{if(t.target===t.currentTarget)return;if(t.target===k.firstChild)document.querySelector(".container-best-books")?(v(),T(),I()):(v(),I(),j(),T());else{v(),et();const e=t.target.textContent;console.log(e),U(e),ot()}}r=t.target,r.classList.add("active-list-item")}}function nt(){r.classList.add("active-list-item")}function v(){r.classList.remove("active-list-item")}console.log(w);w.addEventListener("change",ct);function ct(t){t.target.checked?z():at()}function at(){y.map(t=>t.classList.remove("dark"))}function z(){y.map(t=>t.classList.add("dark"))}const F=document.body,S=document.querySelector(".js-backdrop"),it=document.querySelector(".close-btn-modal"),M=document.querySelector(".modal"),m=document.querySelector(".btn-add-local"),d=document.querySelector(".add-local"),g=document.querySelector(".remove-local"),u=document.querySelector(".text-box");document.querySelector(".icon-close-modal");const h="user-books";let l;localStorage.getItem(h)?l=JSON.parse(localStorage.getItem(h)):l=[];const W=document.querySelector(".add-books-backend");S.addEventListener("click",lt);it.addEventListener("click",$);window.addEventListener("keydown",B);function $(){S.classList.add("is-hidden"),M.classList.add("is-hidden"),window.removeEventListener("keydown",B),F.classList.remove("disasble-scroll")}function lt(t){t.currentTarget===t.target&&$()}function B(t){t.code==="Escape"&&$()}const rt=document.querySelector(".list-books-by-category"),dt=document.querySelector(".container-best-books");rt.addEventListener("click",R);dt.addEventListener("click",R);m.addEventListener("click",ut);async function R(t){if(t.target.classList.contains("js-target"))S.classList.remove("is-hidden"),M.classList.remove("is-hidden"),window.addEventListener("keydown",B),F.classList.add("disasble-scroll");else return;const e=t.target.dataset.bookId??t.target.closest("li").dataset.bookId;l.findIndex(s=>s._id===`${e}`)!==-1?(d.hidden=!0,g.hidden=!1,u.classList.remove("text-off")):(d.hidden=!1,g.hidden=!0,u.classList.add("text-off")),await A(e).then(s=>{let o=s.book_image,c=s.title,i=s.description,a=s.author,C=s._id,p=s.buy_links[0].url,f=s.buy_links[1].url;W.innerHTML=gt(o,c,i,a,C,p,f)}).catch(s=>console.log(s))}function gt(t,e,n,s,o,c,i){return`
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
          <a href="${c}" target="_blank" rel="noopener noreferrer nofollow">
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
  `}async function ut(t){const e=t.target.textContent,n="add to shopping list",s=W.childNodes[1].dataset.book;if(e===n)d.hidden=!1,g.hidden=!0,u.classList.add("text-off"),m.blur(),await A(s).then(o=>l.push({...o})).catch(o=>console.log(o)),console.log(l),await localStorage.setItem(h,JSON.stringify(l)),d.hidden=!0,g.hidden=!1,u.classList.remove("text-off"),m.blur();else{const o=l.findIndex(c=>c._id===s);o!==-1&&(l.splice(o,1),await localStorage.setItem(h,JSON.stringify(l)),d.hidden=!1,g.hidden=!0,u.classList.add("text-off"),m.blur())}}
