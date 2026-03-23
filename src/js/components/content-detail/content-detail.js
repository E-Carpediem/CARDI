const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

// localStorage 저장/조회용 객체
const store = {
    setLocalStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    getLocalStorage(key, fallback = null) {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : fallback;
    }
};

// 현재 로그인 정보 불러오는 함수
const myInfoGet = {
    getStorage() {
        if (localStorage.getItem('myInfo')) {
            return JSON.parse(localStorage.getItem('myInfo'));
        } else {
            return JSON.parse(sessionStorage.getItem('myInfo'));
        }
    }
}

// userList 불러와서 변수에 저장
const userList = store.getLocalStorage("userList", []);
console.log(userList);

const myInfo = myInfoGet.getStorage();//정보 불러오기

// 사용자 입력값에서 HTML 미적용
function escapeHTML(value) {
    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}

// local storage에서 강의 리스트 가져오는 함수
function setLectureList(lectureList) {
    store.setLocalStorage("lectureList", lectureList);
}
function getLectureList() {
    return JSON.parse(localStorage.getItem("lectureList")) || [];
}

function renderLectureData() {
    const params = new URLSearchParams(window.location.search);
    const contentId = params.get("contentId");
    const lectureList = getLectureList();
    const lectureData = lectureList.find(item => item.contentId === Number(contentId));

    function createAfter(contentAfter) {

        return contentAfter.map((item, index) => {
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

    function createCurry(contentCurry) {

        return contentCurry.map((curry, index) => {
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
                    <section class="cd-content-index" id="cd-content-after">수강 후에는...</section>
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

                <button
                    class="cd-btn modal-open-two-btn"
                    id="cd-btn-color1"
                    data-url="/lecture/lectureUpdate/lectureUpdate.html?contentId=${encodeURIComponent(lectureData.contentId)}"
                    data-message="수정하시겠습니까?<br>확인 버튼을 누르면 강의 수정 페이지로 이동합니다."
                >
                    수정하기
                </button>

                <button
                    class="cd-btn modal-open-two-btn"
                    id="cd-btn-color2"
                    data-url="/lecture/lectureContentTotal/LectureContentTotal.html"
                >
                    삭제하기
                </button>
            </article>
        </article>
    `;

    // 미니 nav 에서 커리큘럼 클릭 시 커리큘럼쪽으로 자동 스크롤
    $("#cd-nav-curry").addEventListener("click", () => {
        $("#cd-curry-container").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });

    // 미니 nav 에서 커뮤니티 클릭 시 커뮤니티 창으로 이동
    $("#cd-nav-community").addEventListener("click", () => {
        window.location.href = `/community/index.html?contentId=${encodeURIComponent(lectureData.contentId)}`;
    });

    // 모달 닫기 함수
    function closeModal() {
        const activeModal = $(".active-modal");
        if (activeModal) activeModal.innerHTML = "";
    }

    // 투버튼 모달 열기
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
            if (onConfirm) onConfirm();
            closeModal();
        });

        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // 수정 버튼 이벤트
    function handleUpdate(lectureData) {
        openTwoButtonModal(
            "수정하시겠습니까?<br>확인 버튼을 누르면 강의 수정 페이지로 이동합니다.",
            () => {
                window.location.href = `/lecturer/lecture-update.html?contentId=${lectureData.contentId}`;
            }
        );
    }

    // 삭제 버튼 이벤트
    function handleDelete(lectureData) {
        openTwoButtonModal(
            "삭제하시겠습니까?<br>삭제 후엔 되돌릴 수 없습니다.",
            () => {
                const lectureList = getLectureList();
                const userList = store.getLocalStorage("userList", []);

                // lectureList 에서 contentId가 현재 강의의 contentId와 같은 content의 index 찾기
                const index = lectureList.findIndex(
                    item => item.contentId === lectureData.contentId
                );
                // 해당 index 부터 1개의 content 삭제 즉, 해당 강의 삭제
                lectureList.splice(index, 1);

                // 모든 유저를 순회하여, appliedLecture에 해당 강의와 contentid 가 같은 content 도 삭제
                userList.forEach(user => {
                    if (Array.isArray(user.appliedLecture)) {
                        const appliedIndex = user.appliedLecture.findIndex(
                            item => Number(item.contentId) === targetContentId
                        );

                        if (appliedIndex !== -1) {
                            user.appliedLecture.splice(appliedIndex, 1);
                        }
                    }

                    // 장바구니 내에서도 삭제
                    if (Array.isArray(user.shoppingCart)) {
                        const cartIndex = user.shoppingCart.findIndex(
                            item => Number(item.contentId) === targetContentId
                        );

                        if (cartIndex !== -1) {
                            user.shoppingCart.splice(cartIndex, 1);
                        }
                    }
                });

                setLectureList(lectureList);
                store.setLocalStorage("userList", userList);

                const storageKey = sessionStorage.getItem("myInfo");
                const currentMyInfo = myInfoGet.getStorage();

                if (currentMyInfo) {
                    if (Array.isArray(currentMyInfo.appliedLecture)) {
                        const myAppliedIndex = currentMyInfo.appliedLecture.findIndex(
                            item => Number(item.contentId) === targetContentId
                        );

                        if (myAppliedIndex !== -1) {
                            currentMyInfo.appliedLecture.splice(myAppliedIndex, 1);
                        }
                    }

                    if (Array.isArray(currentMyInfo.shoppingCart)) {
                        const myCartIndex = currentMyInfo.shoppingCart.findIndex(
                            item => Number(item.contentId) === targetContentId
                        );

                        if (myCartIndex !== -1) {
                            currentMyInfo.shoppingCart.splice(myCartIndex, 1);
                        }
                    }

                    if (storageKey === "localStorage") {
                        localStorage.setItem("myInfo", JSON.stringify(currentMyInfo));
                    } else {
                        sessionStorage.setItem("myInfo", JSON.stringify(currentMyInfo));
                    }
                }

                window.location.href = "/lecturer/index.html";
            }
        );
    }

    // 수정 / 삭제 버튼 이벤트
    $("#cd-btn-color1").addEventListener("click", () => handleUpdate(lectureData));
    $("#cd-btn-color2").addEventListener("click", () => handleDelete(lectureData));

}

renderLectureData();

function student() {
    const params = new URLSearchParams(window.location.search);
    const contentId = params.get("contentId");
    const lectureList = getLectureList();
    const lectureData = lectureList.find(item => item.contentId === Number(contentId));
    const userIndex = userList.findIndex(user => user.id === myInfo.id);

    if (myInfo.role === "student") {
        $('#cd-btn-color1').textContent = "장바구니";
        $('#cd-btn-color2').textContent = "신청하기";

        // 모달 닫기 함수
        function closeModal() {
            const activeModal = $(".active-modal");
            if (activeModal) activeModal.innerHTML = "";
        }

        // 투버튼 모달 열기
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
                if (onConfirm) onConfirm();
                closeModal();
            });

            modal.addEventListener("click", (e) => {
                if (e.target === modal) {
                    closeModal();
                }
            });
        }

        // 장바구니 담기 함수
        function handleCart(lectureData) {
            openTwoButtonModal(
                "장바구니에 추가하시겠습니까?",
                () => {
                    const lectureList = getLectureList();
                    const content = lectureList.find(
                        item => item.contentId === lectureData.contentId
                    );

                    const exists = myInfo.shoppingCart.some(
                        item => Number(item.contentId) === Number(content.contentId)
                    );

                    const applied = myInfo.appliedLecture.some(
                        item => item.contentId === content.contentId
                    );
                    console.log(applied);

                    if (exists) {
                        alert("이미 장바구니에 담긴 강의입니다.");
                        return;
                    }

                    if (applied) {
                        alert("이미 신청한 강의입니다.");
                        return;
                    }

                    myInfo.shoppingCart.push(content);
                    sessionStorage.setItem("myInfo", JSON.stringify(myInfo));

                    if (userIndex !== -1) {
                        userList[userIndex].shoppingCart.push(content);
                    }

                    localStorage.setItem("userList", JSON.stringify(userList));
                }
            );
        }

        // 신청하기 함수
        function handleApply(lectureData) {
            // 등록 날짜
            const today = new Date().toISOString().split('T')[0];
            openTwoButtonModal(
                "신청하시겠습니까?",
                () => {
                    const lectureList = getLectureList();
                    const content = lectureList.find(
                        item => item.contentId === lectureData.contentId
                    );

                    const applied = myInfo.appliedLecture.some(
                        item => item.contentId === content.contentId
                    );

                    if (applied) {
                        alert("이미 신청한 강의입니다.");
                        return;
                    }

                    // appliedLecture에 들어갈 값
                    const appliedLectureUpdate = {
                        contentId: content.contentId,
                        appliedDate: today,
                        completeContents: 0
                    }

                    // 강의를 신청하면 sessionStorage 에 신청한 강의의 appliedLecture 값 추가
                    myInfo.appliedLecture.push(appliedLectureUpdate);

                    // sessionStorage 장바구니에 해당 강의가 있으면 장바구니에서 제거
                    const cartIndex = myInfo.shoppingCart.findIndex(
                        item => item.contentId === content.contentId
                    );

                    if (cartIndex !== -1) {
                        myInfo.shoppingCart.splice(cartIndex, 1);
                    }

                    // sessionStorage 에 반영
                    sessionStorage.setItem("myInfo", JSON.stringify(myInfo));

                    // localStorage -> userList 에 신청 강의 추가 및 장바구니에 해당 강의가 있으면 삭제
                    if (userIndex !== -1) {
                        userList[userIndex].appliedLecture.push(appliedLectureUpdate);
                        const userCartIndex = userList[userIndex].shoppingCart.findIndex(
                            item => item.contentId === content.contentId
                        );

                        if (userCartIndex !== -1) {
                            userList[userIndex].shoppingCart.splice(userCartIndex, 1);
                        }
                    }

                    // localStorage 에 반영
                    localStorage.setItem("userList", JSON.stringify(userList));
                }
            );
        }


        $("#cd-btn-color1").addEventListener("click", () => handleCart(lectureData));
        $("#cd-btn-color2").addEventListener("click", () => handleApply(lectureData));
    }
}

student();