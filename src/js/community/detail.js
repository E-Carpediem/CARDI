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
        $('#cm-content-time').innerText = `강의 시간: ${currentCommunity.contentTime}시간`;
        $('#cm-content-level').innerText = `난이도: ${currentCommunity.contentLevel}`;
    }

    const questionFill = () => {
        $('.cmd-content-title-ct>h3').innerText = `${this.currentQuestion.questionTitle}`;
        this.currentQuestion.questionState ? $('.cmd-reply-check-div').innerText = '답변' : $('.cmd-reply-check-div').innerText = '미답변';
        this.currentQuestion.questionState ? $('.cmd-reply-check-div').classList.add('cmd-reply-div') : $('.cmd-reply-check-div').classList.add('cmd-no-reply-div');
        $('.cmd-user-info-name').innerText = `작성자: ${this.currentQuestion.questionOwner}`;
        $('.cmd-user-info-date').innerText = `작성 일시: ${this.currentQuestion.questionDate}`;
        $('.cmd-question-p').innerText = `${this.currentQuestion.questionContent}`;
        if (this.currentQuestion.questionOwnerId === myInfo.userId && !this.currentQuestion.questionState) {
            $('.cmd-student-dot-img').hidden = false;
        } else if (myInfo.role === 'manager') {
            $('.cmd-student-dot-img-m').hidden = false;
        }

    }

    const answerFill = () => {
        console.log(this.currentQuestion.answerContent)
        if (this.currentQuestion.answerContent) {
            if (currentCommunity.id === myInfo.id) {
                $('.cmd-lecture-dot-img').hidden = false;
            } else if (myInfo.role === 'manager') {
                $('.cmd-lecture-dot-img-m').hidden = false;
            }
            $('#cmd-student-reply-ct').hidden = false;
            $('#cmd-lecture-reply-ct').hidden = true;
            $('#cmd-lecture-modify-ct').hidden = true;
            $('.cmd-reply-lecturer-name').innerText = `${currentCommunity.userName}`;
            $('.cmd-reply-content').innerText = `${this.currentQuestion.answerContent}`;
        } else if (currentCommunity.id === myInfo.id) {
            $('#cmd-lecture-reply-ct').hidden = false;
            $('#cmd-student-reply-ct').hidden = true;
        }
    }

    //답변 저장
    const saveAnswer = () => {
        this.communityList[commuIndex].communityTotal[questIndex].answerContent = $('#cmd-textarea').value;
        $('#cmd-textarea').value = "";
        this.communityList[commuIndex].communityTotal[questIndex].questionState = true;
        currentCommunity = this.communityList[commuIndex];
        this.currentQuestion = currentCommunity.communityTotal.find((question) => {
            return question.questionId === Number(questionId);
        })
        commu.setLocalStorage('communityList', this.communityList);
        questionFill();
        answerFill();
    }

    //답변 수정 저장
    const saveModifyAnswer = () => {
        this.communityList[commuIndex].communityTotal[questIndex].answerContent
            = $('#cmd-textarea-modify').value;
        this.communityList[commuIndex].communityTotal[questIndex].questionState
            = true;
        currentCommunity = this.communityList[commuIndex];
        this.currentQuestion = currentCommunity.communityTotal.find((question) => {
            return question.questionId === Number(questionId);
        })
        commu.setLocalStorage('communityList', this.communityList);
        questionFill();
        answerFill();

    }

    //질문 수정
    const modifyQuestion = () => {
        commu.setLocalStorage('modifyQuestion', this.communityList[commuIndex].communityTotal[questIndex])
        window.location.href = '/community/regist.html';
        $('.cmd-edit-delete-hover-student').classList.toggle('none');
    }

    //질문 삭제
    const deleteQuestion = () => {
        this.communityList[commuIndex].communityTotal.splice(questIndex, 1);
        commu.setLocalStorage('communityList', this.communityList);
        $('.cmd-edit-delete-hover-student').classList.toggle('none');
        history.back();
    }

    //답변 수정
    const modifyReply = () => {
        $('#cmd-lecture-modify-ct').hidden = false;
        $('#cmd-student-reply-ct').hidden = true;
        $('#cmd-textarea-modify').value = $('.cmd-reply-content').innerText;
    }

    //답변 삭제
    const deleteReply = () => {
        $('#cmd-lecture-reply-ct').hidden = false;
        $('#cmd-student-reply-ct').hidden = true;
        this.communityList[commuIndex].communityTotal[questIndex].answerContent = null;
        this.communityList[commuIndex].communityTotal[questIndex].questionState = false;
        currentCommunity = this.communityList[commuIndex];
        this.currentQuestion = currentCommunity.communityTotal.find((question) => {
            return question.questionId === Number(questionId);
        })
        $('.cmd-edit-delete-hover-lecture').classList.toggle('none');
        commu.setLocalStorage('communityList', this.communityList);
    }
    //관리자용 답변 삭제
    const deleteReplyM = () => {
        this.communityList[commuIndex].communityTotal[questIndex].answerContent = null;
        this.communityList[commuIndex].communityTotal[questIndex].questionState = false;
        currentCommunity = this.communityList[commuIndex];
        this.currentQuestion = currentCommunity.communityTotal.find((question) => {
            return question.questionId === Number(questionId);
        })
        $('.cmd-reply-lecturer-name').innerText = ``;
        $('.cmd-reply-content').innerText = `아직 답변이 없습니다.`;
        $('.cmd-lecture-dot-img-m').hidden = true;

        commu.setLocalStorage('communityList', this.communityList);
    }

    //수정, 삭제 토글
    $('.cmd-student-dot-img').addEventListener('click', () => {
        $('.cmd-edit-delete-hover-student').classList.toggle('none');
    })

    $('.cmd-lecture-dot-img').addEventListener('click', () => {
        $('.cmd-edit-delete-hover-lecture').classList.toggle('none');
    })

    //관리자 삭제 토글
    $('.cmd-student-dot-img-m').addEventListener('click', () => {
        $('.cmd-edit-delete-hover-student-m').classList.toggle('none');
    })

    $('.cmd-lecture-dot-img-m').addEventListener('click', () => {
        $('.cmd-edit-delete-hover-lecture-m').classList.toggle('none');
    })

    //질문 삭제, 수정
    $('.question-delete').addEventListener('click', () => {
        activeTwoModal(() => { closeModal($('.modal')); deleteQuestion(); }, '질문을 삭제하시겠습니까?');
    })

    $('.question-modify').addEventListener('click', () => {
        activeTwoModal(() => { closeModal($('.modal')); modifyQuestion(); }, '질문을 수정하시겠습니까?');
    })

    //답변 수정, 삭제
    $('.reply-modify').addEventListener('click', () => {
        activeTwoModal(() => { closeModal($('.modal')); modifyReply(); $('.cmd-edit-delete-hover-lecture').classList.toggle('none'); }, '답변을 수정하시겠습니까?');
    })
    $('.reply-delete').addEventListener('click', () => {
        activeTwoModal(() => { closeModal($('.modal')); deleteReply(); }, '답변을 삭제하시겠습니까?');
    })


    //관리자 답변 ,질문 삭제
    $('.reply-delete-m').addEventListener('click', () => {
        activeTwoModal(() => { closeModal($('.modal')); deleteReplyM(); $('.cmd-edit-delete-hover-lecture-m').classList.toggle('none'); }, '답변을 삭제하시겠습니까?');
    })
    $('.question-delete-m').addEventListener('click', () => {
        activeTwoModal(() => { closeModal($('.modal')); deleteQuestion(); $('.cmd-edit-delete-hover-student-m').classList.toggle('none'); }, '질문을 삭제하시겠습니까?');
    })

    $('.cmd-reply-regits-btn').addEventListener('click', () => {
        if (!$('#cmd-textarea').value.trim()) {
            activeOneModal(() => closeModal($('.modal')), '답변을 입력해주세요.');
        } else {
            activeTwoModal(() => { closeModal($('.modal')); saveAnswer(); }, '답변을 저장하시겠습니까?');
        }

    })

    $('.cmd-reply-modify-btn').addEventListener('click', () => {
        if (!$('#cmd-textarea-modify').value.trim()) {
            activeOneModal(() => closeModal($('.modal')), '답변을 입력해주세요.');
        } else {
            activeTwoModal(() => { closeModal($('.modal')); saveModifyAnswer(); }, '답변을 저장하시겠습니까?');
        }
    })

    $('.cm-top-ct>button').addEventListener('click', () => {
        window.location.href = `/community/index.html?contentId=${currentCommunity.contentId}`;
    })

    $('.cm-right-ct>button').addEventListener('click', () => {
        window.location.href = `/components/content-detail.html?contentId=${currentCommunity.contentId}`;
    })


}

const question = new Question();

question.init();





