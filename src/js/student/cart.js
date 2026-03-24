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

// 현재 로그인 사용자 정보 가져오기
function getCurrentUser() {
    const myInfo = JSON.parse(localStorage.getItem("myInfo")) || JSON.parse(sessionStorage.getItem("myInfo"));
    const userList = JSON.parse(localStorage.getItem("userList")) || [];
    const userIndex = userList.findIndex(user => user.id === myInfo.id);
    const currentUser = userList[userIndex];

    // 장바구니와 수강 강의 배열 초기화
    if (!Array.isArray(currentUser.shoppingCart)) currentUser.shoppingCart = [];
    if (!Array.isArray(currentUser.appliedLecture)) currentUser.appliedLecture = [];

    return { myInfo, userList, userIndex, currentUser };
}

// 사용자 목록 로컬 저장
function saveUserList(userList) {
    localStorage.setItem("userList", JSON.stringify(userList));
}

// 총 강의 수 업데이트
function updateTotalCount() {
    const count = $$('.sc-cart-item').length;
    $totalCount.textContent = `총 강의 수 : ${count}개`;
}

// 선택된 강의 요약 업데이트
function updateSummary() {
    const blocks = $selectedContainer.querySelectorAll('.sc-summary-block');
    let total = 0;
    blocks.forEach(b => total += Number(b.dataset.price));

    $selectedCount.textContent = `선택된 강의 : ${blocks.length}개`;
    $totalPrice.textContent = `총 가격: ${total.toLocaleString()} 원`;
}

// 선택된 강의 요약 블록 추가
function addSummaryBlock(item) {
    const blockId = `block-${item.contentId}`;
    if ($selectedContainer.querySelector(`[data-id="${blockId}"]`)) return;

    const block = document.createElement('div');
    block.classList.add('sc-summary-block');
    block.dataset.id = blockId;
    block.dataset.price = item.contentPrice;

    block.innerHTML = `
        <div class="sc-summary-thumb"style="background-image:url(${item.contentImg})"></div>
        <div class="sc-summary-info">
            <p class="sc-summary-title">${item.contentTitle}</p>
            <p class="sc-summary-meta">${item.userName} | ${item.contentTime}시간</p>
        </div>
    `;
    $selectedContainer.appendChild(block);
}

// 강의 선택/해제 처리
function handleSelectedItem(item, isChecked) {
    const result = getCurrentUser();
    const { currentUser, userIndex, userList } = result;
    const id = Number(item.dataset.id);

    const index = currentUser.shoppingCart.findIndex(lecture => Number(lecture.contentId) === id);
    if (index === -1) return;

    currentUser.shoppingCart[index].selected = isChecked;
    userList[userIndex] = currentUser;
    saveUserList(userList);

    if (isChecked) {
        addSummaryBlock(currentUser.shoppingCart[index]);
        item.classList.add("active");
        item.querySelector(".sc-cart-check").classList.add("active");
    } else {
        const block = $selectedContainer.querySelector(`[data-id="block-${id}"]`);
        if (block) block.remove();
        item.classList.remove("active");
        item.querySelector(".sc-cart-check").classList.remove("active");
    }

    updateSummary();
}

// 모달 열기
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
    $modal.onclick = (e) => { if (e.target === $modal) closeModal(); };
    $modal.querySelector('.modal-check').onclick = () => { onConfirm(); closeModal(); };
}

// 모달 닫기
function closeModal() {
    document.querySelector('.active-modal').innerHTML = '';
}

// 강의 카드 이벤트 바인딩
function bindItemEvents(item) {
    const check = item.querySelector('.sc-cart-check');
    const moveBtn = item.querySelector('.move');

    // 카드 클릭 시 선택/해제
    item.addEventListener('click', e => {
        if (e.target.closest('.sc-cart-check')) return;
        const isActive = check.classList.toggle('active');
        handleSelectedItem(item, isActive);
    });

    // 체크박스 클릭 시 선택/해제
    check.addEventListener('click', e => {
        e.stopPropagation();
        const isActive = check.classList.toggle('active');
        handleSelectedItem(item, isActive);
    });

    // 이동 버튼 클릭 시 상세 페이지로 이동
    moveBtn.addEventListener('click', e => {
        e.stopPropagation();
        const contentId = item.dataset.id;
        window.location.href = `/components/content-detail.html?contentId=${contentId}`;
    });
}

// 장바구니 렌더링
function renderCart() {
    const result = getCurrentUser();
    if (!result) return;

    const { currentUser } = result;
    const cartList = currentUser.shoppingCart;

    $cartList.innerHTML = "";
    $selectedContainer.innerHTML = "";

    cartList.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("sc-cart-item");
        if (item.selected) div.classList.add("active");
        div.dataset.id = item.contentId;

        div.innerHTML = `
            <div class="sc-cart-check ${item.selected ? "active" : ""}"></div>
            <div class="sc-cart-thumb" style="background-image:url(${item.contentImg})"></div>
            <div class="sc-cart-info">
                <h2>${item.contentTitle}</h2>
                <div>
                    <span>${item.userName}</span> |
                    <span>${item.contentTime}시간</span>
                </div>
                <p>가격: ${Number(item.contentPrice).toLocaleString()}원</p>
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

// 전체 선택 버튼 이벤트
$selectAllBtn.addEventListener('click', () => {
    const items = $$('.sc-cart-item');
    const allChecked = [...items].every(i => i.querySelector('.sc-cart-check').classList.contains('active'));
    items.forEach(item => handleSelectedItem(item, !allChecked));
});

// 선택 삭제 버튼 이벤트
$deleteBtn.addEventListener("click", () => {
    const selected = $$(".sc-cart-item.active");
    if (!selected.length) return;

    openConfirmModal("선택된 강의를 삭제하시겠습니까?", () => {
        const result = getCurrentUser();
        const { currentUser, userIndex, userList } = result;
        const selectedIds = [...selected].map(item => Number(item.dataset.id));

        currentUser.shoppingCart = currentUser.shoppingCart.filter(
            lecture => !selectedIds.includes(Number(lecture.contentId))
        );

        userList[userIndex] = currentUser;
        saveUserList(userList);

        renderCart();
    });
});

// 전체 삭제 버튼 이벤트
$deleteAllBtn.addEventListener("click", () => {
    const result = getCurrentUser();
    if (!result) return;
    const { currentUser, userIndex, userList } = result;
    if (!currentUser.shoppingCart.length) return;

    openConfirmModal("전체 삭제하시겠습니까?", () => {
        currentUser.shoppingCart = [];
        userList[userIndex] = currentUser;
        saveUserList(userList);
        renderCart();
    });
});

// 신청 버튼 이벤트
$applyBtn.addEventListener("click", () => {
    const selected = $$(".sc-cart-item.active");
    if (!selected.length) return;

    openConfirmModal("신청하시겠습니까?", () => {
        const result = getCurrentUser();
        const { currentUser, userIndex, userList } = result;
        const today = new Date().toISOString().split("T")[0];
        const selectedIds = [...selected].map(item => Number(item.dataset.id));

        // 신청 처리 후 장바구니에서 제거
        selectedIds.forEach(id => {
            const exists = currentUser.appliedLecture.some(lecture => Number(lecture.contentId) === id);
            if (!exists) currentUser.appliedLecture.push({ contentId: id, appliedDate: today, completeContents: 0 });
        });

        currentUser.shoppingCart = currentUser.shoppingCart.filter(
            lecture => !selectedIds.includes(Number(lecture.contentId))
        );

        userList[userIndex] = currentUser;
        saveUserList(userList);
        renderCart();
    });
});

// 초기 렌더링
renderCart();

// 다른 탭/창에서 userList 변경 시 자동 업데이트
window.addEventListener("storage", (e) => {
    if (e.key === "userList") renderCart();
});