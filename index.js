import{a as d,S,b as T,N as I,P,i as f}from"./assets/vendor-ywjDFpsV.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const q=document.querySelectorAll(".faq-item");q.forEach(e=>{e.querySelector(".faq-question").addEventListener("click",()=>{q.forEach(s=>{s!==e&&s.classList.contains("is-open")&&s.classList.remove("is-open")}),e.classList.toggle("is-open")})});const k=document.querySelector(".burger"),i=document.querySelector(".mobile-menu"),$=document.querySelector(".mobile-menu-close"),Q=document.querySelectorAll(".mobile-nav a, .mobile-menu-button");if(k&&i&&$){const e=()=>{i.classList.add("is-open")},t=()=>{i.classList.remove("is-open")};k.addEventListener("click",e),$.addEventListener("click",t),Q.forEach(s=>{s.addEventListener("click",t)}),document.addEventListener("keydown",s=>{s.key==="Escape"&&i.classList.contains("is-open")&&t()}),i.addEventListener("click",s=>{s.target===i&&t()})}const u=document.querySelector(".order-modal-backdrop");document.querySelector(".order-modal");const X=document.querySelector(".close-btn"),c=document.querySelector(".order-modal form");let C=null;function Z(e){C=e,u.classList.add("is-open"),document.body.style.overflow="hidden"}function p(){u.classList.remove("is-open"),document.body.style.overflow="",c.reset(),H()}X.addEventListener("click",p);u.addEventListener("click",e=>{e.target===u&&p()});document.addEventListener("keydown",e=>{e.key==="Escape"&&u.classList.contains("is-open")&&p()});function H(){c.querySelectorAll(".input, .textarea").forEach(e=>e.classList.remove("error")),c.querySelectorAll(".error-text").forEach(e=>e.remove())}function A(e,t){e.classList.add("error");const s=document.createElement("p");s.className="error-text",s.textContent=t,e.insertAdjacentElement("afterend",s)}function ee(e){H();let t=!0;const s=c.querySelector("#name"),n=c.querySelector("#tel");return e.name.trim()||(A(s,"Введіть ім'я"),t=!1),/^[0-9]{12}$/.test(e.phone.trim())||(A(n,"Введіть коректний номер телефону"),t=!1),t}c.addEventListener("submit",async e=>{e.preventDefault();const t=new FormData(c),s={name:t.get("name"),phone:t.get("tel"),animalId:String(C),comment:t.get("comment")||"Без коментаря"};if(ee(s))try{await d.post("https://paw-hut.b.goit.study/api/orders",s),S.fire({icon:"success",title:"Заявку відправлено!",text:"Дякуємо, ми скоро з вами зв'яжемось."}),p()}catch{S.fire({icon:"error",title:"Помилка",text:"Не вдалося відправити заявку. Спробуйте ще раз."})}});const x=document.querySelector(".footer-logo-block");x&&x.addEventListener("click",e=>{e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})});const N=document.querySelectorAll(".footer-link-item");N.forEach(e=>{e.addEventListener("click",t=>{const s=e.getAttribute("href");if(s.startsWith("http")||s.startsWith("//")||!s.includes("#"))return;t.preventDefault();const n=s.replace(/.*#/,""),o=document.getElementById(n);o?o.scrollIntoView({behavior:"smooth",block:"start"}):window.location.href=s})});function te(){const e=document.querySelectorAll('[class^="hero"], [class^="about"], [class^="pets"], [class^="faq"], [class^="success"]');let t="";e.forEach(s=>{const n=s.offsetTop,o=s.clientHeight;window.scrollY>=n-200&&window.scrollY<n+o-200&&(t=s.className.split(" ")[0])}),N.forEach(s=>{s.classList.remove("active"),t&&s.textContent.toLowerCase().includes(t.toLowerCase())&&s.classList.add("active")})}window.addEventListener("scroll",te);new T(".about-swiper",{modules:[I,P],slidesPerView:1,navigation:{nextEl:".about-next",prevEl:".about-prev"},pagination:{el:".about-us-swiper-pagination"}});const se="https://paw-hut.b.goit.study/api",m=document.querySelector("#animal-modal");document.querySelector(".modal");const oe=document.querySelector(".modal-close"),ne=document.querySelector(".btn-adopt"),M=document.querySelector(".animal-img"),re=document.querySelector(".animal-type"),ce=document.querySelector(".animal-name"),ae=document.querySelector(".animal-meta"),ie=document.querySelector(".animal-description"),le=document.querySelector(".animal-health"),de=document.querySelector(".animal-behavior");let O=null;async function ue(e){try{const{data:t}=await d.get(`${se}/animals/${e}`);return t}catch{return f.error({title:"Помилка",message:"Не вдалося отримати дані тварини",position:"topRight"}),null}}function me(e){M.src=e.imgURL||"",M.alt=e.name||"Animal photo",re.textContent=e.species||"",ce.textContent=e.name||"",ae.textContent=`${e.age||"Невідомий вік"} • ${e.sex||"Невідома стать"}`,ie.textContent=e.comment||"Опис відсутній",le.innerHTML=`
    <strong>Здоров'я:</strong>
    ${e.health||"Інформація відсутня"}
  `,de.innerHTML=`
    <strong>Поведінка:</strong>
    ${e.behavior||"Інформація відсутня"}
  `}async function j(e){const t=await ue(e);t&&(O=t,me(t),m.classList.remove("is-hidden"),document.body.style.overflow="hidden",document.addEventListener("keydown",F))}function g(){m.classList.add("is-hidden"),document.body.style.overflow="",document.removeEventListener("keydown",F)}function F(e){e.key==="Escape"&&g()}oe.addEventListener("click",g);m.addEventListener("click",e=>{e.target===m&&g()});ne.addEventListener("click",()=>{g(),Z(O._id)});document.addEventListener("click",e=>{const t=e.target.closest(".animal-card");if(!t)return;const s=t.dataset.id;s&&j(s)});const fe="/pet-haven/assets/icons-CgUhUynE.svg",pe="https://paw-hut.b.goit.study";async function ge(){return(await d.get(`${pe}/api/feedbacks?limit=6`)).data.feedbacks}const R=document.querySelector(".success-stories-list");function ye(e){const t=Math.floor(e),s=e%1===.5;return`<div class="success-stories-review-stars">
    ${Array(5).fill(null).map((n,o)=>{let r;return o<t?r="icon-star-filled":o===t&&s?r="icon-star-half":r="icon-star-outline",`<svg width="20" height="20"><use href="${fe}#${r}"></use></svg>`}).join("")}
  </div>`}function he(e){const t=e.map(({author:s,rate:n,description:o})=>`
        <li class="swiper-slide success-stories-review-card">
          ${ye(n)}
          <p class="success-stories-review-text">${o}</p>
          <p class="success-stories-review-author">${s}</p>
        </li>`).join("");R.innerHTML=t}async function ve(){const e=document.createElement("div");e.classList.add("loader");try{R.after(e);const t=await ge();he(t);const s=new T(".success-stories-swiper",{modules:[I,P],slidesPerView:1,spaceBetween:32,dynamicBullets:!0,navigation:{nextEl:".success-stories-button-next",prevEl:".success-stories-button-prev"},pagination:{el:".success-stories-pagination",clickable:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:32},1440:{slidesPerView:2,spaceBetween:32}}});e.remove()}catch{e.remove(),f.error({title:"Помилка",message:"Не вийшло завантажити відгуки"})}}ve();d.defaults.baseURL="https://paw-hut.b.goit.study";const y=document.querySelector("#pets-list"),U=document.querySelector(".categories-list"),h=document.querySelector("#load-more-btn");let l=1,v=w(),L=0,b=null;const D=document.querySelector("#loader");async function V(e,t,s=null){const n={page:e,limit:t};s&&(n.categoryId=s);const{data:o}=await d.get("/api/animals",{params:n});return o}async function Le(){const{data:e}=await d.get("/api/categories");return e}function w(){return window.innerWidth>=1440?9:8}function be(){return l*v>=L}y.addEventListener("click",e=>{const t=e.target.closest(".more-btn");t&&j(t.dataset.id)});function _(e,t=!1){const s=e.map(({_id:n,image:o,species:r,name:a,categories:W,age:Y,gender:K,shortDescription:G})=>`
     <li class="pet-card" data-id="${n}">
  <img src="${o}" alt="${a}" class="pet-img"/>

  <div class="pet-content">
    <p class="pet-species">${r}</p>

    <h3 class="pet-name">${a}</h3>

    <ul class="category-tag-list">
      ${W.map(J=>`<li class="category-tag">${J.name}</li>`).join("")}
    </ul>

    <ul class="age-gender">
      <li class="pet-age">${Y}</li>
      <li class="pet-gender">${K}</li>
    </ul>

    <p class="pet-desc">${G??""}</p>
  </div>

  <button class="more-btn" data-id="${n}">
    Дізнатись більше
  </button>
</li>
    `).join("");t?y.insertAdjacentHTML("beforeend",s):y.innerHTML=s}function we(){D.classList.remove("hidden")}function Ee(){D.classList.add("hidden")}async function E(e=!1){try{we(),v=w();const t=await V(l,v,b);L=t.totalItems,_(t.animals,!e),z()}catch{f.error({title:"Помилка",message:"Не вдалося завантажити дані.",position:"topRight"})}finally{Ee()}}function z(){be()?h.classList.add("hidden"):h.classList.remove("hidden")}async function Se(){try{const e=await Le();qe(e),await E(!0)}catch{f.error({title:"Помилка",message:"Не вдалося завантажити дані.",position:"topRight"})}}Se();U.addEventListener("click",async e=>{const t=e.target.closest(".category-btn");t&&(document.querySelectorAll(".category-btn").forEach(s=>s.classList.remove("active")),t.classList.add("active"),l=1,b=t.dataset.categoryId||null,await E(!0))});h.addEventListener("click",async()=>{l+=1;const e=await V(l,w(),b);L=e.totalItems,_(e.animals,!0),z()});let B;window.addEventListener("resize",()=>{clearTimeout(B),B=setTimeout(()=>{l=1,E(!1)},300)});function qe(e){const t=`
    <li>
      <button
        class="category-btn active"
        data-category-id=""
      >
        Всі
      </button>
    </li>

    ${e.map(s=>`
          <li>
            <button
              class="category-btn"
              data-category-id="${s._id}"
            >
              ${s.name}
            </button>
          </li>
        `).join("")}
  `;U.innerHTML=t}
//# sourceMappingURL=index.js.map
