const getUserList = JSON.parse(localStorage.getItem('userList'));
const getLectureList = JSON.parse(localStorage.getItem('lectureList'));
const totalUser = document.querySelector('.mm-inf-user-number');
const totalStudent = document.querySelector('.mm-inf-student-number');
const totallecture = document.querySelector('.mm-inf-lecture-number');
const totalcontent = document.querySelector('.mm-inf-content-number');
const recentSignUpUser = document.querySelector('.mm-recent-user-title');
const $popularLecture = document.querySelector('.mm-popular-lecture-title');

const recentUser = getUserList.filter((sub) => {
    return sub.role != "manager"
})

// 전체 회원 수
let totalSum = 0;
for (let i = 0; i < getUserList.length; i++) {
    if (getUserList[i].role === 'student' || getUserList[i].role === 'lecturer') {
        totalSum += 1;
        totalUser.innerText = `${totalSum}`;
    }
}

//  수강생 수
let studentSum = 0;
for (let i = 0; i < getUserList.length; i++) {
    if (getUserList[i].role === 'student') {
        studentSum = studentSum + 1;
        totalStudent.innerText = `${studentSum}`;
    }
}


let lectureSum = 0;
for (let i = 0; i < getUserList.length; i++) {
    if (getUserList[i].role === 'lecturer') {
        lectureSum = lectureSum + 1;
        totallecture.innerText = `${lectureSum}`;
    }
}

let contentSum = 0;
for (let i = 0; i < getLectureList.length; i++) {
    if (!getLectureList[i].classNumber == "") {
        contentSum = contentSum + getLectureList[i].classNumber;
        totalcontent.innerText = `${contentSum}`;
    }
}

let recentUserSum = 0;
function managerRecentUser(arrayList) {

    const pageMaxArray = arrayList.length < 7 ? arrayList.length : 7;
    for (let i = pageMaxArray-1; i >= 0; i--) {
        recentSignUpUser.insertAdjacentHTML("afterend", `
            <div class="mm-recent-user-content-ct">        
                <div>
                    <div class="mm-recent-user-content"> ${arrayList[i].userName}</div>
                    <div class="mm-recent-user-email"> ${arrayList[i].userEmail}</div>
                </div>
                <p class="mm-recent-user-date">${arrayList[i].signDate}</p>
            </div>
            <hr>`
        );
        console.log(arrayList[i].signDate);
    }
}

function managerPopularLecture(arrayList) {
    const pageMaxArray = arrayList.length < 9 ? arrayList.length : 9;
    for (let i = pageMaxArray-1; i >= 0; i--) {
        $popularLecture.insertAdjacentHTML("afterend", `
                <div class="mm-popular-content-ct">
                    <div class="mm-popular-content-title"> ${arrayList[i].contentTitle}</div>
                    <div class="mm-popular-content-personnel"> ${arrayList[i].lessonNumber}명 수강중</div>
                </div>
                <hr class="mm-popular-hr">`
        );

    }
}

const currentUserArray = [...recentUser].sort((a, b) =>
    b.signDate.localeCompare(a.signDate)
);

const popularLectureArray = [...getLectureList].sort((a, b) =>
    b.lessonNumber - a.lessonNumber
);

managerPopularLecture(popularLectureArray);
managerRecentUser(currentUserArray);

