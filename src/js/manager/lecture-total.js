const contentsListData = JSON.parse(localStorage.getItem('lectureList'));

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
        <p> ${arrayList[i].userName}</p>
        <p> ${arrayList[i].classNumber}명 </p>
        <p> ${arrayList[i].lessonNumber}개 </p>
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
        a.contentTitle.localeCompare(b.contentTitle)
    );
    userTotalManagement(ArraySignDate);
});

$ArraySort.addEventListener('click', () => {
    const ArraySort = [...contentsListData].sort((a, b) =>
        a.userName.localeCompare(b.userName, 'ko')
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
    localStorage.setItem('lectureList', JSON.stringify(contentsListData));
    userTotalManagement(contentsListData);
}


const $userManagementCategory = document.querySelectorAll('.tm-user-management>p');
const $managerArray = document.querySelector('.manager-array-common');
const $managerFilter = document.querySelector('.manager-fileter-common');
const $managerArrayCt = document.querySelector('.m-array');
const $managerFilterCt = document.querySelector('.m-fileter');


$managerArray.addEventListener("click", () => {
    $managerArrayCt.style.display === "none" 
    ? $managerArrayCt.style.display = "flex" 
    : $managerArrayCt.style.display = "none"
})

$managerFilter.addEventListener("click", () => {
    $managerFilterCt.style.display === "none"
    ? $managerFilterCt.style.display = "flex"
    : $managerFilterCt.style.display = "none"
})