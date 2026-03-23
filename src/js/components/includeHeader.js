fetch("/components/header.html")
    .then((response) => response.text())
    .then((responseText) => {
        document.querySelector('.top-container').insertAdjacentHTML("beforebegin", responseText);

        const $headerActive = document.querySelector('.c-profile-active-ct');
        const $headerProfile = document.querySelector('.c-logo-profile');
        const $headerIfLogin = document.querySelector('.c-logo-right');
        const $headerIfUnLogin = document.querySelector('.c-logo-unlogin');
        const $headerMoveLogin = document.querySelector('.c-logo-unlogin>p:nth-child(1)');
        const $headerMoveSignUp = document.querySelector('.c-logo-unlogin>p:nth-child(3)');
        const $headerLogout = document.querySelector('.c-profile-logout-ct>p:nth-of-type(1)');
        const $headerSubStatus = document.querySelector('.c-logo-right-content');
        const $headerProfileName = document.querySelector('.c-profile-content-ct>p:nth-child(1)');
        const $headerProfileEmail = document.querySelector('.c-profile-content-ct>p:nth-child(2)');

        function headerMoveNavPath(path) {
            window.location.href = window.location.origin + `${path}`
        }


        $headerProfile.addEventListener('click', () => {
            $headerActive.style.display === 'none'
                ?
                $headerActive.style.display = "flex"
                :
                $headerActive.style.display = "none";
        });

        const myInfoGet = {
            getStorage() {
                if (localStorage.getItem('myInfo')) {
                    return JSON.parse(localStorage.getItem('myInfo'));
                } else {
                    return JSON.parse(sessionStorage.getItem('myInfo'));
                }
            }
        }

        // myInfo 테스트 데이터 삭제예정
        // const aa = {
        //     role : "student",
        //     id : 1
        // }
        // localStorage.setItem('myInfo', JSON.stringify(aa));
        const headerLocalStorage = myInfoGet.getStorage();

        function headerUnLogin() {
            $headerIfUnLogin.style.display = 'flex'
            $headerIfLogin.style.display = 'none'

        }

        function headerLogin() {
            $headerIfUnLogin.style.display = 'none'
            $headerIfLogin.style.display = 'flex'

            if (headerLocalStorage.role === "student") {
                if (headerLocalStorage.subscriptionStatus === true) {
                    $headerSubStatus.classList.add('c-profile-student-sub');
                    $headerSubStatus.innerText = "구독중";
                } else {
                    $headerSubStatus.classList.add('c-profile-student-unSub');
                    $headerSubStatus.innerText = "미구독";
                }
            } else if (headerLocalStorage.role === "lecture") {
                if (headerLocalStorage.membershipStatus === true) {
                    $headerSubStatus.classList.add('c-profile-lecture-sub');
                    $headerSubStatus.innerText = "등록중";
                } else {
                    $headerSubStatus.classList.add('c-profile-lecture-unSub');
                    $headerSubStatus.innerText = "미등록";
                }
            } else {
                $headerSubStatus.classList.add('c-profile-lecture-sub');
                $headerSubStatus.innerText = "관리자";
            }

            headerLocalStorage.role === "manager" ? $headerProfileName.innerText = "관리자" : $headerProfileName.innerText = headerLocalStorage.userName;
            headerLocalStorage.role === "manager" ? $headerProfileEmail.innerText = "manager@naver.com" : $headerProfileEmail.innerText = headerLocalStorage.userEmail;
        }

        $headerMoveLogin.addEventListener("click", () => {
            headerMoveNavPath('/account/login.html');
        })

        $headerMoveSignUp.addEventListener("click", () => {
            headerMoveNavPath('/account/signup.html');
        })

        $headerLogout.addEventListener("click", () => {
            localStorage.removeItem('myInfo');
            sessionStorage.removeItem('myInfo');
            headerMoveNavPath('/account/login.html');
        })

        function headerLoginStatus() {
            headerLocalStorage === null ? headerUnLogin() : headerLogin();
        }

        headerLoginStatus();


    })


