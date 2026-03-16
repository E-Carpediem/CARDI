프로젝트 소개 : 강의 및 강좌 등록 도메인 구축 프로젝트

기술 스택 : HTML, CSS, JS
<br><br>

**협업 규칙**
    
    1. 작업을 시작하기 전 반드시 **issue 작성** - 담당자, 라벨 필수 / issue 작성 규칙 반드시 지켜주세요.
    
    2. 브랜치 확인 및 작성 - Branch 작성 규칙 확인
    
    3. 작업 시작 - 작업간에 Coding Convention 규칙 확인
    
    4. Commit & Push - Commit Message 작성 규칙 확인

    5. Pull Requst(PR) - 리뷰어, 담당자, 라벨 필수 / PR 작성 규칙 반드시 지켜주세요 
<br>

**issue 작성 규칙**

    
    설명 - 이슈 내용 기술

    작업할 내용 - 작업할 내용 기술

    기타 - 기타사항 기술
<br>

**Branch 작성 규칙**

    feature : 기능 구현
    ex) feature/기능-세부기능1-세부기능2#이슈번호 (세부 기능 끝에 숫자가 들어가게 되면 이슈번호와 혼동이 생길 수 잇으니 이슈번호는 커밋 메시지와 통일)

    hotfix : 오류 수정
    ex) hotfix/수정할 기능
<br>

**Commit Message 작성 규칙**
<br><br>

*상황별 PREFIX 정리* 

- [FEATURE] 새로운 기능 추가
 
- [FIX]     오류를 고친 경우

- [RENAME]  파일 혹은 폴더명을 수정하는 경우

- [STYLE]   코드 변경 없이 자잘한 수정을 하는 경우
<br>

**커밋 메시지로 이슈 닫기**
    
    [FEATURE] 제목 - (필수) 
    
    상세내용 - (선택)
    
    닫을 이슈번호 - (필수)
<br>
Commit Message 작성 예시

1. [FEATURE] 회원가입 기능 추가

    closed #20

2. [FEATURE] 회원가입 기능 추가
 
    회원가입 기능 중 아이디, 비밀번호 기능 추가 했습니다.

    closed #20
<br>

**Pull Request 작성 규칙**

    관련이슈 - 본인이 작성한 이슈 번호 작성

    작업유형 - 작업할 내용에 따라 유형 선택

    작업내용 - 작업한 내용 기술

    변경이유 - 변경이유 기술

    기타 - 작업내용, 변경이유 외 작성할 내용 기술

    스크린샷(선택) - 선택이지만 가급적 사용 권장
<br>

**Coding Convention**

[
    
코드 컨벤션

1. 네이밍 규칙 : 카멜케이스
2. 변수 (명사로 쓰기): userId, 함수(동사로 쓰기): clickBtn()
3. 들여쓰기 : Ctrl + Shift + F 기준으로 (적용 안될시 Tab 한번)
4. 공백 :  Ctrl + Shift + F 기준으로 (적용 안될시 띄어쓰기 한번)
5. 줄바꿈: 세미콜론( ; ) 기준으로 한칸 아래로 ex) 아래 코드
6. 문장 종료 : 세미콜론( ; ) 작성하기
7. 주석 작성법:  2줄 이상은 전체주석, 기본적으로는 함수 선언이나 객체 같은 긴 코드는 위에다가 주석, 코드 단 한줄에 설명이 주석

```
        // 줄바꿈 예시
        
        
        const editBookName = $('#edit-book-name').value;
        
        const editBookPrice = Number($('#edit-book-price').value);
        
        const editBookIndex = Number($('#edit-book-index').value);

				// 주석예시. 함수 선언이나 객체 같은 긴 코드
        this.books[editBookIndex] = {
            title: editBookName,    // 주석예시. 인덱스 중 타이틀 값
            price: editBookPrice
        };
```

8. 파일 구조 

```bash
[components] ( 공통으로 사용되는 함수, 변수, 페이지 등)
	├── modal.html
	├── header.html
	├── nav.html
	├── [contentDetail] (강의 상세 조회) 
	├── [community] ( 커뮤니티 )

[manager]
	├── [main] (메인 대시보드)
	├── [totalMember] (회원 전체조회 - 회원, 수강생, 강사)
	├── [totalContents] (강의 전체 조회)
		├── [lecturersContents] (강사의 강의목록 전체조회)
	├── [sales] (매출)
	
[student]
	├── [main] ( 강의 전체 조회 )
	├── [shoppingCart] (장바구니)
	
[lecture]
	├── [main] ( 내 강의 전체 조회 )
	├── [lectureEnroll] ( 강의 등록 )
	├── [myStudents] ( 수강생 전체 조회 )
	
	
[account]
	├── [login] ( 로그인 )
	├── [signUp] ( 회원가입)

[src]
	├── [assets]
		├── [fonts]
		├── [img]
	├── [css]
	├── [js] 
		├── modal.js
		├── header.js
		├── nav.js

```

9. 파일 코드 순서: 전역변수는 맨 위에,변수는 스코프 내에서 가장 위에
10. 클래스, 아이디명: 작성 형식은 ‘ - ’ 사용/  main을 제외하고 폴더명에 첫글자와 카멜케이스 대문자를 합치고 기능 작성 
    
    ex) .lc-delete
    
11. 함수 사용법 : 화살표 함수
]
