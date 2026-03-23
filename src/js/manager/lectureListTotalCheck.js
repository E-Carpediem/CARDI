// localStorage.setItem('contentsList', JSON.stringify(contentsList));
const contentsListData = JSON.parse(localStorage.getItem('contentsList'));

const $totalContents = document.querySelector(".tc-content-top-ct");

function userTotalManagement(arrayList) {
    document.querySelectorAll('.tc-content').forEach(el => el.remove());
    const pageMaxArray = arrayList.length < 10 ? arrayList.length : 10;
    // 페이지네이션 관련 코드입니다. 추후 추가될 예정입니다.

    // const userTotalPagination = Math.ceil(arrayList.length / 10);
    // const usPaginationCurrentPage = 1;
    for (let i = pageMaxArray - 1; i >= 0; i--) {
        $totalContents.insertAdjacentHTML('afterend',
            `<div class="tc-content">
        <p> ${i + 1} </p>
        <p> ${arrayList[i].contentId} </p>
        <p> ${arrayList[i].contentTitle} </p>
        <p> ${arrayList[i].instructorName}</p>
        <p> ${arrayList[i].studentNumber}명 </p>
        <p> ${arrayList[i].lessonsNumber}개 </p>
        <p> ${arrayList[i].registerDate} </p>
        <p data-id="${arrayList[i].contentId}"> 삭제하기 </p>
    </div>`)

    };

    lectureContentsDelete();

}

userTotalManagement(contentsListData);
const $ArraySignDate = document.querySelector('.m-array>p:nth-of-type(1)');
const $ArraySort = document.querySelector('.m-array>p:nth-of-type(2)');

$ArraySignDate.addEventListener('click', () => {
    const ArraySignDate = [...contentsListData].sort((a, b) =>
        b.contentTitle.localeCompare(a.signDate)
    );
    userTotalManagement(ArraySignDate);
});

$ArraySort.addEventListener('click', () => {
    const ArraySort = [...contentsListData].sort((a, b) =>
        b.instructorName.localeCompare(b.userName, 'ko')
    );
    userTotalManagement(ArraySort);
});


function lectureContentsDelete() {
    const $btns = document.querySelectorAll(".tc-content > p:nth-child(8)");
    const defaultMessage = `
    삭제하시겠습니까?<br>
    삭제 후엔 되돌릴 수 없습니다.
`;

    $btns.forEach(($btn) => {
        $btn.addEventListener('click', () => {
            const selectContentId = $btn.dataset.id;

            const moveUrl = $btn.dataset.url;
            const message = $btn.dataset.message || defaultMessage;

            document.querySelector('.active-modal').innerHTML = `
        <div class="modal" data-url="${moveUrl}">
            <div class="modal-container">
                <div class="modal-top">
                    ${message}
                </div>
                <div class="modal-bottom">
                    <div class="modal-box modal-close">취소</div>
                    <div class="modal-box modal-check">확인</div>
                </div>
            </div>
        </div>`;

            const $modal = document.querySelector(".modal");
            $modal.style.display = 'flex';

            $modal.querySelector('.modal-close').addEventListener('click', () => closeModal($modal));

            $modal.addEventListener('click', (e) => {
                if (e.target === $modal) closeModal($modal);
            });

            $modal.querySelector('.modal-check').addEventListener('click', (e) => {
                console.log(selectContentId);
                deleteContents(selectContentId);
                $modal.style.display = 'none';
            });
        });
    });


    function closeModal(modal) {
        modal.style.display = 'none';
        if (modal.querySelectorAll("form")) {
            modal.querySelectorAll("form").forEach((form) => {
                form.reset();
            });
        }
    }
}

function deleteContents() {
    const targetIndex = contentsListData.findIndex(item => {
        return item.contentId;
    });
    let a = contentsListData.splice(targetIndex, 1);
    localStorage.setItem('contentsList', JSON.stringify(contentsListData));
    userTotalManagement(contentsListData);
}
