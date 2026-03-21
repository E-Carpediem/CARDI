const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

const $cartList = $('#sc-cart-list');
const $selectedContainer = $('.sc-selected-item');
const $selectedCount = $('.sc-cart-selected-count');
const $totalPrice = $('.sc-cart-total-price');
const $totalCount = $('.sc-cart-total-count');
const $selectAllBtn = $('.sc-select-all');
const $deleteAllBtn = $('.sc-delete-all');
const $deleteBtn = $('.sc-cart-btn.delete');

// 저장소
function getCartList() {
    return JSON.parse(localStorage.getItem('cartList')) || [];
}

function setCartList(list) {
    localStorage.setItem('cartList', JSON.stringify(list));
}

// 재사용 함수
function updateTotalCount() {
    const count = $$('.sc-cart-item').length;
    $totalCount.textContent = `총 강의 수 : ${count}개`;
}

function updateSummary() {
    const blocks = $selectedContainer.querySelectorAll('.sc-summary-block');
    let total = 0;
    blocks.forEach(b => total += Number(b.dataset.price));
    $selectedCount.textContent = `선택된 강의 : ${blocks.length}개`;
    $totalPrice.textContent = `총 가격: ${total.toLocaleString()} 원`;
}

function addSummaryBlock(item) {
    const blockId = `block-${item.contentId}`;
    if ($selectedContainer.querySelector(`[data-id="${blockId}"]`)) return;

    const block = document.createElement('div');
    block.classList.add('sc-summary-block');
    block.dataset.id = blockId;
    block.dataset.price = item.contentPrice;
    block.innerHTML = `
        <div class="sc-summary-thumb"></div>
        <div class="sc-summary-info">
            <p class="sc-summary-title">${item.contentTitle}</p>
            <p class="sc-summary-meta">${item.userName} | ${item.contentTime}</p>
        </div>
    `;
    $selectedContainer.appendChild(block);
}

function handleSelectedItem(item, isChecked) {
    const cartList = getCartList();
    const id = item.dataset.id;
    const priceText = item.querySelector('.sc-cart-item-price').textContent;
    const price = Number(priceText.replace(/[^0-9]/g, ""));
    const title = item.querySelector('.sc-cart-item-title').textContent;
    const lecturer = item.querySelector('.sc-cart-lecturer').textContent;
    const time = item.querySelector('.sc-cart-time').textContent;

    // 로컬스토리지 갱신
    const index = cartList.findIndex(i => i.contentId === id);
    if (index !== -1) cartList[index].selected = isChecked;
    setCartList(cartList);

    // 오른쪽 요약 처리
    if (isChecked) {
        addSummaryBlock(cartList[index]);
        item.classList.add('active');
        item.querySelector('.sc-cart-check').classList.add('active');
    } else {
        const block = $selectedContainer.querySelector(`[data-id="block-${id}"]`);
        if (block) block.remove();
        item.classList.remove('active');
        item.querySelector('.sc-cart-check').classList.remove('active');
    }

    updateSummary();
}

function bindItemEvents(item) {
    const check = item.querySelector('.sc-cart-check');
    const moveBtn = item.querySelector('.sc-cart-btn.move'); // 이동 버튼 선택

    // 카드 클릭 시 
    item.addEventListener('click', e => {
        if (e.target.closest('.sc-cart-check')) return;
        const isActive = check.classList.toggle('active');
        handleSelectedItem(item, isActive);
    });

    // 체크박스 클릭 시
    check.addEventListener('click', e => {
        e.stopPropagation();
        const isActive = check.classList.toggle('active');
        handleSelectedItem(item, isActive);
    });

    // 이동 버튼 클릭 시
    moveBtn.addEventListener('click', e => {
        e.stopPropagation();
        window.location.href = '/components/contentDetail.html';
    });

    // // 이동 버튼 클릭 시 (해당 카드의 contentId)
    // moveBtn.addEventListener('click', e => {
    //     e.stopPropagation();
    //     const contentId = item.dataset.id;
    //     window.location.href = `/components/contentDetail.html?contentId=${contentId}`;
    // });
}

// 렌더링 함수
function renderCart() {
    const cartList = getCartList();
    $cartList.innerHTML = '';

    cartList.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('sc-cart-item');
        if (item.selected) div.classList.add('active');
        div.dataset.id = item.contentId;

        div.innerHTML = `
            <div class="sc-cart-check ${item.selected ? 'active' : ''}"></div>
            <div class="sc-cart-thumb" style="background-image:url(${item.contentImg});background-size:cover;"></div>
            <div class="sc-cart-info">
                <h2 class="sc-cart-item-title">${item.contentTitle}</h2>
                <div class="sc-cart-item-meta">
                    <span class="sc-cart-lecturer">${item.userName}</span>
                    <span class="sc-cart-divider">|</span>
                    <span class="sc-cart-time">${item.contentTime}</span>
                </div>
                <p class="sc-cart-item-price">가격: ${item.contentPrice.toLocaleString()} 원</p>
            </div>
            <button class="sc-cart-btn move">강의로 이동</button>
        `;
        $cartList.appendChild(div);
        bindItemEvents(div);

        if (item.selected) addSummaryBlock(item);
    });

    updateTotalCount();
    updateSummary();
}

// 테스트 데이터 초기화
if (!localStorage.getItem('cartList')) {
    const testData = [];
    for (let i = 1; i <= 10; i++) {
        testData.push({
            userId: 'student01',
            lecturerId: 'lecturer' + i,
            contentId: 'content' + i,
            contentTitle: '강의 제목 ' + i,
            contentImg: '/src/assets/img/test.jpg',
            contentPrice: 10000 * i,
            userName: '강사명 ' + i,
            contentTime: `${i}시간 ${i * 5}분`,
            selected: false
        });
    }
    setCartList(testData);
}

// 버튼 이벤트
$selectAllBtn.addEventListener('click', () => {
    const allItems = $$('.sc-cart-item');
    const allChecked = [...allItems].every(item => item.querySelector('.sc-cart-check').classList.contains('active'));
    allItems.forEach(item => handleSelectedItem(item, !allChecked));
});

$deleteBtn.addEventListener('click', () => {
    let cartList = getCartList();
    const selectedItems = $$('.sc-cart-item.active');
    selectedItems.forEach(item => {
        const id = item.dataset.id;
        item.remove();
        $selectedContainer.querySelector(`[data-id="block-${id}"]`)?.remove();
        cartList = cartList.filter(i => i.contentId !== id);
    });
    setCartList(cartList);
    updateTotalCount();
    updateSummary();
});

$deleteAllBtn.addEventListener('click', () => {
    $cartList.innerHTML = '';
    $selectedContainer.innerHTML = '';
    setCartList([]);
    updateTotalCount();
    updateSummary();
});

renderCart();

// 다른 페이지에서 장바구니가 바뀌면 자동 업데이트
window.addEventListener('storage', (e) => {
    if (e.key === 'cartList') {
        renderCart();
    }
});