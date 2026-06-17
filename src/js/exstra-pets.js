const DESKTOP_WIDTH = 1440;
const MOBILE_TABLET_LIMIT = 8;
const DESKTOP_LIMIT = 9;

export function getItemsPerPage() {
  return window.innerWidth >= DESKTOP_WIDTH
    ? DESKTOP_LIMIT
    : MOBILE_TABLET_LIMIT;
}

export function isEndOfList(page, limit, totalItems) {
  return page * limit >= totalItems;
}

export function updateActiveCategory(activeButton) {
  document
    .querySelectorAll('.category-btn')
    .forEach(button => button.classList.remove('active'));

  activeButton.classList.add('active');
}
