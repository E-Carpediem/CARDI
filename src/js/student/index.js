const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const $lectureCards = $$('.ct-lecture-card');
const $categoryBtns = $$('.ct-category-btn');
const $categoryList = $('.ct-category-list');
const $searchInput = $('.ct-search-input');

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

const myInfo = myInfoGet.getStorage();//정보 불러오기
console.log(myInfo);

function getLectureList() {
    return JSON.parse(localStorage.getItem('lectureList')) || [];
}

function setLectureList(list) {
    localStorage.setItem('lectureList', JSON.stringify(list));
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
    const lectureList = getLectureList();

    lectureList.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('ct-lecture-card');

        card.innerHTML = `
            <div class="ct-lecture-img" style="background-image:url(${item.contentImg})"></div>
            <div class="ct-lecture-info">
                <h2 class="ct-lecture-card-title">${escapeHTML(item.contentTitle)}</h2>
                <p class="ct-lecture-preview">${escapeHTML(item.contentPreview)}</p>
                <span class="ct-lecturer-name">${escapeHTML(item.userId)}</span>
                <span class="ct-lecture-category">${item.category}</span>
            </div>
        `;

        card.addEventListener('click', () => {
            window.location.href = `/components/content-detail.html?contentId=${item.contentId}`;
        });

        $('.ct-lecture-list').insertAdjacentElement('afterbegin', card);
    });

    filterCards();
}

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
    const cards = $$('.ct-lecture-card');
    let visibleCount = 0;

    cards.forEach(card => {
        const title = card.querySelector('.ct-lecture-card-title').textContent.toLowerCase();
        const cardCategory = card.querySelector('.ct-lecture-category').textContent.trim();

        const matchKeyword = keyword === '' || title.includes(keyword);
        const matchCategory = category === '전체' || cardCategory === category;

        if (matchKeyword && matchCategory) {
            card.style.display = 'block';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });

    // '일치하는 강의가 없습니다.'
    const $noResults = $('.ct-no-results');
    $noResults.style.display = visibleCount === 0 ? 'block' : 'none';
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
        const keyword = $searchInput.value.trim();
        updateQueryParams({ keyword });
    }
});

//카테고리 버튼 클릭
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

// 페이지 초기화
window.addEventListener('DOMContentLoaded', () => {

    renderLectures();

    $searchInput.value = '';

    // 모든 카테고리 버튼에서 active 제거
    $categoryBtns.forEach(btn => btn.classList.remove('active'));

    // '전체' 버튼만 active 적용
    $categoryBtns.forEach(btn => {
        if (btn.textContent.trim() === '전체') {
            btn.classList.add('active');
        }
    });

    // URL 초기화
    window.history.replaceState({}, '', window.location.pathname);
});
// 다른 페이지에서 강의 추가 시 자동 반영
window.addEventListener('storage', (e) => {
    if (e.key === 'lectureList') {
        renderLectures();
    }
});