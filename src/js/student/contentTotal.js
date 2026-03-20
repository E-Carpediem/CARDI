const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const $lectureCards = $$('.ct-lecture-card');
const $categoryBtns = $$('.ct-category-btn');
const $categoryList = $('.ct-category-list');
const $searchInput = $('.ct-search-input');


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
    let visibleCount = 0;

    $lectureCards.forEach(card => {
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
    const $noResults = document.querySelector('.ct-no-results');
    if (visibleCount === 0) {
        $noResults.style.display = 'block';
    } else {
        $noResults.style.display = 'none';
    }
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

    // 모든 카드 표시
    $lectureCards.forEach(card => {
        card.style.display = 'block';
    });

    // URL 쿼리스트링 제거
    const params = new URLSearchParams(window.location.search);
    params.delete('category');
    params.delete('keyword');
    window.history.replaceState({}, '', window.location.pathname);
});