//유효성 검사
//버튼 변경

const $ = (selector) => document.querySelector(selector)

function SignUp() {
    this.users = [];

    const inputId = ['#su-user-id', '#su-user-pwd', '#su-user-pwdcheck', '#su-user-name', '#su-user-age', '#su-user-pone', '#su-user-email', '#su-user-birth'];


    const $agreeButtons = document.querySelectorAll('.su-agree-check');

    // 경고 red 추가 
    const addRed = (selector) => {
        $(`${selector}`).classList.add('su-border-red');
        $(`${selector}-p`) ? $(`${selector}-p`).classList.add('su-color-red') : undefined;
    }

    //경고 red 삭제
    const removeRed = (selector) => {
        $(`${selector}`).classList.remove('su-border-red');
        $(`${selector}-p`) ? $(`${selector}-p`).classList.remove('su-color-red') : undefined;
    }

    //성공 blue 추가
    const addBlue = (selector) => {
        $(`${selector}`).classList.add('su-border-blue');
        $(`${selector}-p`) ? $(`${selector}-p`).classList.add('su-color-blue') : undefined;
    }

    //성공 blue 삭제
    const removeBlue = (selector) => {
        $(`${selector}`).classList.remove('su-border-blue');
        $(`${selector}-p`) ? $(`${selector}-p`).classList.remove('su-color-blue') : undefined;
    }

    //값이 공백일 시 유효성 검사
    const changeRed = (selector) => {
        if (!$(selector).value.trim()) {
            addRed(selector);
            $(`${selector}-p`) ? $(`${selector}-p`).innerText = '값을 입력해주세요' : undefined;
            return;
        } else {
            removeRed(selector);
        }
    }


    const phoneCheck = () => {
        if ($('#su-user-pone').value.length < 13) {
            removeBlue('#su-user-pone');
            addRed('#su-user-pone');
            $('#su-user-pone-p').innerText = '전화번호 길이를 다시 확인해주세요.';
        } else {
            if (($('#su-user-pone').value[3] === '-') && ($('#su-user-pone').value[8] === '-')) {
                removeRed('#su-user-pone');
                addBlue('#su-user-pone');
                $('#su-user-pone-p').innerText = '정상적인 전화번호입니다.';
            } else {
                $('#su-user-pone-p').innerText = '‘ - ’ 포함하여 작성해주세요 ex) 010-1234-5678';
                removeBlue('#su-user-pone');
                addRed('#su-user-pone');
            }
        }
    }


    //아이디 input 영어, 숫자만 입력 
    $('#su-user-id').addEventListener('input', (e) => {
        if (e.target.value.length === 1) {
            e.target.value = e.target.value.replace(/[^A-Za-z]/ig, '');
        }
        e.target.value = e.target.value.replace(/[^A-Za-z0-9]/gi, '');
    })

    //아이디 4글자 미만 경고
    $('#su-user-id').addEventListener('change', (e) => {
        if (e.target.value.length < 4) {
            addRed('#su-user-id');
            $(`#su-user-id-p`).innerText = '아이디는 4자 이상 입력해주세요.';
        } else {
            removeRed('#su-user-id');
            $(`#su-user-id-p`).innerText = '4~8자로 입력해주세요';
        }
    })

    //비밀번호 6글자 미만 경고
    $('#su-user-pwd').addEventListener('change', (e) => {
        if (e.target.value.length < 6) {
            removeBlue('#su-user-pwd');
            addRed('#su-user-pwd');
            $(`#su-user-pwd-p`).innerText = '비밀번호는 6자 이상 입력해주세요.';
        } else {
            removeRed('#su-user-pwd');
            addBlue('#su-user-pwd');
            $(`#su-user-pwd-p`).innerText = '사용 가능한 비밀번호입니다.';

        }
    })

    //비밀번호 확인 경고
    $('#su-user-pwdcheck').addEventListener('change', (e) => {
        if ($('#su-user-pwd').value !== $('#su-user-pwdcheck').value) {
            removeBlue('#su-user-pwdcheck');
            addRed('#su-user-pwdcheck');
            $(`#su-user-pwdcheck-p`).innerText = '비밀번호가 일치하지 않습니다.';
        } else {
            removeRed('#su-user-pwdcheck');
            addBlue('#su-user-pwdcheck');
            $(`#su-user-pwdcheck-p`).innerText = '비밀번호가 일치합니다.'
        }
    })

    //이름 빈값 경고
    $('#su-user-name').addEventListener('input', (e) => {
        if (e.target.value.trim() === '') {
            addRed('#su-user-name');
        } else {
            removeRed('#su-user-name');
        }
    })

    //14세 미만 경고
    $('#su-user-age').addEventListener('change', (e) => {
        if (e.target.value < 14) {
            addRed('#su-user-age');
        } else {
            removeRed('#su-user-age');
        }
    })

    //전화번호 경고
    $('#su-user-pone').addEventListener('change', () => {
        phoneCheck();
    })


    $('#su-user-email').addEventListener('change', (e) => {
        const index = [...e.target.value].findIndex(email => email === '@')
        if (index) {
            removeRed('#su-user-email');
        } else {
            addRed('#su-user-email');
        }
    })


    //날짜 빈 값 경고
    $('#su-user-birth').addEventListener('input', (e) => {
        if (e.target.value === '') {
            addRed('#su-user-birth');
        } else {
            removeRed('#su-user-birth');
        }
    })

    //check 한번에 하기
    $('#su-all-agree').addEventListener('click', () => {
        $agreeButtons.forEach(key => {
            key.checked = $('#su-all-agree').checked;
        })

    })

    //check 하나 취소되면 모두 동의 취소                           
    $agreeButtons.forEach(key => {
        key.addEventListener('click', () => {
            if (!key.checked) {
                $('#su-all-agree').checked = key.checked;
            }
        })
    })



    //제출 이벤트
    $('.su-signup-form').addEventListener('submit', (e) => {
        e.preventDefault();

        inputId.forEach((key) => {
            changeRed(key);
        })
        phoneCheck();


        const $inputs = document.querySelectorAll('input');

        const result = [...$inputs].map(input => {
            return input.classList.contains('su-border-red');
        }).reduce((a, b) => {
            return a || b;
        })
        console.log(result);

        if (result) {
            alert('회원가입 실패');
        } else {
            alert('회원가입 성공')
        }

    })

}


const signUp = new SignUp();