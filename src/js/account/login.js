const $ = (selector) => document.querySelector(selector)

const user = {
    setLocalStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    getLocalStorage(key) {
        return JSON.parse(localStorage.getItem(key))
    }
}

const myInfo = {
    setSessionStorage(key, value) {
        sessionStorage.setItem(key, JSON.stringify(value));
    },
    getSessionStorage(key) {
        return JSON.parse(sessionStorage.getItem(key))
    }
}


const activeModal = ((clickE, message) => {
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


// const userList = [
//     {
//         "role": "manager",
//         "id": 1,
//         "userId": "manager01",
//         "password": "manager1234",
//     },
//     {
//         "role": "student",
//         "id": 2,
//         "userId": "std1",
//         "password": "student1234",
//         "userName": "이홍근",
//         "userAge": 25,
//         "phoneNumber": "010-1111-2222",
//         "userEmail": "test6@example.com",
//         "gender": "male",
//         "birth": "2026-03-16",
//     },
//     {
//         "role": "lecturer",
//         "id": 3,
//         "userProfile": "이미지경로",
//         "userId": "lct1",
//         "password": "lecturer1234",
//         "userName": "정지훈",
//         "userAge": 25,
//         "phoneNumber": "010-1111-2222",
//         "userEmail": "test6@example.com",
//         "gender": "male",
//         "birth": "2026-03-16",
//         "userDocument": [
//             "파일경로",
//             "파일경로"
//         ]
//     },
//     {
//         "role": "student",
//         "id": 4,
//         "userId": "std2",
//         "password": "student1234",
//         "userName": "이홍근",
//         "userAge": 25,
//         "phoneNumber": "010-1111-2222",
//         "userEmail": "test6@example.com",
//         "gender": "male",
//         "birth": "2026-03-16",
//     }
// ]


// user.setLocalStorage('userList', userList);

$('.l-login-main>form').addEventListener('submit', (e) => {
    e.preventDefault();
    const userInfo = user.getLocalStorage('userList').find(u => { return u.userId === $("#su-login-id").value });
    if (!$("#su-login-id").value.trim() || !$("#su-login-pwd")) {
        activeModal(() => { closeModal($('.modal')); $('#su-login-id').focus(); }, '아이디와 비밀번호를 입력해주세요.');
    } else if (userInfo) {
        if (userInfo.password === $('#su-login-pwd').value) {
            myInfo.setSessionStorage('myInfo', userInfo);
            activeModal(() => movePage('https://www.naver.com'), '로그인에 성공하였습니다.');
        } else {
            activeModal(() => { closeModal($('.modal')); $('#su-login-id').focus(); }, '아이디와 비밀번호가 일치하지 않습니다.');
        }
    }
    else {
        activeModal(() => { closeModal($('.modal')); $('#su-login-id').focus(); }, '존재하지 않는 아이디입니다.');
    }

    $('.l-login-main>form').reset();

});



