const contentsListData = JSON.parse(localStorage.getItem('lectureList'));
const contentsUserListData = JSON.parse(localStorage.getItem('userList'));

const getParams = new URLSearchParams(window.location.search);
const lecturerId = Number(getParams.get('id'));

const lectureList = contentsListData.filter((sub) => sub.id === lecturerId);
// console.log(lectureList)
const $totalContents = document.querySelector(".tmm-lector-content-top-ct");
const $lectureInf = document.querySelector(".tmm-lecture-inf");
const $lectureInfProfile = document.querySelector(".tmm-lecture-inf-profile");
const $lectorMainLecture = document.querySelector(".tmm-lector-main-lecture");
const $lectorProfileImage = document.querySelector(".tmm-lecture-inf-profile");

const $lectorProfileDate = contentsUserListData.find(user => user.id === lecturerId).userProfile;
$lectorProfileImage.style.backgroundImage = `url(${$lectorProfileDate})`;

// 페이지네이션 코드는 AI로 작성하였습니다. 코드 시작
let currentPage = 1;
let currentList = lectureList;
const ITEMS_PER_PAGE = 10;

const $paginationCt = document.querySelector('.tmm-lector-bottom-number');

function renderPagination(totalItems) {
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    $paginationCt.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const $page = document.createElement('p');
        $page.textContent = i;
        if (i === currentPage) $page.classList.add('tmm-lector-active-bottom-number');
        $page.addEventListener('click', () => {
            currentPage = i;
            userTotalManagement(currentList);
        });
        $paginationCt.appendChild($page);
    }
    // 코드 끝
}

const lecturerInfo = contentsUserListData.find(user => user.id === lecturerId);

function lectureMainLectures() {
    $lectorMainLecture.innerHTML = '';
    const mainLectures = lectureList.slice(0, 4);

    mainLectures.forEach((lecture) => {
        $lectorMainLecture.insertAdjacentHTML('beforeend',
            `<div class="tmm-lector-lecture">
                <div class="tmm-lector-backImg"></div>
                <div class="tmm-lector-category">${lecture.category}</div>
                <div class="tmm-lector-lecture-coment-ct">
                    <p class="tmm-lector-lecture-title">${lecture.contentTitle}</p>
                    <p class="tmm-lector-oneline-example">${lecture.contentPreview}</p>
                </div>
            </div>`
        );
    });
}



function userTotalManagement(arrayList) {
    document.querySelectorAll('.tmm-lecture-inf-content').forEach(el => el.remove());
    $lectureInfProfile.insertAdjacentHTML("beforebegin",
        `<div class="tmm-lecture-inf-content">
            <p> ${contentsUserListData.find(user => user.id === lecturerId).approvalStatus === true ? "승인" : "미승인"}</p>
            <p> 강사정보 </p>
            <p> 강사명 : ${contentsUserListData.find(user => user.id === lecturerId).userName} </p>
            <p> 가입 일자 : ${contentsUserListData.find(user => user.id === lecturerId).signDate}</p>
            <p> 전화번호 : ${contentsUserListData.find(user => user.id === lecturerId).phoneNumber}</p>
            <p> 이메일 : ${contentsUserListData.find(user => user.id === lecturerId).userEmail}</p>
        </div>`)

    document.querySelectorAll('.tmm-lector-content').forEach(el => el.remove());

    // 페이지네이션 코드 시작
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const pageItems = arrayList.slice(start, start + ITEMS_PER_PAGE);
    const pageMaxArray = pageItems.length;
    // 코드 끝 

    for (let i = pageMaxArray - 1; i >= 0; i--) {
        $totalContents.insertAdjacentHTML('afterend',
            `<div class="tmm-lector-content">
        <p> ${start + i + 1} </p>
        <p> ${pageItems[i].contentId} </p>
        <p> ${pageItems[i].contentTitle} </p>
        <p> ${pageItems[i].classNumber}명 </p>
        <p> ${pageItems[i].lessonNumber}개 </p>
        <p> ${pageItems[i].registerDate} </p>
        <p data-id="${pageItems[i].contentId}"> 삭제하기 </p>
    </div>`)
    };

    lectureContentsDelete();
    renderPagination(arrayList.length);
}

lectureMainLectures();
userTotalManagement(lectureList);

const $ArraySignDate = document.querySelector('.m-array>p:nth-of-type(1)');
const $ArraySort = document.querySelector('.m-array>p:nth-of-type(2)');

$ArraySignDate.addEventListener('click', () => {
    const ArraySignDate = [...contentsListData].sort((a, b) =>
        b.contentTitle.localeCompare(a.signDate)
    );
    currentPage = 1;
    currentList = ArraySignDate;
    userTotalManagement(ArraySignDate);
});

$ArraySort.addEventListener('click', () => {
    const ArraySort = [...contentsListData].sort((a, b) =>
        b.instructorName.localeCompare(b.userName, 'ko')
    );
    currentPage = 1;
    currentList = ArraySort;
    userTotalManagement(ArraySort);
});

function lectureContentsDelete() {
    const $btns = document.querySelectorAll(".tmm-lector-content > p:nth-child(7)");
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

function deleteContents(contentId) {
    console.log('삭제 요청 contentId:', contentId);
    const targetIndex = contentsListData.findIndex(item => String(item.contentId) === contentId);
    contentsListData.splice(targetIndex, 1);
    localStorage.setItem('lectureList', JSON.stringify(contentsListData));
    const LectureList = contentsListData.filter(sub => sub.id === lecturerId);
    const totalPages = Math.ceil(LectureList.length / ITEMS_PER_PAGE);
    if (currentPage > totalPages) currentPage = totalPages || 1;
    currentList = LectureList;

    lectureMainLectures()
    userTotalManagement(LectureList);
}

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


const lectureImg = document.querySelectorAll('.tmm-lector-backImg');


for (let i = 0; i < 4; i++) {
    lectureImg[i].style.backgroundImage = `url(${lectureList[i].contentImg})`;
}