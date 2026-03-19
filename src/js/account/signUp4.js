const $ = (selector) => document.querySelector(selector)

const user = {
    setLocalStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    getLocalStorage(key) {
        return JSON.parse(localStorage.getItem(key))
    }
}

const userList = user.getLocalStorage('userList');
const currentUser = userList[userList.length - 1];
$('.su-main-ct>h2>b').innerText = `${currentUser.userName}`;
if (currentUser.role === "lecturer") {
    $(".su-signUp-role-p").innerText = '관리자 승인까지 최대 7일이 걸릴 수 있습니다.';
} else {
    $(".su-signUp-role-p").innerText = '로그인을 진행해주세요.';
}
