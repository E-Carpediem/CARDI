const $btn = document.querySelector(".modal-open-btn");
const $modal = document.querySelector(".modal");

$btn.addEventListener('click', (e) => {
    $modal.style.display = 'flex';
})

document.querySelectorAll('.modal').forEach((modal) => {
    modal.querySelector('.modal-close').addEventListener('click', () => closeModal(modal));
    modal.addEventListener('click', (e) => {
        e.target === modal && closeModal(modal);
    })
    modal.querySelector('.modal-check').addEventListener('click', () => movePage(modal));
});

function movePage(modal) {
    window.location.href = modal.dataset.url;
}

function closeModal(modal) {
    modal.style.display = 'none';
    if (modal.querySelectorAll("form")) {
        modal.querySelectorAll("form").forEach((form) => {
            form.reset();
        });
    }
}