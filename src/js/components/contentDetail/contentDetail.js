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