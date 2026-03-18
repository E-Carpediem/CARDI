const $btn = document.querySelector(".modal-open-one-btn");

$btn.addEventListener('click', (e) => {
    document.querySelector('.active-modal').innerHTML = `
    <div class="modal" data-url="">
        <div class="modal-container">
            <div class="modal-top">
                확인되었습니다.
            </div>
            <div class="modal-bottom modal-check" id="modal-check1">확인</div>
        </div>
    </div>`;

    const $modal = document.querySelector(".modal");
    $modal.style.display = 'flex';
    document.querySelectorAll('.modal').forEach((modal) => {
        modal.querySelector('.modal-check').addEventListener('click', () => movePage(modal));
    });
})

function movePage(modal) {
    window.location.href = modal.dataset.url;
}