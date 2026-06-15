const burgerBtn = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.mobile-menu-close');
const mobileLinks = document.querySelectorAll(
  '.mobile-nav a, .mobile-menu-button'
);

if (burgerBtn && mobileMenu && closeBtn) {
  const openMenu = () => {
    mobileMenu.classList.add('is-open');
  };

  const closeMenu = () => {
    mobileMenu.classList.remove('is-open');
  };

  burgerBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
      closeMenu();
    }
  });

  mobileMenu.addEventListener('click', event => {
    if (event.target === mobileMenu) {
      closeMenu();
    }
  });
}