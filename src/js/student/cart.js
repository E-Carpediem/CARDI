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
const $applyBtn = $('.sc-cart-btn.apply');

//STORAGE
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

//선택 처리
function handleSelectedItem(item, isChecked) {
    const cartList = getCartList();
    const id = item.dataset.id;

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


// 모달
function openConfirmModal(message, onConfirm) {
    const container = document.querySelector('.active-modal');

    container.innerHTML = `
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

    const $modal = container.querySelector('.modal');
    $modal.style.display = 'flex';

    $modal.querySelector('.modal-close').onclick = () => closeModal();
    $modal.onclick = (e) => {
        if (e.target === $modal) closeModal();
    };

    $modal.querySelector('.modal-check').onclick = () => {
        onConfirm();
        closeModal();
    };
}

function closeModal() {
    document.querySelector('.active-modal').innerHTML = '';
}


//이벤트 바인딩
function bindItemEvents(item) {
    const check = item.querySelector('.sc-cart-check');
    const moveBtn = item.querySelector('.move');    // 이동 버튼 선택

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
        const contentId = item.dataset.id;
        window.location.href = `/components/content-detail.html?contentId=${contentId}`;
    });
}

//렌더링 함수
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
            <div class="sc-cart-thumb" style="background-image:url(${item.contentImg})"></div>
            <div class="sc-cart-info">
                <h2>${item.contentTitle}</h2>
                <div>
                    <span>${item.userName}</span> |
                    <span>${item.contentTime}</span>
                </div>
                <p>가격: ${item.contentPrice.toLocaleString()} 원</p>
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

//버튼 이벤트
$selectAllBtn.addEventListener('click', () => {
    const items = $$('.sc-cart-item');
    const allChecked = [...items].every(i =>
        i.querySelector('.sc-cart-check').classList.contains('active')
    );

    items.forEach(item => handleSelectedItem(item, !allChecked));
});

$deleteBtn.addEventListener('click', () => {
    const selected = $$('.sc-cart-item.active');
    if (!selected.length) return;

    openConfirmModal('선택된 강의를 삭제하시겠습니까?', () => {
        let cartList = getCartList();

        selected.forEach(item => {
            const id = item.dataset.id;

            item.remove();
            $selectedContainer.querySelector(`[data-id="block-${id}"]`)?.remove();
            cartList = cartList.filter(i => i.contentId !== id);
        });

        setCartList(cartList);
        updateTotalCount();
        updateSummary();
    });
});

$deleteAllBtn.addEventListener('click', () => {
    if (!$cartList.children.length) return;

    openConfirmModal('전체 삭제하시겠습니까?', () => {
        setCartList([]);
        $cartList.innerHTML = '';
        $selectedContainer.innerHTML = '';
        updateTotalCount();
        updateSummary();
    });
});

$applyBtn.addEventListener('click', () => {
    const selected = $$('.sc-cart-item.active');
    if (!selected.length) return;

    openConfirmModal('신청하시겠습니까?', () => {
        let cartList = getCartList();
        const today = new Date().toISOString().split('T')[0];

        selected.forEach(item => {
            const id = item.dataset.id;

            const exists = currentUser.appliedLecture.some(
                lec => lec.contentId === id
            );

            if (!exists) {
                currentUser.appliedLecture.push({
                    contentId: id,
                    appliedDate: today
                });
            }

            cartList = cartList.filter(i => i.contentId !== id);

            item.remove();
            $selectedContainer.querySelector(`[data-id="block-${id}"]`)?.remove();
        });

        localStorage.setItem('userList', JSON.stringify(userList));
        setCartList(cartList);
        updateTotalCount();
        updateSummary();

        console.log('신청 완료:', currentUser.appliedLecture);
    });
});

renderCart();

window.addEventListener('storage', (e) => {
    if (e.key === 'cartList') renderCart();
});