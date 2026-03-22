fetch("/components/header.html")
    .then((response) => response.text())
    .then((responseText) => {
        document.querySelector('.top-container').insertAdjacentHTML("beforebegin", responseText);

        const $headerActive = document.querySelector('.c-profile-active-ct');
        const $headerProfile = document.querySelector('.c-logo-profile');
        const $headerLogin = document.querySelector('.c-logo-right');
        const $headerUnLogin = document.querySelector('.c-logo-unlogin');

        $headerProfile.addEventListener('click', (e) => {
            $headerActive.style.display === 'none'
                ?
                $headerActive.style.display = "flex"
                :
                $headerActive.style.display = "none";
        });

        const headerTestData = {
            id: 1
        }

        localStorage.setItem('myInfo', JSON.stringify(headerTestData));
        const headerIdtest = JSON.parse(localStorage.getItem('myInfo'));

        function headerTTest() {
            $headerUnLogin.style.display = 'flex'
            $headerLogin.style.display = 'none'
        }

        function headerTTest2() {
            $headerUnLogin.style.display = 'none'
            $headerLogin.style.display = 'flex'
        }


        !headerIdtest.id
            ?
            headerTTest()
            :
            headerTTest2();




    })
