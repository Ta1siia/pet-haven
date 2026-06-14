
const footerLogo = document.querySelector('.footer-logo-block');

if (footerLogo) {
  footerLogo.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}


const footerLinks = document.querySelectorAll('.footer-link-item');

footerLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    
    
    if (href.startsWith('http') || href.startsWith('//') || !href.includes('#')) {
      return;
    }

    e.preventDefault();
    
    const targetId = href.replace(/.*#/, '');
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else {

      window.location.href = href;
    }
  });
});


function updateActiveFooterLink() {
  const sections = document.querySelectorAll(
    '[class^="hero"], [class^="about"], [class^="pets"], [class^="faq"], [class^="success"]'
  );

  let currentSection = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop - 200 && window.scrollY < sectionTop + sectionHeight - 200) {
      currentSection = section.className.split(' ')[0];
    }
  });


  footerLinks.forEach((link) => {
    link.classList.remove('active');
    if (currentSection && link.textContent.toLowerCase().includes(currentSection.toLowerCase())) {
      link.classList.add('active');
    }
  });
}


window.addEventListener('scroll', updateActiveFooterLink);


updateActiveFooterLink();// Сюди пишемо імпорти
import./ js / footer.js;

