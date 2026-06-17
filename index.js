import{a as d,S as E,b as M,N as I,P as T,i as b}from"./assets/vendor-ywjDFpsV.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const S=document.querySelectorAll(".faq-item");S.forEach(e=>{e.querySelector(".faq-question").addEventListener("click",()=>{S.forEach(s=>{s!==e&&s.classList.contains("is-open")&&s.classList.remove("is-open")}),e.classList.toggle("is-open")})});const q=document.querySelector(".burger"),a=document.querySelector(".mobile-menu"),k=document.querySelector(".mobile-menu-close"),Y=document.querySelectorAll(".mobile-nav a, .mobile-menu-button");if(q&&a&&k){const e=()=>{a.classList.add("is-open")},t=()=>{a.classList.remove("is-open")};q.addEventListener("click",e),k.addEventListener("click",t),Y.forEach(s=>{s.addEventListener("click",t)}),document.addEventListener("keydown",s=>{s.key==="Escape"&&a.classList.contains("is-open")&&t()}),a.addEventListener("click",s=>{s.target===a&&t()})}const l=document.querySelector(".order-modal-backdrop");document.querySelector(".order-modal");const z=document.querySelector(".close-btn"),c=document.querySelector(".order-modal form");let B=null;function G(e){B=typeof e=="object"?e._id:e,l.classList.add("is-open"),document.body.style.overflow="hidden"}function f(){l.classList.remove("is-open"),document.body.style.overflow="",c.reset(),C()}z.addEventListener("click",f);l.addEventListener("click",e=>{e.target===l&&f()});document.addEventListener("keydown",e=>{e.key==="Escape"&&l.classList.contains("is-open")&&f()});function C(){c.querySelectorAll(".input, .textarea").forEach(e=>e.classList.remove("error")),c.querySelectorAll(".error-text").forEach(e=>e.remove())}function $(e,t){e.classList.add("error");const s=document.createElement("p");s.className="error-text",s.textContent=t,e.insertAdjacentElement("afterend",s)}function J(e){C();let t=!0;const s=c.querySelector("#name"),n=c.querySelector("#tel");return e.name.trim()||($(s,"Введіть ім'я"),t=!1),/^[0-9]{12}$/.test(e.phone.trim())||($(n,"Введіть коректний номер телефону"),t=!1),t}c.addEventListener("submit",async e=>{var n;e.preventDefault();const t=new FormData(c),s={name:t.get("name").trim(),phone:t.get("tel").trim(),animalId:String(B),comment:((n=t.get("comment"))==null?void 0:n.trim())||"Без коментаря"};if(J(s))try{await d.post("https://paw-hut.b.goit.study/api/orders",s),E.fire({icon:"success",title:"Заявку відправлено!",text:"Дякуємо, ми скоро з вами зв'яжемось."}),f()}catch{E.fire({icon:"error",title:"Помилка",text:"Не вдалося відправити заявку. Спробуйте ще раз."})}});const A=document.querySelector(".footer-logo-block");A&&A.addEventListener("click",e=>{e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})});const P=document.querySelectorAll(".footer-link-item");P.forEach(e=>{e.addEventListener("click",t=>{const s=e.getAttribute("href");if(s.startsWith("http")||s.startsWith("//")||!s.includes("#"))return;t.preventDefault();const n=s.replace(/.*#/,""),o=document.getElementById(n);o?o.scrollIntoView({behavior:"smooth",block:"start"}):window.location.href=s})});function Q(){const e=document.querySelectorAll('[class^="hero"], [class^="about"], [class^="pets"], [class^="faq"], [class^="success"]');let t="";e.forEach(s=>{const n=s.offsetTop,o=s.clientHeight;window.scrollY>=n-200&&window.scrollY<n+o-200&&(t=s.className.split(" ")[0])}),P.forEach(s=>{s.classList.remove("active"),t&&s.textContent.toLowerCase().includes(t.toLowerCase())&&s.classList.add("active")})}window.addEventListener("scroll",Q);new M(".about-swiper",{modules:[I,T],slidesPerView:1,navigation:{nextEl:".about-next",prevEl:".about-prev"},pagination:{el:".about-us-swiper-pagination"}});const m=document.querySelector("#animal-modal");document.querySelector(".modal");const X=document.querySelector(".modal-close"),Z=document.querySelector(".btn-adopt"),x=document.querySelector(".animal-img"),ee=document.querySelector(".animal-type"),te=document.querySelector(".animal-name"),se=document.querySelector(".animal-age"),oe=document.querySelector(".animal-gender"),ne=document.querySelector(".animal-description"),re=document.querySelector(".animal-health"),ce=document.querySelector(".animal-behavior");let O=null;function ie(e){x.src=e.image||"",x.alt=e.name||"Фото тварини",ee.textContent=e.species||"",te.textContent=e.name||"",se.textContent=e.age||"Невідомий вік",oe.textContent=e.gender||"Невідома стать",ne.textContent=e.description||e.shortDescription||"Опис відсутній",re.textContent=e.healthStatus||"Інформація відсутня",ce.textContent=e.behavior||"Інформація відсутня"}function ae(e){O=e,ie(e),m.classList.remove("is-hidden"),document.body.style.overflow="hidden",document.addEventListener("keydown",D)}function p(){m.classList.add("is-hidden"),document.body.style.overflow="",document.removeEventListener("keydown",D)}function D(e){e.key==="Escape"&&p()}X.addEventListener("click",p);m.addEventListener("click",e=>{e.target===m&&p()});Z.addEventListener("click",()=>{p(),G(O)});const le="/pet-haven/assets/icons-CgUhUynE.svg",de="https://paw-hut.b.goit.study";async function ue(){return(await d.get(`${de}/api/feedbacks?limit=6`)).data.feedbacks}const j=document.querySelector(".success-stories-list");function me(e){const t=Math.floor(e),s=e%1===.5;return`<div class="success-stories-review-stars">
    ${Array(5).fill(null).map((n,o)=>{let r;return o<t?r="icon-star-filled":o===t&&s?r="icon-star-half":r="icon-star-outline",`<svg width="20" height="20"><use href="${le}#${r}"></use></svg>`}).join("")}
  </div>`}function fe(e){const t=e.map(({author:s,rate:n,description:o})=>`
        <li class="swiper-slide success-stories-review-card">
          ${me(n)}
          <p class="success-stories-review-text">${o}</p>
          <p class="success-stories-review-author">${s}</p>
        </li>`).join("");j.innerHTML=t}async function pe(){const e=document.createElement("div");e.classList.add("loader","is-visible");try{j.after(e);const t=await ue();fe(t),new M(".success-stories-swiper",{modules:[I,T],slidesPerView:1,spaceBetween:32,dynamicBullets:!0,navigation:{nextEl:".success-stories-button-next",prevEl:".success-stories-button-prev"},pagination:{el:".success-stories-pagination",clickable:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:32},1440:{slidesPerView:2,spaceBetween:32}}})}catch{b.error({title:"Помилка",message:"Не вийшло завантажити відгуки"})}finally{e.remove()}}pe();const ye=1440,ge=8,ve=9;function H(){return window.innerWidth>=ye?ve:ge}function he(e,t,s){return e*t>=s}function be(e){document.querySelectorAll(".category-btn").forEach(t=>t.classList.remove("active")),e.classList.add("active")}d.defaults.baseURL="https://paw-hut.b.goit.study";const y=document.querySelector("#pets-list"),N=document.querySelector(".categories-list"),g=document.querySelector("#load-more-btn");let u=1,v=H(),_=0,L=null,h=[];const F=document.querySelector("#pets-loader");async function Le(e,t,s=null){const n={page:e,limit:t};s&&(n.categoryId=s);const{data:o}=await d.get("/api/animals",{params:n});return o}async function we(){const{data:e}=await d.get("/api/categories");return e}y.addEventListener("click",e=>{const t=e.target.closest(".more-btn");if(!t)return;const s=h.find(n=>n._id===t.dataset.id);s&&ae(s)});function Ee(e,t=!1){const s=e.map(({_id:n,image:o,species:r,name:i,categories:V,age:U,gender:R,shortDescription:W})=>`
     <li class="pet-card" data-id="${n}">
  <img src="${o}" alt="${i}" class="pet-img"/>

  <div class="pet-content">
    <p class="pet-species">${r}</p>

    <h3 class="pet-name">${i}</h3>

    <ul class="category-tag-list">
      ${V.map(K=>`<li class="category-tag">${K.name}</li>`).join("")}
    </ul>

    <ul class="age-gender">
      <li class="pet-age">${U}</li>
      <li class="pet-gender">${R}</li>
    </ul>

    <p class="pet-desc">${W??""}</p>
  </div>

  <button class="more-btn" data-id="${n}">
    Дізнатись більше
  </button>
</li>
    `).join("");t?y.insertAdjacentHTML("beforeend",s):y.innerHTML=s}function Se(){F.classList.add("is-visible")}function qe(){F.classList.remove("is-visible")}async function w(e=!1){try{Se(),v=H();const t=await Le(u,v,L);_=t.totalItems,e?h=t.animals:h.push(...t.animals),Ee(t.animals,!e),ke()}catch{b.error({title:"Помилка",message:"Не вдалося завантажити дані.",position:"topRight"})}finally{qe()}}function ke(){he(u,v,_)?g.classList.add("hidden"):g.classList.remove("hidden")}async function $e(){try{const e=await we();Ae(e),u=1,L=null,await w(!0)}catch{b.error({title:"Помилка",message:"Не вдалося завантажити дані.",position:"topRight"})}}$e();N.addEventListener("click",async e=>{const t=e.target.closest(".category-btn");t&&(be(t),u=1,L=t.dataset.categoryId||null,await w(!0))});g.addEventListener("click",async()=>{u+=1,await w(!1)});function Ae(e){const t=`
    <li>
      <button
        class="category-btn active"
        data-category-id=""
        type="button"
      >
        Всі
      </button>
    </li>

    ${e.map(s=>`
          <li>
            <button
              class="category-btn"
              data-category-id="${s._id}"
              type="button"
            >
              ${s.name}
            </button>
          </li>
        `).join("")}
  `;N.innerHTML=t}
//# sourceMappingURL=index.js.map
