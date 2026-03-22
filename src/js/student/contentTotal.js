const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const $lectureCards = $$('.ct-lecture-card');
const $categoryBtns = $$('.ct-category-btn');
const $categoryList = $('.ct-category-list');
const $searchInput = $('.ct-search-input');

function getLectureList() {
    return JSON.parse(localStorage.getItem('lectureList')) || [];
}

function setLectureList(list) {
    localStorage.setItem('lectureList', JSON.stringify(list));
}

// 테스트 데이터
function initLectureData() {
    const list = getLectureList();

    if (!list.length) {
        const cTtestData = [];

        const categories = ['HTML', 'CSS', 'JavaScript', 'Python'];

        for (let i = 1; i <= 20; i++) {
            cTtestData.push({
                userId: 'lct' + ((i % 3) + 1),
                contentId: 'content' + i,
                contentTitle: `강의 제목 ${i}`,
                contentPreview: `강의 설명 ${i}`,
                contentImg: '/src/assets/img/test.jpg',
                category: categories[i % categories.length]
            });
        }

        setLectureList(cTtestData);
    }
}

// 강의 렌더링
function renderLectures() {
    const lectureList = getLectureList();
    const $lectureList = $('.ct-lecture-list');

    lectureList.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('ct-lecture-card');

        card.innerHTML = `
            <div class="ct-lecture-img" style="background-image:url(${item.contentImg})"></div>
            <div class="ct-lecture-info">
                <h2 class="ct-lecture-card-title">${item.contentTitle}</h2>
                <p class="ct-lecture-preview">${item.contentPreview}</p>
                <span class="ct-lecturer-name">${item.userId}</span>
                <span class="ct-lecture-category">${item.category}</span>
            </div>
        `;

        // 클릭 시 상세 페이지 이동
        card.addEventListener('click', () => {
            window.location.href = '/components/contentDetail.html';
        });

        // card.addEventListener('click', () => {
        //     window.location.href = `/components/contentDetail.html?contentId=${item.contentId}`;
        // });

        $lectureList.appendChild(card);
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

    initLectureData();
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