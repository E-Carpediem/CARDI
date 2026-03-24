const userListData = JSON.parse(localStorage.getItem('userList'));
const $totalStudent = document.querySelector(".tms-content-top-ct");

const fileterStudent = userListData.filter((sub) => sub.role === "student");
const studentFileterSub = userListData.filter((sub) => sub.subscriptionStatus === true);
const studentFileterUnSub = userListData.filter((sub) => sub.subscriptionStatus === false);

function studentTotalManagement(arrayList) {
    document.querySelectorAll('.tms-content').forEach(el => el.remove());
    const pageMaxArray = arrayList.length < 10 ? arrayList.length : 10;
    // 페이지네이션 관련 코드입니다. 추후 추가될 예정입니다.

    // const userTotalPagination = Math.ceil(arrayList.length / 10);
    // const usPaginationCurrentPage = 1;
    for (let i = pageMaxArray - 1; i >= 0; i--) {
        $totalStudent.insertAdjacentHTML('afterend',
            `<div class="tms-content">
        <p> ${i + 1} </p>
        <p> ${arrayList[i].id} </p>
        <p> ${arrayList[i].userName} </p>
        <p> ${arrayList[i].role === "student" ? "수강생" : "강사"} </p>
        <p> ${arrayList[i].phoneNumber} </p>
        <p> ${arrayList[i].classCount}건 </p>
        <p> ${arrayList[i].signDate} </p>
        <p> ${arrayList[i].subscriptionSignDate === null ? "-" : arrayList[i].subscriptionSignDate}  </p>
        <p> ${arrayList[i].subscriptionStatus === true ? "구독중" : "미구독"} </p>
    </div>`)

        const $userRoleColor = document.querySelector('.tms-content >p:nth-child(4)');
        const $userMembershipColor = document.querySelector('.tms-content >p:nth-child(9)');

        arrayList[i].role === "student" ? $userRoleColor.className += 'tms-content-role-student' : $userRoleColor.className += 'tms-content-role-lecture';
        arrayList[i].role === "student"
            ? (arrayList[i].subscriptionStatus === true ? $userMembershipColor.className += 'tms-content-memebership-student' : $userMembershipColor.className += 'tms-content-memebership-lecture')
            : (arrayList[i].membershipStatus === true ? $userMembershipColor.className += 'tms-content-memebership-student' : $userMembershipColor.className += 'tms-content-memebership-lecture');

    };

}

studentTotalManagement(fileterStudent);
const $studentFileterSub = document.querySelector('.m-fileter>p:nth-of-type(1)');
const $studentFileterUnSub = document.querySelector('.m-fileter>p:nth-of-type(2)');
const $ArraySignDate = document.querySelector('.m-array>p:nth-of-type(1)');
const $ArraySort = document.querySelector('.m-array>p:nth-of-type(2)');


$studentFileterSub.addEventListener('click', () => {
    studentTotalManagement(studentFileterSub);
})

$studentFileterUnSub.addEventListener('click', () => {
    studentTotalManagement(studentFileterUnSub);
})

$ArraySignDate.addEventListener('click', () => {
    const ArraySignDate = [...fileterStudent].sort((a, b) =>
        b.signDate.localeCompare(a.signDate)
    );
    studentTotalManagement(ArraySignDate);
});

$ArraySort.addEventListener('click', () => {
    const ArraySort = [...fileterStudent].sort((a, b) =>
        a.userName.localeCompare(b.userName)
    );
    studentTotalManagement(ArraySort);
});
