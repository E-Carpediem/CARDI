const userList = [
  {
    "role": "manager",
    "id": 1,
    "userId": "manager01",
    "password": "manager1234"
  },
  {
    "role": "student",
    "id": 2,
    "userId": "std1",
    "password": "student1234",
    "userName": "이홍근",
    "userAge": 25,
    "phoneNumber": "010-1111-2222",
    "userEmail": "hong1@example.com",
    "gender": "male",
    "birth": "2001-05-12",
    "signDate": "2026-01-10",
    "subscriptionStatus": true,
    "appliedLecture": [
      { "contentId": 1, "appliedDate": "2026-01-15", "completeContents": 32 },
      { "contentId": 2, "appliedDate": "2026-01-20", "completeContents": 15 }
    ],
    "shoppingCart": [
      {
        "id": 10,
        "contentId": 1,
        "contentTitle": "React 완전 정복",
        "contentImg": "이미지 경로",
        "contentPrice": 15000,
        "userName": "김민준",
        "contentTime": 130,
        "contentTotal": 8,
        "contentSelect": 3,
        "contentTotalPrice": 45000
      }
    ],
    "subscriptionSignDate": "2026-01-10",
    "classCount": 2
  },
  {
    "role": "student",
    "id": 3,
    "userId": "std2",
    "password": "pass5678",
    "userName": "박서연",
    "userAge": 22,
    "phoneNumber": "010-2233-4455",
    "userEmail": "seoyeon2@example.com",
    "gender": "female",
    "birth": "2004-08-23",
    "signDate": "2026-01-15",
    "subscriptionStatus": false,
    "appliedLecture": [
      { "contentId": 3, "appliedDate": "2026-02-01", "completeContents": 7 }
    ],
    "shoppingCart": [
      {
        "id": 11,
        "contentId": 3,
        "contentTitle": "Vue.js 기초부터 실전까지",
        "contentImg": "이미지 경로",
        "contentPrice": 20000,
        "userName": "이수진",
        "contentTime": 5,
        "contentTotal": 12,
        "contentSelect": 6,
        "contentTotalPrice": 120000
      }
    ],
    "subscriptionSignDate": null,
    "classCount": 1
  },
  {
    "role": "student",
    "id": 4,
    "userId": "joon99",
    "password": "joon990123",
    "userName": "최준혁",
    "userAge": 19,
    "phoneNumber": "010-3344-5566",
    "userEmail": "junhyuk99@example.com",
    "gender": "male",
    "birth": "2007-03-05",
    "signDate": "2026-01-20",
    "subscriptionStatus": true,
    "appliedLecture": [
      { "contentId": 1, "appliedDate": "2026-01-22", "completeContents": 50 },
      { "contentId": 4, "appliedDate": "2026-01-25", "completeContents": 28 },
      { "contentId": 5, "appliedDate": "2026-02-01", "completeContents": 10 }
    ],
    "shoppingCart": [],
    "subscriptionSignDate": "2026-01-20",
    "classCount": 3
  },
  {
    "role": "student",
    "id": 5,
    "userId": "mina01",
    "password": "mina12345",
    "userName": "정미나",
    "userAge": 28,
    "phoneNumber": "010-4455-6677",
    "userEmail": "mina01@example.com",
    "gender": "female",
    "birth": "1998-11-17",
    "signDate": "2026-02-03",
    "subscriptionStatus": false,
    "appliedLecture": [
      { "contentId": 2, "appliedDate": "2026-02-05", "completeContents": 21 }
    ],
    "shoppingCart": [
      {
        "id": 12,
        "contentId": 2,
        "contentTitle": "TypeScript 핵심 강의",
        "contentImg": "이미지 경로",
        "contentPrice": 18000,
        "userName": "박동현",
        "contentTime": 10,
        "contentTotal": 10,
        "contentSelect": 4,
        "contentTotalPrice": 72000
      }
    ],
    "subscriptionSignDate": null,
    "classCount": 1
  },
  {
    "role": "student",
    "id": 6,
    "userId": "hana22",
    "password": "hana2200",
    "userName": "윤하나",
    "userAge": 31,
    "phoneNumber": "010-5566-7788",
    "userEmail": "hana22@example.com",
    "gender": "female",
    "birth": "1995-06-30",
    "signDate": "2026-02-10",
    "subscriptionStatus": true,
    "appliedLecture": [
      { "contentId": 5, "appliedDate": "2026-02-12", "completeContents": 44 },
      { "contentId": 6, "appliedDate": "2026-02-15", "completeContents": 3 }
    ],
    "shoppingCart": [],
    "subscriptionSignDate": "2026-02-10",
    "classCount": 2
  },
  {
    "role": "student",
    "id": 7,
    "userId": "kw93",
    "password": "kwon930a",
    "userName": "권태양",
    "userAge": 33,
    "phoneNumber": "010-6677-8899",
    "userEmail": "taeyang93@example.com",
    "gender": "male",
    "birth": "1993-01-09",
    "signDate": "2026-02-18",
    "subscriptionStatus": false,
    "appliedLecture": [],
    "shoppingCart": [
      {
        "id": 13,
        "contentId": 6,
        "contentTitle": "Python 데이터 분석 입문",
        "contentImg": "이미지 경로",
        "contentPrice": 25000,
        "userName": "최서영",
        "contentTime": 10,
        "contentTotal": 15,
        "contentSelect": 7,
        "contentTotalPrice": 175000
      }
    ],
    "subscriptionSignDate": null,
    "classCount": 0
  },
  {
    "role": "student",
    "id": 8,
    "userId": "yujin7",
    "password": "yujin7777",
    "userName": "임유진",
    "userAge": 20,
    "phoneNumber": "010-7788-9900",
    "userEmail": "yujin7@example.com",
    "gender": "female",
    "birth": "2006-09-14",
    "signDate": "2026-02-25",
    "subscriptionStatus": true,
    "appliedLecture": [
      { "contentId": 3, "appliedDate": "2026-03-01", "completeContents": 19 },
      { "contentId": 7, "appliedDate": "2026-03-05", "completeContents": 36 }
    ],
    "shoppingCart": [],
    "subscriptionSignDate": "2026-02-25",
    "classCount": 2
  },
  {
    "role": "student",
    "id": 9,
    "userId": "sungho5",
    "password": "sung5pass",
    "userName": "김성호",
    "userAge": 27,
    "phoneNumber": "010-8899-0011",
    "userEmail": "sungho5@example.com",
    "gender": "male",
    "birth": "1999-04-22",
    "signDate": "2026-03-02",
    "subscriptionStatus": false,
    "appliedLecture": [
      { "contentId": 4, "appliedDate": "2026-03-04", "completeContents": 12 }
    ],
    "shoppingCart": [
      {
        "id": 14,
        "contentId": 4,
        "contentTitle": "알고리즘 문제 풀이",
        "contentImg": "이미지 경로",
        "contentPrice": 12000,
        "userName": "한지수",
        "contentTime": 30,
        "contentTotal": 9,
        "contentSelect": 2,
        "contentTotalPrice": 24000
      }
    ],
    "subscriptionSignDate": null,
    "classCount": 1
  },
  {
    "role": "student",
    "id": 10,
    "userId": "ara03",
    "password": "ara030303",
    "userName": "오아라",
    "userAge": 14,
    "phoneNumber": "010-9900-1122",
    "userEmail": "ara03@example.com",
    "gender": "female",
    "birth": "2012-07-18",
    "signDate": "2026-03-10",
    "subscriptionStatus": false,
    "appliedLecture": [
      { "contentId": 1, "appliedDate": "2026-03-11", "completeContents": 5 }
    ],
    "shoppingCart": [],
    "subscriptionSignDate": null,
    "classCount": 1
  },
  {
    "role": "student",
    "id": 11,
    "userId": "dohyun8",
    "password": "dohy8pass",
    "userName": "남도현",
    "userAge": 23,
    "phoneNumber": "010-1122-3344",
    "userEmail": "dohyun8@example.com",
    "gender": "male",
    "birth": "2003-12-01",
    "signDate": "2026-03-15",
    "subscriptionStatus": true,
    "appliedLecture": [
      { "contentId": 2, "appliedDate": "2026-03-16", "completeContents": 48 },
      { "contentId": 5, "appliedDate": "2026-03-17", "completeContents": 25 },
      { "contentId": 7, "appliedDate": "2026-03-18", "completeContents": 9 },
      { "contentId": 8, "appliedDate": "2026-03-19", "completeContents": 1 }
    ],
    "shoppingCart": [
      {
        "id": 15,
        "contentId": 8,
        "contentTitle": "Node.js 백엔드 개발",
        "contentImg": "이미지 경로",
        "contentPrice": 22000,
        "userName": "조민혁",
        "contentTime": 340,
        "contentTotal": 11,
        "contentSelect": 5,
        "contentTotalPrice": 110000
      }
    ],
    "subscriptionSignDate": "2026-03-15",
    "classCount": 4
  },
  {
    "role": "lecturer",
    "id": 12,
    "userProfile": "이미지 경로",
    "userId": "lct1",
    "password": "lecturer1234",
    "userName": "김민준",
    "userAge": 35,
    "phoneNumber": "010-2222-3333",
    "userEmail": "minjun@example.com",
    "gender": "male",
    "birth": "1991-02-14",
    "signDate": "2025-11-01",
    "membershipStatus": true,
    "userDocument": ["파일경로", "파일경로"],
    "approvalStatus": true,
    "membershipSignDate": "2025-11-01"
  },
  {
    "role": "lecturer",
    "id": 13,
    "userProfile": "이미지 경로",
    "userId": "lct2",
    "password": "lec2pass99",
    "userName": "이수진",
    "userAge": 30,
    "phoneNumber": "010-3333-4444",
    "userEmail": "sujin2@example.com",
    "gender": "female",
    "birth": "1996-07-08",
    "signDate": "2025-11-15",
    "membershipStatus": true,
    "userDocument": ["파일경로", "파일경로"],
    "approvalStatus": true,
    "membershipSignDate": "2025-11-15"
  },
  {
    "role": "lecturer",
    "id": 14,
    "userProfile": "이미지 경로",
    "userId": "lct3",
    "password": "lct3pass12",
    "userName": "박동현",
    "userAge": 40,
    "phoneNumber": "010-4444-5555",
    "userEmail": "donghyun3@example.com",
    "gender": "male",
    "birth": "1986-03-22",
    "signDate": "2025-12-01",
    "membershipStatus": false,
    "userDocument": ["파일경로"],
    "approvalStatus": false,
    "membershipSignDate": null
  },
  {
    "role": "lecturer",
    "id": 15,
    "userProfile": "이미지 경로",
    "userId": "lct4",
    "password": "lct4pass56",
    "userName": "최서영",
    "userAge": 32,
    "phoneNumber": "010-5555-6666",
    "userEmail": "seoyoung4@example.com",
    "gender": "female",
    "birth": "1994-10-30",
    "signDate": "2025-12-10",
    "membershipStatus": true,
    "userDocument": ["파일경로", "파일경로"],
    "approvalStatus": true,
    "membershipSignDate": "2025-12-10"
  },
  {
    "role": "lecturer",
    "id": 16,
    "userProfile": "이미지 경로",
    "userId": "lct5",
    "password": "lct5pass78",
    "userName": "한지수",
    "userAge": 28,
    "phoneNumber": "010-6666-7777",
    "userEmail": "jisu5@example.com",
    "gender": "female",
    "birth": "1998-05-16",
    "signDate": "2026-01-05",
    "membershipStatus": true,
    "userDocument": ["파일경로", "파일경로"],
    "approvalStatus": true,
    "membershipSignDate": "2026-01-05"
  },
  {
    "role": "lecturer",
    "id": 17,
    "userProfile": "이미지 경로",
    "userId": "lct6",
    "password": "lct6pass90",
    "userName": "조민혁",
    "userAge": 37,
    "phoneNumber": "010-7777-8888",
    "userEmail": "minhyuk6@example.com",
    "gender": "male",
    "birth": "1989-08-04",
    "signDate": "2026-01-20",
    "membershipStatus": false,
    "userDocument": ["파일경로"],
    "approvalStatus": false,
    "membershipSignDate": null
  },
  {
    "role": "lecturer",
    "id": 18,
    "userProfile": "이미지 경로",
    "userId": "lct7",
    "password": "lct7pass11",
    "userName": "신예은",
    "userAge": 26,
    "phoneNumber": "010-8888-9999",
    "userEmail": "yeeun7@example.com",
    "gender": "female",
    "birth": "2000-01-27",
    "signDate": "2026-02-01",
    "membershipStatus": true,
    "userDocument": ["파일경로", "파일경로"],
    "approvalStatus": true,
    "membershipSignDate": "2026-02-01"
  },
  {
    "role": "lecturer",
    "id": 19,
    "userProfile": "이미지 경로",
    "userId": "lct8",
    "password": "lct8pass22",
    "userName": "강태호",
    "userAge": 44,
    "phoneNumber": "010-9999-0000",
    "userEmail": "taeho8@example.com",
    "gender": "male",
    "birth": "1982-11-11",
    "signDate": "2026-02-14",
    "membershipStatus": true,
    "userDocument": ["파일경로", "파일경로"],
    "approvalStatus": true,
    "membershipSignDate": "2026-02-14"
  },
  {
    "role": "lecturer",
    "id": 20,
    "userProfile": "이미지 경로",
    "userId": "lct9",
    "password": "lct9pass33",
    "userName": "문소희",
    "userAge": 29,
    "phoneNumber": "010-0000-1111",
    "userEmail": "sohee9@example.com",
    "gender": "female",
    "birth": "1997-04-03",
    "signDate": "2026-03-05",
    "membershipStatus": false,
    "userDocument": ["파일경로"],
    "approvalStatus": false,
    "membershipSignDate": null
  }
]
localStorage.setItem("userList", JSON.stringify(userList));

const lectureList = [
  {
    "id": 1,
    "contentId": 1,
    "contentImg": "이미지 경로",
    "contentTitle": "HTML 기초 완성",
    "contentLevel": "입문",
    "contentTime": 2,
    "contentAfter": [
      "HTML 기본 구조 이해",
      "태그 종류와 사용법",
      "시맨틱 태그 활용",
      "폼 요소 다루기",
      "링크와 이미지 삽입",
      "테이블 구성하기",
      "메타 태그 설정",
      "HTML5 신규 기능",
      "접근성 고려하기",
      "실전 페이지 제작"
    ],
    "contentPreview": "HTML의 기초를 탄탄하게 다지는 입문 강의입니다.",
    "contentSimple": "웹 개발의 첫걸음인 HTML의 기본 구조부터 시맨틱 태그, 폼 요소까지 체계적으로 학습합니다. 실습 중심으로 진행되어 강의 후 간단한 웹 페이지를 직접 제작할 수 있습니다.",
    "contentCurry": [
      {
        "title": "HTML 기초",
        "lessons": [
          { "lessonsTitle": "HTML 기본 구조", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "태그의 종류", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "시맨틱 태그", "lessonsvideo": "파일경로" }
        ]
      },
      {
        "title": "HTML 심화",
        "lessons": [
          { "lessonsTitle": "폼 요소 활용", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "테이블 구성", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "실전 페이지 제작", "lessonsvideo": "파일경로" }
        ]
      }
    ],
    "contentPrice": 10000,
    "lessonNumber": 87,
    "classNumber": 72,
    "category": "HTML",
    "userName": "김민준",
    "registerDate": "2026-01-05"
  },
  {
    "id": 2,
    "contentId": 2,
    "contentImg": "이미지 경로",
    "contentTitle": "CSS 레이아웃 마스터",
    "contentLevel": "쉬움",
    "contentTime": 3,
    "contentAfter": [
      "CSS 선택자 완벽 이해",
      "박스 모델 활용",
      "Flexbox 레이아웃",
      "Grid 시스템 구성",
      "반응형 디자인 적용",
      "애니메이션 효과",
      "변수와 커스텀 속성",
      "미디어 쿼리 작성",
      "다크모드 구현",
      "실전 UI 제작"
    ],
    "contentPreview": "Flexbox와 Grid로 자유자재로 레이아웃을 구성하는 강의입니다.",
    "contentSimple": "CSS의 핵심인 Flexbox와 Grid를 깊이 있게 학습합니다. 반응형 웹 디자인과 애니메이션 효과까지 다루어 실무에서 바로 활용 가능한 UI를 제작할 수 있습니다.",
    "contentCurry": [
      {
        "title": "CSS 기초",
        "lessons": [
          { "lessonsTitle": "선택자와 우선순위", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "박스 모델", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "색상과 폰트", "lessonsvideo": "파일경로" }
        ]
      },
      {
        "title": "레이아웃",
        "lessons": [
          { "lessonsTitle": "Flexbox 완전 정복", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "Grid 레이아웃", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "반응형 디자인", "lessonsvideo": "파일경로" }
        ]
      }
    ],
    "contentPrice": 15000,
    "lessonNumber": 95,
    "classNumber": 80,
    "category": "CSS",
    "userName": "이수진",
    "registerDate": "2026-01-08"
  },
  {
    "id": 3,
    "contentId": 3,
    "contentImg": "이미지 경로",
    "contentTitle": "JavaScript 입문",
    "contentLevel": "입문",
    "contentTime": 4,
    "contentAfter": [
      "변수와 자료형 이해",
      "조건문과 반복문",
      "함수 작성하기",
      "배열과 객체 활용",
      "DOM 조작 기초",
      "이벤트 처리",
      "ES6 문법 익히기",
      "비동기 처리 이해",
      "fetch API 사용",
      "미니 프로젝트 완성"
    ],
    "contentPreview": "JavaScript의 기초 개념을 실습과 함께 빠르게 익히는 강의입니다.",
    "contentSimple": "프로그래밍 입문자를 위한 JavaScript 기초 강의입니다. 변수, 함수, DOM 조작부터 ES6 최신 문법까지 단계별로 학습하며 간단한 웹 애플리케이션을 완성합니다.",
    "contentCurry": [
      {
        "title": "JS 기초 문법",
        "lessons": [
          { "lessonsTitle": "변수와 자료형", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "조건문과 반복문", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "함수 작성법", "lessonsvideo": "파일경로" }
        ]
      },
      {
        "title": "DOM과 이벤트",
        "lessons": [
          { "lessonsTitle": "DOM 조작 기초", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "이벤트 리스너", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "fetch API", "lessonsvideo": "파일경로" }
        ]
      }
    ],
    "contentPrice": 20000,
    "lessonNumber": 78,
    "classNumber": 65,
    "category": "JavaScript",
    "userName": "박동현",
    "registerDate": "2026-01-12"
  },
  {
    "id": 4,
    "contentId": 4,
    "contentImg": "이미지 경로",
    "contentTitle": "Python 데이터 분석 입문",
    "contentLevel": "쉬움",
    "contentTime": 5,
    "contentAfter": [
      "Python 환경 설정",
      "기본 문법 익히기",
      "리스트와 딕셔너리",
      "파일 입출력 처리",
      "NumPy 기초 활용",
      "Pandas 데이터 처리",
      "데이터 시각화",
      "통계 기초 적용",
      "데이터 정제하기",
      "분석 리포트 작성"
    ],
    "contentPreview": "Python으로 데이터를 분석하는 기초 능력을 키우는 강의입니다.",
    "contentSimple": "Python 기본 문법부터 NumPy, Pandas를 활용한 데이터 처리까지 학습합니다. 실제 데이터셋을 사용한 실습으로 데이터 분석 역량을 빠르게 쌓을 수 있습니다.",
    "contentCurry": [
      {
        "title": "Python 기초",
        "lessons": [
          { "lessonsTitle": "환경 설정 및 설치", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "기본 문법과 자료형", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "함수와 모듈", "lessonsvideo": "파일경로" }
        ]
      },
      {
        "title": "데이터 분석",
        "lessons": [
          { "lessonsTitle": "NumPy 활용", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "Pandas 데이터 처리", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "Matplotlib 시각화", "lessonsvideo": "파일경로" }
        ]
      }
    ],
    "contentPrice": 25000,
    "lessonNumber": 92,
    "classNumber": 88,
    "category": "Python",
    "userName": "최서영",
    "registerDate": "2026-01-15"
  },
  {
    "id": 5,
    "contentId": 5,
    "contentImg": "이미지 경로",
    "contentTitle": "C++ 프로그래밍 기초",
    "contentLevel": "보통",
    "contentTime": 6,
    "contentAfter": [
      "C++ 개발 환경 구성",
      "변수와 포인터 이해",
      "조건문과 반복문",
      "함수와 재귀 호출",
      "배열과 문자열 처리",
      "구조체와 클래스",
      "상속과 다형성",
      "파일 입출력 처리",
      "STL 컨테이너 활용",
      "알고리즘 구현 실습"
    ],
    "contentPreview": "C++의 핵심 개념을 실습과 함께 체계적으로 배우는 강의입니다.",
    "contentSimple": "C++ 문법의 기초부터 객체지향 프로그래밍, STL까지 다룹니다. 포인터와 메모리 관리 등 C++만의 특징을 이해하고 알고리즘 문제 풀이에 응용하는 능력을 기릅니다.",
    "contentCurry": [
      {
        "title": "C++ 기초 문법",
        "lessons": [
          { "lessonsTitle": "변수와 포인터", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "함수와 재귀", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "배열과 문자열", "lessonsvideo": "파일경로" }
        ]
      },
      {
        "title": "객체지향 프로그래밍",
        "lessons": [
          { "lessonsTitle": "클래스와 객체", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "상속과 다형성", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "STL 컨테이너", "lessonsvideo": "파일경로" }
        ]
      }
    ],
    "contentPrice": 22000,
    "lessonNumber": 83,
    "classNumber": 70,
    "category": "C+",
    "userName": "한지수",
    "registerDate": "2026-01-20"
  },
  {
    "id": 6,
    "contentId": 6,
    "contentImg": "이미지 경로",
    "contentTitle": "CSS 애니메이션과 트랜지션",
    "contentLevel": "보통",
    "contentTime": 2,
    "contentAfter": [
      "transition 속성 이해",
      "transform 다루기",
      "keyframe 애니메이션",
      "타이밍 함수 활용",
      "hover 효과 제작",
      "로딩 스피너 만들기",
      "슬라이드 애니메이션",
      "스크롤 효과 구현",
      "성능 최적화 방법",
      "실전 인터랙션 UI"
    ],
    "contentPreview": "CSS만으로 생동감 있는 애니메이션을 구현하는 강의입니다.",
    "contentSimple": "transition, transform, keyframe을 활용해 다양한 애니메이션 효과를 만드는 방법을 배웁니다. 실무에서 자주 쓰이는 로딩, 슬라이드, hover 인터랙션 UI를 직접 제작합니다.",
    "contentCurry": [
      {
        "title": "트랜지션과 변환",
        "lessons": [
          { "lessonsTitle": "transition 속성", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "transform 효과", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "hover 인터랙션", "lessonsvideo": "파일경로" }
        ]
      },
      {
        "title": "애니메이션 심화",
        "lessons": [
          { "lessonsTitle": "keyframe 작성법", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "로딩 스피너 제작", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "스크롤 애니메이션", "lessonsvideo": "파일경로" }
        ]
      }
    ],
    "contentPrice": 18000,
    "lessonNumber": 66,
    "classNumber": 62,
    "category": "CSS",
    "userName": "조민혁",
    "registerDate": "2026-01-25"
  },
  {
    "id": 7,
    "contentId": 7,
    "contentImg": "이미지 경로",
    "contentTitle": "JavaScript 비동기 완전 정복",
    "contentLevel": "어려움",
    "contentTime": 4,
    "contentAfter": [
      "동기와 비동기 차이",
      "콜백 함수 이해",
      "Promise 개념 학습",
      "async/await 문법",
      "에러 핸들링 처리",
      "fetch API 심화",
      "axios 라이브러리",
      "병렬 요청 처리",
      "타임아웃 설정",
      "실전 API 연동"
    ],
    "contentPreview": "Promise부터 async/await까지 비동기 처리를 완벽히 이해하는 강의입니다.",
    "contentSimple": "JavaScript 비동기 처리의 핵심 개념인 콜백, Promise, async/await를 단계적으로 학습합니다. 실제 API 연동 실습을 통해 실무에서 바로 사용 가능한 비동기 코드를 작성합니다.",
    "contentCurry": [
      {
        "title": "비동기 기초",
        "lessons": [
          { "lessonsTitle": "콜백과 Promise", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "async/await 문법", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "에러 핸들링", "lessonsvideo": "파일경로" }
        ]
      },
      {
        "title": "API 연동 실습",
        "lessons": [
          { "lessonsTitle": "fetch API 심화", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "axios 사용법", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "실전 API 프로젝트", "lessonsvideo": "파일경로" }
        ]
      }
    ],
    "contentPrice": 28000,
    "lessonNumber": 74,
    "classNumber": 68,
    "category": "JavaScript",
    "userName": "신예은",
    "registerDate": "2026-02-01"
  },
  {
    "id": 8,
    "contentId": 8,
    "contentImg": "이미지 경로",
    "contentTitle": "Python 웹 크롤링",
    "contentLevel": "보통",
    "contentTime": 7,
    "contentAfter": [
      "웹 크롤링 개념 이해",
      "requests 라이브러리",
      "BeautifulSoup 파싱",
      "셀렉터 활용하기",
      "페이지 순회 처리",
      "데이터 저장하기",
      "Selenium 기초",
      "동적 페이지 크롤링",
      "크롤링 윤리 준수",
      "자동화 스크립트 작성"
    ],
    "contentPreview": "Python으로 웹 데이터를 자동으로 수집하는 크롤링 강의입니다.",
    "contentSimple": "requests와 BeautifulSoup을 활용한 정적 크롤링부터 Selenium을 이용한 동적 페이지 수집까지 학습합니다. 수집한 데이터를 CSV로 저장하고 활용하는 실습을 진행합니다.",
    "contentCurry": [
      {
        "title": "정적 크롤링",
        "lessons": [
          { "lessonsTitle": "requests 기초", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "BeautifulSoup 파싱", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "데이터 CSV 저장", "lessonsvideo": "파일경로" }
        ]
      },
      {
        "title": "동적 크롤링",
        "lessons": [
          { "lessonsTitle": "Selenium 설치", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "동적 페이지 처리", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "자동화 스크립트", "lessonsvideo": "파일경로" }
        ]
      }
    ],
    "contentPrice": 23000,
    "lessonNumber": 89,
    "classNumber": 76,
    "category": "Python",
    "userName": "강태호",
    "registerDate": "2026-02-05"
  },
  {
    "id": 9,
    "contentId": 9,
    "contentImg": "이미지 경로",
    "contentTitle": "HTML 시맨틱과 SEO",
    "contentLevel": "쉬움",
    "contentTime": 2,
    "contentAfter": [
      "시맨틱 태그 총정리",
      "SEO 기본 개념",
      "메타 태그 최적화",
      "Open Graph 설정",
      "구조화 데이터 작성",
      "접근성 향상 방법",
      "이미지 alt 태그",
      "페이지 속도 개선",
      "모바일 최적화",
      "검색 노출 전략"
    ],
    "contentPreview": "시맨틱 HTML과 SEO 최적화를 동시에 학습하는 강의입니다.",
    "contentSimple": "올바른 시맨틱 태그 사용법과 검색 엔진 최적화(SEO) 전략을 함께 학습합니다. 메타 태그, 구조화 데이터, 접근성 개선 등 실무에서 꼭 필요한 내용을 다룹니다.",
    "contentCurry": [
      {
        "title": "시맨틱 HTML",
        "lessons": [
          { "lessonsTitle": "시맨틱 태그 정리", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "접근성 향상", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "올바른 구조 작성", "lessonsvideo": "파일경로" }
        ]
      },
      {
        "title": "SEO 최적화",
        "lessons": [
          { "lessonsTitle": "메타 태그 설정", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "구조화 데이터", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "검색 노출 전략", "lessonsvideo": "파일경로" }
        ]
      }
    ],
    "contentPrice": 12000,
    "lessonNumber": 61,
    "classNumber": 60,
    "category": "HTML",
    "userName": "문소희",
    "registerDate": "2026-02-08"
  },
  {
    "id": 10,
    "contentId": 10,
    "contentImg": "이미지 경로",
    "contentTitle": "C++ 자료구조와 알고리즘",
    "contentLevel": "어려움",
    "contentTime": 7,
    "contentAfter": [
      "시간복잡도 분석",
      "스택과 큐 구현",
      "연결 리스트 작성",
      "트리 구조 이해",
      "이진 탐색 트리",
      "해시 테이블 활용",
      "정렬 알고리즘 비교",
      "그래프 탐색 BFS/DFS",
      "동적 프로그래밍",
      "코딩 테스트 대비"
    ],
    "contentPreview": "C++로 핵심 자료구조와 알고리즘을 직접 구현하는 강의입니다.",
    "contentSimple": "스택, 큐, 트리, 그래프 등 핵심 자료구조를 C++로 직접 구현하며 학습합니다. 정렬, 탐색, 동적 프로그래밍 알고리즘을 익혀 코딩 테스트에 대비할 수 있습니다.",
    "contentCurry": [
      {
        "title": "선형 자료구조",
        "lessons": [
          { "lessonsTitle": "스택과 큐", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "연결 리스트", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "해시 테이블", "lessonsvideo": "파일경로" }
        ]
      },
      {
        "title": "비선형 자료구조",
        "lessons": [
          { "lessonsTitle": "트리와 BST", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "그래프 BFS/DFS", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "동적 프로그래밍", "lessonsvideo": "파일경로" }
        ]
      }
    ],
    "contentPrice": 35000,
    "lessonNumber": 100,
    "classNumber": 95,
    "category": "C+",
    "userName": "김민준",
    "registerDate": "2026-02-10"
  },
  {
    "id": 11,
    "contentId": 11,
    "contentImg": "이미지 경로",
    "contentTitle": "JavaScript DOM 조작 실전",
    "contentLevel": "쉬움",
    "contentTime": 7,
    "contentAfter": [
      "DOM 트리 구조 이해",
      "요소 선택 방법",
      "텍스트 내용 변경",
      "스타일 동적 변경",
      "클래스 추가와 제거",
      "이벤트 리스너 등록",
      "요소 생성과 삭제",
      "폼 데이터 처리",
      "로컬스토리지 활용",
      "Todo 앱 완성"
    ],
    "contentPreview": "JavaScript로 DOM을 자유롭게 조작하는 실전 강의입니다.",
    "contentSimple": "JavaScript를 사용해 HTML 요소를 동적으로 조작하는 방법을 실습 중심으로 학습합니다. 이벤트 처리, 로컬스토리지 활용까지 다루며 Todo 앱을 직접 완성합니다.",
    "contentCurry": [
      {
        "title": "DOM 기초",
        "lessons": [
          { "lessonsTitle": "요소 선택과 탐색", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "내용과 스타일 변경", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "클래스 조작", "lessonsvideo": "파일경로" }
        ]
      },
      {
        "title": "이벤트와 실습",
        "lessons": [
          { "lessonsTitle": "이벤트 리스너", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "로컬스토리지", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "Todo 앱 제작", "lessonsvideo": "파일경로" }
        ]
      }
    ],
    "contentPrice": 16000,
    "lessonNumber": 72,
    "classNumber": 63,
    "category": "JavaScript",
    "userName": "이수진",
    "registerDate": "2026-02-14"
  },
  {
    "id": 12,
    "contentId": 12,
    "contentImg": "이미지 경로",
    "contentTitle": "Python 머신러닝 입문",
    "contentLevel": "어려움",
    "contentTime": 8,
    "contentAfter": [
      "머신러닝 개념 이해",
      "scikit-learn 설치",
      "데이터 전처리",
      "선형 회귀 모델",
      "분류 알고리즘 학습",
      "모델 평가 지표",
      "교차 검증 방법",
      "하이퍼파라미터 튜닝",
      "과적합 방지 전략",
      "실전 모델 배포"
    ],
    "contentPreview": "scikit-learn으로 머신러닝 모델을 직접 구축하는 강의입니다.",
    "contentSimple": "머신러닝의 핵심 알고리즘을 scikit-learn 라이브러리로 실습합니다. 데이터 전처리부터 모델 학습, 평가, 배포까지 전 과정을 경험하며 실전 ML 역량을 쌓습니다.",
    "contentCurry": [
      {
        "title": "머신러닝 기초",
        "lessons": [
          { "lessonsTitle": "데이터 전처리", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "선형 회귀", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "분류 알고리즘", "lessonsvideo": "파일경로" }
        ]
      },
      {
        "title": "모델 최적화",
        "lessons": [
          { "lessonsTitle": "교차 검증", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "하이퍼파라미터 튜닝", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "모델 배포", "lessonsvideo": "파일경로" }
        ]
      }
    ],
    "contentPrice": 40000,
    "lessonNumber": 98,
    "classNumber": 91,
    "category": "Python",
    "userName": "박동현",
    "registerDate": "2026-02-18"
  },
  {
    "id": 13,
    "contentId": 13,
    "contentImg": "이미지 경로",
    "contentTitle": "HTML 폼과 유효성 검사",
    "contentLevel": "입문",
    "contentTime": 3,
    "contentAfter": [
      "폼 태그 기본 구조",
      "input 타입 정리",
      "label과 접근성",
      "select와 checkbox",
      "기본 유효성 검사",
      "커스텀 메시지 설정",
      "정규식 패턴 적용",
      "서버 전송 이해",
      "파일 업로드 처리",
      "실전 회원가입 폼"
    ],
    "contentPreview": "HTML 폼 요소와 유효성 검사를 처음부터 배우는 강의입니다.",
    "contentSimple": "다양한 input 타입과 폼 요소의 사용법을 배우고, HTML5 내장 유효성 검사 기능을 활용합니다. 실전 회원가입 폼 제작으로 실무 감각을 익힙니다.",
    "contentCurry": [
      {
        "title": "폼 기초",
        "lessons": [
          { "lessonsTitle": "input 타입 정리", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "select와 checkbox", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "label과 접근성", "lessonsvideo": "파일경로" }
        ]
      },
      {
        "title": "유효성 검사",
        "lessons": [
          { "lessonsTitle": "기본 유효성 검사", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "정규식 패턴", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "회원가입 폼 실습", "lessonsvideo": "파일경로" }
        ]
      }
    ],
    "contentPrice": 10000,
    "lessonNumber": 65,
    "classNumber": 60,
    "category": "HTML",
    "userName": "한지수",
    "registerDate": "2026-02-20"
  },
  {
    "id": 14,
    "contentId": 14,
    "contentImg": "이미지 경로",
    "contentTitle": "CSS Tailwind 실전",
    "contentLevel": "쉬움",
    "contentTime": 4,
    "contentAfter": [
      "Tailwind 설치 및 설정",
      "유틸리티 클래스 이해",
      "색상과 간격 시스템",
      "반응형 브레이크포인트",
      "버튼 컴포넌트 제작",
      "카드 UI 만들기",
      "네비게이션 바 구성",
      "다크모드 적용",
      "커스텀 설정 파일",
      "랜딩 페이지 완성"
    ],
    "contentPreview": "Tailwind CSS로 빠르고 효율적으로 UI를 구성하는 강의입니다.",
    "contentSimple": "Tailwind CSS의 유틸리티 클래스 시스템을 익히고 실무에서 자주 쓰이는 컴포넌트를 빠르게 제작하는 방법을 학습합니다. 최종적으로 완성도 높은 랜딩 페이지를 구현합니다.",
    "contentCurry": [
      {
        "title": "Tailwind 기초",
        "lessons": [
          { "lessonsTitle": "설치와 기본 설정", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "유틸리티 클래스", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "반응형 디자인", "lessonsvideo": "파일경로" }
        ]
      },
      {
        "title": "컴포넌트 실습",
        "lessons": [
          { "lessonsTitle": "버튼과 카드 UI", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "네비게이션 바", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "랜딩 페이지 완성", "lessonsvideo": "파일경로" }
        ]
      }
    ],
    "contentPrice": 19000,
    "lessonNumber": 80,
    "classNumber": 74,
    "category": "CSS",
    "userName": "조민혁",
    "registerDate": "2026-02-24"
  },
  {
    "id": 15,
    "contentId": 15,
    "contentImg": "이미지 경로",
    "contentTitle": "JavaScript ES6+ 핵심 문법",
    "contentLevel": "보통",
    "contentTime": 7,
    "contentAfter": [
      "let과 const 이해",
      "화살표 함수 활용",
      "구조 분해 할당",
      "스프레드 연산자",
      "템플릿 리터럴",
      "모듈 시스템 이해",
      "클래스 문법 활용",
      "이터레이터와 제너레이터",
      "옵셔널 체이닝",
      "최신 문법 총정리"
    ],
    "contentPreview": "ES6 이후 최신 JavaScript 문법을 빠르게 익히는 강의입니다.",
    "contentSimple": "현대 JavaScript 개발에서 필수인 ES6+ 문법을 체계적으로 학습합니다. 화살표 함수, 구조 분해, 모듈 시스템 등 실무에서 매일 쓰이는 문법을 예제와 함께 마스터합니다.",
    "contentCurry": [
      {
        "title": "ES6 핵심",
        "lessons": [
          { "lessonsTitle": "화살표 함수와 const", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "구조 분해 할당", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "스프레드 연산자", "lessonsvideo": "파일경로" }
        ]
      },
      {
        "title": "ES6+ 심화",
        "lessons": [
          { "lessonsTitle": "모듈 시스템", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "클래스 문법", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "최신 문법 총정리", "lessonsvideo": "파일경로" }
        ]
      }
    ],
    "contentPrice": 21000,
    "lessonNumber": 77,
    "classNumber": 69,
    "category": "JavaScript",
    "userName": "신예은",
    "registerDate": "2026-02-28"
  },
  {
    "id": 16,
    "contentId": 16,
    "contentImg": "이미지 경로",
    "contentTitle": "Python 자동화 스크립트",
    "contentLevel": "보통",
    "contentTime": 7,
    "contentAfter": [
      "os 모듈 활용",
      "파일 자동 정리",
      "엑셀 자동화 처리",
      "이메일 자동 발송",
      "스케줄러 설정",
      "카카오 API 연동",
      "슬랙 알림 구현",
      "GUI 자동화 도구",
      "작업 로그 기록",
      "자동화 배포 실습"
    ],
    "contentPreview": "Python으로 반복 작업을 자동화하는 실용적인 강의입니다.",
    "contentSimple": "파일 관리, 엑셀 처리, 이메일 발송 등 실무에서 자주 발생하는 반복 작업을 Python 스크립트로 자동화하는 방법을 학습합니다. 외부 API 연동까지 포함한 실전 프로젝트를 진행합니다.",
    "contentCurry": [
      {
        "title": "파일과 데이터 자동화",
        "lessons": [
          { "lessonsTitle": "파일 자동 정리", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "엑셀 자동화", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "스케줄러 설정", "lessonsvideo": "파일경로" }
        ]
      },
      {
        "title": "API 연동 자동화",
        "lessons": [
          { "lessonsTitle": "이메일 자동 발송", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "슬랙 알림 구현", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "자동화 배포", "lessonsvideo": "파일경로" }
        ]
      }
    ],
    "contentPrice": 27000,
    "lessonNumber": 85,
    "classNumber": 78,
    "category": "Python",
    "userName": "강태호",
    "registerDate": "2026-03-03"
  },
  {
    "id": 17,
    "contentId": 17,
    "contentImg": "이미지 경로",
    "contentTitle": "C++ 포인터와 메모리 관리",
    "contentLevel": "어려움",
    "contentTime": 8,
    "contentAfter": [
      "포인터 개념 이해",
      "참조자 활용법",
      "동적 메모리 할당",
      "스마트 포인터",
      "메모리 누수 방지",
      "깊은 복사와 얕은 복사",
      "소멸자 작성하기",
      "RAII 패턴 이해",
      "이동 시맨틱",
      "안전한 메모리 코드"
    ],
    "contentPreview": "C++ 포인터와 메모리 관리를 완벽히 이해하는 심화 강의입니다.",
    "contentSimple": "C++ 개발자에게 필수인 포인터와 동적 메모리 관리를 깊이 있게 다룹니다. 스마트 포인터, RAII 패턴, 이동 시맨틱 등 현대 C++ 메모리 관리 기법을 학습합니다.",
    "contentCurry": [
      {
        "title": "포인터 기초",
        "lessons": [
          { "lessonsTitle": "포인터와 참조자", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "동적 메모리 할당", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "메모리 누수 방지", "lessonsvideo": "파일경로" }
        ]
      },
      {
        "title": "현대 C++ 메모리",
        "lessons": [
          { "lessonsTitle": "스마트 포인터", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "이동 시맨틱", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "RAII 패턴", "lessonsvideo": "파일경로" }
        ]
      }
    ],
    "contentPrice": 32000,
    "lessonNumber": 91,
    "classNumber": 85,
    "category": "C+",
    "userName": "김민준",
    "registerDate": "2026-03-07"
  },
  {
    "id": 18,
    "contentId": 18,
    "contentImg": "이미지 경로",
    "contentTitle": "CSS 반응형 웹 디자인",
    "contentLevel": "보통",
    "contentTime": 3,
    "contentAfter": [
      "반응형 개념 이해",
      "뷰포트 메타 태그",
      "미디어 쿼리 작성",
      "모바일 퍼스트 전략",
      "유동형 그리드 구성",
      "이미지 반응형 처리",
      "폰트 크기 조절",
      "터치 이벤트 대응",
      "브라우저 호환성",
      "크로스 디바이스 테스트"
    ],
    "contentPreview": "다양한 기기에서 완벽하게 작동하는 반응형 웹을 만드는 강의입니다.",
    "contentSimple": "미디어 쿼리와 유동형 레이아웃을 활용한 반응형 웹 디자인을 학습합니다. 모바일 퍼스트 설계 원칙부터 크로스 디바이스 테스트까지 실무 흐름 그대로 진행합니다.",
    "contentCurry": [
      {
        "title": "반응형 기초",
        "lessons": [
          { "lessonsTitle": "미디어 쿼리 작성", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "모바일 퍼스트", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "유동형 그리드", "lessonsvideo": "파일경로" }
        ]
      },
      {
        "title": "실전 반응형",
        "lessons": [
          { "lessonsTitle": "이미지 반응형 처리", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "터치 이벤트 대응", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "크로스 디바이스 테스트", "lessonsvideo": "파일경로" }
        ]
      }
    ],
    "contentPrice": 20000,
    "lessonNumber": 76,
    "classNumber": 70,
    "category": "CSS",
    "userName": "이수진",
    "registerDate": "2026-03-10"
  },
  {
    "id": 19,
    "contentId": 19,
    "contentImg": "이미지 경로",
    "contentTitle": "JavaScript 함수형 프로그래밍",
    "contentLevel": "어려움",
    "contentTime": 4,
    "contentAfter": [
      "순수 함수 개념",
      "불변성 유지하기",
      "고차 함수 활용",
      "map, filter, reduce",
      "클로저 깊이 이해",
      "커링과 합성 함수",
      "부작용 최소화",
      "함수형 상태 관리",
      "모나드 개념 소개",
      "실전 리팩토링"
    ],
    "contentPreview": "함수형 패러다임으로 더 나은 JavaScript 코드를 작성하는 강의입니다.",
    "contentSimple": "순수 함수, 불변성, 고차 함수 등 함수형 프로그래밍의 핵심 개념을 JavaScript로 학습합니다. 실무 코드를 함수형으로 리팩토링하며 가독성과 유지보수성을 높이는 방법을 익힙니다.",
    "contentCurry": [
      {
        "title": "함수형 기초",
        "lessons": [
          { "lessonsTitle": "순수 함수와 불변성", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "고차 함수 활용", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "클로저 이해", "lessonsvideo": "파일경로" }
        ]
      },
      {
        "title": "함수형 심화",
        "lessons": [
          { "lessonsTitle": "커링과 합성", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "함수형 상태 관리", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "실전 리팩토링", "lessonsvideo": "파일경로" }
        ]
      }
    ],
    "contentPrice": 30000,
    "lessonNumber": 88,
    "classNumber": 82,
    "category": "JavaScript",
    "userName": "한지수",
    "registerDate": "2026-03-14"
  },
  {
    "id": 20,
    "contentId": 20,
    "contentImg": "이미지 경로",
    "contentTitle": "Python Flask 웹 개발",
    "contentLevel": "보통",
    "contentTime": 7,
    "contentAfter": [
      "Flask 환경 설정",
      "라우팅 구성하기",
      "템플릿 엔진 활용",
      "폼 데이터 처리",
      "데이터베이스 연동",
      "로그인 기능 구현",
      "REST API 설계",
      "JSON 응답 처리",
      "미들웨어 적용",
      "서버 배포 실습"
    ],
    "contentPreview": "Flask로 풀스택 웹 애플리케이션을 처음부터 완성하는 강의입니다.",
    "contentSimple": "Python Flask 프레임워크를 사용해 웹 서버를 구축하고 REST API를 설계합니다. 데이터베이스 연동, 로그인 기능 구현, 서버 배포까지 백엔드 개발 전반을 경험할 수 있습니다.",
    "contentCurry": [
      {
        "title": "Flask 기초",
        "lessons": [
          { "lessonsTitle": "라우팅과 뷰 함수", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "Jinja2 템플릿", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "폼 처리와 검증", "lessonsvideo": "파일경로" }
        ]
      },
      {
        "title": "백엔드 심화",
        "lessons": [
          { "lessonsTitle": "DB 연동과 ORM", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "REST API 설계", "lessonsvideo": "파일경로" },
          { "lessonsTitle": "서버 배포 실습", "lessonsvideo": "파일경로" }
        ]
      }
    ],
    "contentPrice": 29000,
    "lessonNumber": 93,
    "classNumber": 87,
    "category": "Python",
    "userName": "문소희",
    "registerDate": "2026-03-18"
  }
]

localStorage.setItem("lectureList", JSON.stringify(lectureList));

const cmList = [
  {
    "id": 12,
    "contentId": 1,
    "contentTitle": "HTML 기초 완성",
    "contentImg": "이미지 경로",
    "communityTotal": [
      {
        "questionId": 1,
        "questionTitle": "시맨틱 태그를 왜 써야 하나요?",
        "questionContent": "div 태그만 써도 모양은 다 만들어지는데 굳이 시맨틱 태그를 써야 하는 이유가 궁금합니다.",
        "questionOwner": "윤하나",
        "questionOwnerId": "hana22",
        "questionDate": "26.03.16",
        "questionState": true,
        "answerContent": "웹 접근성 향상과 검색 엔진 최적화(SEO)를 위해 필수적입니다. 브라우저가 구조를 더 잘 이해하게 도와줍니다."
      },
      {
        "questionId": 2,
        "questionTitle": "메타 태그 설정 관련",
        "questionContent": "viewport 설정은 모든 페이지에 기본으로 들어가야 하나요?",
        "questionOwner": "이홍근",
        "questionOwnerId": "std1",
        "questionDate": "26.03.18",
        "questionState": false,
        "answerContent": null
      }
    ],
    "userName": "김민준",
    "contentTime": 2,
    "contentLevel": "입문"
  },
  {
    "id": 13,
    "contentId": 2,
    "contentTitle": "CSS 레이아웃 마스터",
    "contentImg": "이미지 경로",
    "communityTotal": [
      {
        "questionId": 1,
        "questionTitle": "Flexbox vs Grid",
        "questionContent": "언제 Flex를 쓰고 언제 Grid를 써야 할지 헷갈립니다.",
        "questionOwner": "권태양",
        "questionOwnerId": "kw93",
        "questionDate": "26.03.19",
        "questionState": true,
        "answerContent": "1차원 레이아웃(한 줄)은 Flexbox가 유리하고, 2차원 레이아웃(행과 열 모두)은 Grid가 훨씬 편리합니다."
      },
      {
        "questionId": 2,
        "questionTitle": "미디어 쿼리 순서",
        "questionContent": "모바일 퍼스트로 짤 때 미디어 쿼리 순서가 중요한가요?",
        "questionOwner": "정미나",
        "questionOwnerId": "mina01",
        "questionDate": "26.03.20",
        "questionState": true,
        "answerContent": "네, CSS는 아래에 작성된 코드가 우선순위가 높으므로 작은 화면에서 큰 화면 순서로 작성하는 것이 관리하기 좋습니다."
      },
      {
        "questionId": 3,
        "questionTitle": "다크모드 구현 질문",
        "questionContent": "변수(Variables)를 사용하지 않고도 구현 가능한가요?",
        "questionOwner": "윤하나",
        "questionOwnerId": "hana22",
        "questionDate": "26.03.21",
        "questionState": true,
        "answerContent": "가능은 하지만, CSS 변수를 사용하는 것이 유지보수 측면에서 압도적으로 효율적입니다."
      }
    ],
    "userName": "이수진",
    "contentTime": 3,
    "contentLevel": "쉬움"
  },
  {
    "id": 14,
    "contentId": 3,
    "contentTitle": "JavaScript 입문",
    "contentImg": "이미지 경로",
    "communityTotal": [
      {
        "questionId": 1,
        "questionTitle": "let과 var의 차이",
        "questionContent": "강의에서는 let을 권장하시는데 var는 이제 안 쓰나요?",
        "questionOwner": "이홍근",
        "questionOwnerId": "std1",
        "questionDate": "26.03.15",
        "questionState": true,
        "answerContent": "현대 자바스크립트에서는 호이스팅 문제와 스코프 문제를 방지하기 위해 let과 const 사용을 원칙으로 합니다."
      },
      {
        "questionId": 2,
        "questionTitle": "DOM 조작 에러",
        "questionContent": "getElementById로 요소를 가져오는데 null이 뜹니다.",
        "questionOwner": "정미나",
        "questionOwnerId": "mina01",
        "questionDate": "26.03.22",
        "questionState": true,
        "answerContent": "HTML 요소가 생성되기 전에 스크립트가 실행된 것 같습니다. script 태그를 body 하단에 두거나 defer 속성을 사용해보세요."
      }
    ],
    "userName": "박동현",
    "contentTime": 4,
    "contentLevel": "입문"
  },
  {
    "id": 14,
    "contentId": 12,
    "contentTitle": "Python 머신러닝 입문",
    "contentImg": "이미지 경로",
    "communityTotal": [
      {
        "questionId": 1,
        "questionTitle": "데이터 전처리 필수인가요?",
        "questionContent": "결측치가 별로 없는데 그냥 학습시켜도 되나요?",
        "questionOwner": "최준혁",
        "questionOwnerId": "joon99",
        "questionDate": "26.03.20",
        "questionState": true,
        "answerContent": "결측치뿐만 아니라 스케일링도 중요합니다. 전처리에 따라 모델의 성능이 크게 좌우됩니다."
      },
      {
        "questionId": 2,
        "questionTitle": "과적합 해결 방법",
        "questionContent": "훈련 데이터셋에서는 점수가 잘 나오는데 테스트셋에서는 낮아요.",
        "questionOwner": "이홍근",
        "questionOwnerId": "std1",
        "questionDate": "26.03.23",
        "questionState": true,
        "answerContent": "과적합(Overfitting) 현상입니다. 데이터 양을 늘리거나 규제(Regularization)를 적용해 보세요."
      }
    ],
    "userName": "박동현",
    "contentTime": 8,
    "contentLevel": "어려움"
  },
  {
    "id": 12,
    "contentId": 17,
    "contentTitle": "C++ 포인터와 메모리 관리",
    "contentImg": "이미지 경로",
    "communityTotal": [
      {
        "questionId": 1,
        "questionTitle": "스마트 포인터 장점",
        "questionContent": "delete를 안 써도 된다는 점 말고 다른 장점이 있나요?",
        "questionOwner": "최준혁",
        "questionOwnerId": "joon99",
        "questionDate": "26.03.10",
        "questionState": false,
        "answerContent": null
      },
      {
        "questionId": 2,
        "questionTitle": "참조자와 포인터 차이",
        "questionContent": "둘 다 주소를 다루는 것 같은데 언제 구분해서 쓰나요?",
        "questionOwner": "박서연",
        "questionOwnerId": "std2",
        "questionDate": "26.03.12",
        "questionState": true,
        "answerContent": "반드시 가리키는 대상이 있고 변경되지 않는다면 참조자를, 가리키는 대상이 바뀔 수 있거나 null일 가능성이 있다면 포인터를 사용합니다."
      }
    ],
    "userName": "김민준",
    "contentTime": 8,
    "contentLevel": "어려움"
  }
]

localStorage.setItem("communityList", JSON.stringify(cmList));
