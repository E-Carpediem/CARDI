const userListData = JSON.parse(localStorage.getItem('userList'));
const lectureListData = JSON.parse(localStorage.getItem('lectureList'));
const $totalLecture = document.querySelector(".tml-content-top-ct");

const fileterLecture = userListData.filter((sub) => sub.role === "lecturer");
const lecturefileterSub = userListData.filter((sub) => sub.membershipStatus === true);
const lecturefileterUnSub = userListData.filter((sub) => sub.membershipStatus === false);
const lectureCount = (id) => lectureListData.filter(sub => sub.id === id).length;

function managermoveNavPath(path) {
    window.location.href = window.location.origin + `${path}`
}


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
        <p class="tml-lecture-name" data-id=${arrayList[i].id}> ${arrayList[i].userName} </p>
        <p> ${arrayList[i].role === "student" ? "수강생" : "강사"} </p>
        <p> ${arrayList[i].phoneNumber} </p>
        <p> ${lectureCount(arrayList[i].id)}건</p>
        <p> ${arrayList[i].signDate} </p>
        <p> ${arrayList[i].membershipSignDate === null ? "-" : arrayList[i].membershipSignDate}</p>
        <p> ${arrayList[i].membershipStatus === true ? "등록" : "미등록"}</p>
        <p> ${arrayList[i].approvalStatus === true ? "승인" : "미승인"}</p>
        <p> <img src="/src/assets/img/manager-suppoting-document.svg"> </p>
    </div>`
        )

        const $userRoleColor = document.querySelector('.tml-content >p:nth-child(4)');
        const $userMembershipColor = document.querySelector('.tml-content >p:nth-child(9)');
        const $userApproveColor = document.querySelector('.tml-content >p:nth-child(10)');

        arrayList[i].role === "student" ? $userRoleColor.classList.add('tml-content-role-student') : $userRoleColor.classList.add('tml-content-role-lecture');
        arrayList[i].role === "student"
            ? (arrayList[i].subscriptionStatus === true ? $userMembershipColor.className += 'tml-content-memebership-student' : $userMembershipColor.className += 'tml-content-memebership-lecture')
            : (arrayList[i].membershipStatus === true ? $userMembershipColor.className += 'tml-content-memebership-student' : $userMembershipColor.className += 'tml-content-memebership-lecture');
        arrayList[i].approvalStatus === true ? $userApproveColor.className += 'tml-content-approve' : $userApproveColor.className += 'tml-content-unapprove';

    };
    const $lectureName = document.querySelectorAll('.tml-lecture-name');
    [...$lectureName].forEach((e) => {
        e.addEventListener("click", (id) => {
            managermoveNavPath(`/manager/lecturer-detail.html?id=${id.target.dataset.id}`);
        })
    });

}

lectureTotalManagement(fileterLecture);

const $lecturefileterSub = document.querySelector('.m-fileter>p:nth-of-type(1)');
const $lecturefileterUnSub = document.querySelector('.m-fileter>p:nth-of-type(2)');
const $fileterSignDate = document.querySelector('.m-array>p:nth-of-type(1)');
const $fileterSort = document.querySelector('.m-array>p:nth-of-type(2)');


$lecturefileterSub.addEventListener('click', () => {
    lectureTotalManagement(lecturefileterSub);
})

$lecturefileterUnSub.addEventListener('click', () => {
    lectureTotalManagement(lecturefileterUnSub);
})

$fileterSignDate.addEventListener('click', () => {
    const fileterSignDate = [...fileterLecture].sort((a, b) =>
        b.signDate.localeCompare(a.signDate)
    );
    lectureTotalManagement(fileterSignDate);
});

$fileterSort.addEventListener('click', () => {
    const fileterSort = [...fileterLecture].sort((a, b) =>
        a.userName.localeCompare(b.userName)
    );
    lectureTotalManagement(fileterSort);
});
