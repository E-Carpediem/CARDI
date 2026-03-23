const $ = (selector) => document.querySelector(selector)

const commu = {
    setLocalStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    getLocalStorage(key) {
        return JSON.parse(localStorage.getItem(key))
    }
}

const myInfoGet = {
    getStorage() {
        if (localStorage.getItem('myInfo')) {
            return JSON.parse(localStorage.getItem('myInfo'));
        } else {
            return JSON.parse(sessionStorage.getItem('myInfo'));
        }
    }
}


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




// 생성자 함수
function Question() {
    let currentCommunity = commu.getLocalStorage('currentCommunity');
    this.currentQuestion = [];
    this.communityList = commu.getLocalStorage('communityList');

    const params = new URLSearchParams(window.location.search);
    const questionId = params.get("questionId");
    const myInfo = myInfoGet.getStorage()

    let questIndex = 0;

    this.init = () => {
        this.currentQuestion = currentCommunity.communityTotal.find((question) => {
            return question.questionId === Number(questionId);
        })
        rightSideFill();
        questionFill();
        answerFill();

        questIndex = currentCommunity.communityTotal.findIndex(c => {
            return c.questionId === this.currentQuestion.questionId;
        })
    }

    const commuIndex = this.communityList.findIndex(c => {
        return c.contentId === currentCommunity.contentId;
    })








    const rightSideFill = () => {
        $('.cm-right-ct>h3').innerText = `${currentCommunity.contentTitle}`;
        $('#cm-lecturer-name').innerText = `강사명: ${currentCommunity.userName}`;
        $('#cm-content-time').innerText = `강의 시간: ${currentCommunity.contentTime}`;
        $('#cm-content-level').innerText = `난이도: ${currentCommunity.contentLevel}`;
    }

    const questionFill = () => {
        $('.cmd-content-title-ct>h3').innerText = `${this.currentQuestion.questionTitle}`;
        this.currentQuestion.questionState ? $('.cmd-content-title-ct>div').innerText = '답변' : $('.cmd-content-title-ct>div').innerText = '미답변';
        this.currentQuestion.questionState ? $('.cmd-content-title-ct>div').classList.add('cmd-reply-div') : $('.cmd-content-title-ct>div').classList.add('cmd-no-reply-div');
        $('.cmd-user-info-name').innerText = `작성자: ${this.currentQuestion.questionOwner}`;
        $('.cmd-user-info-date').innerText = `작성 일시: ${this.currentQuestion.questionDate}`;
        $('.cmd-question-p').innerText = `${this.currentQuestion.questionContent}`;
        if (this.currentQuestion.questionOwner === myInfo.userId) {
            $('.cmd-content-title-ct>img').hidden = false;
        }

    }

    const answerFill = () => {
        console.log(this.currentQuestion.answerContent)
        if (this.currentQuestion.answerContent) {
            if (currentCommunity.userId === myInfo.userId) {
                $('.cmd-reply-lecture-info-ct>img').hidden = false;
            }
            $('#cmd-student-reply-ct').hidden = false;
            $('#cmd-lecture-reply-ct').hidden = true;
            $('.cmd-reply-lecturer-name').innerText = `${currentCommunity.userName}`;
            $('.cmd-reply-content').innerText = `${this.currentQuestion.answerContent}`;
        } else if (currentCommunity.userId === myInfo.userId) {
            $('#cmd-lecture-reply-ct').hidden = false;
            $('#cmd-student-reply-ct').hidden = true;
        }
    }

    const saveAnswer = () => {
        this.communityList[commuIndex].communityTotal[questIndex].answerContent = $('#cmd-textarea').value;
        this.communityList[commuIndex].communityTotal[questIndex].questionState = true;
        currentCommunity = this.communityList[commuIndex];
        this.currentQuestion = currentCommunity.communityTotal.find((question) => {
            return question.questionId === Number(questionId);
        })
        commu.setLocalStorage('communityList', this.communityList);
        questionFill();
        answerFill();
    }

    $('.cmd-reply-regits-btn').addEventListener('click', () => {
        if (!$('#cmd-textarea').value.trim()) {
            activeOneModal(() => closeModal($('.modal')), '답변을 입력해주세요.');
        } else {
            activeTwoModal(() => { closeModal($('.modal')); saveAnswer(); }, '답변을 저장하시겠습니까?');
        }

    })





}

const question = new Question();

question.init();





