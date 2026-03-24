const userList = JSON.parse(localStorage.getItem('userList'));
const userListLecture = JSON.parse(localStorage.getItem('lectureList'));


const $totalUser = document.querySelector(".tm-content-top-ct");
const userListData = userList.filter((sub) => sub.role != "manager");
const lectureCount = (id) =>userListLecture.filter(sub=> sub.id === id).length;
const arraySub = userList.filter((sub) => sub.subscriptionStatus === false);
const arrayUnSub = userList.filter((sub) => sub.subscriptionStatus === true);
const arrayMembership = userList.filter((sub) => sub.membershipStatus === true);
const arrayUnMembership = userList.filter((sub) => sub.membershipStatus === false);
const arraySignDate = userList.filter((sub) => sub.membershipStatus === false);

function userTotalManagement(arrayList) {
    document.querySelectorAll('.tm-content').forEach(el => el.remove());
    const pageMaxArray = arrayList.length < 10 ? arrayList.length : 10;
    // 페이지네이션 관련 코드입니다. 추후 추가될 예정입니다.
    // const userTotalPagination = Math.ceil(arrayList.length / 10);
    // const usPaginationCurrentPage = 1;
    for (let i = pageMaxArray - 1; i >= 0; i--) {
        $totalUser.insertAdjacentHTML('afterend',
            `<div class="tm-content">
        <p> ${i + 1} </p>
        <p> ${arrayList[i].id} </p>
        <p> ${arrayList[i].userName} </p>
        <p> ${arrayList[i].role === "student" ? "수강생" : "강사"} </p>
        <p> ${arrayList[i].phoneNumber} </p>
        <p>${arrayList[i].role === "student"
                ? arrayList[i].classCount
                : lectureCount(arrayList[i].id)}건</p>
        <p> ${arrayList[i].signDate} </p>
        <p> ${arrayList[i].role === "student"
                ? (arrayList[i].subscriptionSignDate === null ? "-" : arrayList[i].subscriptionSignDate)
                : (arrayList[i].membershipSignDate === null ? "-" : arrayList[i].membershipSignDate)}  </p>
        <p> ${arrayList[i].role === "student"
                ? (arrayList[i].subscriptionStatus === true ? "구독중" : "미구독")
                : (arrayList[i].membershipStatus === true ? "등록중" : "미등록")} </p>
    </div>`)

        const $userRoleColor = document.querySelector('.tm-content >p:nth-child(4)');
        const $userMembershipColor = document.querySelector('.tm-content >p:nth-child(9)');

        arrayList[i].role === "student" ? $userRoleColor.className += 'tm-content-role-student' : $userRoleColor.className += 'tm-content-role-lecture';
        arrayList[i].role === "student"
            ? (arrayList[i].subscriptionStatus === true ? $userMembershipColor.className += 'tm-content-memebership-student' : $userMembershipColor.className += 'tm-content-memebership-lecture')
            : (arrayList[i].membershipStatus === true ? $userMembershipColor.className += 'tm-content-memebership-student' : $userMembershipColor.className += 'tm-content-memebership-lecture');

    };

}

userTotalManagement(userListData);
const $ArraySub = document.querySelector('.m-fileter>p:nth-of-type(1)');
const $ArrayMembership = document.querySelector('.m-fileter>p:nth-of-type(2)');
const $ArrayUnSub = document.querySelector('.m-fileter>p:nth-of-type(3)');
const $ArrayUnMembership = document.querySelector('.m-fileter>p:nth-of-type(4)');
const $ArraySignDate = document.querySelector('.m-array>p:nth-of-type(1)');
const $ArraySort = document.querySelector('.m-array>p:nth-of-type(2)');

$ArraySub.addEventListener('click', () => {
    userTotalManagement(arraySub);
})

$ArrayUnSub.addEventListener('click', () => {
    userTotalManagement(arrayUnSub);
})

$ArrayMembership.addEventListener('click', () => {
    userTotalManagement(arrayMembership);
})

$ArrayUnMembership.addEventListener('click', () => {
    userTotalManagement(arrayUnMembership);
})

$ArraySignDate.addEventListener('click', () => {
    const ArraySignDate = [...userListData].sort((a, b) =>
        b.signDate.localeCompare(a.signDate)
    );
    userTotalManagement(ArraySignDate);
});

$ArraySort.addEventListener('click', () => {
    const ArraySort = [...userListData].sort((a, b) =>
        a.userName.localeCompare(b.userName, 'ko')
    );
    userTotalManagement(ArraySort);
});
