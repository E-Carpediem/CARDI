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

const myInfo = myInfoGet.getStorage()

$('.cm-regist-btn').addEventListner('click', () => {
    const currentDate = new Date().toLocaleDateString().replaceAll('. ', '-').replace('.', '');

    questionInfo = {
        "questionId": myInfo,
        "questionTitle": $('#cm-title-input').value,
        "questionContent": $('#cm-content-textarea').value,
        "questionOwner": myInfo.userId,
        "questionDate": currentDate,
        "questionState": false,
        "answerContent": null,
    }

})