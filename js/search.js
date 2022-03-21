const searchForm = document.querySelector('#search-form');
const searchInput = searchForm.querySelector('input');
const searchBtn = searchForm.querySelector('button');

function onSubmit(e) {
  e.preventDefault();
  search();
  searchInput.value = '';
}

function showInput() {
  searchInput.classList.add('visible');
}

function search() {
  const q = searchInput.value;
  window.open(`http://google.com/search?q=${q}`);
}

searchForm.addEventListener('submit', onSubmit);

searchBtn.addEventListener('click', showInput);
