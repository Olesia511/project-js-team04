import"./sup-ukraine-9b729697.js";const i=document.querySelector(".shop-list-list"),l=document.querySelector(".shop-list-placeholder"),c="user-books";function m(){const o=document.querySelector(".js-description"),t=o.textContent;if(window.innerWidth<768){const e=t.slice(0,86)+"…";o.textContent=e}else if(window.innerWidth>=768&&window.innerWidth<1440){const e=t.slice(0,253)+"…";o.textContent=e}else o.textContent=t}const n=JSON.parse(localStorage.getItem(c));function r(o){const t=o.map(({buy_links:e="null",amazon_product_url:s="null",book_image:a="null",title:p="null",list_name:d="null",description:g="null",author:h,_id:u="null"})=>`<li class="shop-list-item" data-id="${u}">
              <button type="button" class="delete-btn">
                <svg class="delete-btn-icon" width="16" height="16">
                  <use href="./img/icon.svg#icon-shop-list-delete"></use>
                </svg>
              </button>
              <div class="book-cover">${a}</div>
              <div class="book-info">
                <h2 class="book-name">${p}</h2>
                <p class="book-category">${d}</p>
                <p class="book-description js-description">${g}</p>
                <p class="book-author">${h}</p>

                <div class="link-container">
                  <a class="amazon-icon" href="${s}" target="_blank" rel="noopener noreferrer nofollow">
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
        </li>`).join("");n.length!==0?(l.hidden=!0,i.innerHTML=t,m(),document.querySelectorAll(".delete-btn").forEach(s=>{s.addEventListener("click",f)})):(l.hidden=!1,i.innerHTML="")}r(n);function f(o){const t=o.target.closest(".shop-list-item").dataset.id,e=n.findIndex(s=>s._id===t);e!==-1&&(n.splice(e,1),localStorage.setItem(c,JSON.stringify(n)),r(n))}
