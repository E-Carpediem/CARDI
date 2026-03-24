//유효성 검사
//버튼 변경

const $ = (selector) => document.querySelector(selector)

const user = {
    setLocalStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    getLocalStorage(key) {
        return JSON.parse(localStorage.getItem(key))
    }
}

function SignUp() {
    this.users = [];

    this.init = () => {
        user.getLocalStorage('userList') ? this.users = user.getLocalStorage('userList') : this.user = []
    }

    const inputId = ['#su-user-id', '#su-user-pwd', '#su-user-pwdcheck', '#su-user-name', '#su-user-age', '#su-user-pone', '#su-user-email', '#su-user-birth'];


    const $agreeButtons = document.querySelectorAll('.su-agree-check');



    const activeModal = ((clickE, message) => {
        document.querySelector('.active-modal').innerHTML = `
            <div class="modal">
                <div class="modal-container">
                    <div class="modal-top">
                        ${message}
                    </div>
                    <div class="modal-bottom modal-check" id="modal-check1">확인</div>
                </div>
            </div>`;

        const $modal = document.querySelector(".modal");
        $modal.style.display = 'flex';
        document.querySelector('.modal-check').addEventListener('click', clickE);
    })

    function movePage(url) {
        window.location.href = url;
    }

    function closeModal(modal) {
        modal.style.display = 'none';
    }



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

    //전화번호 검사
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
    $('#su-user-id').addEventListener('input', (e) => {
        if (e.target.value.length < 4) {
            removeBlue('#su-user-id');
            addRed('#su-user-id');
            $(`#su-user-id-p`).innerText = '아이디는 4자 이상 입력해주세요.';
        } else {
            removeBlue('#su-user-id');
            addRed('#su-user-id');
            $(`#su-user-id-p`).innerText = '아이디 중복확인 해주세요.';
        }
    })

    //아이디 중복 확인

    console.log($('.su-same-check-btn'));
    console.log('asdsdffff');
    $('.su-same-check-btn').addEventListener('click', () => {

        if (!(this.users === null) && $('#su-user-id').value.trim()) {
            if (this.users.find(u => { return u.userId === $('#su-user-id').value })) {
                removeBlue('#su-user-id');
                addRed('#su-user-id');
                $(`#su-user-id-p`).innerText = '이미 존재하는 아이디입니다.';
            } else {
                removeRed('#su-user-id');
                addBlue('#su-user-id');
                $(`#su-user-id-p`).innerText = '사용 가능한 아이디입니다.';
            }
        } else if (!$('#su-user-id').value.trim()) {
            removeBlue('#su-user-id');
            addRed('#su-user-id');
            $(`#su-user-id-p`).innerText = '값을 입력해주세요.';
        } else {
            removeRed('#su-user-id');
            addBlue('#su-user-id');
            $(`#su-user-id-p`).innerText = '사용 가능한 아이디입니다.';
        }
    })

    //비밀번호 6글자 미만 경고
    $('#su-user-pwd').addEventListener('input', (e) => {
        if (e.target.value.length < 6) {
            removeBlue('#su-user-pwd');
            addRed('#su-user-pwd');
            $(`#su-user-pwd-p`).innerText = '비밀번호는 6자 이상 입력해주세요.';
        } else {
            const english = /[a-zA-Z]/.test(e.target.value);
            const number = /[0-9]/.test(e.target.value);
            if (english && number) {
                removeRed('#su-user-pwd');
                addBlue('#su-user-pwd');
                $(`#su-user-pwd-p`).innerText = '사용 가능한 비밀번호입니다.';
            } else {
                removeBlue('#su-user-pwd');
                addRed('#su-user-pwd');
                english ? $(`#su-user-pwd-p`).innerText = '숫자를 포함해주세요.' : $(`#su-user-pwd-p`).innerText = '영어를 포함해주세요.';
            }

        }

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

    //비밀번호 확인 경고
    $('#su-user-pwdcheck').addEventListener('input', (e) => {
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
    $('#su-user-age').addEventListener('input', (e) => {
        if (e.target.value < 14) {
            addRed('#su-user-age');
        } else {
            removeRed('#su-user-age');
        }
    })

    //전화번호 경고
    $('#su-user-pone').addEventListener('input', () => {
        phoneCheck();
    })

    //이메일 경고
    $('#su-user-email').addEventListener('input', (e) => {
        const index = [...e.target.value].findIndex(email => email === '@')
        const posibleEmail = $('#su-user-email').value[index - 1] && $('#su-user-email').value[index + 1]

        if (index + 1 && posibleEmail) {
            removeRed('#su-user-email');
            addBlue('#su-user-email');
            $(`#su-user-email-p`).innerText = '정상적인 이메일입니다.'
        } else {
            removeBlue('#su-user-email');
            addRed('#su-user-email');
            $(`#su-user-email-p`).innerText = '이메일을 작성해주세요.'
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


    //프로필 이미지
    if ($('#su-lecture-img') !== null) {
        $('#su-lecture-img').addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    $('.su-lecture-profile-img').src = event.target.result;
                };
                reader.readAsDataURL(file);
            } else {
                $('.su-lecture-profile-img').removeAttribute('src');
            }
        })
    }


    //자격 증명
    if ($('#su-lecture-info') !== null) {
        $('#su-lecture-info').addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const fileNames = [...e.target.files].map((f) => f.name).join(', ');
                if (fileNames.length > 15) {
                    $('.su-qualification-ct').style.display = 'block';
                }
                $('.su-selected-file').innerText = `${fileNames}`;
            } else {
                $('.su-selected-file').innerText = `선택된 파일 없음`;
            }

        })
    }

    //버튼 활성화 이벤트
    $('.su-signup-form').addEventListener('change', () => {
        inputId.map((key) => {
            return $(key).value.trim()
        }).every(input => input) ? $('.su-signup-btn').style.backgroundColor = '#2F4156' : $('.su-signup-btn').style.backgroundColor = '#2F415699';
    })

    //제출 이벤트
    $('.su-signup-form').addEventListener('submit', (e) => {
        e.preventDefault();

        //공백 처리
        inputId.forEach((key) => {
            changeRed(key);
        })
        if (!$('#su-user-id').classList.contains('su-border-blue')) {
            addRed('#su-user-id');
        }
        phoneCheck();

        //input값들 확인
        const inputs = document.querySelectorAll('input');
        const inputResults = [...inputs].map(input => {
            return input.classList.contains('su-border-red');
        })
        if ($('#su-lecture-info') !== null) {
            inputResults.push($('#su-lecture-info').files.length === 0)
            inputResults.push($('#su-lecture-img').files.length === 0)
        }
        const inputResult = inputResults.reduce((a, b) => {
            return a || b;
        })

        //check값들 확인
        const checks = document.querySelectorAll('.su-agree-check');
        const checkResults = [...checks].map(check => {
            return !check.checked;
        });
        const checkResult = checkResults.reduce((a, b) => {
            return a || b;
        })





        if (inputResult || checkResult) {
            inputResult ? activeModal(() => closeModal($('.modal')), '정보를 다시 확인해주세요.') : activeModal(() => closeModal($('.modal')), '약관 동의를 진행해주세요');

        } else {
            const year = new Date().getFullYear();
            const month = String(new Date().getMonth()).padStart(2, '0');
            const date = String(new Date().getDate()).padStart(2, '0');
            const currentDate = `${year}-${month}-${date}`;
            console.log(currentDate);
            const signUpInfo = {
                "role": "student",
                "id": this.users?.length ? this.users.length + 1 : 1,
                "userId": $('#su-user-id').value,
                "password": $('#su-user-pwd').value,
                "userName": $('#su-user-name').value,
                "userAge": $('#su-user-age').value,
                "phoneNumber": $('#su-user-pone').value,
                "userEmail": $('#su-user-email').value,
                "gender": $('input[name="gender"]:checked').value,
                "birth": $('#su-user-birth').value,
                "signDate": currentDate,

            }

            if ($('#su-lecture-info') !== null) {
                signUpInfo.role = "lecturer";
                signUpInfo.userProfile = $('#su-lecture-img').files[0];
                signUpInfo.userDocument = [...$('#su-lecture-info').files];
                signUpInfo.membershipStatus = false;
                signUpInfo.approvalStatus = false;
                signUpInfo.membershipSignDate = '';
            } else {
                signUpInfo.subscriptionStatus = false;
                signUpInfo.appliedLecture = [];
                signUpInfo.shoppingCart = [];
                signUpInfo.subscriptionSignDate = '';
                signUpInfo.classCount = 0;
            }

            this.users.push(signUpInfo)
            user.setLocalStorage('userList', this.users);
            activeModal(() => movePage('../account/signup-complete.html'), '회원가입이 완료되었습니다.');
        }

    })

}


const signUp = new SignUp();

signUp.init();