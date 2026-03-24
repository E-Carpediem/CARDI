// ==========================
// 전역 함수 및 선택자
// ==========================
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// URL에서 contentId 가져오기
const getContentId = () => new URLSearchParams(window.location.search).get("contentId");

// 로컬스토리지에서 데이터 가져오기
const getLocalData = (key) => JSON.parse(localStorage.getItem(key)) || [];

// 수강생 리스트 필터링 및 진도율 계산
const getStudentsByLecture = (userList, lecture) => {
    return userList
        .filter(user => user.appliedLecture?.some(ap => ap.contentId.toString() === lecture.contentId.toString()))
        .map(user => {
            const applied = user.appliedLecture.find(ap => ap.contentId.toString() === lecture.contentId.toString());
            const completeContents = applied.completeContents || 0;
            const progress = Math.round((completeContents / lecture.classNumber) * 100);

            return {
                name: user.userName,
                email: user.userEmail,
                appliedDate: applied.appliedDate,
                progress: progress,
                status: progress >= 100 ? "수강완료" : "수강중"
            };
        });
};

// 평균 수강률 계산
const getAverageProgress = (students) => {
    if (students.length === 0) return 0;
    const total = students.reduce((sum, s) => sum + s.progress, 0);
    return Math.round(total / students.length);
};

// ==========================
// DOM 렌더링 함수
// ==========================
const renderStats = (lecture, students) => {
    $(".msd-lecture-title").textContent = lecture.contentTitle;
    $(".msd-lecture-category").textContent = lecture.category;

    const studentCount = students.length;
    const avgProgress = getAverageProgress(students);

    const statCards = $$(".msd-stat-card");
    if (statCards[0]) statCards[0].querySelector(".msd-stat-value").textContent = studentCount;
    if (statCards[1]) statCards[1].querySelector(".msd-stat-value").textContent = `${avgProgress} %`;
};

const renderStudentList = (students) => {
    const container = $(".msd-student-list");
    container.innerHTML = "";

    students.forEach(s => {
        const row = document.createElement("div");
        row.className = "msd-student-row";
        row.innerHTML = `
            <span class="col name">${s.name}</span>
            <span class="col email">${s.email}</span>
            <span class="col date">${s.appliedDate}</span>
            <div class="col progress">
                <div class="msd-progress-bar">
                    <div class="msd-progress-fill" style="width: ${s.progress}%;"></div>
                </div>
                <span class="msd-progress-text">${s.progress}%</span>
            </div>
            <div class="col status">
                <div class="msd-student-status-box ${s.status === "수강완료" ? "completed" : ""}">
                    <span class="msd-student-status">${s.status}</span>
                </div>
            </div>
        `;
        container.appendChild(row);
    });
};

// ==========================
// DOMContentLoaded 실행
// ==========================
document.addEventListener("DOMContentLoaded", () => {
    const contentId = getContentId();
    if (!contentId) return console.error("contentId가 존재하지 않습니다.");

    const userList = getLocalData("userList");
    const lectureList = getLocalData("lectureList");

    const lecture = lectureList.find(item => item.contentId.toString() === contentId.toString());
    if (!lecture) return console.error("해당 contentId의 강의를 찾을 수 없습니다.");

    const students = getStudentsByLecture(userList, lecture);

    renderStats(lecture, students);
    renderStudentList(students);
});