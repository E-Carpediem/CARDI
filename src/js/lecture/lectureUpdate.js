const $ = (selector) => document.querySelector(selector)

// 저장소 객체 (데이터 저장 및 읽어오는 기능)
const store = {
    setLocalStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    getLocalStorage(key) {
        return JSON.parse(localStorage.getItem(key));
    }
}

if ($('#le-content-img') !== null) {
    $('#le-content-img').addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                $('.le-content-img').src = event.target.result;
            };
            reader.readAsDataURL(file);
            $('#le-img-input').innerHTML = "";
        }
    })
}

// 난이도 선택 시 글꼴 변경
$(".le-content-level").addEventListener("change", () => {
    $(".le-content-level").classList.add("selected");
});



/*요구사항 명세
0. 강의 수정 페이지에서는 폼에 기존 강의의 모든 값을 받아와야 한다.
1. 강의 정보를 모두 입력 후 수정하기 버튼을 누르면 모달창이 나타나고,
모달창에서 취소 버튼을 누르면 작성중인 폼으로 돌아온다.
모달창에서 확인 버튼을 누르면 강의가 수정되고, 강의 상세 조회 페이지로 넘어가서 확인할 수 있다.

2. 강의 정보를 모두 입력하지 않고 등록하기 버튼을 누르면 모달창이 나타나지 않는다.

3. 취소 버튼을 누르면 강의 수정을 그만두시겠습니까? 라는 모달창이 나타나고,
모달창에서 취소 버튼을 누르면 작성중인 폼으로 돌아온다.
모달창에서 확인 버튼을 누르면 강의 수정이 취소되고, 기존의 강의 상세 페이지로 넘어간다.*/

// 강의 동영상 썸네일 추가 및 적용