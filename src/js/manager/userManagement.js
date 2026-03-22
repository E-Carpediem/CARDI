const $userManagementCategory = document.querySelectorAll('.tm-user-management>p');
const $managerArray = document.querySelector('.manager-array-common');
const $managerFilter = document.querySelector('.manager-fileter-common');
const $managerArrayCt = document.querySelector('.m-array');
const $managerFilterCt = document.querySelector('.m-fileter');

function managermoveNavPath(path) {
    window.location.href = window.location.origin + `${path}`
}


$userManagementCategory[0].addEventListener('click', () => {
    managermoveNavPath('/manager/totalMember/userTotalCheck.html');
}
)

$userManagementCategory[1].addEventListener('click', () => {
    managermoveNavPath('/manager/totalMember/studentTotalCheck.html')
}
)

$userManagementCategory[2].addEventListener('click', () => {
    managermoveNavPath('/manager/totalMember/lectureTotalCheck.html')
}
)

$managerArray.addEventListener("click", () => {
    $managerArrayCt.style.display === "none" 
    ? $managerArrayCt.style.display = "flex" 
    : $managerArrayCt.style.display = "none"
})

$managerFilter.addEventListener("click", () => {
    $managerFilterCt.style.display === "none"
    ? $managerFilterCt.style.display = "flex"
    : $managerFilterCt.style.display = "none"
})