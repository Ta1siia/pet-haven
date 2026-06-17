
const DESKTOP_WIDTH = 1440;
const MOBILE_TABLET_LIMIT = 8;
const DESKTOP_LIMIT = 9;


function getItemsPerPage() {
  return window.innerWidth >= DESKTOP_WIDTH
    ? DESKTOP_LIMIT
    : MOBILE_TABLET_LIMIT;
}


function updateActiveCategory(activeButton) {
  const buttons = document.querySelectorAll('.category-btn');

  buttons.forEach(button => button.classList.remove('is-active'));
  activeButton.classList.add('is-active');
} 


async function initPetsSection() {
  const categories = await fetchCategories();

  categoriesList.innerHTML = createCategoriesMarkup(categories);

  categoriesList.addEventListener('click', onCategoryClick);
  loadMoreBtn.addEventListener('click', onLoadMoreClick);

  await renderAnimals(currentCategory, currentPage);
}

initPetsSection();

