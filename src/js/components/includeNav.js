

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

        if(!localStorage.getItem('navSelect')) {
            localStorage.setItem('navSelect', 'home');
        }
 
        $navmovenav.forEach(item => item.addEventListener('click', (e) => {
            const navCategoryClassification = e.target.dataset;
            console.log(e.target);
            if (navCategoryClassification.manager) {
                localStorage.setItem('navSelect', navCategoryClassification.manager);
                if (navCategoryClassification.manager === 'home') {
                    moveNavPath('/manager/main/managerMain.html');
                } else if (navCategoryClassification.manager === 'users') {
                    moveNavPath('/manager/totalMember/userTotalCheck.html');
                } else if (navCategoryClassification.manager === 'contents') {
                    moveNavPath('/manager/totalContents/lectureListTotalCheck.html');
                } else {
                    moveNavPath('/manager/sales/salesManagement.html');
                }
            } else if (navCategoryClassification.student) {
                localStorage.setItem('navSelect', navCategoryClassification.student);
                if (navCategoryClassification.student === "home") {
                    moveNavPath('/student/contentTotal/contentTotal.html');
                } else if (navCategoryClassification.student === "shopping") {
                    moveNavPath('/student/shoppingCart/shoppingCart.html');
                }
            } else if (navCategoryClassification.lecture) {
                localStorage.setItem('navSelect', navCategoryClassification.lecture);
                if (navCategoryClassification.lecture === "home") {
                    moveNavPath('/lecture/main/lectureContentTotal.html');
                } else if (navCategoryClassification.lecture === "student") {
                    moveNavPath('/lecture/myStudents/myStudents.html');
                }
            }
        }))

        const navlocalStorage = localStorage.getItem('navSelect');
        console.log(navlocalStorage);
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

        // 로컬스토리지 테스트 데이터 삭제 예정
        const localStorageTest = {
            role: "student"
        }
        localStorage.setItem('userrole', JSON.stringify(localStorageTest));
        const test = localStorage.getItem('userrole');

        const roleTest = JSON.parse(test);
        if (roleTest.role == "student") {
            roleStudent();
        } else if (roleTest.role == "manager") {
            roleManager();
        } else if (roleTest.role == "lecture") {
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