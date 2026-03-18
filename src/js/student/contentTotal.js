const $ = (selector) => document.querySelector(selector);

const $categoryBtns = document.querySelectorAll('.ct-category-btn');
const $lectureCards = document.querySelectorAll('.ct-lecture-card');
const $categoryList = document.querySelector('.ct-category-list');
const $searchInput = document.querySelector('.ct-search-input');

// category-list 마우스휠로 가로스크롤 동작
$categoryList.addEventListener('wheel', (event) => {
    $categoryList.scrollLeft += event.deltaY;
});

// 카테고리 클릭 이벤트
$categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        $categoryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const selectedCategory = btn.textContent.trim();

        $lectureCards.forEach(card => {
            const cardCategory = card.querySelector('.ct-lecture-category').textContent.trim();
            if (selectedCategory === '전체' || cardCategory === selectedCategory) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// 엔터 키 입력 시 검색 실행
$searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        const keyword = $searchInput.value.trim().toLowerCase();
        // const preview = card.querySelector('.ct-lecture-preview').textContent.toLowerCase();         //만약 요약으로도 검색하게 할 거라면

        $lectureCards.forEach(card => {
            const title = card.querySelector('.ct-lecture-card-title').textContent.toLowerCase();

            if (title.includes(keyword)) {                                                              //이쪽에도 || preview.includes(keyword)
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
});
