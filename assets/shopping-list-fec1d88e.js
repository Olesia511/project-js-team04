import"./menu-active-5adf660c.js";const d=document.querySelector(".shop-list-list"),p=document.querySelector(".shop-list-placeholder"),a="user-books";function g(){const e=document.querySelector(".js-description"),t=e.textContent,n=document.querySelector(".js-name").textContent,l=document.querySelector(".js-category"),i=l.textContent;if(window.innerWidth<768){const c=t.slice(0,86)+"…";e.textContent=c,n.slice(0,22)+"",e.textContent=c;const r=i.slice(0,34)+"…";l.textContent=r}else if(window.innerWidth>=768&&window.innerWidth<1440){const c=t.slice(0,253)+"…";e.textContent=c,e.textContent=t,l.textContent=i}else e.textContent=t,e.textContent=t,l.textContent=i}let o;localStorage.getItem(a)?o=JSON.parse(localStorage.getItem(a)):o=[];function u(e){const t=e.map(({buy_links:s="null",amazon_product_url:n="null",book_image:l="null",title:i="null",list_name:c="null",description:r="null",author:m,_id:h="null"})=>`<li class="shop-list-item" data-id="${h}">
              <button type="button" class="delete-btn">
              <div class="delete-btn-icon">
              </div>
              </button>
              <div class="book-cover"><img class="book-cover-img" src="${l}" alt="${i}" /></div>
              <div class="book-info">
                <h2 class="book-name js-name">${i}</h2>
                <p class="book-category js-category">${c}</p>
                <p class="book-description js-description">${r}</p>
                <p class="book-author">${m}</p>

                <div class="link-container">
                  <a class="amazon-icon hover-items-amaz-books" href="${n}" target="_blank" rel="noopener noreferrer nofollow">
                  <div class="amazon-logo">
                  </div>
                  </a>
                  <a class="apple-icon hover-items-amaz-books" href="${s[1].url}" target="_blank" rel="noopener noreferrer nofollow">
                  <div class="apple-books-logo">
                  </div>
                  </a>
                </div>
              </div>
        </li>`).join("");o.length!==0?(p.hidden=!0,d.innerHTML=t,g(),document.querySelectorAll(".delete-btn").forEach(n=>{n.addEventListener("click",b)})):(p.hidden=!1,d.innerHTML="")}u(o);function b(e){const t=e.target.closest(".shop-list-item").dataset.id,s=o.findIndex(n=>n._id===t);s!==-1&&(o.splice(s,1),localStorage.setItem(a,JSON.stringify(o)),u(o))}
