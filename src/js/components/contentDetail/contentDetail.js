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

// 미니 nav 에서 커리큘럼 클릭 시 커리큘럼쪽으로 자동 스크롤
$('#cd-nav-curry').addEventListener('click', () => {
    $('#cd-curry-container').scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
})

// 미니 nav 에서 커뮤니티 클릭 시 커뮤니티 창으로 이동
$('#cd-nav-community').addEventListener('click', () => {
    window.location.href = '/components/community/comunity.html';
});

function getLectureList() {
    return JSON.parse(localStorage.getItem('lectureList')) || [];
}

function renderLectureData() {
    const params = new URLSearchParams(window.location.search);
    const contentId = params.get("contentId");
    const lectureList = getLectureList();
    const lectureData = lectureList.find(item => item.contentId === contentId);
    console.log('?', lectureData);
    console.log(lectureData.contentTitle);

    $('.cd-side-margin').innerHTML = `
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
                    <section id="cd-content-title">${lectureData.contentTitle}</section>
                    <p id="cd-content-preview">${lectureData.contentPreview}</p>
                    <article id="cd-category">HTML</article>
                    <article id="cd-after-container">
                        <section class="cd-content-index" id="cd-content-after">수강 후에는...</section>
                        <article class="cd-content-container" id="cd-after-container1">
                            <section class="cd-number" id="cd-after-number1">1</section>
                            <section class="cd-content" id="cd-after-content1">${lectureData.contentAfter[0]}</section>
                        </article>
                        <article class="cd-content-container" id="cd-after-container2">
                            <section class="cd-number" id="cd-after-number2">2</section>
                            <section class="cd-content" id="cd-after-content2">${lectureData.contentAfter[1]}</section>
                        </article>
                        <article class="cd-content-container" id="cd-after-container3">
                            <section class="cd-number" id="cd-after-number3">3</section>
                            <section class="cd-content" id="cd-after-content3">${lectureData.contentAfter[2]}</section>
                        </article>
                    </article>
                    <article id="cd-simple-container">
                        <section class="cd-content-index" id="cd-content-simple">강의 요약</section>
                        <article class="cd-simple-content" id="cd-simple-content">이 강의는 기본적인 HTML, CSS, JS에 대한 지식을 다룹니다.
                            이 강의는 기본적인 HTML, CSS, JS에 대한 지식을 다룹니다.이 강의는 기본적인 HTML, CSS, JS에 대한 지식을 다룹니다.
                            이 강의는 기본적인 HTML, CSS, JS에 대한 지식을 다룹니다.이 강의는 기본적인 HTML, CSS, JS에 대한 지식을 다룹니다.
                        </article>
                    </article>
                    <article id="cd-curry-container">
                        <section class="cd-content-index" id="cd-content-curry">커리큘럼</section>
                        <article class="cd-content-container" id="cd-curry-container1">
                            <section class="cd-number" id="cd-curry-number1">1</section>
                            <section class="cd-content cd-curry-content" id="cd-curry-content1">HTML</section>
                        </article>
                        <ul class="cd-curry-list" id="cd-curry-list1">
                            <li>1번 태그</li>
                            <li>2번 태그</li>
                            <li>3번 태그</li>
                        </ul>
                        <article class="cd-content-container" id="cd-curry-container2">
                            <section class="cd-number" id="cd-curry-number2">2</section>
                            <section class="cd-content cd-curry-content" id="cd-curry-content2">CSS</section>
                        </article>
                        <ul class="cd-curry-list" id="cd-curry-list2">
                            <li>1번 스타일</li>
                            <li>2번 스타일</li>
                            <li>3번 스타일</li>
                        </ul>
                        <article class="cd-content-container" id="cd-curry-container3">
                            <section class="cd-number" id="cd-curry-number3">3</section>
                            <section class="cd-content cd-curry-content" id="cd-curry-content3">JS</section>
                        </article>
                        <ul class="cd-curry-list" id="cd-curry-list3">
                            <li>변수</li>
                            <li>함수</li>
                            <li>객체</li>
                        </ul>
                    </article>
                </article>
                <article class="cd-content-box">
                    <section id="price">₩80,000</section>
                    <article class="cd-content-info">
                        <section id="cd-lecturer-name">강사명: </section>
                        <section id="cd-use-time">이용 기간: 무제한</section>
                        <section id="cd-content-time">강의 시간: </section>
                        <section id="cd-content-level">난이도: </section>
                    </article>
                    <button class="cd-btn modal-open-two-btn" id="cd-btn-color1"
                    data-url="/lecture/lectureUpdate/lectureUpdate.html"
                    data-message="
                    수정하시겠습니까?<br>
                    확인 버튼을 누르면 강의 수정 페이지로 이동합니다.">수정하기</button>
                    <button class="cd-btn modal-open-two-btn" id="cd-btn-color2" 
                    data-url="/lecture/lectureContentTotal/LectureContentTotal.html">삭제하기</button>
                </article>
            </article>
        `;
}
renderLectureData();

// card.addEventListener('click', () => {
//     window.location.href = `/components/contentDetail.html?contentId=${item.contentId}`;
// });