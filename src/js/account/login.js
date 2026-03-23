const $ = (selector) => document.querySelector(selector)

//storage저장
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
    setLocalStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },

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

//모달
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
//         "signDate": "2026-03-16",
//         "subscriptionStatus": true,
//         "appliedLecture": [
//             {
//                 "contentId": 1,
//                 "appliedDate": "2026-03-21"
//             },
//             {
//                 "contentId": 3,
//                 "appliedDate": "2026-03-21"
//             }
//         ],
//         "shoppingCart": [
//             {
//                 "id": 32,
//                 "contentId": 1,
//                 "contentTitle": "강의 제목",
//                 "contentImg": "이미지 경로",
//                 "contentPrice": 10000,
//                 "userName": "강사명",
//                 "contentTime": "1시간 25분",
//                 "contentTotal": 10,
//                 "contentSelect": 5,
//                 "contentTotalPrice": 200000
//             },
//             {
//                 "id": 1,
//                 "contentId": 2,
//                 "contentTitle": "강의 제목",
//                 "contentImg": "이미지 경로",
//                 "contentPrice": 10000,
//                 "userName": "강사명",
//                 "contentTime": "1시간 25분",
//                 "contentTotal": 10,
//                 "contentSelect": 5,
//                 "contentTotalPrice": 200000
//             }
//         ],
//         "subscriptionSignDate": "2026-03-21",
//         "classCount": 5
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
//         "signDate": "2026-03-16",
//         "membershipStatus": true,
//         "userDocument": [
//             "파일경로",
//             "파일경로"
//         ],
//         "approvalStatus": true,
//         "membershipSignDate": "2026-03-14"
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
//         "signDate": "2026-03-16",
//         "subscriptionStatus": true,
//         "appliedLecture": [
//             {
//                 "contentId": 5,
//                 "appliedDate": "2026-03-21"
//             },
//             {
//                 "contentId": 4,
//                 "appliedDate": "2026-03-21"
//             }
//         ],
//         "shoppingCart": [
//             {
//                 "id": 32,
//                 "contentId": 8,
//                 "contentTitle": "강의 제목",
//                 "contentImg": "이미지 경로",
//                 "contentPrice": 10000,
//                 "userName": "강사명",
//                 "contentTime": "1시간 25분",
//                 "contentTotal": 10,
//                 "contentSelect": 5,
//                 "contentTotalPrice": 200000
//             },
//             {
//                 "id": 1,
//                 "contentId": 3,
//                 "contentTitle": "강의 제목",
//                 "contentImg": "이미지 경로",
//                 "contentPrice": 10000,
//                 "userName": "강사명",
//                 "contentTime": "1시간 25분",
//                 "contentTotal": 10,
//                 "contentSelect": 5,
//                 "contentTotalPrice": 200000
//             }
//         ],
//         "subscriptionSignDate": "2026-03-21",
//         "classCount": 5
//     }
// ]


// user.setLocalStorage('userList', userList);

let mainPageRender = '';

//로그인 함수
$('.l-login-main>form').addEventListener('submit', (e) => {
    e.preventDefault();
    const userInfo = user.getLocalStorage('userList').find(u => { return u.userId === $("#su-login-id").value });
    if (!$("#su-login-id").value.trim() || !$("#su-login-pwd")) {
        activeModal(() => { closeModal($('.modal')); $('#su-login-id').focus(); }, '아이디와 비밀번호를 입력해주세요.');
    } else if (userInfo) {
        if (userInfo.password === $('#su-login-pwd').value) {
            if (userInfo.role === 'lecturer' && !userInfo.approvalStatus) {
                activeModal(() => closeModal($('.modal')), '관리자 승인을 기다려주세요.');
            } else {
                $('#l-signup-auto').checked ? myInfo.setLocalStorage('myInfo', userInfo) : myInfo.setSessionStorage('myInfo', userInfo);
                userInfo.role === 'student' ? mainPageRender = '/student/index.html' : userInfo.role === 'lecturer' ? mainPageRender = '/lecturer/index.html' : mainPageRender = '/manager/index.html';
                console.log(mainPageRender)
                activeModal(() => movePage(mainPageRender), '로그인에 성공하였습니다.');
            }
        } else {
            activeModal(() => { closeModal($('.modal')); $('#su-login-id').focus(); }, '아이디와 비밀번호가 일치하지 않습니다.');
        }
    }
    else {
        activeModal(() => { closeModal($('.modal')); $('#su-login-id').focus(); }, '존재하지 않는 아이디입니다.');
    }

    $('.l-login-main>form').reset();

});



