const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

const form = $("#lecture-form");
const formCurry = $(".le-form-curry");
const activeModal = $(".active-modal");
const cancelBtn = $("#le-cancel-btn");
const thumbnailInput = $("#le-content-img");
const thumbnailPreview = $(".le-content-img");
const thumbnailLabel = $("#le-img-input");
const levelSelect = $(".le-content-level");
const priceInput = $("#le-content-price");
const timeInput = $("#le-content-time");

// localStorage 저장/조회용 객체
const store = {
    setLocalStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    getLocalStorage(key) {
        return JSON.parse(localStorage.getItem(key));
    }
};

// 현재 로그인 정보 불러오는 함수
const myInfoGet = {
    getStorage() {
        if (localStorage.getItem("myInfo")) {
            return JSON.parse(localStorage.getItem("myInfo"));
        } else {
            return JSON.parse(sessionStorage.getItem("myInfo"));
        }
    }
};

const myInfo = myInfoGet.getStorage();

// 강의 리스트 불러오는 함수
function getLectureList() {
    return JSON.parse(localStorage.getItem("lectureList")) || [];
}

let currentUserId = myInfo.id;
let currentUserName = myInfo.userName;

// URL에서 contentId 가져오는 함수
function getContentIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get("contentId");
}

const targetContentId = getContentIdFromUrl();
console.log('?', targetContentId);

// 수정할 강의 찾는 함수
function getTargetLecture() {
    const lectureList = getLectureList();
    return lectureList.find((lecture) => lecture.contentId === Number(targetContentId));
}

// 숫자만 입력가능하게 하는 함수
function inputNumber(inputElement) {
    inputElement.addEventListener("input", () => {
        inputElement.value = inputElement.value.replace(/[^0-9]/g, "");
    });
}

// 가격, 강의 총 시간에 적용
inputNumber(priceInput);
inputNumber(timeInput);

// 강의 썸네일 미리보기 적용
thumbnailInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
        thumbnailPreview.src = e.target.result;
        thumbnailLabel.textContent = "";
    };

    reader.readAsDataURL(file);
});


// 난이도 선택 시 선택 스타일 클래스 추가
levelSelect.addEventListener("change", () => {
    levelSelect.classList.add("selected");
});


// 대제목 인덱스 부여
function getNextBigIndex() {
    return $$(".le-content-curry").length + 1;
}

// 각 소제목 인덱스 부여
function getNextSmallIndex(groupElement) {
    return $$(".le-curry-small", groupElement).length + 1;
}

// 소제목 HTML 생성
function createSmallHTML(bigIndex, smallIndex, lessonTitle) {
    const lessonIndex = `${bigIndex}-${smallIndex}`;

    return `
        <div class="le-curry-small">
            <p class="le-input-title">강의 동영상</p>
            <div class="le-small-container">
                <div class="le-text-container">
                    <label class="le-input-title" for="le-lesson-title-${lessonIndex}">소제목 ${lessonIndex}*</label><br>
                    <input
                        type="text"
                        name="le-lesson-title-${lessonIndex}"
                        class="le-lesson-title"
                        id="le-lesson-title-${lessonIndex}"
                        value="${lessonTitle}"
                        required
                    >
                </div>
                <div class="le-lesson-img">
                    <label class="le-input-title">동영상 파일*</label><br>
                    <label for="le-lesson-img-${lessonIndex}" class="le-lesson-input">첨부</label>
                    <input
                        class="le-img-data"
                        id="le-lesson-img-${lessonIndex}"
                        name="le-lesson-img-${lessonIndex}"
                        type="file"
                        required
                    >
                </div>
            </div>
        </div>
    `;
}

// 대제목 HTML 생성
function createBigHTML(bigIndex, bigTitle = "", lessons) {
    let lessonHTML = lessons
        .map((lesson, index) =>
            createSmallHTML(
                bigIndex,
                index + 1,
                lesson.lessonsTitle || ""
            )
        )
        .join("");

    return `
        <div class="le-add-big">
            <div class="le-curry-big">
                <label class="le-input-title" for="le-content-curry${bigIndex}">대제목${bigIndex}*</label><br>
                <input
                    type="text"
                    name="le-content-curry"
                    class="le-content-curry"
                    id="le-content-curry${bigIndex}"
                    value="${bigTitle}"
                    required
                >
            </div>

            ${lessonHTML}

            <div class="le-add-title le-add-small">+ 소제목 추가</div>
        </div>
    `;
}

// 대제목, 소제목 추가
formCurry.addEventListener("click", (e) => {
    if (e.target.id === "le-add-big") {
        const nextBigIndex = getNextBigIndex();
        e.target.insertAdjacentHTML("beforebegin", createBigHTML(nextBigIndex));
        removeErrorLine();
        return;
    }

    if (e.target.classList.contains("le-add-small")) {
        const currentGroup = e.target.closest(".le-add-big");
        const bigInput = $(".le-content-curry", currentGroup);
        const bigIndex = bigInput.id.replace("le-content-curry", "");
        const nextSmallIndex = getNextSmallIndex(currentGroup);

        e.target.insertAdjacentHTML(
            "beforebegin",
            createSmallHTML(bigIndex, nextSmallIndex)
        );

        removeErrorLine();
    }
});

// 모달 닫기 함수
function closeModal() {
    activeModal.innerHTML = "";
}

// 원버튼 모달 열기 함수
function openOneButtonModal(message, onConfirm) {
    activeModal.innerHTML = `
        <div class="modal">
            <div class="modal-container">
                <div class="modal-top">${message}</div>
                <div class="modal-bottom modal-check">확인</div>
            </div>
        </div>
    `;

    const modal = $(".modal", activeModal);
    const checkBtn = $(".modal-check", modal);

    modal.style.display = "flex";

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

// 투버튼 모달 열기 함수
function openTwoButtonModal(message, onConfirm, onCancel) {
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

    closeBtn.addEventListener("click", () => {
        closeModal();
        if (onCancel) onCancel();
    });

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

// 동적으로 추가된 input 값까지 모두 읽어 배열로 반환하는 함수
function getAllInputs() {
    const contentData = [
        $("#le-category"),
        $("#le-content-title"),
        $("#le-content-level"),
        $("#le-content-price"),
        $("#le-content-time"),
        $("#le-content-preview"),
        $("#le-content-after"),
        $("#le-content-simple")
    ];

    const curryBigTitles = [...$$(".le-content-curry")];
    const currySmallTitles = [...$$(".le-lesson-title")];
    const curryFiles = [...$$(".le-img-data")];

    return [
        ...contentData,
        ...curryBigTitles,
        ...currySmallTitles,
        ...curryFiles
    ];
}

// 미입력 input 값들 중 가장 위 input 값을 가져오는 함수
function getFirstEmptyInput() {
    const allInputs = getAllInputs();

    for (let input of allInputs) {
        if (input.tagName === "SELECT") {
            if (!input.value) return input;
            continue;
        }

        if (input.type === "file") {
            if (!input.files || input.files.length === 0) return input;
            continue;
        }

        if (!input.value.trim()) return input;
    }

    return null;
}

// 미입력 경고 라인 함수
function showErrorLine() {
    const allInputs = getAllInputs();

    allInputs.forEach((input) => {
        if (input.tagName === "SELECT") {
            if (!input.value) {
                input.classList.add("error");
            }
            return;
        }

        if (input.type === "file") {
            if (!input.files || input.files.length === 0) {
                input.classList.add("error");
            }
            return;
        }

        if (!input.value.trim()) {
            input.classList.add("error");
        }
    });
}

// 입력 시 경고 라인 제거 함수
function removeErrorLine() {
    const allInputs = getAllInputs();

    allInputs.forEach((input) => {
        if (input.dataset.bound === "true") return;

        input.addEventListener("input", () => {
            input.classList.remove("error");
        });

        input.addEventListener("change", () => {
            input.classList.remove("error");
        });

        input.dataset.bound = "true";
    });
}

// 상시 호출
removeErrorLine();

// 포커스 함수
function focusInput(input) {

    input.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    input.focus();
}

// 썸네일/선택 상태 초기화
function resetThumbnailUI() {
    thumbnailPreview.removeAttribute("src");
    thumbnailLabel.textContent = "+";
    levelSelect.classList.remove("selected");
}

// 커리큘럼 데이터 수집 함수
function collectCurryData() {
    const groups = $$(".le-add-big");

    return groups.map((group) => {
        const bigTitle = $(".le-content-curry", group).value.trim();

        const lessons = [...group.querySelectorAll(".le-curry-small")].map((small) => {
            const lessonTitle = $(".le-lesson-title", small).value.trim();
            const fileInput = $(".le-img-data", small);

            return {
                lessonsTitle: lessonTitle,
                lessonsvideo: fileInput.files[0].name
            };
        });

        return {
            title: bigTitle,
            lessons: lessons
        };
    });
}

// 폼 전체 데이터 수집
function collectLectureData(originalLecture) {
    // 수정 날짜
    const today = new Date().toISOString().split('T')[0];
    return {
        id: originalLecture.id,
        contentId: originalLecture.contentId,
        contentImg: thumbnailPreview.getAttribute("src"),
        contentTitle: $("#le-content-title").value.trim(),
        contentLevel: $("#le-content-level").value,
        contentTime: Number(timeInput.value),
        contentPrice: Number(priceInput.value),
        contentPreview: $("#le-content-preview").value.trim(),
        contentSimple: $("#le-content-simple").value.trim(),
        contentAfter: $("#le-content-after").value
            .split("\n")
            .map((item) => `${item.trim()}`),
        contentCurry: collectCurryData(),
        category: $("#le-category").value,
        userName: originalLecture.userName,
        lessonNumber: originalLecture.lessonNumber,
        classNumber: originalLecture.classNumber,
        registerDate: today
    };
}

// 강의 수정 저장
function updateLectureData() {
    const lectureList = store.getLocalStorage("lectureList", []);
    const originalLecture = getTargetLecture();

    if (!originalLecture) return;

    const updatedLecture = collectLectureData(originalLecture);

    const updatedLectureList = lectureList.map((lecture) => {
        if (lecture.contentId === Number(targetContentId)) {
            return updatedLecture;
        }
        return lecture;
    });

    store.setLocalStorage("lectureList", updatedLectureList);
}

// 수정 버튼 처리
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const firstEmptyInput = getFirstEmptyInput();

    if (firstEmptyInput) {
        showErrorLine();
        openOneButtonModal("필수 정보를 입력해주세요.", () => {
            focusInput(firstEmptyInput);
        });
        return;
    }

    openTwoButtonModal(
        "수정하시겠습니까?",
        () => {
            updateLectureData();
            window.location.href = "/lecturer/index.html";
        },
        () => {
            // 취소 버튼 클릭 시 모달창 사라지고, 작성 중인 폼 유지
        }
    );
});

// 취소 버튼 처리
cancelBtn.addEventListener("click", () => {
    openTwoButtonModal(
        "수정을 그만두시겠습니까?",
        () => {
            window.location.href = `../../components/content-detail.html?contentId=${targetContentId}`;
        },
        () => {
            // 취소 모달에서 취소 버튼 클릭 시 모달창 사라지고, 작성 중인 폼 유지
        }
    );
});

// 수정 대상 강의 데이터를 폼에 채우는 함수
function fillLectureForm() {
    const lecture = getTargetLecture();

    if (!lecture) {
        openOneButtonModal("수정할 강의 정보를 찾을 수 없습니다.", () => {
            window.location.href = "/lecturer/index.html";
        });
        return;
    }

    $("#le-category").value = lecture.category;
    $("#le-content-title").value = lecture.contentTitle;
    $("#le-content-level").value = lecture.contentLevel;
    $("#le-content-price").value = lecture.contentPrice;
    $("#le-content-time").value = lecture.contentTime;
    $("#le-content-preview").value = lecture.contentPreview;
    $("#le-content-after").value = (lecture.contentAfter).join("\n");
    $("#le-content-simple").value = lecture.contentSimple;


    levelSelect.classList.add("selected");

    thumbnailPreview.removeAttribute("src");
    thumbnailLabel.textContent = "+";

    $("#le-add-big", formCurry).remove();

    $$(".le-add-big", formCurry).forEach((group) => group.remove());


    lecture.contentCurry.forEach((curry, index) => {
        formCurry.insertAdjacentHTML(
            "beforeend",
            createBigHTML(index + 1, curry.title, curry.lessons)
        );
    });

    formCurry.insertAdjacentHTML(
        "beforeend",
        `<div class="le-add-title" id="le-add-big">+ 대제목 추가</div>`
    );

    removeErrorLine();
}
// 페이지 진입 시 기존 강의 데이터 불러오기
fillLectureForm();