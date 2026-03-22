const userListData = JSON.parse(localStorage.getItem('userList'));
const $totalLecture = document.querySelector(".tml-content-top-ct");

const arrayLecture = userListData.filter((sub) => sub.role === "lecture");
console.log(arrayLecture);
const lectureArraySub = userListData.filter((sub) => sub.subscriptionStatus === true);
const lectureArrayUnSub = userListData.filter((sub) => sub.subscriptionStatus === false);

function lectureTotalManagement(arrayList) {
    document.querySelectorAll('.tml-content').forEach(el => el.remove());
    const pageMaxArray = arrayList.length < 10 ? arrayList.length : 10;
    // 페이지네이션 관련 코드입니다. 추후 추가될 예정입니다.

    // const userTotalPagination = Math.ceil(arrayList.length / 10);
    // const usPaginationCurrentPage = 1;   
    for (let i = pageMaxArray - 1; i >= 0; i--) {
        $totalLecture.insertAdjacentHTML('afterend',
            `<div class="tml-content">
        <p> ${i + 1} </p>
        <p> ${arrayList[i].id} </p>
        <p> ${arrayList[i].userName} </p>
        <p> ${arrayList[i].role === "student" ? "수강생" : "강사"} </p>
        <p> ${arrayList[i].phoneNumber} </p>
        <p> ${arrayList[i].contentCount}건 </p>
        <p> ${arrayList[i].signDate} </p>
        <p> ${arrayList[i].membershipSignDate === null ? "-" : arrayList[i].membershipSignDate}</p>
        <p> ${arrayList[i].membershipStatus === true ? "등록" : "미등록"}</p>
        <p> ${arrayList[i].approveState}</p>
        <p> <img src="/src/assets/img/manager-suppoting-document.svg"> </p>
    </div>`
        )

        const $userRoleColor = document.querySelector('.tml-content >p:nth-child(4)');
        const $userMembershipColor = document.querySelector('.tml-content >p:nth-child(9)');

        arrayList[i].role === "student" ? $userRoleColor.className += 'tml-content-role-student' : $userRoleColor.className += 'tml-content-role-lecture';
        arrayList[i].role === "student"
            ? (arrayList[i].subscriptionStatus === true ? $userMembershipColor.className += 'tml-content-memebership-student' : $userMembershipColor.className += 'tml-content-memebership-lecture')
            : (arrayList[i].membershipStatus === true ? $userMembershipColor.className += 'tml-content-memebership-student' : $userMembershipColor.className += 'tml-content-memebership-lecture');
    };
}

lectureTotalManagement(arrayLecture);

const $lectureArraySub = document.querySelector('.m-fileter>p:nth-of-type(1)');
const $lectureArrayUnSub = document.querySelector('.m-fileter>p:nth-of-type(2)');

$lectureArraySub.addEventListener('click', () => {
    lectureTotalManagement(lectureArraySub);
})

$lectureArrayUnSub.addEventListener('click', () => {
    lectureTotalManagement(lectureArrayUnSub);
})
