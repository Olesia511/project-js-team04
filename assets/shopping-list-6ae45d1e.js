import"./sup-ukraine-2b7b85a7.js";const c=document.querySelector(".shop-list-list"),r=document.querySelector(".shop-list-placeholder"),i="user-books";function m(){const o=document.querySelector(".js-description"),s=o.textContent;if(window.innerWidth<768){const e=s.slice(0,86)+"…";o.textContent=e}else if(window.innerWidth>=768&&window.innerWidth<1440){const e=s.slice(0,253)+"…";o.textContent=e}else o.textContent=s}let t;localStorage.getItem(i)?t=JSON.parse(localStorage.getItem(i)):t=[];function a(o){const s=o.map(({buy_links:e="null",amazon_product_url:n="null",book_image:p="null",title:l="null",list_name:d="null",description:g="null",author:h,_id:u="null"})=>`<li class="shop-list-item" data-id="${u}">
              <button type="button" class="delete-btn">
                <svg class="delete-btn-icon" width="16" height="16">
                  <use href="./img/icon.svg#icon-shop-list-delete"></use>
                </svg>
              </button>
              <div class="book-cover"><img class="book-cover-img" src="${p}" alt="${l}" /></div>
              <div class="book-info">
                <h2 class="book-name">${l}</h2>
                <p class="book-category">${d}</p>
                <p class="book-description js-description">${g}</p>
                <p class="book-author">${h}</p>

                <div class="link-container">
                  <a class="amazon-icon" href="${n}" target="_blank" rel="noopener noreferrer nofollow">
                    <picture>
                      <source
                        srcset="
                          ./img/shop-logo-amazon.png    1x,
                          ./img/shop-logo-amazon-2x.png 2x
                        "
                      />
                      <img
                        class="amazon-logo"
                        src="./img/shop-logo-amazon.png"
                        alt="Amazon"
                        width="32"
                        height="11"
                      />
                    </picture>
                  </a>
                  <a class="apple-icon" href="${e[1].url}" target="_blank" rel="noopener noreferrer nofollow">
                    <picture>
                      <source
                        srcset="
                          ./img/shop-logo.png    1x,
                          ./img/shop-logo-2x.png 2x
                        "
                      />
                      <img
                        class="apple-books-logo"
                        src="./img/shop-logo.png"
                        alt="Apple Books"
                        width="16"
                        height="16"
                      />
                    </picture>
                  </a>
                </div>
              </div>
        </li>`).join("");t.length!==0?(r.hidden=!0,c.innerHTML=s,m(),document.querySelectorAll(".delete-btn").forEach(n=>{n.addEventListener("click",f)})):(r.hidden=!1,c.innerHTML="")}a(t);function f(o){const s=o.target.closest(".shop-list-item").dataset.id,e=t.findIndex(n=>n._id===s);e!==-1&&(t.splice(e,1),localStorage.setItem(i,JSON.stringify(t)),a(t))}
