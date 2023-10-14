import"./styles-c877ff20.js";const a=document.querySelector(".shop-list-list"),i=document.querySelector(".shop-list-placeholder"),r="user-books";function b(){const e=document.querySelector(".js-description"),t=e.textContent;if(window.innerWidth<768){const o=t.slice(0,86)+"…";e.textContent=o}else if(window.innerWidth>=768&&window.innerWidth<1440){const o=t.slice(0,253)+"…";e.textContent=o}else e.textContent=t}const m=[{_id:"642fd89ac8cf5ee957f12360"},{_id:"642fd89ac8cf5ee957f12361",list_name:"Middle Grade Paperback Monthly",date:"2023-04-07T08:46:57.000Z",age_group:"",amazon_product_url:"https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20",article_chapter_link:"",author:"Barbara O'Connor",book_image:"https://storage.googleapis.com/du-prd/books/images/9781250144058.jpg",book_image_width:330,book_image_height:485,book_review_link:"",book_uri:"nyt://book/46604242-8624-57d1-bdd4-424c21cde273",contributor:"by Barbara O'Connor",contributor_note:"",created_date:"2023-04-05 23:10:17",description:"David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when David woke suddenly to discover Matthew had been murderedwhile David was asleep just down the hall.",first_chapter_link:"",price:"0.00",primary_isbn10:"1250144051",primary_isbn13:"9781250144058",publisher:"Square Fish",rank:1,rank_last_week:0,sunday_review_link:"",title:"WISH",updated_date:"2023-04-05 23:10:17",weeks_on_list:0,buy_links:[{name:"Amazon",url:"https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20"},{name:"Apple Books",url:"https://goto.applebooks.apple/9781250144058?at=10lIEQ"},{name:"Barnes and Noble",url:"https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781250144058"},{name:"Books-A-Million",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FWISH%252FBarbara%252BO%252527Connor%252F9781250144058&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DWISH%252BBarbara%252BO%252527Connor"},{name:"Bookshop",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781250144058&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DWISH"},{name:"IndieBound",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781250144058%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DWISH%2BBarbara%2BO%2527Connor%26aff%3DNYT"}],__v:0}];localStorage.setItem(r,JSON.stringify(m));const n=JSON.parse(localStorage.getItem(r));function l(e){const t=e.map(({buy_links:o="null",amazon_product_url:s="null",book_image:d="null",title:c="null",list_name:p="null",description:h="null",author:u,_id:g="null"})=>`<li class="shop-list-item" data-id="${g}">
              <button type="button" class="delete-btn">
                <svg class="delete-btn-icon" width="16" height="16">
                  <use href="./img/icon.svg#icon-shop-list-delete"></use>
                </svg>
              </button>
              <div class="book-cover">${d}</div>
              <div class="book-info">
                <h2 class="book-name">${c}</h2>
                <p class="book-category">${p}</p>
                <p class="book-description js-description">${h}</p>
                <p class="book-author">${u}</p>

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
                  <a class="apple-icon" href="${o[1].url}" target="_blank" rel="noopener noreferrer nofollow">
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
        </li>`).join("");n.length!==0?(i.hidden=!0,a.innerHTML=t,b(),document.querySelectorAll(".delete-btn").forEach(s=>{s.addEventListener("click",w)})):(i.hidden=!1,a.innerHTML="")}l(n);function w(e){const t=e.target.closest(".shop-list-item").dataset.id,o=n.findIndex(s=>s._id===t);o!==-1&&(n.splice(o,1),localStorage.setItem(r,JSON.stringify(n)),l(n))}
