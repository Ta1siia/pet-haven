import{a as m,S as k,b as I,N as B,P as C,i as E}from"./assets/vendor-ywjDFpsV.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();const $=document.querySelectorAll(".faq-item");$.forEach(e=>{e.querySelector(".faq-question").addEventListener("click",()=>{$.forEach(n=>{n!==e&&n.classList.contains("is-open")&&n.classList.remove("is-open")}),e.classList.toggle("is-open")})});const A=document.querySelector(".burger"),l=document.querySelector(".mobile-menu"),x=document.querySelector(".mobile-menu-close"),ee=document.querySelectorAll(".mobile-nav a, .mobile-menu-button");if(A&&l&&x){const e=()=>{l.classList.add("is-open")},t=()=>{l.classList.remove("is-open")};A.addEventListener("click",e),x.addEventListener("click",t),ee.forEach(n=>{n.addEventListener("click",t)}),document.addEventListener("keydown",n=>{n.key==="Escape"&&l.classList.contains("is-open")&&t()}),l.addEventListener("click",n=>{n.target===l&&t()})}const u=document.querySelector(".order-modal-backdrop");document.querySelector(".order-modal");const te=document.querySelector(".close-btn"),a=document.querySelector(".order-modal form");let O=null;function ne(e){O=typeof e=="object"?e._id:e,u.classList.add("is-open"),document.body.style.overflow="hidden"}function y(){u.classList.remove("is-open"),document.body.style.overflow="",a.reset(),D()}te.addEventListener("click",y);u.addEventListener("click",e=>{e.target===u&&y()});document.addEventListener("keydown",e=>{e.key==="Escape"&&u.classList.contains("is-open")&&y()});function D(){a.querySelectorAll(".input, .textarea").forEach(e=>e.classList.remove("error")),a.querySelectorAll(".error-text").forEach(e=>e.remove())}function M(e,t){e.classList.add("error");const n=document.createElement("p");n.className="error-text",n.textContent=t,e.insertAdjacentElement("afterend",n)}function se(e){D();let t=!0;const n=a.querySelector("#name"),o=a.querySelector("#tel");return e.name.trim()||(M(n,"Введіть ім'я"),t=!1),/^[0-9]{12}$/.test(e.phone.trim())||(M(o,"Введіть коректний номер телефону"),t=!1),t}a.addEventListener("submit",async e=>{var o;e.preventDefault();const t=new FormData(a),n={name:t.get("name").trim(),phone:t.get("tel").trim(),animalId:String(O),comment:((o=t.get("comment"))==null?void 0:o.trim())||"Без коментаря"};if(se(n))try{await m.post("https://paw-hut.b.goit.study/api/orders",n),k.fire({icon:"success",title:"Заявку відправлено!",text:"Дякуємо, ми скоро з вами зв'яжемось."}),y()}catch{k.fire({icon:"error",title:"Помилка",text:"Не вдалося відправити заявку. Спробуйте ще раз."})}});const P=document.querySelector(".footer-logo-block");P&&P.addEventListener("click",e=>{e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})});const H=document.querySelectorAll(".footer-link-item");H.forEach(e=>{e.addEventListener("click",t=>{const n=e.getAttribute("href");if(n.startsWith("http")||n.startsWith("//")||!n.includes("#"))return;t.preventDefault();const o=n.replace(/.*#/,""),s=document.getElementById(o);s?s.scrollIntoView({behavior:"smooth",block:"start"}):window.location.href=n})});function oe(){const e=document.querySelectorAll('[class^="hero"], [class^="about"], [class^="pets"], [class^="faq"], [class^="success"]');let t="";e.forEach(n=>{const o=n.offsetTop,s=n.clientHeight;window.scrollY>=o-200&&window.scrollY<o+s-200&&(t=n.className.split(" ")[0])}),H.forEach(n=>{n.classList.remove("active"),t&&n.textContent.toLowerCase().includes(t.toLowerCase())&&n.classList.add("active")})}window.addEventListener("scroll",oe);new I(".about-swiper",{modules:[B,C],slidesPerView:1,navigation:{nextEl:".about-next",prevEl:".about-prev"},pagination:{el:".about-us-swiper-pagination"}});const f=document.querySelector("#animal-modal");document.querySelector(".modal");const re=document.querySelector(".modal-close"),ie=document.querySelector(".btn-adopt"),T=document.querySelector(".animal-img"),ae=document.querySelector(".animal-type"),ce=document.querySelector(".animal-name"),le=document.querySelector(".animal-age"),de=document.querySelector(".animal-gender"),ue=document.querySelector(".animal-description"),me=document.querySelector(".animal-health"),pe=document.querySelector(".animal-behavior");let N=null;function fe(e){T.src=e.image||"",T.alt=e.name||"Фото тварини",ae.textContent=e.species||"",ce.textContent=e.name||"",le.textContent=e.age||"Невідомий вік",de.textContent=e.gender||"Невідома стать",ue.textContent=e.description||e.shortDescription||"Опис відсутній",me.textContent=e.healthStatus||"Інформація відсутня",pe.textContent=e.behavior||"Інформація відсутня"}function ge(e){N=e,fe(e),f.classList.remove("is-hidden"),document.body.style.overflow="hidden",document.addEventListener("keydown",j)}function v(){f.classList.add("is-hidden"),document.body.style.overflow="",document.removeEventListener("keydown",j)}function j(e){e.key==="Escape"&&v()}re.addEventListener("click",v);f.addEventListener("click",e=>{e.target===f&&v()});ie.addEventListener("click",()=>{v(),ne(N)});const ye="/pet-haven/assets/icons-CgUhUynE.svg",ve="https://paw-hut.b.goit.study";async function be(){return(await m.get(`${ve}/api/feedbacks?limit=6`)).data.feedbacks}const _=document.querySelector(".success-stories-list");function he(e){const t=Math.floor(e),n=e%1===.5;return`<div class="success-stories-review-stars">
    ${Array(5).fill(null).map((o,s)=>{let r;return s<t?r="icon-star-filled":s===t&&n?r="icon-star-half":r="icon-star-outline",`<svg width="20" height="20"><use href="${ye}#${r}"></use></svg>`}).join("")}
  </div>`}function Le(e){const t=e.map(({author:n,rate:o,description:s})=>`
        <li class="swiper-slide success-stories-review-card">
          ${he(o)}
          <p class="success-stories-review-text">${s}</p>
          <p class="success-stories-review-author">${n}</p>
        </li>`).join("");_.innerHTML=t}async function we(){const e=document.createElement("div");e.classList.add("loader","is-visible");try{_.after(e);const t=await be();Le(t),new I(".success-stories-swiper",{modules:[B,C],slidesPerView:1,spaceBetween:32,dynamicBullets:!0,navigation:{nextEl:".success-stories-button-next",prevEl:".success-stories-button-prev"},pagination:{el:".success-stories-pagination",clickable:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:32},1440:{slidesPerView:2,spaceBetween:32}}})}catch{E.error({title:"Помилка",message:"Не вийшло завантажити відгуки"})}finally{e.remove()}}we();const Ee=1440,Se=8,qe=9;function F(){return window.innerWidth>=Ee?qe:Se}function ke(e,t,n){return e*t>=n}function $e(e){document.querySelectorAll(".category-btn").forEach(t=>t.classList.remove("active")),e.classList.add("active")}m.defaults.baseURL="https://paw-hut.b.goit.study";const b=document.querySelector("#pets-list"),V=document.querySelector(".categories-list"),p=document.querySelector("#load-more-btn"),h=document.querySelector("#pets-pagination"),L=document.querySelector("#pets-pagination-list"),U=document.querySelector("#pets-prev-btn"),W=document.querySelector("#pets-next-btn"),R=document.querySelector("#pets-loader");let i=1,g=F(),S=0,q=null,w=[];async function Ae(e,t,n=null){const o={page:e,limit:t};n&&(o.categoryId=n);const{data:s}=await m.get("/api/animals",{params:o});return s}async function xe(){const{data:e}=await m.get("/api/categories");return e}function K(){return window.innerWidth>=768}function Y(){return Math.ceil(S/g)}function Me(){R.classList.add("is-visible")}function Pe(){R.classList.remove("is-visible")}function Te(e,t=!1){const n=e.map(({_id:o,image:s,species:r,name:c,categories:z,age:G,gender:J,shortDescription:Q})=>{const X=z.map(Z=>`<li class="category-tag">${Z.name}</li>`).join("");return`
          <li class="pet-card" data-id="${o}">
            <img src="${s}" alt="${c}" class="pet-img" />

            <div class="pet-content">
              <p class="pet-species">${r}</p>

              <h3 class="pet-name">${c}</h3>

              <ul class="category-tag-list">
                ${X}
              </ul>

              <ul class="age-gender">
                <li class="pet-age">${G}</li>
                <li class="pet-gender">${J}</li>
              </ul>

              <p class="pet-desc">${Q??""}</p>
            </div>

            <button class="more-btn" data-id="${o}" type="button">
              Дізнатись більше
            </button>
          </li>
        `}).join("");t?b.insertAdjacentHTML("beforeend",n):b.innerHTML=n}function Ie(){const e=Y();if(!K()||e<=1){h.classList.add("hidden"),L.innerHTML="";return}h.classList.remove("hidden"),L.innerHTML=Array.from({length:e},(t,n)=>{const o=n+1;return`
      <li>
        <button
          class="pets-pagination-page ${o===i?"active":""}"
          type="button"
          data-page="${o}"
          aria-label="Сторінка ${o}"
        >
          ${o}
        </button>
      </li>
    `}).join(""),U.disabled=i===1,W.disabled=i===e}function Be(){const e=ke(i,g,S);if(K()){p.classList.add("hidden"),Ie();return}h.classList.add("hidden"),e?p.classList.add("hidden"):p.classList.remove("hidden")}async function d(e=!1){try{Me(),g=F();const t=await Ae(i,g,q);S=t.totalItems,e?w=t.animals:w.push(...t.animals),Te(t.animals,!e),Be()}catch{E.error({title:"Помилка",message:"Не вдалося завантажити дані.",position:"topRight"})}finally{Pe()}}function Ce(e){const t=`
    <li>
      <button
        class="category-btn active"
        data-category-id=""
        type="button"
      >
        Всі
      </button>
    </li>

    ${e.map(n=>`
          <li>
            <button
              class="category-btn"
              data-category-id="${n._id}"
              type="button"
            >
              ${n.name}
            </button>
          </li>
        `).join("")}
  `;V.innerHTML=t}b.addEventListener("click",e=>{const t=e.target.closest(".more-btn");if(!t)return;const n=w.find(o=>o._id===t.dataset.id);n&&ge(n)});V.addEventListener("click",async e=>{const t=e.target.closest(".category-btn");t&&($e(t),i=1,q=t.dataset.categoryId||null,await d(!0))});p.addEventListener("click",async()=>{i+=1,await d(!1)});U.addEventListener("click",async()=>{i!==1&&(i-=1,await d(!0))});W.addEventListener("click",async()=>{const e=Y();i>=e||(i+=1,await d(!0))});L.addEventListener("click",async e=>{const t=e.target.closest(".pets-pagination-page");if(!t)return;const n=Number(t.dataset.page);n!==i&&(i=n,await d(!0))});async function Oe(){try{const e=await xe();Ce(e),i=1,q=null,await d(!0)}catch{E.error({title:"Помилка",message:"Не вдалося завантажити дані.",position:"topRight"})}}Oe();
//# sourceMappingURL=index.js.map
