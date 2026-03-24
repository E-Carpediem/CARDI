const userListData = JSON.parse(localStorage.getItem('userList'));
const lectureListData = JSON.parse(localStorage.getItem('lectureList'));
const $totalLecture = document.querySelector(".tml-content-top-ct");

const fileterLecture = userListData.filter((sub) => sub.role === "lecturer");
const lecturefileterSub = userListData.filter((sub) => sub.membershipStatus === true);
const lecturefileterUnSub = userListData.filter((sub) => sub.membershipStatus === false);
const lectureCount = (id) => lectureListData.filter(sub => sub.id === id).length;

// 페이지네이션 코드는 Ai로 작성하였습니다. 코드 시작
let currentPage = 1;
let currentList = fileterLecture;
const ITEMS_PER_PAGE = 10;
const $paginationCt = document.querySelector('.tml-bottom-number');

function renderPagination(totalItems) {
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    $paginationCt.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const $page = document.createElement('p');
        $page.textContent = i;
        if (i === currentPage) $page.classList.add('tml-bottom-active-number');
        $page.addEventListener('click', () => {
            currentPage = i;
            lectureTotalManagement(currentList);
        });
        $paginationCt.appendChild($page);
    }
}
// 코드 끝

function managermoveNavPath(path) {
    window.location.href = window.location.origin + `${path}`
}

function lectureTotalManagement(arrayList) {
    document.querySelectorAll('.tml-content').forEach(el => el.remove());

    // 페이지네이션 코드 시작
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const pageItems = arrayList.slice(start, start + ITEMS_PER_PAGE);
    const pageMaxArray = pageItems.length;
    // 코드 끝

    for (let i = pageMaxArray - 1; i >= 0; i--) {
        $totalLecture.insertAdjacentHTML('afterend',
            `<div class="tml-content">
        <p> ${start + i + 1} </p>
        <p> ${pageItems[i].id} </p>
        <p class="tml-lecture-name" data-id=${pageItems[i].id}> ${pageItems[i].userName} </p>
        <p> ${pageItems[i].role === "student" ? "수강생" : "강사"} </p>
        <p> ${pageItems[i].phoneNumber} </p>
        <p> ${lectureCount(pageItems[i].id)}건</p>
        <p> ${pageItems[i].signDate} </p>
        <p> ${pageItems[i].membershipSignDate === null ? "-" : pageItems[i].membershipSignDate}</p>
        <p> ${pageItems[i].membershipStatus === true ? "등록" : "미등록"}</p>
        <p> ${pageItems[i].approvalStatus === true ? "승인" : "미승인"}</p>
        <p> <img src="/src/assets/img/manager-suppoting-document.svg"> </p>
    </div>`
        )

        const $userRoleColor = document.querySelector('.tml-content >p:nth-child(4)');
        const $userMembershipColor = document.querySelector('.tml-content >p:nth-child(9)');
        const $userApproveColor = document.querySelector('.tml-content >p:nth-child(10)');

        pageItems[i].role === "student" ? $userRoleColor.classList.add('tml-content-role-student') : $userRoleColor.classList.add('tml-content-role-lecture');
        pageItems[i].role === "student"
            ? (pageItems[i].subscriptionStatus === true ? $userMembershipColor.className += 'tml-content-memebership-student' : $userMembershipColor.className += 'tml-content-memebership-lecture')
            : (pageItems[i].membershipStatus === true ? $userMembershipColor.className += 'tml-content-memebership-student' : $userMembershipColor.className += 'tml-content-memebership-lecture');
        pageItems[i].approvalStatus === true ? $userApproveColor.className += 'tml-content-approve' : $userApproveColor.className += 'tml-content-unapprove';
    };

    const $lectureName = document.querySelectorAll('.tml-lecture-name');
    [...$lectureName].forEach((e) => {
        e.addEventListener("click", (id) => {
            managermoveNavPath(`/manager/lecturer-detail.html?id=${id.target.dataset.id}`);
        })
    });

    renderPagination(arrayList.length);
}

lectureTotalManagement(fileterLecture);

const $lecturefileterSub = document.querySelector('.m-fileter>p:nth-of-type(1)');
const $lecturefileterUnSub = document.querySelector('.m-fileter>p:nth-of-type(2)');
const $fileterSignDate = document.querySelector('.m-array>p:nth-of-type(1)');
const $fileterSort = document.querySelector('.m-array>p:nth-of-type(2)');

$lecturefileterSub.addEventListener('click', () => {
    currentPage = 1; currentList = lecturefileterSub;
    lectureTotalManagement(lecturefileterSub);
})

$lecturefileterUnSub.addEventListener('click', () => {
    currentPage = 1; currentList = lecturefileterUnSub;
    lectureTotalManagement(lecturefileterUnSub);
})

$fileterSignDate.addEventListener('click', () => {
    const fileterSignDate = [...fileterLecture].sort((a, b) =>
        b.signDate.localeCompare(a.signDate)
    );
    currentPage = 1; currentList = fileterSignDate;
    lectureTotalManagement(fileterSignDate);
});

$fileterSort.addEventListener('click', () => {
    const fileterSort = [...fileterLecture].sort((a, b) =>
        a.userName.localeCompare(b.userName)
    );
    currentPage = 1; currentList = fileterSort;
    lectureTotalManagement(fileterSort);
});