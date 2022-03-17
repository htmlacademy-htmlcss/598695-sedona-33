const link = document.querySelector('.search-button');
const modal = document.querySelector('.modal-container');
const close = document.querySelector('.modal-close-button');

if (link) {
  link.addEventListener('click', (item) => {
    item.preventDefault();
    modal.classList.add('modal-container-open');
  });

  close.addEventListener('click', (item) => {
    item.preventDefault();
    modal.classList.remove('modal-container-open');
  });
}
