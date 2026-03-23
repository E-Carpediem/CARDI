

fetch("/components/nav.html")
    .then((response) => response.text())
    .then((responseText) => {
        document.querySelector('.top-container').insertAdjacentHTML("afterbegin", responseText);

        const $navlecture = document.querySelector("#c-lecture");
        const $navstudent = document.querySelector("#c-student");
        const $navmanager = document.querySelector("#c-manager");

        const $navmovenav = document.querySelectorAll('.c-nav');
        const $navmovehome = document.querySelectorAll('.c-home-ct');
        const $navmovestudent = document.querySelectorAll('.c-student-ct');
        const $navmoveshopping = document.querySelectorAll('.c-shopping-ct');
        const $navmoveusers = document.querySelectorAll('.c-users-ct');
        const $navmovecontents = document.querySelectorAll('.c-contents-ct');
        const $navmoveprice = document.querySelectorAll('.c-price-ct');

        function moveNavPath(path) {
            window.location.href = window.location.origin + `${path}`
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

        $navmovenav.forEach(item => item.addEventListener('click', (e) => {
            const navCategoryClassification = e.target.dataset;
            console.log(e.target);
            if (navCategoryClassification.manager) {
                localStorage.setItem('navSelect', navCategoryClassification.manager);
                if (navCategoryClassification.manager === 'home') {
                    moveNavPath('/manager/index.html');
                } else if (navCategoryClassification.manager === 'users') {
                    moveNavPath('/manager/user-total.html');
                } else if (navCategoryClassification.manager === 'contents') {
                    moveNavPath('/manager/lecture-total.html');
                } else {
                    moveNavPath('/manager/sales.html');
                }
            } else if (navCategoryClassification.student) {
                localStorage.setItem('navSelect', navCategoryClassification.student);
                if (navCategoryClassification.student === "home") {
                    moveNavPath('/student/index.html');
                } else if (navCategoryClassification.student === "shopping") {
                    moveNavPath('/student/cart.html');
                }
            } else if (navCategoryClassification.lecture) {
                localStorage.setItem('navSelect', navCategoryClassification.lecture);
                if (navCategoryClassification.lecture === "home") {
                    moveNavPath('/lecturer/index.html');
                } else if (navCategoryClassification.lecture === "student") {
                    moveNavPath('/lecturer/students.html');
                }
            }
        }))

        const navlocalStorage = localStorage.getItem('navSelect');
        if (navlocalStorage === 'home') {
            [...$navmovehome].forEach((e) => {
                e.style.background = "#2F4156";;
            })
        } else if (navlocalStorage == 'users') {
            [...$navmoveusers].forEach((e) => {
                e.style.background = "#2F4156";;
            })
        } else if (navlocalStorage == 'contents') {
            [...$navmovecontents].forEach((e) => {
                e.style.background = "#2F4156";;
            })
        } else if (navlocalStorage == 'price') {
            [...$navmoveprice].forEach((e) => {
                e.style.background = "#2F4156";;
            })
        } else if (navlocalStorage == 'shopping') {
            [...$navmoveshopping].forEach((e) => {
                e.style.background = "#2F4156";;
            })
        } else if (navlocalStorage == 'student') {
            [...$navmovestudent].forEach((e) => {
                e.style.background = "#2F4156";;
            })
        }

        const navLocalStorage = myInfoGet.getStorage()

        if (navLocalStorage.role == "student") {
            roleStudent();
        } else if (navLocalStorage.role == "manager") {
            roleManager();
        } else if (navLocalStorage.role == "lecture") {
            roleLecture();
        } else {
            roleNone();
        }

        function roleStudent() {
            $navstudent.style.display = "flex";
        }

        function roleManager() {
            $navmanager.style.display = "flex";
        }

        function roleLecture() {
            $navlecture.style.display = "flex";
        }

        function roleNone() {
            $navlecture.style.display = "flex";
        }
    });