const userList = JSON.parse(localStorage.getItem('userList'));
const userListLecture = JSON.parse(localStorage.getItem('lectureList'));

const $totalUser = document.querySelector(".tm-content-top-ct");
const userListData = userList.filter((sub) => sub.role != "manager");
const lectureCount = (id) => userListLecture.filter(sub => sub.id === id).length;
const arraySub = userList.filter((sub) => sub.subscriptionStatus === false);
const arrayUnSub = userList.filter((sub) => sub.subscriptionStatus === true);
const arrayMembership = userList.filter((sub) => sub.membershipStatus === true);
const arrayUnMembership = userList.filter((sub) => sub.membershipStatus === false);
const arraySignDate = userList.filter((sub) => sub.membershipStatus === false);

// 페이지네이션 코드는 AI 코드입니다. 시작지점
let currentPage = 1;
let currentList = userListData;
const ITEMS_PER_PAGE = 10;
const $paginationCt = document.querySelector('.tm-bottom-number');


function renderPagination(totalItems) {
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    $paginationCt.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const $page = document.createElement('p');
        $page.textContent = i;
        if (i === currentPage) {$page.classList.add('tm-bottom-active-number');
        }; 
        $page.addEventListener('click', () => {
            currentPage = i;
            userTotalManagement(currentList);
        });
        $paginationCt.appendChild($page);
    }
}
// 페이지 네이션 AI 코드 끝

function userTotalManagement(arrayList) {
    document.querySelectorAll('.tm-content').forEach(el => el.remove());

    // 페이지네이션 코드 시작
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const pageItems = arrayList.slice(start, start + ITEMS_PER_PAGE);
    const pageMaxArray = pageItems.length;
    // 끝

    for (let i = pageMaxArray - 1; i >= 0; i--) {
        $totalUser.insertAdjacentHTML('afterend',
            `<div class="tm-content">
        <p> ${start + i + 1} </p>
        <p> ${pageItems[i].id} </p>
        <p> ${pageItems[i].userName} </p>
        <p> ${pageItems[i].role === "student" ? "수강생" : "강사"} </p>
        <p> ${pageItems[i].phoneNumber} </p>
        <p>${pageItems[i].role === "student"
                ? pageItems[i].classCount
                : lectureCount(pageItems[i].id)}건</p>
        <p> ${pageItems[i].signDate} </p>
        <p> ${pageItems[i].role === "student"
                ? (pageItems[i].subscriptionSignDate === null ? "-" : pageItems[i].subscriptionSignDate)
                : (pageItems[i].membershipSignDate === null ? "-" : pageItems[i].membershipSignDate)}  </p>
        <p> ${pageItems[i].role === "student"
                ? (pageItems[i].subscriptionStatus === true ? "구독중" : "미구독")
                : (pageItems[i].membershipStatus === true ? "등록중" : "미등록")} </p>
    </div>`)

        const $userRoleColor = document.querySelector('.tm-content >p:nth-child(4)');
        const $userMembershipColor = document.querySelector('.tm-content >p:nth-child(9)');

        pageItems[i].role === "student" ? $userRoleColor.className += 'tm-content-role-student' : $userRoleColor.className += 'tm-content-role-lecture';
        pageItems[i].role === "student"
            ? (pageItems[i].subscriptionStatus === true ? $userMembershipColor.className += 'tm-content-memebership-student' : $userMembershipColor.className += 'tm-content-memebership-lecture')
            : (pageItems[i].membershipStatus === true ? $userMembershipColor.className += 'tm-content-memebership-student' : $userMembershipColor.className += 'tm-content-memebership-lecture');
    };

    renderPagination(arrayList.length);
}

userTotalManagement(userListData);

const $ArraySub = document.querySelector('.m-fileter>p:nth-of-type(1)');
const $ArrayMembership = document.querySelector('.m-fileter>p:nth-of-type(2)');
const $ArrayUnSub = document.querySelector('.m-fileter>p:nth-of-type(3)');
const $ArrayUnMembership = document.querySelector('.m-fileter>p:nth-of-type(4)');
const $ArraySignDate = document.querySelector('.m-array>p:nth-of-type(1)');
const $ArraySort = document.querySelector('.m-array>p:nth-of-type(2)');

$ArraySub.addEventListener('click', () => {
    currentPage = 1; currentList = arraySub;
    userTotalManagement(arraySub);
})

$ArrayUnSub.addEventListener('click', () => {
    currentPage = 1; currentList = arrayUnSub;
    userTotalManagement(arrayUnSub);
})

$ArrayMembership.addEventListener('click', () => {
    currentPage = 1; currentList = arrayMembership;
    userTotalManagement(arrayMembership);
})

$ArrayUnMembership.addEventListener('click', () => {
    currentPage = 1; currentList = arrayUnMembership;
    userTotalManagement(arrayUnMembership);
})

$ArraySignDate.addEventListener('click', () => {
    const ArraySignDate = [...userListData].sort((a, b) =>
        b.signDate.localeCompare(a.signDate)
    );
    currentPage = 1; currentList = ArraySignDate;
    userTotalManagement(ArraySignDate);
});

$ArraySort.addEventListener('click', () => {
    const ArraySort = [...userListData].sort((a, b) =>
        a.userName.localeCompare(b.userName, 'ko')
    );
    currentPage = 1; currentList = ArraySort;
    userTotalManagement(ArraySort);
});