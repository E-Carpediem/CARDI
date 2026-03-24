const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

// localStorage 저장/조회용 객체
const store = {
    setLocalStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    getLocalStorage(key) {
        const data = localStorage.getItem(key);
    }
};


// 사용자 입력값에서 HTML 미적용
function escapeHTML(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}

// local storage -> lectureList 저장하는 함수
function setLectureList(lectureList) {
    store.setLocalStorage("lectureList", lectureList);
}
// local storage -> lectureList 가져오는 함수
function getLectureList() {
    return JSON.parse(localStorage.getItem("lectureList")) || [];
}

// myInfo 와 id 값이 동일한 user 를 userList에서 불러와서 저장하는 함수
function getCurrentUser() {
    const myInfo =
        JSON.parse(localStorage.getItem("myInfo")) ||
        JSON.parse(sessionStorage.getItem("myInfo"));

    const userList = JSON.parse(localStorage.getItem("userList")) || [];
    const userIndex = userList.findIndex(user => user.id === myInfo.id);

    const currentUser = userList[userIndex];

    if (!Array.isArray(currentUser.shoppingCart)) {
        currentUser.shoppingCart = [];
    }

    if (!Array.isArray(currentUser.appliedLecture)) {
        currentUser.appliedLecture = [];
    }


    return {
        myInfo,
        user: userList[userIndex],
        userIndex,
        userList
    };
}

// 해당 강의의 localStorage 값을 받아와서 강의 상세 조회에 반영하는 함수
function renderLectureData() {
    const params = new URLSearchParams(window.location.search);
    const contentId = params.get("contentId");
    const lectureList = getLectureList();
    const lectureData = lectureList.find(item => item.contentId === Number(contentId));

    // 수강 후에는 input에 들어오는 배열값을 동적으로 추가하는 함수
    function createAfter(contentAfter) {
        return (contentAfter || []).map((item, index) => {
            return `
            <article class="cd-content-container" id="cd-after-container${index + 1}">
            <section class="cd-number" id="cd-after-number${index + 1}">
            ${index + 1}
            </section>
            <section class="cd-content" id="cd-after-content${index + 1}">
            ${escapeHTML(item)}
            </section>
                </article>
            `;
        }).join("");
    }

    // 커리큘럼에 동적으로 추가하는 함수
    function createCurry(contentCurry) {
        return (contentCurry || []).map((curry, index) => {
            const lessonsHTML = Array.isArray(curry.lessons)
                ? curry.lessons.map((lesson) => {
                    return `<li>${escapeHTML(lesson.lessonsTitle)}</li>`;
                }).join("")
                : "";

            return `
                <article class="cd-content-container" id="cd-curry-container${index + 1}">
                    <section class="cd-number" id="cd-curry-number${index + 1}">
                        ${index + 1}
                    </section>
                    <section class="cd-content cd-curry-content" id="cd-curry-content${index + 1}">
                        ${escapeHTML(curry.title)}
                    </section>
                </article>
                <ul class="cd-curry-list" id="cd-curry-list${index + 1}">
                    ${lessonsHTML}
                </ul>
            `;
        }).join("");
    }

    // 전체 html에 해당 강의의 내용 반영
    $(".cd-side-margin").innerHTML = `
        <article class="cd-lecture-img"></article>
        <article class="cd-main-container">
            <article class="cd-main-content">
                <article class="cd-main-nav">
                    <p class="cd-nav-title" id="cd-nav-main">강의소개</p>
                    <p class="cd-nav-title" id="cd-nav-curry">커리큘럼</p>
                    <p class="cd-nav-title" id="cd-nav-community">커뮤니티</p>
                </article>

                <article class="cd-long-line">
                    <section class="cd-short-line" id="cd-short-line1"></section>
                    <section class="cd-short-line" id="cd-short-line2"></section>
                </article>

                <section id="cd-content-title">${escapeHTML(lectureData.contentTitle)}</section>
                <p id="cd-content-preview">${escapeHTML(lectureData.contentPreview)}</p>
                <article id="cd-category">${escapeHTML(lectureData.category)}</article>

                <article id="cd-after-container">
                    <section class="cd-content-index" id="cd-content-after">수강 후에는.</section>
                    ${createAfter(lectureData.contentAfter)}
                </article>

                <article id="cd-simple-container">
                    <section class="cd-content-index" id="cd-content-simple">강의 요약</section>
                    <article class="cd-simple-content" id="cd-simple-content">
                        ${escapeHTML(lectureData.contentSimple)}
                    </article>
                </article>

                <article id="cd-curry-container">
                    <section class="cd-content-index" id="cd-content-curry">커리큘럼</section>
                    ${createCurry(lectureData.contentCurry)}
                </article>
            </article>

            <article class="cd-content-box">
                <section id="price">₩${Number(lectureData.contentPrice || 0).toLocaleString()}</section>
                <article class="cd-content-info">
                    <section id="cd-lecturer-name">강사명: ${escapeHTML(lectureData.userName || "강사명")}</section>
                    <section id="cd-use-time">이용 기간: 무제한</section>
                    <section id="cd-content-time">강의 시간: ${escapeHTML(lectureData.contentTime || "")} 시간</section>
                    <section id="cd-content-level">난이도: ${escapeHTML(lectureData.contentLevel || "")}</section>
                </article>

                <button class="cd-btn" id="cd-btn-color1">장바구니</button>
                <button class="cd-btn" id="cd-btn-color2">신청하기</button>
            </article>
        </article>
    `;

    // 미니 nav바에서 커리큘럼을 클릭 시 커리큘럼 쪽으로 스크롤
    $("#cd-nav-curry").addEventListener("click", () => {
        $("#cd-curry-container").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });

    // 미니 nav바에서 커뮤니티를 클릭 시 커뮤니티 페이지로 이동
    $("#cd-nav-community").addEventListener("click", () => {
        window.location.href = `/community/index.html?contentId=${encodeURIComponent(lectureData.contentId)}`;
    });

    return lectureData;
}

// 모달 닫기 함수
function closeModal() {
    const activeModal = $(".active-modal");
    if (activeModal) activeModal.innerHTML = "";
}

// 투버튼 모달 열기 함수
function openTwoButtonModal(message, onConfirm) {
    const activeModal = $(".active-modal");

    activeModal.innerHTML = `
        <div class="modal">
            <div class="modal-container">
                <div class="modal-top">${message}</div>
                <div class="modal-bottom">
                    <div class="modal-box modal-close">취소</div>
                    <div class="modal-box modal-check">확인</div>
                </div>
            </div>
        </div>
    `;

    const modal = $(".modal", activeModal);
    const closeBtn = $(".modal-close", modal);
    const checkBtn = $(".modal-check", modal);

    modal.style.display = "flex";

    closeBtn.addEventListener("click", closeModal);

    checkBtn.addEventListener("click", () => {
        closeModal();
        if (onConfirm) onConfirm();
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}

// 원버튼 모달 열기 함수
function openOneButtonModal(message) {
    const activeModal = $(".active-modal");

    activeModal.innerHTML = `
        <div class="modal">
            <div class="modal-container">
                <div class="modal-top">${message}</div>
                <div class="modal-bottom">
                    <div class="modal-box modal-check">확인</div>
                </div>
            </div>
        </div>
    `;

    const modal = $(".modal", activeModal);
    const checkBtn = $(".modal-check", modal);

    modal.style.display = "flex";

    checkBtn.addEventListener("click", () => {
        closeModal();
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}

// miInfo 와 동일한 id 값을 가진 user의 role 값이 lecturer 일 때 강사에 맞는 페이지로 렌더링하는 함수
function lecturer(lectureData) {
    const result = getCurrentUser();

    const { user } = result;

    // role 값이 lecturer 이 아니면 함수를 중단하고 다음 함수로
    if (user.role !== "lecturer") return;

    $("#cd-btn-color1").textContent = "수정하기";
    $("#cd-btn-color2").textContent = "삭제하기";

    // 수정하기 버튼 클릭 시 작동하는 함수
    function handleUpdate() {
        openTwoButtonModal(
            "수정하시겠습니까?<br>확인 버튼을 누르면 강의 수정 페이지로 이동합니다.",
            () => {
                window.location.href = `/lecturer/lecture-update.html?contentId=${lectureData.contentId}`;
            }
        );
    }

    // 삭제하기 버튼 클릭 시 작동하는 함수
    function handleDelete() {
        openTwoButtonModal(
            "삭제하시겠습니까?<br>삭제 후엔 되돌릴 수 없습니다.",
            () => {
                const lectureList = getLectureList();
                const userList = JSON.parse(localStorage.getItem("userList")) || [];
                const targetContentId = Number(lectureData.contentId);

                const updatedLectureList = lectureList.filter(
                    item => Number(item.contentId) !== targetContentId
                );

                // userList 전체를 순회해서 해당 강의가 장바구니 또는 신청한 강의에 있으면 해당 user의
                // 장바구니 또는 신청한 강의 목록에서 삭제
                userList.forEach(user => {
                    if (Array.isArray(user.shoppingCart)) {
                        user.shoppingCart = user.shoppingCart.filter(
                            item => Number(item.contentId) !== targetContentId
                        );
                    }

                    if (Array.isArray(user.appliedLecture)) {
                        user.appliedLecture = user.appliedLecture.filter(
                            item => Number(item.contentId) !== targetContentId
                        );
                    }
                });

                setLectureList(updatedLectureList);
                localStorage.setItem("userList", JSON.stringify(userList));

                window.location.href = "/lecturer/index.html";
            }
        );
    }

    $("#cd-btn-color1").addEventListener("click", handleUpdate);
    $("#cd-btn-color2").addEventListener("click", handleDelete);
}

// miInfo 와 동일한 id 값을 가진 user의 role 값이 student 일 때 강사에 맞는 페이지로 렌더링하는 함수
function student(lectureData) {
    const result = getCurrentUser();

    const { user, userIndex, userList } = result;

    // role 값이 student 가 아니면 함수를 중단하고 다음 함수로
    if (user.role !== "student") return;

    $("#cd-btn-color1").textContent = "장바구니";
    $("#cd-btn-color2").textContent = "신청하기";

    // 장바구니 버튼 클릭 시 작동하는 함수
    function handleCart() {
        openTwoButtonModal(
            "장바구니에 추가하시겠습니까?",
            () => {
                const currentResult = getCurrentUser();

                const { user, userIndex, userList } = currentResult;
                const lectureList = getLectureList();

                const content = lectureList.find(
                    item => Number(item.contentId) === Number(lectureData.contentId)
                );

                const exists = user.shoppingCart.some(
                    item => Number(item.contentId) === Number(content.contentId)
                );

                const applied = user.appliedLecture.some(
                    item => Number(item.contentId) === Number(content.contentId)
                );

                if (exists) {
                    openOneButtonModal("이미 장바구니에 담긴 강의입니다.");
                    return;
                }

                if (applied) {
                    openOneButtonModal("이미 신청한 강의입니다.");
                    return;
                }

                user.shoppingCart.push(content);
                userList[userIndex] = user;
                localStorage.setItem("userList", JSON.stringify(userList));
                openOneButtonModal("장바구니에 추가되었습니다.");
            }
        );
    }

    // 신청하기 버튼 클릭 시 작동하는 함수
    function handleApply() {
        // 신청 날짜
        const today = new Date().toISOString().split("T")[0];

        openTwoButtonModal(
            "신청하시겠습니까?",
            () => {
                const currentResult = getCurrentUser();

                const { user, userIndex, userList } = currentResult;
                const lectureList = getLectureList();

                const content = lectureList.find(
                    item => Number(item.contentId) === Number(lectureData.contentId)
                );

                const applied = user.appliedLecture.some(
                    item => Number(item.contentId) === Number(content.contentId)
                );

                if (applied) {
                    openOneButtonModal("이미 신청한 강의입니다.");
                    return;
                }

                const appliedLectureUpdate = {
                    contentId: content.contentId,
                    appliedDate: today,
                    completeContents: 0
                };

                user.appliedLecture.push(appliedLectureUpdate);

                user.shoppingCart = user.shoppingCart.filter(
                    item => Number(item.contentId) !== Number(content.contentId)
                );

                userList[userIndex] = user;
                localStorage.setItem("userList", JSON.stringify(userList));
                openOneButtonModal("신청되었습니다.");
            }
        );
    }

    $("#cd-btn-color1").addEventListener("click", handleCart);
    $("#cd-btn-color2").addEventListener("click", handleApply);
}

// miInfo 와 동일한 id 값을 가진 user의 role 값이 manager 일 때 강사에 맞는 페이지로 렌더링하는 함수
function manager(lectureData) {
    const result = getCurrentUser();

    const { user } = result;

    // role 값이 manager 가 아니면 해당 함수를 중단
    if (user.role !== "manager") return;

    $("#cd-btn-color1").style.display = "none";
    $("#cd-btn-color2").style.display = "block";
    $("#cd-btn-color2").textContent = "삭제하기";

    // 삭제하기 버튼 클릭 시 작동하는 함수. manager는 어떠한 강의든 삭제 가능
    function handleDelete() {
        openTwoButtonModal(
            "삭제하시겠습니까?<br>삭제 후엔 되돌릴 수 없습니다.",
            () => {
                const lectureList = getLectureList();
                const userList = JSON.parse(localStorage.getItem("userList")) || [];
                const targetContentId = Number(lectureData.contentId);

                const updatedLectureList = lectureList.filter(
                    item => Number(item.contentId) !== targetContentId
                );

                userList.forEach(user => {
                    if (Array.isArray(user.shoppingCart)) {
                        user.shoppingCart = user.shoppingCart.filter(
                            item => Number(item.contentId) !== targetContentId
                        );
                    }

                    if (Array.isArray(user.appliedLecture)) {
                        user.appliedLecture = user.appliedLecture.filter(
                            item => Number(item.contentId) !== targetContentId
                        );
                    }
                });

                setLectureList(updatedLectureList);
                localStorage.setItem("userList", JSON.stringify(userList));

                window.location.href = "/manager/lecture-total.html";
            }
        );
    }

    $("#cd-btn-color2").addEventListener("click", handleDelete);
}

const lectureData = renderLectureData();
lecturer(lectureData);
student(lectureData);
manager(lectureData);