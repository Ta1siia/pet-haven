const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const button = item.querySelector('.faq-question');

  button.addEventListener('click', () => {
   
    faqItems.forEach(otherItem => {
      if (otherItem !== item && otherItem.classList.contains('is-open')) {
        otherItem.classList.remove('is-open');
      }
    });

   
    item.classList.toggle('is-open');
  });
});
