const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

const form = $("#lecture-form");
const formContainer = $(".le-form-container");
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
    getLocalStorage(key, fallback = null) {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : fallback;
    }
};
// 숫자만 입력가능하게 하는 함수
function allowOnlyNumbers(inputElement) {
    inputElement.addEventListener("input", () => {
        inputElement.value = inputElement.value.replace(/[^0-9]/g, "");
    });
}

// 가격, 강의 총 시간 적용
allowOnlyNumbers(priceInput);
allowOnlyNumbers(timeInput);


// 강의 썸네일 미리보기 적용
if (thumbnailInput) {
    thumbnailInput.addEventListener("change", (e) => {
        const file = e.target.files[0];

        if (!file) return;

        const reader = new FileReader();

        reader.onload = (event) => {
            thumbnailPreview.src = event.target.result;
            thumbnailLabel.textContent = "";
        };

        reader.readAsDataURL(file);
    });
}

// 난이도 선택 시 선택 스타일 클래스 추가
if (levelSelect) {
    levelSelect.addEventListener("change", () => {
        levelSelect.classList.add("selected");
    });
}

// 대제목 인덱스 부여
function getNextBigIndex() {
    return $$(".le-content-curry").length + 1;
}

// 각 소제목 인덱스 부여
function getNextSmallIndex(groupElement) {
    return $$(".le-curry-small", groupElement).length + 1;
}

// 소제목 HTML 생성
function createSmallHTML(bigIndex, smallIndex) {
    const lessonNumber = `${bigIndex}-${smallIndex}`;

    return `
        <div class="le-curry-small">
            <p class="le-input-title">강의 동영상</p>
            <div class="le-small-container">
                <div class="le-text-container">
                    <label class="le-input-title" for="le-lesson-title-${lessonNumber}">소제목 ${lessonNumber}*</label><br>
                    <input
                        type="text"
                        name="le-lesson-title-${lessonNumber}"
                        class="le-lesson-title"
                        id="le-lesson-title-${lessonNumber}"
                        required
                    >
                </div>
                <div class="le-lesson-img">
                    <label class="le-input-title">동영상 파일*</label><br>
                    <label for="le-lesson-img-${lessonNumber}" class="le-lesson-input">첨부</label>
                    <input
                        class="le-img-data"
                        id="le-lesson-img-${lessonNumber}"
                        name="le-lesson-img-${lessonNumber}"
                        type="file"
                        required
                    >
                </div>
            </div>
        </div>
    `;
}

// 대제목 HTML 생성
function createBigHTML(bigIndex) {
    return `
        <div class="le-add-big">
            <div class="le-curry-big">
                <label class="le-input-title" for="le-content-curry${bigIndex}">대제목${bigIndex}*</label><br>
                <input
                    type="text"
                    name="le-content-curry"
                    class="le-content-curry"
                    id="le-content-curry${bigIndex}"
                    required
                >
            </div>

            ${createSmallHTML(bigIndex, 1)}
            ${createSmallHTML(bigIndex, 2)}

            <div class="le-add-title le-add-small">+ 소제목 추가</div>
        </div>
    `;
}

// 대제목,소제목 추가
formContainer.addEventListener("click", (e) => {
    if (e.target.id === "le-add-big") {
        const nextBigIndex = getNextBigIndex();
        e.target.insertAdjacentHTML("beforebegin", createBigHTML(nextBigIndex));
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

// 첫 번째 미입력 input 위치 찾는 함수
function getAllRequiredFields() {
    const baseFields = [
        $("#le-category"),
        $("#le-content-title"),
        $("#le-content-level"),
        $("#le-content-price"),
        $("#le-content-time"),
        $("#le-content-preview"),
        $("#le-content-after"),
        $("#le-content-simple")
    ];

    const curriculumBigFields = [...$$(".le-content-curry")];
    const curriculumSmallFields = [...$$(".le-lesson-title")];
    const curriculumFileFields = [...$$(".le-img-data")];

    return [
        ...baseFields,
        ...curriculumBigFields,
        ...curriculumSmallFields,
        ...curriculumFileFields
    ].filter(Boolean);
}

function getFirstInvalidField() {
    const requiredFields = getAllRequiredFields();

    for (let field of requiredFields) {
        if (field.tagName === "SELECT") {
            if (!field.value) return field;
            continue;
        }

        if (field.type === "file") {
            if (!field.files || field.files.length === 0) return field;
            continue;
        }

        if (!field.value.trim()) return field;
    }

    return null;
}

// 미입력 경고 표시
function showErrors() {
    const fields = getAllRequiredFields();
    
    fields.forEach((field) => {
        
        // SELECT
        if (field.tagName === "SELECT") {
            if (!field.value) {
                field.classList.add("error");
            }
            return;
        }
        
        // FILE
        if (field.type === "file") {
            if (!field.files || field.files.length === 0) {
                field.classList.add("error");
            }
            return;
        }
        
        // 일반 input
        if (!field.value.trim()) {
            field.classList.add("error");
        }
    });
}

// 입력 시 경고 표시 제거
function removeErrorOnInput() {
    const fields = getAllRequiredFields();
    
    fields.forEach((field) => {
        
        field.addEventListener("input", () => {
            field.classList.remove("error");
        });
        
        field.addEventListener("change", () => {
            field.classList.remove("error");
        });
    });
}
removeErrorOnInput();

// 포커스 함수
function focusField(field) {
    if (!field) return;

    // 먼저 화면 위치 이동
    field.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    // 바로 포커스
    field.focus();
}

// 썸네일/선택 상태 초기화
function resetThumbnailUI() {
    thumbnailPreview.removeAttribute("src");
    thumbnailLabel.textContent = "+";
    levelSelect.classList.remove("selected");
}

// 커리큘럼 데이터 수집
function collectCurryData() {
    const groups = $$(".le-add-big");

    return groups.map((group) => {

        const bigTitle = group.querySelector(".le-content-curry")?.value.trim();

        const lessons = [...group.querySelectorAll(".le-curry-small")].map((small) => {

            const lessonTitle = small.querySelector(".le-lesson-title")?.value.trim();
            const fileInput = small.querySelector(".le-img-data");

            return {
                lessonsTitle: lessonTitle,
                lessonsvideo: fileInput?.files[0]?.name || ""
            };
        });

        return {
            title: bigTitle,
            lessons: lessons
        };
    });
}

function getContentId() {
    const list = store.getLocalStorage("lectureContentList", []);

    if (list.length === 0) return "content1";

    const numbers = list.map(item => {
        return Number(item.contentId.replace("content", ""));
    });

    const max = Math.max(...numbers);

    return `content${max + 1}`;
}

// 폼 전체 데이터 수집
function collectLectureData() {
    return {
        lecturerId: "lct1",
        contentId: getContentId(), // 고유값
        contentImg: thumbnailPreview.getAttribute("src") || "",
        contentTitle: $("#le-content-title").value.trim(),
        contentLevel: $("#le-content-level").value,
        contentTime: Number(timeInput.value),
        contentPrice: Number(priceInput.value),
        contentPreview: $("#le-content-preview").value.trim(),
        contentSimple: $("#le-content-simple").value.trim(),
        // 🔥 배열로 변환 (줄바꿈 기준)
        contentAfter: $("#le-content-after").value
            .split("\n")
            .map((item, index) => `${index + 1}. ${item.trim()}`)
            .filter(Boolean),

        contentCurry: collectCurryData(),
        category: $("#le-category").value,
        userName: "강사명" // 임시 (나중에 로그인 연동)
    };
}

// 강의 목록에 새 강의 추가 저장
function saveLectureData() {
    const lectureList = store.getLocalStorage("lectureList", []);
    const newLecture = collectLectureData();

    lectureList.push(newLecture);
    store.setLocalStorage("lectureList", lectureList);
}

// 등록 처리
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const firstInvalidField = getFirstInvalidField();

    // 필수값이 비어있으면 입력 요구 모달 표시
    if (firstInvalidField) {
        showErrors();
        openOneButtonModal("필수 정보를 입력해주세요.", () => {
            focusField(firstInvalidField);
        });
        return;
    }

    // 필수값이 모두 있으면 등록 확인 모달 표시
    openTwoButtonModal(
        "등록하시겠습니까?",
        () => {
            // 확인 버튼 클릭 시 
            saveLectureData();
            form.reset();
            resetThumbnailUI();
            window.location.href = "../lectureContentTotal/lectureContentTotal.html";
        },
        () => {
            // 취소 버튼 클릭 시 모달창 사라지고, 작성 중인 폼 유지
        }
    );
});

// 취소 버튼 처리
cancelBtn.addEventListener("click", () => {
    openTwoButtonModal(
        "강의 등록을 그만두시겠습니까?",
        () => {
            form.reset();
            resetThumbnailUI();

            // 강의 등록 취소 후 목록 페이지로 이동
            window.location.href = "../lectureContentTotal/lectureContentTotal.html";
        },
        () => {
            // 취소 모달에서 취소 버튼 클릭 시 모달창 사라지고, 작성 중인 폼 유지
        }
    );
});
