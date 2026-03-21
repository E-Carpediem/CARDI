const cmList = [
    {
        "userId": "lct1",
        "contentId": "content01",
        "contentTitle": "강의 제목1",
        "contentImg": "이미지 경로",
        "communityTotal": [
            {
                "questionId": "question01",
                "questionTitle": "질문제목1",
                "questionOwner": "작성자1",
                "questionDate": "26.03.16",
                "questionState": true
            },
            {
                "questionId": "question02",
                "questionTitle": "질문제목2",
                "questionOwner": "작성자2",
                "questionDate": "26.03.16",
                "questionState": false
            }
        ],
        "userName": "강사명",
        "contentTime": "1시간 25분",
        "contentLevel": "입문",

    },
    {
        "userId": "lct2",
        "contentId": "content02",
        "contentTitle": "강의 제목2",
        "contentImg": "이미지 경로",
        "communityTotal": [
            {
                "questionId": "question01",
                "questionTitle": "질문제목1",
                "questionOwner": "작성자1",
                "questionDate": "26.03.16",
                "questionState": true
            },
            {
                "questionId": "question02",
                "questionTitle": "질문제목2",
                "questionOwner": "작성자2",
                "questionDate": "26.03.16",
                "questionState": false
            },
            {
                "questionId": "question03",
                "questionTitle": "질문제목3",
                "questionOwner": "작성자3",
                "questionDate": "26.03.18",
                "questionState": false
            }
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
commu.setLocalStorage('currentContentId', "content02");
commu.setLocalStorage('communityList', cmList);

const element = {
    createElements(element) {
        document.createElement(element);
    }
}

function Community() {
    this.currentCommunity = [];

    this.init = () => {
        const currentContent = commu.getLocalStorage('currentContentId');
        this.currentCommunity = commu.getLocalStorage('communityList').find((commu) => {
            return commu.contentId === currentContent;
        })
        rightSideFill();
        communityListMap(this.currentCommunity.communityTotal);
    }

    const rightSideFill = () => {
        $('#price').innerText = `${this.currentCommunity.contentTitle}`;
        $('#cd-lecturer-name').innerText = `강사명: ${this.currentCommunity.userName}`;
        $('#cd-content-time').innerText = `강의 시간: ${this.currentCommunity.contentTime}`;
        $('#cd-content-level').innerText = `난이도: ${this.currentCommunity.contentLevel}`;
    }

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

            nameDateDiv.appendChild(nameP);
            nameDateDiv.appendChild(dateP);
            mainSection.appendChild(filterDiv);
            mainSection.appendChild(questionTitle);
            mainSection.appendChild(nameDateDiv);
            fragment.appendChild(mainSection);
        });
        $('.cm-community-questions-ct').appendChild(fragment);
    }


    $('.cm-no-reply-btn').addEventListener('click', () => {
        let noReplyQuestion = this.currentCommunity.communityTotal.filter(communityQ => {
            return !communityQ.questionState;
        });
        communityListMap(noReplyQuestion.reverse());
    })

    $('.cm-reply-btn').addEventListener('click', () => {
        let replyQuestion = this.currentCommunity.communityTotal.filter(communityQ => {
            return communityQ.questionState;
        });
        communityListMap(replyQuestion.reverse());
    })

    $('.cm-search-div').addEventListener('submit', (e) => {
        e.preventDefault();
        let searchQuetions = this.currentCommunity.communityTotal.filter(communityQ => {
            return communityQ.questionTitle.includes($('.cm-search-div>input').value);

        });
        communityListMap(searchQuetions.reverse());
    })


}

const community = new Community();

community.init();