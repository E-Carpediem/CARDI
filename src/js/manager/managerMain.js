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

