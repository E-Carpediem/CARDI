const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const $categoryBtns = $$('.lct-category-btn');
const $categoryList = $('.lct-category-list');
const $searchInput = $('.lct-search-input');
const $lectureList = $('.lct-lecture-list');
const $newLectureBtn = $('.lct-new-lecture');

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

myInfoGet.getStorage();//정보 불러오기
console.log('?', myInfoGet.getStorage());

// 강의 리스트 불러오는 함수
function getLectureList() {
    return JSON.parse(localStorage.getItem("lectureList")) || [];
}

const lectureList = getLectureList();
let currentUser = myInfoGet.find(m => m.id == lectureList.id);

if (!currentUser) {
    currentUser = {
        role: 'lecturer',
        id: 'lct1',
        userName: '김강사'
    };
}

// 강사 아니면 차단
if (currentUser.role !== 'lecturer') {
    window.location.replace('/');
}

// 강의 데이터
function getLectureList() {
    return JSON.parse(localStorage.getItem('lectureList')) || [];
}

// 내 강의만 필터링
function getMyLectures() {
    const lectureList = getLectureList();
    return lectureList.filter(lec => lec.id === currentUser.id);
}

// 사용자 입력값에서 HTML 미적용
function escapeHTML(value) {
    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}

// 강의 렌더링
function renderLectures() {
    const lectureList = getMyLectures();

    // 기존 카드 제거 (+ 버튼 제외)
    $lectureList.querySelectorAll('.lct-lecture-card').forEach(el => el.remove());

    lectureList.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('lct-lecture-card');

        card.innerHTML = `
            <div class="lct-lecture-img" style="background-image:url(${item.contentImg})"></div>
            <div class="lct-lecture-info">
                <h2 class="lct-lecture-card-title">${escapeHTML(item.contentTitle)}</h2>
                <p class="lct-lecture-preview">${escapeHTML(item.contentPreview)}</p>
                <span class="lct-lecturer-name">${escapeHTML(item.userName)}</span>
                <span class="lct-lecture-category">${item.category}</span>
            </div>
        `;

        // // 클릭 시 상세 페이지 이동
        // card.addEventListener('click', () => {
        //     window.location.href = '/components/contentDetail.html';
        // });

        card.addEventListener('click', () => {
            window.location.href = `/components/contentDetail.html?contentId=${item.contentId}`;
        });

        $('.lct-new-lecture').insertAdjacentElement('afterend', card);
    });

    filterCards();
}

// 쿼리 파라미터 가져오기
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        category: params.get('category') || '전체',
        keyword: (params.get('keyword') || '').toLowerCase()
    };
}

// 카드 필터링
function filterCards() {
    const { category, keyword } = getQueryParams();
    const cards = $$('.lct-lecture-card');

    cards.forEach(card => {
        const title = card.querySelector('.lct-lecture-card-title').textContent.toLowerCase();
        const cardCategory = card.querySelector('.lct-lecture-category').textContent.trim();

        const matchKeyword = keyword === '' || title.includes(keyword);
        const matchCategory = category === '전체' || cardCategory === category;

        card.style.display = (matchKeyword && matchCategory) ? 'block' : 'none';
    });
}

// URL 업데이트 및 필터링
function updateQueryParams(newParams) {
    const params = new URLSearchParams(window.location.search);

    Object.keys(newParams).forEach(key => {
        if (newParams[key]) {
            params.set(key, newParams[key]);
        } else {
            params.delete(key);
        }
    });

    // URL 갱신 + 필터 적용
    window.history.pushState({}, '', '?' + params.toString());
    filterCards();
}

// 검색창 Enter 이벤트
$searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        const keyword = $searchInput.value.trim();
        updateQueryParams({ keyword });
    }
});

// 카테고리 버튼 클릭
$categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.textContent.trim();

        // 버튼 active 상태 토글
        $categoryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        updateQueryParams({ category });
    });
});

//카테고리 리스트 가로 스크롤
$categoryList.addEventListener('wheel', (event) => {
    $categoryList.scrollLeft += event.deltaY;
});

// 강의 등록 이동
$newLectureBtn.addEventListener('click', () => {
    window.location.href = '/lecture/lectureEnroll/lectureEnroll.html';
});

// 페이지 초기화
window.addEventListener('DOMContentLoaded', () => {

    renderLectures();

    // 검색창 초기화
    $searchInput.value = '';

    // 모든 카테고리 버튼에서 active 제거
    $categoryBtns.forEach(btn => btn.classList.remove('active'));

    // '전체' 버튼만 active 적용
    $categoryBtns.forEach(btn => {
        if (btn.textContent.trim() === '전체') {
            btn.classList.add('active');
        }
    });

    // URL 쿼리스트링 제거
    const params = new URLSearchParams(window.location.search);
    params.delete('category');
    params.delete('keyword');
    window.history.replaceState({}, '', window.location.pathname);
});

// 다른 페이지에서 강의 추가 시 자동 반영
window.addEventListener('storage', (e) => {
    if (e.key === 'lectureList') {
        renderLectures();
    }
});