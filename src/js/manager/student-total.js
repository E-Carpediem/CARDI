const userListData = JSON.parse(localStorage.getItem('userList'));
const $totalStudent = document.querySelector(".tms-content-top-ct");

const fileterStudent = userListData.filter((sub) => sub.role === "student");
const studentFileterSub = userListData.filter((sub) => sub.subscriptionStatus === true);
const studentFileterUnSub = userListData.filter((sub) => sub.subscriptionStatus === false);

// 페이지네이션 코드는 AI로 작성하셨습니다. 코드 시작
let currentPage = 1;
let currentList = fileterStudent;
const ITEMS_PER_PAGE = 10;
const $paginationCt = document.querySelector('.tms-bottom-number');

function renderPagination(totalItems) {
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    $paginationCt.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const $page = document.createElement('p');
        $page.textContent = i;
        if (i === currentPage) $page.classList.add('tms-bottom-active-number');
        $page.addEventListener('click', () => {
            currentPage = i;
            studentTotalManagement(currentList);
        });
        $paginationCt.appendChild($page);
    }
}
// 코드 끝

function studentTotalManagement(arrayList) {
    document.querySelectorAll('.tms-content').forEach(el => el.remove());

    // 페이지네이션 코드 시작
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const pageItems = arrayList.slice(start, start + ITEMS_PER_PAGE);
    const pageMaxArray = pageItems.length;
    // 코드 끝

    for (let i = pageMaxArray - 1; i >= 0; i--) {
        $totalStudent.insertAdjacentHTML('afterend',
            `<div class="tms-content">
        <p> ${start + i + 1} </p>
        <p> ${pageItems[i].id} </p>
        <p> ${pageItems[i].userName} </p>
        <p> ${pageItems[i].role === "student" ? "수강생" : "강사"} </p>
        <p> ${pageItems[i].phoneNumber} </p>
        <p> ${pageItems[i].classCount}건 </p>
        <p> ${pageItems[i].signDate} </p>
        <p> ${pageItems[i].subscriptionSignDate === null ? "-" : pageItems[i].subscriptionSignDate}  </p>
        <p> ${pageItems[i].subscriptionStatus === true ? "구독중" : "미구독"} </p>
    </div>`)

        const $userRoleColor = document.querySelector('.tms-content >p:nth-child(4)');
        const $userMembershipColor = document.querySelector('.tms-content >p:nth-child(9)');

        pageItems[i].role === "student" ? $userRoleColor.className += 'tms-content-role-student' : $userRoleColor.className += 'tms-content-role-lecture';
        pageItems[i].role === "student"
            ? (pageItems[i].subscriptionStatus === true ? $userMembershipColor.className += 'tms-content-memebership-student' : $userMembershipColor.className += 'tms-content-memebership-lecture')
            : (pageItems[i].membershipStatus === true ? $userMembershipColor.className += 'tms-content-memebership-student' : $userMembershipColor.className += 'tms-content-memebership-lecture');
    };

    renderPagination(arrayList.length);
}

studentTotalManagement(fileterStudent);

const $studentFileterSub = document.querySelector('.m-fileter>p:nth-of-type(1)');
const $studentFileterUnSub = document.querySelector('.m-fileter>p:nth-of-type(2)');
const $ArraySignDate = document.querySelector('.m-array>p:nth-of-type(1)');
const $ArraySort = document.querySelector('.m-array>p:nth-of-type(2)');

$studentFileterSub.addEventListener('click', () => {
    currentPage = 1; currentList = studentFileterSub;
    studentTotalManagement(studentFileterSub);
})

$studentFileterUnSub.addEventListener('click', () => {
    currentPage = 1; currentList = studentFileterUnSub;
    studentTotalManagement(studentFileterUnSub);
})

$ArraySignDate.addEventListener('click', () => {
    const ArraySignDate = [...fileterStudent].sort((a, b) =>
        b.signDate.localeCompare(a.signDate)
    );
    currentPage = 1; currentList = ArraySignDate;
    studentTotalManagement(ArraySignDate);
});

$ArraySort.addEventListener('click', () => {
    const ArraySort = [...fileterStudent].sort((a, b) =>
        a.userName.localeCompare(b.userName)
    );
    currentPage = 1; currentList = ArraySort;
    studentTotalManagement(ArraySort);
});