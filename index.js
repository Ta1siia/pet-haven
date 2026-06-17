import{a as u,S,b as C,N as B,P as I,i as L}from"./assets/vendor-ywjDFpsV.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();const q=document.querySelectorAll(".faq-item");q.forEach(e=>{e.querySelector(".faq-question").addEventListener("click",()=>{q.forEach(t=>{t!==e&&t.classList.contains("is-open")&&t.classList.remove("is-open")}),e.classList.toggle("is-open")})});const k=document.querySelector(".burger"),a=document.querySelector(".mobile-menu"),$=document.querySelector(".mobile-menu-close"),J=document.querySelectorAll(".mobile-nav a, .mobile-menu-button");if(k&&a&&$){const e=()=>{a.classList.add("is-open")},s=()=>{a.classList.remove("is-open")};k.addEventListener("click",e),$.addEventListener("click",s),J.forEach(t=>{t.addEventListener("click",s)}),document.addEventListener("keydown",t=>{t.key==="Escape"&&a.classList.contains("is-open")&&s()}),a.addEventListener("click",t=>{t.target===a&&s()})}const d=document.querySelector(".order-modal-backdrop");document.querySelector(".order-modal");const Q=document.querySelector(".close-btn"),i=document.querySelector(".order-modal form");let P=null;function X(e){P=typeof e=="object"?e._id:e,d.classList.add("is-open"),document.body.style.overflow="hidden"}function p(){d.classList.remove("is-open"),document.body.style.overflow="",i.reset(),T()}Q.addEventListener("click",p);d.addEventListener("click",e=>{e.target===d&&p()});document.addEventListener("keydown",e=>{e.key==="Escape"&&d.classList.contains("is-open")&&p()});function T(){i.querySelectorAll(".input, .textarea").forEach(e=>e.classList.remove("error")),i.querySelectorAll(".error-text").forEach(e=>e.remove())}function A(e,s){e.classList.add("error");const t=document.createElement("p");t.className="error-text",t.textContent=s,e.insertAdjacentElement("afterend",t)}function Z(e){T();let s=!0;const t=i.querySelector("#name"),n=i.querySelector("#tel");return e.name.trim()||(A(t,"Введіть ім'я"),s=!1),/^[0-9]{12}$/.test(e.phone.trim())||(A(n,"Введіть коректний номер телефону"),s=!1),s}i.addEventListener("submit",async e=>{var n;e.preventDefault();const s=new FormData(i),t={name:s.get("name").trim(),phone:s.get("tel").trim(),animalId:String(P),comment:((n=s.get("comment"))==null?void 0:n.trim())||"Без коментаря"};if(Z(t))try{await u.post("https://paw-hut.b.goit.study/api/orders",t),S.fire({icon:"success",title:"Заявку відправлено!",text:"Дякуємо, ми скоро з вами зв'яжемось."}),p()}catch{S.fire({icon:"error",title:"Помилка",text:"Не вдалося відправити заявку. Спробуйте ще раз."})}});const x=document.querySelector(".footer-logo-block");x&&x.addEventListener("click",e=>{e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})});const j=document.querySelectorAll(".footer-link-item");j.forEach(e=>{e.addEventListener("click",s=>{const t=e.getAttribute("href");if(t.startsWith("http")||t.startsWith("//")||!t.includes("#"))return;s.preventDefault();const n=t.replace(/.*#/,""),o=document.getElementById(n);o?o.scrollIntoView({behavior:"smooth",block:"start"}):window.location.href=t})});function ee(){const e=document.querySelectorAll('[class^="hero"], [class^="about"], [class^="pets"], [class^="faq"], [class^="success"]');let s="";e.forEach(t=>{const n=t.offsetTop,o=t.clientHeight;window.scrollY>=n-200&&window.scrollY<n+o-200&&(s=t.className.split(" ")[0])}),j.forEach(t=>{t.classList.remove("active"),s&&t.textContent.toLowerCase().includes(s.toLowerCase())&&t.classList.add("active")})}window.addEventListener("scroll",ee);new C(".about-swiper",{modules:[B,I],slidesPerView:1,navigation:{nextEl:".about-next",prevEl:".about-prev"},pagination:{el:".about-us-swiper-pagination"}});const m=document.querySelector("#animal-modal");document.querySelector(".modal");const te=document.querySelector(".modal-close"),se=document.querySelector(".btn-adopt"),M=document.querySelector(".animal-img"),oe=document.querySelector(".animal-type"),ne=document.querySelector(".animal-name"),re=document.querySelector(".animal-age"),ie=document.querySelector(".animal-gender"),ce=document.querySelector(".animal-description"),ae=document.querySelector(".animal-health"),le=document.querySelector(".animal-behavior");let N=null;function de(e){M.src=e.image||"",M.alt=e.name||"Фото тварини",oe.textContent=e.species||"",ne.textContent=e.name||"",re.textContent=e.age||"Невідомий вік",ie.textContent=e.gender||"Невідома стать",ce.textContent=e.description||e.shortDescription||"Опис відсутній",ae.textContent=e.healthStatus||"Інформація відсутня",le.textContent=e.behavior||"Інформація відсутня"}function ue(e){N=e,de(e),m.classList.remove("is-hidden"),document.body.style.overflow="hidden",document.addEventListener("keydown",O)}function y(){m.classList.add("is-hidden"),document.body.style.overflow="",document.removeEventListener("keydown",O)}function O(e){e.key==="Escape"&&y()}te.addEventListener("click",y);m.addEventListener("click",e=>{e.target===m&&y()});se.addEventListener("click",()=>{y(),X(N)});const me="/pet-haven/assets/icons-CgUhUynE.svg",fe="https://paw-hut.b.goit.study";async function pe(){return(await u.get(`${fe}/api/feedbacks?limit=6`)).data.feedbacks}const D=document.querySelector(".success-stories-list");function ye(e){const s=Math.floor(e),t=e%1===.5;return`<div class="success-stories-review-stars">
    ${Array(5).fill(null).map((n,o)=>{let r;return o<s?r="icon-star-filled":o===s&&t?r="icon-star-half":r="icon-star-outline",`<svg width="20" height="20"><use href="${me}#${r}"></use></svg>`}).join("")}
  </div>`}function ge(e){const s=e.map(({author:t,rate:n,description:o})=>`
        <li class="swiper-slide success-stories-review-card">
          ${ye(n)}
          <p class="success-stories-review-text">${o}</p>
          <p class="success-stories-review-author">${t}</p>
        </li>`).join("");D.innerHTML=s}async function ve(){const e=document.createElement("div");e.classList.add("loader","is-visible");try{D.after(e);const s=await pe();ge(s),new C(".success-stories-swiper",{modules:[B,I],slidesPerView:1,spaceBetween:32,dynamicBullets:!0,navigation:{nextEl:".success-stories-button-next",prevEl:".success-stories-button-prev"},pagination:{el:".success-stories-pagination",clickable:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:32},1440:{slidesPerView:2,spaceBetween:32}}})}catch{L.error({title:"Помилка",message:"Не вийшло завантажити відгуки"})}finally{e.remove()}}ve();u.defaults.baseURL="https://paw-hut.b.goit.study";const v=document.querySelector("#pets-list"),F=document.querySelector(".categories-list"),h=document.querySelector("#load-more-btn");let l=1,b=E(),w=0,g=null,f=[];const H=document.querySelector("#pets-loader");async function V(e,s,t=null){const n={page:e,limit:s};t&&(n.categoryId=t);const{data:o}=await u.get("/api/animals",{params:n});return o}async function he(){const{data:e}=await u.get("/api/categories");return e}function E(){return window.innerWidth>=1440?9:8}function be(){return l*b>=w}v.addEventListener("click",e=>{const s=e.target.closest(".more-btn");if(!s)return;const t=f.find(n=>n._id===s.dataset.id);t&&ue(t)});function U(e,s=!1){const t=e.map(({_id:n,image:o,species:r,name:c,categories:W,age:Y,gender:z,shortDescription:G})=>`
     <li class="pet-card" data-id="${n}">
  <img src="${o}" alt="${c}" class="pet-img"/>

  <div class="pet-content">
    <p class="pet-species">${r}</p>

    <h3 class="pet-name">${c}</h3>

    <ul class="category-tag-list">
      ${W.map(K=>`<li class="category-tag">${K.name}</li>`).join("")}
    </ul>

    <ul class="age-gender">
      <li class="pet-age">${Y}</li>
      <li class="pet-gender">${z}</li>
    </ul>

    <p class="pet-desc">${G??""}</p>
  </div>

  <button class="more-btn" data-id="${n}">
    Дізнатись більше
  </button>
</li>
    `).join("");s?v.insertAdjacentHTML("beforeend",t):v.innerHTML=t}function Le(){H.classList.add("is-visible")}function we(){H.classList.remove("is-visible")}async function R(e=!1){try{Le(),b=E();const s=await V(l,b,g);w=s.totalItems,e?f=s.animals:f.push(...s.animals),U(s.animals,!e),_()}catch{L.error({title:"Помилка",message:"Не вдалося завантажити дані.",position:"topRight"})}finally{we()}}function _(){be()?h.classList.add("hidden"):h.classList.remove("hidden")}async function Ee(){try{const e=await he();Se(e),l=1,g=null,await R(!0)}catch{L.error({title:"Помилка",message:"Не вдалося завантажити дані.",position:"topRight"})}}Ee();F.addEventListener("click",async e=>{const s=e.target.closest(".category-btn");s&&(document.querySelectorAll(".category-btn").forEach(t=>t.classList.remove("active")),s.classList.add("active"),l=1,g=s.dataset.categoryId||null,await R(!0))});h.addEventListener("click",async()=>{l+=1;const e=await V(l,E(),g);w=e.totalItems,f.push(...e.animals),U(e.animals,!0),_()});function Se(e){const s=`
    <li>
      <button
        class="category-btn active"
        data-category-id=""
        type="button"
      >
        Всі
      </button>
    </li>

    ${e.map(t=>`
          <li>
            <button
              class="category-btn"
              data-category-id="${t._id}"
              type="button"
            >
              ${t.name}
            </button>
          </li>
        `).join("")}
  `;F.innerHTML=s}
//# sourceMappingURL=index.js.map
