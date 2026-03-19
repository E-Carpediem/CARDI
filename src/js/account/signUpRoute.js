const locationEvent = (selector, url) => {
    const element = document.querySelector(selector);
    if (element) {
        element.addEventListener('click', () => {
            console.log('s');
            window.location.href = url;
        })
    }
}

//회원가입 완료-> 로그인
locationEvent('.su-go-login', '../login/login.html');

//로그인-> 회원가입 1
locationEvent('.l-signup-btn', '../signUp/signUp1.html');

//회원가입 1-> 회원가입 학생
locationEvent('.su-student-btn', '../signUp/signUp2.html');

//회원가입 1-> 회원가입 강사
locationEvent('.su-lecture-btn', '../signUp/signUp3.html');
