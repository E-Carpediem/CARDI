const $btn = document.querySelector(".modal-open-two-btn");

$btn.addEventListener('click', (e) => {
    document.querySelector('.active-modal').innerHTML = `
    <div class="modal" data-url="">
        <div class="modal-container">
            <div class="modal-top">
                삭제하시겠습니까?<br>
                삭제 후엔 되돌릴 수 없습니다.
            </div>
            <div class="modal-bottom">
                <div class="modal-box modal-close" id="modal-close">취소</div>
                <div class="modal-box modal-check" id="modal-check">확인</div>
            </div>
        </div>
    </div>`;

    const $modal = document.querySelector(".modal");
    $modal.style.display = 'flex';
    document.querySelectorAll('.modal').forEach((modal) => {
        modal.querySelector('.modal-close').addEventListener('click', () => closeModal(modal));
        modal.addEventListener('click', (e) => {
            e.target === modal && closeModal(modal);
        })
        modal.querySelector('.modal-check').addEventListener('click', () => movePage(modal));
    });
})

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