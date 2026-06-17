
const DESKTOP_WIDTH = 1440;
const MOBILE_TABLET_LIMIT = 8;
const DESKTOP_LIMIT = 9;


export function getItemsPerPage() {
  return window.innerWidth >= DESKTOP_WIDTH
    ? DESKTOP_LIMIT
    : MOBILE_TABLET_LIMIT;
}

export let perPage = getItemsPerPage();
export let totalPages = 1;


export function updateActiveCategory(activeButton) {
  const buttons = document.querySelectorAll('.category-btn');

  buttons.forEach(button => button.classList.remove('is-active'));
  activeButton.classList.add('is-active');
}





