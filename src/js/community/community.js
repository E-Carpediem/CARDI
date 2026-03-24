const cmList = [
    {
        "userId": "lct1",
        "contentId": 1,
        "contentTitle": "강의 제목1",
        "contentImg": "이미지 경로",
        "communityTotal": [
            {
                "questionId": 1,
                "questionTitle": "질문제목1",
                "questionContent": "질문내용111111",
                "questionOwner": "작성자1",
                "questionDate": "26.03.16",
                "questionState": true,
                "answerContent": "답변내용"
            },
            {
                "questionId": 2,
                "questionTitle": "질문제목2",
                "questionContent": "질문내용2222",
                "questionOwner": "작성자2",
                "questionDate": "26.03.16",
                "questionState": false,
                "answerContent": null
            },
            {
                "questionId": 3,
                "questionTitle": "질문제목3",
                "questionContent": "질문내용333333",
                "questionOwner": "작성자3",
                "questionDate": "26.03.16",
                "questionState": true,
                "answerContent": "답변내용3"
            },
        ],
        "userName": "정지훈",
        "contentTime": "1시간 25분",
        "contentLevel": "입문",

    },
    {
        "userId": "lct2",
        "contentId": 2,
        "contentTitle": "강의 제목2",
        "contentImg": "이미지 경로",
        "communityTotal": [
            {
                "questionId": 1,
                "questionTitle": "질문제목1",
                "questionContent": "질문내용111111",
                "questionOwner": "작성자1",
                "questionDate": "26.03.16",
                "questionState": true,
                "answerContent": "답변내용"
            },
            {
                "questionId": 2,
                "questionTitle": "질문제목2",
                "questionContent": "질문내용2222",
                "questionOwner": "작성자2",
                "questionDate": "26.03.16",
                "questionState": false,
                "answerContent": null
            },
        ],
        "userName": "강사명",
        "contentTime": "1시간 25분",
        "contentLevel": "입문",

    }
]



const $ = (selector) => document.querySelector(selector)

const commu = {
    setLocalStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    getLocalStorage(key) {
        return JSON.parse(localStorage.getItem(key))
    }
}

// commu.setLocalStorage('communityList', cmList);

const element = {
    createElements(element) {
        document.createElement(element);
    }
}

//함수
const myInfoGet = {
    getStorage() {
        if (localStorage.getItem('myInfo')) {
            return JSON.parse(localStorage.getItem('myInfo'));
        } else {
            return JSON.parse(sessionStorage.getItem('myInfo'));
        }
    }
}


function getCurrentUser() {
    const myInfo =
        JSON.parse(localStorage.getItem("myInfo")) ||
        JSON.parse(sessionStorage.getItem("myInfo"));

    const userList = JSON.parse(localStorage.getItem("userList")) || [];
    const userIndex = userList.findIndex(user => user.id === myInfo.id);
    const currentUser = userList[userIndex];

    if (!Array.isArray(currentUser.shoppingCart)) {
        currentUser.shoppingCart = [];
    }

    if (!Array.isArray(currentUser.appliedLecture)) {
        currentUser.appliedLecture = [];
    }


    return {
        myInfo,
        user: userList[userIndex],
        userIndex,
        userList
    };
}




function Community() {
    this.currentCommunity = [];
    const params = new URLSearchParams(window.location.search);
    const contentId = params.get("contentId");
    const lectureList = commu.getLocalStorage('lectureList');
    const lectureData = lectureList.find(item => item.contentId === Number(contentId));

    this.init = () => {
        this.currentCommunity = commu.getLocalStorage('communityList').find((commu) => {
            console.log(commu.contentId)
            console.log(contentId);
            return commu.contentId === Number(contentId);
        })
        commu.setLocalStorage('currentCommunity', this.currentCommunity);
        rightSideFill();
        communityListMap(this.currentCommunity.communityTotal);
    }



    const rightSideFill = () => {
        console.log(this.currentCommunity)
        $('#price').innerText = `${this.currentCommunity.contentTitle}`;
        $('#cd-lecturer-name').innerText = `강사명: ${this.currentCommunity.userName}`;
        $('#cd-content-time').innerText = `강의 시간: ${this.currentCommunity.contentTime}시간`;
        $('#cd-content-level').innerText = `난이도: ${this.currentCommunity.contentLevel}`;
        console.log(myInfoGet.getStorage());
        console.log(myInfoGet.getStorage().role);
        if (myInfoGet.getStorage().role === 'lecturer') {
            $('.cm-button-ct-lecturer').classList.remove('cm-hidden-btn');
            $('.cm-button-ct-student').classList.add('cm-hidden-btn');
            $('.cm-button-ct-manager').classList.add('cm-hidden-btn');
        } else if (myInfoGet.getStorage().role === 'manager') {
            $('.cm-button-ct-manager').classList.remove('cm-hidden-btn');
            $('.cm-button-ct-lecturer').classList.add('cm-hidden-btn');
            $('.cm-button-ct-student').classList.add('cm-hidden-btn');
        } else {
            $('.cm-button-ct-student').classList.remove('cm-hidden-btn');
            $('.cm-button-ct-lecturer').classList.add('cm-hidden-btn');
            $('.cm-button-ct-manager').classList.add('cm-hidden-btn');
        }
    }

    let filterCommunity = [];
    let searchCommunity = [];

    const communityListMap = (list) => {
        $('.cm-community-questions-ct').innerHTML = '';
        const fragment = document.createDocumentFragment();
        list.reverse().forEach(communityQ => {
            const mainSection = document.createElement('section');
            const filterDiv = document.createElement('div');
            const questionTitle = document.createElement('h3');
            const nameDateDiv = document.createElement('div');
            const nameP = document.createElement('p');
            const dateP = document.createElement('p');

            mainSection.classList.add('cm-comunity-question');
            filterDiv.classList.add('cm-comunity-filter');
            filterDiv.classList.add(communityQ.questionState ? 'cm-reply' : 'cm-no-reply');
            nameDateDiv.classList.add('cm-name-date');

            questionTitle.innerText = `${communityQ.questionTitle}`;
            nameP.innerText = `작성자: ${communityQ.questionOwner}`;
            dateP.innerText = `작성 일시: ${communityQ.questionDate}`;
            filterDiv.innerText = communityQ.questionState ? '답변' : '미답변';

            mainSection.addEventListener('click', () => {
                window.location.href = `/community/detail.html?questionId=${communityQ.questionId}`;
            })

            nameDateDiv.appendChild(nameP);
            nameDateDiv.appendChild(dateP);
            mainSection.appendChild(filterDiv);
            mainSection.appendChild(questionTitle);
            mainSection.appendChild(nameDateDiv);
            fragment.appendChild(mainSection);
        });
        $('.cm-community-questions-ct').appendChild(fragment);
    }


    // 모달 닫기 함수
    function closeModal() {
        const activeModal = $(".active-modal");
        if (activeModal) activeModal.innerHTML = "";
    }


    // 원버튼 모달 열기 함수
    function openOneButtonModal(message) {
        const activeModal = $(".active-modal");

        activeModal.innerHTML = `
        <div class="modal">
            <div class="modal-container">
                <div class="modal-top">${message}</div>
                <div class="modal-bottom">
                    <div class="modal-box modal-check">확인</div>
                </div>
            </div>
        </div>
    `;

        const modal = $(".modal", activeModal);
        const checkBtn = $(".modal-check", modal);

        modal.style.display = "flex";

        checkBtn.addEventListener("click", () => {
            closeModal();
        });

        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // 투버튼 모달 열기
    function openTwoButtonModal(message, onConfirm) {
        const activeModal = $(".active-modal");

        activeModal.innerHTML = `
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

        const modal = $(".modal", activeModal);
        const closeBtn = $(".modal-close", modal);
        const checkBtn = $(".modal-check", modal);
        modal.style.display = "flex";

        closeBtn.addEventListener("click", closeModal);

        checkBtn.addEventListener("click", () => {
            closeModal();
            if (onConfirm) onConfirm();
        });

        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }


    // 신청하기 함수
    function handleApply() {
        // 신청 날짜
        const today = new Date().toISOString().split("T")[0];

        openTwoButtonModal(
            "신청하시겠습니까?",
            () => {
                const currentResult = getCurrentUser();
                console.log('asd')
                const { user, userIndex, userList } = currentResult;
                const lectureList = commu.getLocalStorage('lectureList');

                const content = lectureList.find(
                    item => Number(item.contentId) === Number(lectureData.contentId)
                );

                const applied = user.appliedLecture.some(
                    item => Number(item.contentId) === Number(content.contentId)
                );

                if (applied) {
                    console.log('asdf')
                    openOneButtonModal("이미 신청한 강의입니다.");
                    return;
                }

                const appliedLectureUpdate = {
                    contentId: content.contentId,
                    appliedDate: today,
                    completeContents: 0
                };

                user.appliedLecture.push(appliedLectureUpdate);

                user.shoppingCart = user.shoppingCart.filter(
                    item => Number(item.contentId) !== Number(content.contentId)
                );

                userList[userIndex] = user;
                localStorage.setItem("userList", JSON.stringify(userList));
                console.log(userList)
                openOneButtonModal("신청되었습니다.");
            }
        );
    }


    // 수정 버튼 이벤트
    function handleUpdate(lectureData) {
        openTwoButtonModal(
            "수정하시겠습니까?<br>확인 버튼을 누르면 강의 수정 페이지로 이동합니다.",
            () => {
                window.location.href = `/lecturer/lecture-update.html?contentId=${lectureData.contentId}`;
            }
        );
    }

    // 삭제 버튼 이벤트
    function handleDelete(lectureData, url) {
        openTwoButtonModal(
            "삭제하시겠습니까?<br>삭제 후엔 되돌릴 수 없습니다.",
            () => {
                const lectureList = commu.getLocalStorage('lectureList');
                const userList = commu.getLocalStorage("userList", []);

                // lectureList 에서 contentId가 현재 강의의 contentId와 같은 content의 index 찾기
                const index = lectureList.findIndex(
                    item => item.contentId === lectureData.contentId
                );
                // 해당 index 부터 1개의 content 삭제 즉, 해당 강의 삭제
                lectureList.splice(index, 1);

                // 모든 유저를 순회하여, appliedLecture에 해당 강의와 contentid 가 같은 content 도 삭제
                userList.forEach(user => {
                    if (Array.isArray(user.appliedLecture)) {
                        const appliedIndex = user.appliedLecture.findIndex(
                            item => Number(item.contentId) === contentId
                        );

                        if (appliedIndex !== -1) {
                            user.appliedLecture.splice(appliedIndex, 1);
                        }
                    }

                    // 장바구니 내에서도 삭제
                    if (Array.isArray(user.shoppingCart)) {
                        const cartIndex = user.shoppingCart.findIndex(
                            item => Number(item.contentId) === contentId
                        );

                        if (cartIndex !== -1) {
                            user.shoppingCart.splice(cartIndex, 1);
                        }
                    }
                });

                commu.setLocalStorage('lectureList', lectureList);
                commu.setLocalStorage("userList", userList);

                const storageKey = sessionStorage.getItem("myInfo");
                const currentMyInfo = myInfoGet.getStorage();

                if (currentMyInfo) {
                    if (Array.isArray(currentMyInfo.appliedLecture)) {
                        const myAppliedIndex = currentMyInfo.appliedLecture.findIndex(
                            item => Number(item.contentId) === contentId
                        );

                        if (myAppliedIndex !== -1) {
                            currentMyInfo.appliedLecture.splice(myAppliedIndex, 1);
                        }
                    }

                    if (Array.isArray(currentMyInfo.shoppingCart)) {
                        const myCartIndex = currentMyInfo.shoppingCart.findIndex(
                            item => Number(item.contentId) === contentId
                        );

                        if (myCartIndex !== -1) {
                            currentMyInfo.shoppingCart.splice(myCartIndex, 1);
                        }
                    }

                    if (storageKey === "localStorage") {
                        localStorage.setItem("myInfo", JSON.stringify(currentMyInfo));
                    } else {
                        sessionStorage.setItem("myInfo", JSON.stringify(currentMyInfo));
                    }
                }

                window.location.href = url;
            }
        );
    }


    //수강생 조회 버튼 이벤트
    $('.cm-lecture-student-info').addEventListener('click', () => {
        window.location.href = `/lecturer/students-detail.html?contentId=${contentId}`
    })

    // 수정  삭제 버튼 이벤트
    $(".cm-lecture-modify").addEventListener("click", () => handleUpdate(lectureData));
    $(".cm-lecture-delete").addEventListener("click", () => handleDelete(lectureData, '/lecturer/index.html'));
    $(".cm-manager-delete").addEventListener("click", () => handleDelete(lectureData, '/manager/lecture-total.html'));

    //신청하기 버튼 이벤트
    $('.cm-student-apply').addEventListener('click', () => handleApply(lectureData));

    $('.cm-all-reply-btn').addEventListener('click', () => {
        $('.cm-all-reply-btn').classList.add('btn-border');
        $('.cm-no-reply-btn').classList.remove('btn-border');
        $('.cm-reply-btn').classList.remove('btn-border');
        if (searchCommunity.length === 0) {
            communityListMap(this.currentCommunity.communityTotal.reverse());
        } else {
            communityListMap(searchCommunity.reverse());
        }
    })

    $('.cm-no-reply-btn').addEventListener('click', () => {
        $('.cm-all-reply-btn').classList.remove('btn-border');
        $('.cm-no-reply-btn').classList.add('btn-border');
        $('.cm-reply-btn').classList.remove('btn-border');
        filterCommunity = this.currentCommunity.communityTotal.filter(communityQ => {
            return !communityQ.questionState;
        });
        if (searchCommunity.length === 0) {
            communityListMap(filterCommunity.reverse());
        } else {
            filterCommunity = searchCommunity.filter(communityQ => {
                return !communityQ.questionState;
            });
            communityListMap(filterCommunity.reverse());
        }
    })

    $('.cm-reply-btn').addEventListener('click', () => {
        $('.cm-all-reply-btn').classList.remove('btn-border');
        $('.cm-no-reply-btn').classList.remove('btn-border');
        $('.cm-reply-btn').classList.add('btn-border');
        filterCommunity = this.currentCommunity.communityTotal.filter(communityQ => {
            return communityQ.questionState;
        });
        if (searchCommunity.length === 0) {
            communityListMap(filterCommunity.reverse());
        } else {
            filterCommunity = searchCommunity.filter(communityQ => {
                return communityQ.questionState;
            });
            communityListMap(filterCommunity.reverse());
        }

    })

    $('.cm-search-div').addEventListener('submit', (e) => {
        e.preventDefault();
        $('.cm-all-reply-btn').classList.add('btn-border');
        $('.cm-no-reply-btn').classList.remove('btn-border');
        $('.cm-reply-btn').classList.remove('btn-border');
        searchCommunity = this.currentCommunity.communityTotal.filter(communityQ => {
            return communityQ.questionTitle.includes($('.cm-search-div>input').value);
        });
        communityListMap(searchCommunity.reverse());

    })

    $('.cm-question-btn').addEventListener('click', () => {
        window.location.href = '/community/regist.html';
    });

    $('.cd-nav-title').addEventListener('click', () => {
        window.location.href = `/components/content-detail.html?contentId=${this.currentCommunity.contentId}`;

    });


    $('.cd-nav-curry').addEventListener('click', () => {
        window.location.href = `/components/content-detail.html?contentId=${this.currentCommunity.contentId}`;
        $("#cd-curry-container").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    })


}

const community = new Community();

community.init();