const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const getStorageData = (key, fallback = null) => {
    const local = localStorage.getItem(key);
    if (local) return JSON.parse(local);

    const session = sessionStorage.getItem(key);
    if (session) return JSON.parse(session);

    return fallback;
};

// 로그인 정보 가져오기
const getMyInfo = () => getStorageData("myInfo", {});

// 강의 리스트 가져오기
const getLectureList = () => {
    const list = getStorageData("lectureList", []);
    return Array.isArray(list) ? list : [list];
};

// 유저 리스트 가져오기
const getUserList = () => getStorageData("userList", []);

// 내 강의만 필터링
const getMyLectures = (lectureList, myInfo) => {
    if (!myInfo) return [];
    return lectureList.filter(lec => lec.id === myInfo.id);
};

document.addEventListener("DOMContentLoaded", () => {
    const myInfo = getMyInfo();
    const lectureList = getLectureList();
    const userList = getUserList();
    const container = $("#lectureListContainer");

    container.innerHTML = "";

    const myLectures = getMyLectures(lectureList, myInfo);

    let totalStudents = 0;
    let totalIng = 0;
    let totalComplete = 0;
    let totalProgressSum = 0;
    let totalProgressMax = 0;

    myLectures.forEach(lecture => {
        const classNumber = Number(lecture.classNumber || 1);
        const lessonNumber = Number(lecture.lessonNumber || 0);

        let lectureIng = 0;
        let lectureComplete = 0;

        userList.forEach(user => {
            if (!Array.isArray(user.appliedLecture)) return;

            const applied = user.appliedLecture.find(
                a => Number(a.contentId) === Number(lecture.contentId)
            );

            if (!applied) return;

            const progress = Math.min(Number(applied.completeContents || 0), classNumber);

            if (progress === classNumber) lectureComplete++;
            else lectureIng++;

            totalProgressSum += progress;
            totalProgressMax += classNumber;
        });

        totalStudents += lessonNumber;
        totalIng += lectureIng;
        totalComplete += lectureComplete;

        const row = document.createElement("div");
        row.className = "ms-lecture-row";
        row.style.cursor = "pointer";

        row.innerHTML = `
            <p class="ms-lecture-title">${lecture.contentTitle}</p>
            <div class="ms-lecture-info-box">
                <div class="ms-lecture-stats">
                    <span>수강생: ${lessonNumber}명</span>
                    <span>수강 중: 49명</span>
                    <span>수강 완료: 49명</span>
                </div>
                <span class="ms-lecture-category">${lecture.category}</span>
            </div>
        `;

        row.addEventListener("click", () => {
            window.location.href = `/lecturer/students-detail.html?contentId=${lecture.contentId}`;
        });

        container.appendChild(row);
    });

    const statValues = $$(".ms-stat-value");

    if (statValues[0]) statValues[0].textContent = totalStudents;
    if (statValues[1]) {
        statValues[1].textContent = "50.0 %";
    }
});