// localStorage 테스트 데이터 입니다. 삭제예정
const managerTest = [
    { id: 1, role: "student", contentID: "CONT-001", contentTitle: "React 기초", studentNumber: 847, userName: "김민준", userEmail: "minjun.kim1@test.com", signDate: "2024-01-01" },
    { id: 2, role: "manager", contentID: "CONT-002", contentTitle: "Vue 심화", studentNumber: 312, userName: "이서연", userEmail: "seoyeon.lee2@test.com", signDate: "2024-01-04" },
    { id: 3, role: "lecture", contentID: "CONT-003", contentTitle: "TypeScript 입문", studentNumber: 576, userName: "박지훈", userEmail: "jihun.park3@test.com", signDate: "2024-01-07" },
    { id: 4, role: "student", contentID: "CONT-004", contentTitle: "Node.js 기초", studentNumber: 93, userName: "최수현", userEmail: "suhyun.choi4@test.com", signDate: "2024-01-10" },
    { id: 5, role: "manager", contentID: "CONT-005", contentTitle: "React 기초", studentNumber: 421, userName: "정예진", userEmail: "yejin.jung5@test.com", signDate: "2024-01-13" },
    { id: 6, role: "lecture", contentID: "CONT-006", contentTitle: "Vue 심화", studentNumber: 758, userName: "강도현", userEmail: "dohyun.kang6@test.com", signDate: "2024-01-16" },
    { id: 7, role: "student", contentID: "CONT-007", contentTitle: "TypeScript 입문", studentNumber: 234, userName: "윤지민", userEmail: "jimin.yoon7@test.com", signDate: "2024-01-19" },
    { id: 8, role: "manager", contentID: "CONT-008", contentTitle: "Node.js 기초", studentNumber: 619, userName: "장유나", userEmail: "yuna.jang8@test.com", signDate: "2024-01-22" },
    { id: 9, role: "lecture", contentID: "CONT-009", contentTitle: "React 기초", studentNumber: 987, userName: "임태양", userEmail: "taeyang.lim9@test.com", signDate: "2024-01-25" },
    { id: 10, role: "student", contentID: "CONT-010", contentTitle: "Vue 심화", studentNumber: 145, userName: "한하은", userEmail: "haeun.han10@test.com", signDate: "2024-02-01" },
    { id: 11, role: "manager", contentID: "CONT-011", contentTitle: "TypeScript 입문", studentNumber: 503, userName: "김민준", userEmail: "minjun.kim11@test.com", signDate: "2024-02-04" },
    { id: 12, role: "lecture", contentID: "CONT-012", contentTitle: "Node.js 기초", studentNumber: 872, userName: "이서연", userEmail: "seoyeon.lee12@test.com", signDate: "2024-02-07" },
    { id: 13, role: "student", contentID: "CONT-013", contentTitle: "React 기초", studentNumber: 367, userName: "박지훈", userEmail: "jihun.park13@test.com", signDate: "2024-02-10" },
    { id: 14, role: "manager", contentID: "CONT-014", contentTitle: "Vue 심화", studentNumber: 714, userName: "최수현", userEmail: "suhyun.choi14@test.com", signDate: "2024-02-13" },
    { id: 15, role: "lecture", contentID: "CONT-015", contentTitle: "TypeScript 입문", studentNumber: 29, userName: "정예진", userEmail: "yejin.jung15@test.com", signDate: "2024-02-16" },
    { id: 16, role: "student", contentID: "CONT-016", contentTitle: "Node.js 기초", studentNumber: 456, userName: "강도현", userEmail: "dohyun.kang16@test.com", signDate: "2024-02-19" },
    { id: 17, role: "manager", contentID: "CONT-017", contentTitle: "React 기초", studentNumber: 823, userName: "윤지민", userEmail: "jimin.yoon17@test.com", signDate: "2024-02-22" },
    { id: 18, role: "lecture", contentID: "CONT-018", contentTitle: "Vue 심화", studentNumber: 191, userName: "장유나", userEmail: "yuna.jang18@test.com", signDate: "2024-02-25" },
    { id: 19, role: "student", contentID: "CONT-019", contentTitle: "TypeScript 입문", studentNumber: 638, userName: "임태양", userEmail: "taeyang.lim19@test.com", signDate: "2024-03-01" },
    { id: 20, role: "manager", contentID: "CONT-020", contentTitle: "Node.js 기초", studentNumber: 77, userName: "한하은", userEmail: "haeun.han20@test.com", signDate: "2024-03-04" },
    { id: 21, role: "lecture", contentID: "CONT-021", contentTitle: "React 기초", studentNumber: 945, userName: "김민준", userEmail: "minjun.kim21@test.com", signDate: "2024-03-07" },
    { id: 22, role: "student", contentID: "CONT-022", contentTitle: "Vue 심화", studentNumber: 282, userName: "이서연", userEmail: "seoyeon.lee22@test.com", signDate: "2024-03-10" },
    { id: 23, role: "manager", contentID: "CONT-023", contentTitle: "TypeScript 입문", studentNumber: 531, userName: "박지훈", userEmail: "jihun.park23@test.com", signDate: "2024-03-13" },
    { id: 24, role: "lecture", contentID: "CONT-024", contentTitle: "Node.js 기초", studentNumber: 664, userName: "최수현", userEmail: "suhyun.choi24@test.com", signDate: "2024-03-16" },
    { id: 25, role: "student", contentID: "CONT-025", contentTitle: "React 기초", studentNumber: 118, userName: "정예진", userEmail: "yejin.jung25@test.com", signDate: "2024-03-19" },
    { id: 26, role: "manager", contentID: "CONT-026", contentTitle: "Vue 심화", studentNumber: 793, userName: "강도현", userEmail: "dohyun.kang26@test.com", signDate: "2024-03-22" },
    { id: 27, role: "lecture", contentID: "CONT-027", contentTitle: "TypeScript 입문", studentNumber: 349, userName: "윤지민", userEmail: "jimin.yoon27@test.com", signDate: "2024-03-25" },
    { id: 28, role: "student", contentID: "CONT-028", contentTitle: "Node.js 기초", studentNumber: 906, userName: "장유나", userEmail: "yuna.jang28@test.com", signDate: "2024-04-01" },
    { id: 29, role: "manager", contentID: "CONT-029", contentTitle: "React 기초", studentNumber: 472, userName: "임태양", userEmail: "taeyang.lim29@test.com", signDate: "2024-04-04" },
    { id: 30, role: "lecture", contentID: "CONT-030", contentTitle: "Vue 심화", studentNumber: 55, userName: "한하은", userEmail: "haeun.han30@test.com", signDate: "2024-04-07" },
    { id: 31, role: "student", contentID: "CONT-031", contentTitle: "TypeScript 입문", studentNumber: 681, userName: "김민준", userEmail: "minjun.kim31@test.com", signDate: "2024-04-10" },
    { id: 32, role: "manager", contentID: "CONT-032", contentTitle: "Node.js 기초", studentNumber: 214, userName: "이서연", userEmail: "seoyeon.lee32@test.com", signDate: "2024-04-13" },
    { id: 33, role: "lecture", contentID: "CONT-033", contentTitle: "React 기초", studentNumber: 839, userName: "박지훈", userEmail: "jihun.park33@test.com", signDate: "2024-04-16" },
    { id: 34, role: "student", contentID: "CONT-034", contentTitle: "Vue 심화", studentNumber: 163, userName: "최수현", userEmail: "suhyun.choi34@test.com", signDate: "2024-04-19" },
    { id: 35, role: "manager", contentID: "CONT-035", contentTitle: "TypeScript 입문", studentNumber: 597, userName: "정예진", userEmail: "yejin.jung35@test.com", signDate: "2024-04-22" },
    { id: 36, role: "lecture", contentID: "CONT-036", contentTitle: "Node.js 기초", studentNumber: 728, userName: "강도현", userEmail: "dohyun.kang36@test.com", signDate: "2024-04-25" },
    { id: 37, role: "student", contentID: "CONT-037", contentTitle: "React 기초", studentNumber: 44, userName: "윤지민", userEmail: "jimin.yoon37@test.com", signDate: "2024-05-01" },
    { id: 38, role: "manager", contentID: "CONT-038", contentTitle: "Vue 심화", studentNumber: 385, userName: "장유나", userEmail: "yuna.jang38@test.com", signDate: "2024-05-04" },
    { id: 39, role: "lecture", contentID: "CONT-039", contentTitle: "TypeScript 입문", studentNumber: 912, userName: "임태양", userEmail: "taeyang.lim39@test.com", signDate: "2024-05-07" },
    { id: 40, role: "student", contentID: "CONT-040", contentTitle: "Node.js 기초", studentNumber: 256, userName: "한하은", userEmail: "haeun.han40@test.com", signDate: "2024-05-10" },
    { id: 41, role: "manager", contentID: "CONT-041", contentTitle: "React 기초", studentNumber: 741, userName: "김민준", userEmail: "minjun.kim41@test.com", signDate: "2024-05-13" },
    { id: 42, role: "lecture", contentID: "CONT-042", contentTitle: "Vue 심화", studentNumber: 128, userName: "이서연", userEmail: "seoyeon.lee42@test.com", signDate: "2024-05-16" },
    { id: 43, role: "student", contentID: "CONT-043", contentTitle: "TypeScript 입문", studentNumber: 863, userName: "박지훈", userEmail: "jihun.park43@test.com", signDate: "2024-05-19" },
    { id: 44, role: "manager", contentID: "CONT-044", contentTitle: "Node.js 기초", studentNumber: 499, userName: "최수현", userEmail: "suhyun.choi44@test.com", signDate: "2024-05-22" },
    { id: 45, role: "lecture", contentID: "CONT-045", contentTitle: "React 기초", studentNumber: 37, userName: "정예진", userEmail: "yejin.jung45@test.com", signDate: "2024-05-25" },
    { id: 46, role: "student", contentID: "CONT-046", contentTitle: "Vue 심화", studentNumber: 674, userName: "강도현", userEmail: "dohyun.kang46@test.com", signDate: "2024-06-01" },
    { id: 47, role: "manager", contentID: "CONT-047", contentTitle: "TypeScript 입문", studentNumber: 302, userName: "윤지민", userEmail: "jimin.yoon47@test.com", signDate: "2024-06-04" },
    { id: 48, role: "lecture", contentID: "CONT-048", contentTitle: "Node.js 기초", studentNumber: 558, userName: "장유나", userEmail: "yuna.jang48@test.com", signDate: "2024-06-07" },
    { id: 49, role: "student", contentID: "CONT-049", contentTitle: "React 기초", studentNumber: 819, userName: "임태양", userEmail: "taeyang.lim49@test.com", signDate: "2024-06-10" },
    { id: 50, role: "manager", contentID: "CONT-050", contentTitle: "Vue 심화", studentNumber: 176, userName: "한하은", userEmail: "haeun.han50@test.com", signDate: "2024-06-13" },
  ]

localStorage.setItem('testInfo', JSON.stringify(managerTest));

const getManager = JSON.parse(localStorage.getItem('testInfo'));
const totalUser = document.querySelector('.mm-inf-user-number');
const totalStudent = document.querySelector('.mm-inf-student-number');
const totallecture = document.querySelector('.mm-inf-lecture-number');
const totalcontent = document.querySelector('.mm-inf-content-number');
const recentSignUpUser = document.querySelector('.mm-recent-user-title');
const popularLecture = document.querySelector('.mm-popular-lecture-title');


// 전체 회원 수
let totalSum = 0;
for (let i = 0; i < getManager.length; i++) {
    if (getManager[i].role === 'student' || getManager[i].role === 'lecture') {
        totalSum += 1;
        totalUser.innerText = `${totalSum}`;

    }
}

//  수강생 수
let studentSum = 0;
for (let i = 0; i < getManager.length; i++) {
    if (getManager[i].role === 'student') {
        studentSum = studentSum + 1;
        totalStudent.innerText = `${studentSum}`;
    }
}


let lectureSum = 0;
for (let i = 0; i < getManager.length; i++) {
    if (getManager[i].role === 'lecture') {
        lectureSum = lectureSum + 1;
        totallecture.innerText = `${lectureSum}`;
    }
}

let contentSum = 0;
for (let i = 0; i < getManager.length; i++) {
    if (!getManager[i].contentID == "") {
        contentSum = contentSum + 1;
        totalcontent.innerText = `${contentSum}`;
    }
}

let recentUserSum = 0;
for (let i = getManager.length - 1; i > 0; i--) {

    const recentSignUpUser2 = document.querySelector('.mm-recent-user-content-ct');
    if (recentUserSum <= 7) {
        // if (recentUserSum == 0) {
            recentSignUpUser.insertAdjacentHTML("afterend", `
            <div class="mm-recent-user-content-ct">        
                <div>
                    <div class="mm-recent-user-content"> ${getManager[i].userName}</div>
                    <div class="mm-recent-user-email"> ${getManager[i].userEmail}</div>
                </div>
                <p class="mm-recent-user-date">${getManager[i].signDate}</p>
            </div>
            <hr>`
            );
        // } else {
        //     recentSignUpUser2.insertAdjacentHTML("afterend", `
        //     <div class="mm-recent-user-content-ct">        
        //         <div>
        //             <div class="mm-recent-user-content"> ${getManager[i].userName}</div>
        //             <div class="mm-recent-user-email"> ${getManager[i].userEmail}</div>
        //         </div>
        //         <p class="mm-recent-user-date">${getManager[i].signDate}</p>
        //     </div>
        //     <hr>`
        //     );
        }
        recentUserSum += 1;
    }


let popularLectureSUm = 0;
for (let i = getManager.length - 1; i > 0; i--) {
    if (popularLectureSUm <= 8) {
            popularLecture.insertAdjacentHTML("afterend", `
                <div class="mm-popular-content-ct">
                    <div class="mm-popular-content-title"> ${getManager[i].contentTitle}</div>
                    <div class="mm-popular-content-personnel"> ${getManager[i].studentNumber}명 수강중</div>
                </div>
                <hr class="mm-popular-hr">`
            );
        }
        popularLectureSUm += 1;
    }

