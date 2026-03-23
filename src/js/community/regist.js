const $ = (selector) => document.querySelector(selector);

const myInfoGet = {
    getStorage() {
        if (localStorage.getItem('myInfo')) {
            return JSON.parse(localStorage.getItem('myInfo'));
        } else {
            return JSON.parse(sessionStorage.getItem('myInfo'));
        }
    }
}

const commu = {
    setLocalStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    getLocalStorage(key) {
        return JSON.parse(localStorage.getItem(key))
    }
}



const myInfo = myInfoGet.getStorage()



//원버튼 모달
const activeOneModal = ((clickE, message) => {
    document.querySelector('.active-modal').innerHTML = `
            <div class="modal">
                <div class="modal-container">
                    <div class="modal-top">
                        ${message}
                    </div>
                    <div class="modal-bottom modal-check" id="modal-check1">확인</div>
                </div>
            </div>`;

    const $modal = document.querySelector(".modal");
    $modal.style.display = 'flex';
    document.querySelector('.modal-check').addEventListener('click', clickE);
})

function movePage(url) {
    window.location.href = url;
}

function closeModal(modal) {
    modal.style.display = 'none';
}

//투버튼 모달
const activeTwoModal = ((clickE, message) => {
    document.querySelector('.active-modal').innerHTML = `
        <div class="modal">
            <div class="modal-container">
                <div class="modal-top">
                    ${message}
                </div>
                <div class="modal-bottom">
                    <div class="modal-box modal-close">취소</div>
                    <div class="modal-box modal-check">확인</div>
                </div>
            </div>
        </div>`;

    const $modal = document.querySelector(".modal");
    $modal.style.display = 'flex';

    $modal.querySelector('.modal-close').addEventListener('click', () => closeModal($modal));

    $modal.addEventListener('click', (e) => {
        if (e.target === $modal) closeModal($modal);
    });

    $modal.querySelector('.modal-check').addEventListener('click', clickE);
})


function Regist() {
    this.currentCommunity = commu.getLocalStorage('currentCommunity');
    this.communityList = commu.getLocalStorage('communityList');

    const currentDate = new Date().toLocaleDateString().replaceAll(' ', '')

    this.init = () => {
        fil();
        rightSideFill();

    }

    const commuIndex = this.communityList.findIndex(c => {
        return c.contentId === this.currentCommunity.contentId;
    })


    const fil = () => {
        $('.cm-regist-name').innerText = `작성자: ${myInfoGet.getStorage().userName}`;
        $('.cm-regist-date').innerText = `작성 일시: ${currentDate}`;
    }

    const rightSideFill = () => {
        $('.cm-right-ct>h3').innerText = `${this.currentCommunity.contentTitle}`;
        $('#cm-lecturer-name').innerText = `강사명: ${this.currentCommunity.userName}`;
        $('#cm-content-time').innerText = `강의 시간: ${this.currentCommunity.contentTime}`;
        $('#cm-content-level').innerText = `난이도: ${this.currentCommunity.contentLevel}`;
    }

    $('.cm-content-ct>textarea').addEventListener('input', () => {
        $('.cm-content-ct>p').innerText = `${$('.cm-content-ct>textarea').value.length}/1000`;
    })


    $('.cm-regist-btn').addEventListener('click', () => {
        const questionInfo = {
            "questionId": this.currentCommunity.communityTotal.length + 1,
            "questionTitle": $('#cm-title-input').value,
            "questionContent": $('#cm-content-textarea').value,
            "questionOwner": myInfo.userId,
            "questionDate": currentDate,
            "questionState": false,
            "answerContent": null,
        }

        const saveQuestion = () => {
            this.currentCommunity.communityTotal.push(questionInfo);
            this.communityList[commuIndex] = this.currentCommunity;
            commu.setLocalStorage('communityList', this.communityList);

        }

        if ($('#cm-title-input').value.trim() && $('#cm-content-textarea').value.trim()) {
            activeTwoModal(() => { closeModal($('.modal')); saveQuestion(); }, '질문을 저장하시겠습니까?');

        } else {
            activeOneModal(() => closeModal($('.modal')), '값을 입력해주세요.');
        }



    })
}

const regist = new Regist();

regist.init();