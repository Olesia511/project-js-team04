import"./support-ukraine-6bcca46a.js";const h="https://books-backend.p.goit.global/",z="books/category-list",K="books/top-books",G="books/category",J="books/";async function Y(){return await(await axios.get(`${h}${z}`)).data}async function D(){return await(await axios.get(`${h}${K}`)).data}async function P(t){return await(await axios.get(`${h}${G}?category=${t}`)).data}async function A(t){return await(await axios.get(`${h}${J}${t}`)).data}let w="";const q=document.querySelector(".title-category");function U(t){w=t,P(t).then(e=>{console.log("Get book by category",e),Q(e)}).catch(e=>console.log(e))}function Q(t){const e=document.querySelector(".list-books-by-category"),n=t.map(({book_image:o,title:c,author:a,_id:i})=>`<li data-book-id='${i}' class="element-books-by-category js-target">
      <div class="cover-wrap">
      <img src="${o}" alt="${c}" class="img-books-by-category js-target" />
       <p class="cover-text">quick view</p>
       </div>
      <div class="title-container js-target">
      <h3 class="name-books-by-category js-target">${c}</h3>
      <p class="title-books-by-category js-target">${a}</p>
      </div>
      </li>`).join("");return e.innerHTML=n,q.textContent=w,V(q,w),document.querySelectorAll(".name-books-by-category").forEach(o=>{X()}),Z(),n}function V(t,e){const n=e.split(" "),s=n[n.length-1];let o="";n.forEach(c=>{o!==""&&(o+=" "),c===s?o+=`<span class="title-category-part">${c}</span>`:o+=c}),t.innerHTML=o}function X(){const t=window.innerWidth;let e;t<768?e=31:e=19,document.querySelectorAll(".name-books-by-category").forEach(s=>{let o=s.textContent;if(o.length>e){const c=o.split(" ");let a="";for(const i of c)if(a.length+i.length<=e)a+=(a===""?"":" ")+i;else break;s.textContent=a+(a.length<o.length?"...":"")}})}function Z(){const t=window.innerWidth;let e,n;t>=1440?(e=30,n=5):t>=768?(e=40,n=6):(e=50,n=8),document.querySelectorAll(".title-books-by-category").forEach(o=>{const c=o.textContent;let i=c.split(" ").slice(0,n).join(" ");c.slice(0,e),i.length>e&&(i=i.slice(0,e)),o.textContent=`${i.length>e?i+"...":i}`})}const tt=document.querySelector(".container-best-books");async function j(){await D().then(t=>{const e=t.map(o=>{const{list_name:c,books:a}=o,i=a.map(({_id:f,author:p,book_image:N,title:E})=>`
              <li data-book-id="${f}" class="book-item js-target">
                <div class="cover-wrap">
                  <img class="book-img js-target" data-src="${N}" alt="${E}" loading="lazy"/>
                  <p class="cover-text">quick view</p>
                </div>
                <div class="title-author-container">
                  <h2 class="book-title js-target">${E}</h2>
                  <h3 class="author js-target">${p}</h3>
                </div>
              </li>`).join("");return`
            <div class="category-container">
              <h2 class="category-title">${c}</h2>
              <ul class="book-list">${i}</ul>
              <button data-category="${c}" class="see-more-btn">SEE MORE</button>
            </div>`}).join(""),n=`
        <h1 class="title">
          Best Sellers <span class="highlighted-text">Books</span>
        </h1>`;tt.innerHTML=n+e,document.querySelectorAll(".book-img").forEach(o=>{o.setAttribute("src",o.getAttribute("data-src")),o.onload=()=>o.removeAttribute("data-src")})}).catch(t=>console.log("rej",t))}const y=document.querySelector(".categories-list"),_=document.querySelector(".container-books-by-category"),O=document.querySelector(".top-books-box"),S=document.querySelector('input[type="checkbox"]');let r=null;j();function et(){O.style.display="none"}function T(){O.style.display="flex"}function I(){_.style.display="none"}function ot(){_.style.display="block"}let L,k;Y().then(t=>{const e='<li class="list-categories-item">All categories</li>'+t.map(({list_name:s})=>`<li class="list-categories-item">${s}</li>`).join("");y.insertAdjacentHTML("beforeend",e),r=y.firstChild,nt(),L=document.querySelectorAll(".list-categories-item"),console.log(L),k=[...L],console.log(k),S.checked&&F()}).catch(t=>console.log("rej",t)).finally(()=>{});y.addEventListener("click",st);function st(t){if(t.target.textContent!==r){{if(t.target===t.currentTarget)return;if(t.target===y.firstChild)document.querySelector(".container-best-books")?(v(),T(),I()):(v(),I(),j(),T());else{v(),et();const e=t.target.textContent;console.log(e),U(e),ot()}}r=t.target,r.classList.add("active-list-item")}}function nt(){r.classList.add("active-list-item")}function v(){r.classList.remove("active-list-item")}console.log(S);S.addEventListener("change",ct);function ct(t){t.target.checked?F():it()}function it(){k.map(t=>t.classList.remove("dark"))}function F(){k.map(t=>t.classList.add("dark"))}const M=document.body,x=document.querySelector(".js-backdrop"),at=document.querySelector(".close-btn-modal"),W=document.querySelector(".modal"),m=document.querySelector(".btn-add-local"),d=document.querySelector(".add-local"),u=document.querySelector(".remove-local"),g=document.querySelector(".text-box");document.querySelector(".icon-close-modal");const b="user-books";let l;localStorage.getItem(b)?l=JSON.parse(localStorage.getItem(b)):l=[];const R=document.querySelector(".add-books-backend");x.addEventListener("click",lt);at.addEventListener("click",$);window.addEventListener("keydown",B);function $(){x.classList.add("is-hidden"),W.classList.add("is-hidden"),window.removeEventListener("keydown",B),M.classList.remove("disasble-scroll")}function lt(t){t.currentTarget===t.target&&$()}function B(t){t.code==="Escape"&&$()}const rt=document.querySelector(".list-books-by-category"),dt=document.querySelector(".container-best-books");rt.addEventListener("click",H);dt.addEventListener("click",H);m.addEventListener("click",gt);async function H(t){if(t.target.classList.contains("js-target"))x.classList.remove("is-hidden"),W.classList.remove("is-hidden"),window.addEventListener("keydown",B),M.classList.add("disasble-scroll");else return;const e=t.target.dataset.bookId??t.target.closest("li").dataset.bookId;l.findIndex(s=>s._id===`${e}`)!==-1?(d.hidden=!0,u.hidden=!1,g.classList.remove("text-off")):(d.hidden=!1,u.hidden=!0,g.classList.add("text-off")),await A(e).then(s=>{let o=s.book_image,c=s.title,a=s.description,i=s.author,C=s._id,f=s.buy_links[0].url,p=s.buy_links[1].url;R.innerHTML=ut(o,c,a,i,C,f,p)}).catch(s=>console.log(s))}function ut(t,e,n,s,o,c,a){return`
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
          <div class="img-modal-amazon hover-img">
          </div>
          </a>
        </li>
        <li>
          <a href="${a}" target="_blank" rel="noopener noreferrer nofollow">
          <div class="img-modal-bookshop hover-img">
          </div>
          </a>
        </li>
      </ul>
 </div>
 </div>
  `}async function gt(t){const e=t.target.textContent,n="add to shopping list",s=R.childNodes[1].dataset.book;if(e===n)d.hidden=!1,u.hidden=!0,g.classList.add("text-off"),m.blur(),await A(s).then(o=>l.push({...o})).catch(o=>console.log(o)),console.log(l),await localStorage.setItem(b,JSON.stringify(l)),d.hidden=!0,u.hidden=!1,g.classList.remove("text-off"),m.blur();else{const o=l.findIndex(c=>c._id===s);o!==-1&&(l.splice(o,1),await localStorage.setItem(b,JSON.stringify(l)),d.hidden=!1,u.hidden=!0,g.classList.add("text-off"),m.blur())}}
