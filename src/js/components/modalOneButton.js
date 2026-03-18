const $btn = document.querySelector(".modal-open-btn");
const $modal = document.querySelector(".modal");

$btn.addEventListener('click', (e) => {
    $modal.style.display = 'flex';
})

document.querySelectorAll('.modal').forEach((modal) => {
  modal.querySelector('.modal-check').addEventListener('click', () => movePage(modal));
});

function movePage(modal) {
    window.location.href = modal.dataset.url;
}