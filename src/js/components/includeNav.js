fetch("/components/nav.html")
    .then((response) => response.text())
    .then((responseText) => {
        document.querySelector('.top-container').insertAdjacentHTML("afterbegin", responseText);
    });

const $navStudent = document.querySelector(".c-student-ct");
const $navManager = document.querySelector(".c-manager-ct"); 
const $navlecture = document.querySelector(".c-lecture-ct");

// if($navStudent.contains('c-student')) {
    
// }

