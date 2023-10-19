import"./menu-active-5adf660c.js";const p="https://books-backend.p.goit.global/",G="books/category-list",P="books/top-books",U="books/category",Q="books/";async function V(){return await(await axios.get(`${p}${G}`)).data}async function X(){return await(await axios.get(`${p}${P}`)).data}async function Z(t){return await(await axios.get(`${p}${U}?category=${t}`)).data}async function j(t){return await(await axios.get(`${p}${Q}${t}`)).data}let S="";const q=document.querySelector(".title-category");function _(t){S=t,Z(t).then(e=>{tt(e)}).catch(e=>console.log(e))}function tt(t){const e=document.querySelector(".list-books-by-category"),n=t.map(({book_image:o,title:a,author:c,_id:i})=>`<li data-book-id='${i}' class="element-books-by-category js-target">
      <div class="cover-wrap">
      <img src="${o}" alt="${a}" class="img-books-by-category js-target" />
      <p class="cover-text">quick view</p>
      </div>
      <div class="title-container js-target">
      <h3 class="name-books-by-category js-target">${a}</h3>
      <p class="title-books-by-category js-target">${c}</p>
      </div>
      </li>`).join("");return e.innerHTML=n,q.textContent=S,et(q,S),document.querySelectorAll(".name-books-by-category").forEach(o=>{ot()}),st(),n}function et(t,e){const n=e.split(" "),s=n[n.length-1];let o="";n.forEach(a=>{o!==""&&(o+=" "),a===s?o+=`<span class="title-category-part">${a}</span>`:o+=a}),t.innerHTML=o}function ot(){const t=window.innerWidth;let e;t<768?e=31:e=19,document.querySelectorAll(".name-books-by-category").forEach(s=>{let o=s.textContent;if(o.length>e){const a=o.split(" ");let c="";for(const i of a)if(c.length+i.length<=e)c+=(c===""?"":" ")+i;else break;s.textContent=c+(c.length<o.length?"...":"")}})}function st(){const t=window.innerWidth;let e,n;t>=1440?(e=30,n=5):t>=768?(e=40,n=6):(e=50,n=8),document.querySelectorAll(".title-books-by-category").forEach(o=>{const a=o.textContent;let i=a.split(" ").slice(0,n).join(" ");a.slice(0,e),i.length>e&&(i=i.slice(0,e)),o.textContent=`${i.length>e?i+"...":i}`})}const w=document.querySelector(".container-best-books");async function O(){w.classList.add("loader"),await X().then(t=>{const e=t.map(o=>{const{list_name:a,books:c}=o,i=c.map(({_id:L,author:v,book_image:D,title:C})=>`
              <li data-book-id="${L}" class="book-item js-target">
                <div class="cover-wrap">
                  <img class="book-img js-target" data-src="${D}" alt="${C}" loading="lazy"/>
                  <p class="cover-text">quick view</p>
                </div>
                <div class="title-author-container">
                  <h2 class="book-title js-target">${C}</h2>
                  <h3 class="author js-target">${v}</h3>
                </div>
              </li>`).join("");return`
            <div class="category-container">
              <h2 class="category-title">${a}</h2>
              <ul class="book-list">${i}</ul>
              <button data-category="${a}" class="see-more-btn">SEE MORE</button>
            </div>`}).join(""),n=`
        <h1 class="title">
          Best Sellers <span class="highlighted-text">Books</span>
        </h1>`;w.innerHTML=n+e,document.querySelectorAll(".book-img").forEach(o=>{o.setAttribute("src",o.getAttribute("data-src")),o.onload=()=>o.removeAttribute("data-src")}),w.classList.remove("loader")}).catch(t=>console.log("rej",t))}const f=document.querySelector(".categories-list"),M=document.querySelector(".container-books-by-category"),W=document.querySelector(".top-books-box");let r=null;O();function F(){W.style.display="none"}function T(){W.style.display="flex"}function A(){M.style.display="none"}function R(){M.style.display="block"}let I,H;V().then(t=>{const e='<li class="list-categories-item">All categories</li>'+t.map(({list_name:s})=>`<li class="list-categories-item">${s}</li>`).join("");f.insertAdjacentHTML("beforeend",e),r=f.firstChild,N(),I=document.querySelectorAll(".list-categories-item"),H=[...I]}).catch(t=>console.log("rej",t)).finally(()=>{});f.addEventListener("click",nt);function nt(t){if(t.target.textContent!==r){{if(t.target===t.currentTarget)return;if(t.target===f.firstChild)document.querySelector(".container-best-books")?(y(),T(),A(),d.addEventListener("click",u)):(y(),A(),O(),T(),d.addEventListener("click",u));else{y(),F();const e=t.target.textContent;_(e),R(),d.removeEventListener("click",u)}}r=t.target,r.classList.add("active-list-item")}}function N(){r.classList.add("active-list-item")}function y(){r.classList.remove("active-list-item")}const d=document.querySelector(".container-best-books");d.addEventListener("click",u);function u(t){if(!t.target.classList.contains("see-more-btn"))return;const e=t.target.dataset.category;y(),F(),_(e),R(),r=H.find(({textContent:n})=>n===`${e}`),N(),d.removeEventListener("click",u)}const z=document.body,x=document.querySelector(".js-backdrop"),at=document.querySelector(".close-btn-modal"),K=document.querySelector(".modal"),b=document.querySelector(".btn-add-local"),g=document.querySelector(".add-local"),m=document.querySelector(".remove-local"),k=document.querySelector(".text-box"),h="user-books";let l;localStorage.getItem(h)?l=JSON.parse(localStorage.getItem(h)):l=[];const J=document.querySelector(".add-books-backend");x.addEventListener("click",it);at.addEventListener("click",$);window.addEventListener("keydown",E);function $(){x.classList.add("is-hidden"),K.classList.add("is-hidden"),window.removeEventListener("keydown",E),z.classList.remove("disasble-scroll")}function it(t){t.currentTarget===t.target&&$()}function E(t){t.code==="Escape"&&$()}const ct=document.querySelector(".list-books-by-category"),lt=document.querySelector(".container-best-books");ct.addEventListener("click",Y);lt.addEventListener("click",Y);b.addEventListener("click",dt);async function Y(t){if(t.target.classList.contains("js-target"))x.classList.remove("is-hidden"),K.classList.remove("is-hidden"),window.addEventListener("keydown",E),z.classList.add("disasble-scroll");else return;const e=t.target.dataset.bookId??t.target.closest("li").dataset.bookId;l.findIndex(s=>s._id===`${e}`)!==-1?(g.hidden=!0,m.hidden=!1,k.classList.remove("text-off")):(g.hidden=!1,m.hidden=!0,k.classList.add("text-off")),await j(e).then(s=>{let o=s.book_image,a=s.title,c=s.description,i=s.author,B=s._id,L=s.buy_links[0].url,v=s.buy_links[1].url;J.innerHTML=rt(o,a,c,i,B,L,v)}).catch(s=>console.log(s))}function rt(t,e,n,s,o,a,c){return`
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
          <a class="hover-img" href="${a}" target="_blank" rel="noopener noreferrer nofollow">
          <div class="img-modal-amazon">
          </div>
          </a>
        </li>
        <li>
          <a class="hover-img" href="${c}" target="_blank" rel="noopener noreferrer nofollow">
          <div class="img-modal-bookshop">
          </div>
          </a>
        </li>
      </ul>
 </div>
 </div>
  `}async function dt(t){const e=t.target.textContent,n="add to shopping list",s=J.childNodes[1].dataset.book;if(e===n)g.hidden=!1,m.hidden=!0,k.classList.add("text-off"),b.blur(),await j(s).then(o=>l.push({...o})).catch(o=>console.log(o)),console.log(l),await localStorage.setItem(h,JSON.stringify(l)),g.hidden=!0,m.hidden=!1,k.classList.remove("text-off"),b.blur();else{const o=l.findIndex(a=>a._id===s);o!==-1&&(l.splice(o,1),await localStorage.setItem(h,JSON.stringify(l)),g.hidden=!1,m.hidden=!0,k.classList.add("text-off"),b.blur())}}
