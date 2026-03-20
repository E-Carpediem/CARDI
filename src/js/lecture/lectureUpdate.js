const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector);

// 저장소 객체 (데이터 저장 및 읽어오는 기능)
const store = {
    setLocalStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    getLocalStorage(key) {
        return JSON.parse(localStorage.getItem(key));
    }
}

// 강의 동영상 썸네일 추가 및 적용
if ($('#le-content-img') !== null) {
    $('#le-content-img').addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                $('.le-content-img').src = event.target.result;
            };
            reader.readAsDataURL(file);
            $('#le-img-input').innerHTML = "";
        }
    })
}

// 난이도 선택 시 글꼴 변경
$(".le-content-level").addEventListener("change", () => {
    $(".le-content-level").classList.add("selected");
});


// 소제목 추가, 대제목 추가 기능
const formContainer = $(".le-form-container");

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

formContainer.addEventListener("click", (e) => {
    if (e.target.id === "le-add-big") {
        console.log(e.target.id);
        const nextBigIndex = getNextBigIndex();
        e.target.insertAdjacentHTML("beforebegin", createBigHTML(nextBigIndex));
        return;
    }

    if (e.target.classList.contains("le-add-small")) {
        console.log(e.target.classList.contains("le-add-small"));
        const currentGroup = e.target.closest(".le-add-big");
        console.log('?',currentGroup);
        const bigInput = currentGroup.querySelector(".le-content-curry");
        console.log('??',bigInput);
        const bigIndex = bigInput.id.replace("le-content-curry", "");
        console.log('???',bigIndex);
        const nextSmallIndex = getNextSmallIndex(currentGroup);
        console.log('????',nextSmallIndex);

        e.target.insertAdjacentHTML(
            "beforebegin",
            createSmallHTML(bigIndex, nextSmallIndex)
        );
    }
});

function getNextBigIndex() {
    return $$(".le-content-curry").length + 1;
}

function getNextSmallIndex(groupElement) {
    return groupElement.querySelectorAll(".le-curry-small").length + 1;
}



/*요구사항 명세
0. 강의 수정 페이지에서는 폼에 기존 강의의 모든 값을 받아와야 한다.
1. 강의 정보를 모두 입력 후 수정하기 버튼을 누르면 모달창이 나타나고,
모달창에서 취소 버튼을 누르면 작성중인 폼으로 돌아온다.
모달창에서 확인 버튼을 누르면 강의가 수정되고, 강의 상세 조회 페이지로 넘어가서 확인할 수 있다.

2. 강의 정보를 모두 입력하지 않고 등록하기 버튼을 누르면 모달창이 나타나지 않는다.

3. 취소 버튼을 누르면 강의 수정을 그만두시겠습니까? 라는 모달창이 나타나고,
모달창에서 취소 버튼을 누르면 작성중인 폼으로 돌아온다.
모달창에서 확인 버튼을 누르면 강의 수정이 취소되고, 기존의 강의 상세 페이지로 넘어간다.*/

// 강의 동영상 썸네일 추가 및 적용