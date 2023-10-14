(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const u=document.querySelector(".shop-list-list"),g=document.querySelector(".shop-list-placeholder"),c="user-books";function h(){const s=document.querySelector(".js-description"),t=s.textContent;if(window.innerWidth<768){const n=t.slice(0,86)+"…";s.textContent=n}else if(window.innerWidth>=768&&window.innerWidth<1440){const n=t.slice(0,253)+"…";s.textContent=n}else s.textContent=t}const r=JSON.parse(localStorage.getItem(c));function f(s){const t=s.map(({buy_links:n="null",amazon_product_url:i="null",book_image:e="null",title:o="null",list_name:l="null",description:a="null",author:d,_id:p="null"})=>`<li class="shop-list-item" data-id="${p}">
              <button type="button" class="delete-btn">
                <svg class="delete-btn-icon" width="16" height="16">
                  <use href="./img/icon.svg#icon-shop-list-delete"></use>
                </svg>
              </button>
              <div class="book-cover">${e}</div>
              <div class="book-info">
                <h2 class="book-name">${o}</h2>
                <p class="book-category">${l}</p>
                <p class="book-description js-description">${a}</p>
                <p class="book-author">${d}</p>

                <div class="link-container">
                  <a class="amazon-icon" href="${i}" target="_blank" rel="noopener noreferrer nofollow">
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
                  <a class="apple-icon" href="${n[1].url}" target="_blank" rel="noopener noreferrer nofollow">
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
        </li>`).join("");r.length!==0&&(g.hidden=!0,u.innerHTML=t,h(),document.querySelectorAll(".delete-btn").forEach(i=>{i.addEventListener("click",m)}))}f(r);function m(s){const t=s.target.closest(".shop-list-item").dataset.id,n=r.findIndex(i=>i._id===t);n!==-1&&(r.splice(n,1),localStorage.setItem(c,JSON.stringify(r)))}
