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
        "contentTitle": "HTML 기초 완성",
        "contentImg": "이미지 경로",
        "contentLevel": "입문",
        "contentTime": 2,
        "contentPrice": 10000,
        "userName": "김민준",
        "category": "HTML",
        "contentSelect": 3,
        "contentTotalPrice": 30000
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
        "contentTitle": "C++ 포인터와 메모리 관리",
        "contentImg": "이미지 경로",
        "contentLevel": "어려움",
        "contentTime": 8,
        "contentPrice": 32000,
        "userName": "김민준",
        "category": "C+",
        "contentSelect": 6,
        "contentTotalPrice": 192000
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
        "contentTitle": "C++ 자료구조와 알고리즘",
        "contentImg": "이미지 경로",
        "contentLevel": "어려움",
        "contentTime": 7,
        "contentPrice": 35000,
        "userName": "김민준",
        "category": "C+",
        "contentSelect": 4,
        "contentTotalPrice": 140000
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
        "contentTitle": "JavaScript DOM 조작 실전",
        "contentImg": "이미지 경로",
        "contentLevel": "쉬움",
        "contentTime": 7,
        "contentPrice": 16000,
        "userName": "이수진",
        "category": "JavaScript",
        "contentSelect": 7,
        "contentTotalPrice": 112000
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
        "contentTitle": "C++ 객체지향 프로그래밍 완성",
        "contentImg": "이미지 경로",
        "contentLevel": "보통",
        "contentTime": 6,
        "contentPrice": 28000,
        "userName": "김민준",
        "category": "C+",
        "contentSelect": 2,
        "contentTotalPrice": 56000
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
        "contentTitle": "CSS 변수와 커스텀 속성 활용",
        "contentImg": "이미지 경로",
        "contentLevel": "쉬움",
        "contentTime": 2,
        "contentPrice": 13000,
        "userName": "이수진",
        "category": "CSS",
        "contentSelect": 5,
        "contentTotalPrice": 65000
      }
    ],
    "subscriptionSignDate": "2026-03-15",
    "classCount": 4
  },
  {
    "role": "lecturer",
    "id": 12,
    "userProfile": "/src/assets/img/animal1.jpg",
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
    "userProfile": "/src/assets/img/animal6.jpg",
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
    "userProfile": "/src/assets/img/animal10.jpg",
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
    "userProfile": "/src/assets/img/animal1.jpg",
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
    "userProfile": "/src/assets/img/animal6.jpg",
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
    "userProfile": "/src/assets/img/animal10.jpg",
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
    "userProfile": "/src/assets/img/animal1.jpg",
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
    "userProfile": "/src/assets/img/animal6.jpg",
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
    "userProfile": "/src/assets/img/animal10.jpg",
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

/

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
    "id": 12,
    "contentId": 4,
    "contentImg": "이미지 경로",
    "contentTitle": "C++ 객체지향 프로그래밍 완성",
    "contentLevel": "보통",
    "contentTime": 6,
    "userName": "김민준",
    "communityTotal": []
  },
  {
    "id": 13,
    "contentId": 5,
    "contentImg": "이미지 경로",
    "contentTitle": "CSS 레이아웃 마스터",
    "contentLevel": "쉬움",
    "contentTime": 3,
    "userName": "이수진",
    "communityTotal": []
  },
  {
    "id": 13,
    "contentId": 6,
    "contentImg": "이미지 경로",
    "contentTitle": "JavaScript DOM 조작 실전",
    "contentLevel": "쉬움",
    "contentTime": 7,
    "userName": "이수진",
    "communityTotal": []
  },
  {
    "id": 13,
    "contentId": 7,
    "contentImg": "이미지 경로",
    "contentTitle": "CSS 반응형 웹 디자인",
    "contentLevel": "보통",
    "contentTime": 3,
    "userName": "이수진",
    "communityTotal": []
  },
  {
    "id": 13,
    "contentId": 8,
    "contentImg": "이미지 경로",
    "contentTitle": "CSS 변수와 커스텀 속성 활용",
    "contentLevel": "쉬움",
    "contentTime": 2,
    "userName": "이수진",
    "communityTotal": []
  },
  {
    "id": 14,
    "contentId": 9,
    "contentImg": "이미지 경로",
    "contentTitle": "JavaScript 입문",
    "contentLevel": "입문",
    "contentTime": 4,
    "userName": "박동현",
    "communityTotal": []
  },
  {
    "id": 14,
    "contentId": 10,
    "contentImg": "이미지 경로",
    "contentTitle": "Python 머신러닝 입문",
    "contentLevel": "어려움",
    "contentTime": 8,
    "userName": "박동현",
    "communityTotal": []
  },
  {
    "id": 14,
    "contentId": 11,
    "contentImg": "이미지 경로",
    "contentTitle": "JavaScript 객체와 프로토타입",
    "contentLevel": "보통",
    "contentTime": 5,
    "userName": "박동현",
    "communityTotal": []
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
    "id": 15,
    "contentId": 13,
    "contentImg": "이미지 경로",
    "contentTitle": "Python 데이터 분석 입문",
    "contentLevel": "쉬움",
    "contentTime": 5,
    "userName": "최서영",
    "communityTotal": []
  },
  {
    "id": 15,
    "contentId": 14,
    "contentImg": "이미지 경로",
    "contentTitle": "Python 데이터 시각화",
    "contentLevel": "보통",
    "contentTime": 4,
    "userName": "최서영",
    "communityTotal": []
  },
  {
    "id": 15,
    "contentId": 15,
    "contentImg": "이미지 경로",
    "contentTitle": "Python 통계 분석 기초",
    "contentLevel": "보통",
    "contentTime": 5,
    "userName": "최서영",
    "communityTotal": []
  },
  {
    "id": 15,
    "contentId": 16,
    "contentImg": "이미지 경로",
    "contentTitle": "Python SQL 데이터베이스 연동",
    "contentLevel": "보통",
    "contentTime": 6,
    "userName": "최서영",
    "communityTotal": []
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
  },
  {
    "id": 16,
    "contentId": 18,
    "contentImg": "이미지 경로",
    "contentTitle": "HTML 폼과 유효성 검사",
    "contentLevel": "입문",
    "contentTime": 3,
    "userName": "한지수",
    "communityTotal": []
  },
  {
    "id": 16,
    "contentId": 19,
    "contentImg": "이미지 경로",
    "contentTitle": "JavaScript 함수형 프로그래밍",
    "contentLevel": "어려움",
    "contentTime": 4,
    "userName": "한지수",
    "communityTotal": []
  },
  {
    "id": 16,
    "contentId": 20,
    "contentImg": "이미지 경로",
    "contentTitle": "알고리즘 코딩 테스트 완성",
    "contentLevel": "어려움",
    "contentTime": 8,
    "userName": "한지수",
    "communityTotal": []
  },
  {
    "id": 17,
    "contentId": 21,
    "contentImg": "이미지 경로",
    "contentTitle": "CSS 애니메이션과 트랜지션",
    "contentLevel": "보통",
    "contentTime": 2,
    "userName": "조민혁",
    "communityTotal": []
  },
  {
    "id": 17,
    "contentId": 22,
    "contentImg": "이미지 경로",
    "contentTitle": "CSS Tailwind 실전",
    "contentLevel": "쉬움",
    "contentTime": 4,
    "userName": "조민혁",
    "communityTotal": []
  },
  {
    "id": 17,
    "contentId": 23,
    "contentImg": "이미지 경로",
    "contentTitle": "CSS SCSS 전처리기 완성",
    "contentLevel": "보통",
    "contentTime": 3, 
    "userName": "조민혁",
    "communityTotal": []
  },
  {
    "id": 17,
    "contentId": 24,
    "contentImg": "이미지 경로",
    "contentTitle": "UI/UX 디자인 기초와 CSS 구현",
    "contentLevel": "쉬움",
    "contentTime": 5,
    "userName": "조민혁",
    "communityTotal": []
  },
  {
    "id": 18,
    "contentId": 25,
    "contentImg": "이미지 경로",
    "contentTitle": "JavaScript 비동기 완전 정복",
    "contentLevel": "어려움",
    "contentTime": 4,
    "userName": "신예은",
    "communityTotal": []
  },
  {
    "id": 18,
    "contentId": 26,
    "contentImg": "이미지 경로",
    "contentTitle": "JavaScript ES6+ 핵심 문법",
    "contentLevel": "보통",
    "contentTime": 7,
    "userName": "신예은",
    "communityTotal": []
  },
  {
    "id": 18,
    "contentId": 27,
    "contentImg": "이미지 경로",
    "contentTitle": "TypeScript 핵심 강의",
    "contentLevel": "보통",
    "contentTime": 6,
    "userName": "신예은",
    "communityTotal": []
  },
  {
    "id": 18,
    "contentId": 28,
    "contentImg": "이미지 경로",
    "contentTitle": "React 입문",
    "contentLevel": "보통",
    "contentTime": 8,
    "userName": "신예은",
    "communityTotal": []
  },
  {
    "id": 19,
    "contentId": 29,
    "contentImg": "이미지 경로",
    "contentTitle": "Python 웹 크롤링",
    "contentLevel": "보통",
    "contentTime": 7,
    "userName": "강태호",
    "communityTotal": []
  },
  {
    "id": 19,
    "contentId": 30,
    "contentImg": "이미지 경로",
    "contentTitle": "Python 자동화 스크립트",
    "contentLevel": "보통",
    "contentTime": 7,
    "userName": "강태호",
    "communityTotal": []
  },
  {
    "id": 19,
    "contentId": 31,
    "contentImg": "이미지 경로",
    "contentTitle": "Python FastAPI 백엔드 개발",
    "contentLevel": "보통",
    "contentTime": 8,
    "userName": "강태호",
    "communityTotal": []
  },
  {
    "id": 19,
    "contentId": 32,
    "contentImg": "이미지 경로",
    "contentTitle": "Linux 기초와 서버 운영",
    "contentLevel": "보통",
    "contentTime": 6,
    "userName": "강태호",
    "communityTotal": []
  },
  {
    "id": 20,
    "contentId": 33,
    "contentImg": "이미지 경로",
    "contentTitle": "HTML 시맨틱과 SEO",
    "contentLevel": "쉬움",
    "contentTime": 2,
    "userName": "문소희",
    "communityTotal": []
  },
  {
    "id": 20,
    "contentId": 34,
    "contentImg": "이미지 경로",
    "contentTitle": "Python Flask 웹 개발",
    "contentLevel": "보통",
    "contentTime": 7,
    "userName": "문소희",
    "communityTotal": []
  },
  {
    "id": 20,
    "contentId": 35,
    "contentImg": "이미지 경로",
    "contentTitle": "HTML 기초와 웹 표준",
    "contentLevel": "입문",
    "contentTime": 3,
    "userName": "문소희",
    "communityTotal": []
  },
  {
    "id": 20,
    "contentId": 36,
    "contentImg": "이미지 경로",
    "contentTitle": "웹 성능 최적화 기초",
    "contentLevel": "보통",
    "contentTime": 4,
    "userName": "문소희",
    "communityTotal": []
  }

// ]

// localStorage.setItem("communityList", JSON.stringify(cmList));


// (function applyThumbnailImages() {
//   const lectureList = JSON.parse(localStorage.getItem("lectureList")) || [];
//   const userList = JSON.parse(localStorage.getItem("userList")) || [];

//   if (!lectureList.length) return;

//   // 🔹 lectureList 업데이트
//   lectureList.forEach(lecture => {
//     const id = Number(lecture.contentId);
//     if (!id) return;

//     const mod = id % 4;

//     if (mod === 1) {
//       lecture.contentImg = "/src/assets/img/lectureThumbnail.png";
//     } else if (mod === 2) {
//       lecture.contentImg = "/src/assets/img/lectureThumbnail1.jpg";
//     } else if (mod === 3) {
//       lecture.contentImg = "/src/assets/img/lectureThumbnail2.jpg";
//     } else {
//       lecture.contentImg = "/src/assets/img/lectureThumbnail3.jpg";
//     }
//   });

//   // 🔹 userList.shoppingCart도 같이 업데이트
//   userList.forEach(user => {
//     if (!Array.isArray(user.shoppingCart)) return;

//     user.shoppingCart.forEach(item => {
//       const id = Number(item.contentId);
//       if (!id) return;

//       const mod = id % 4;

//       if (mod === 1) {
//         item.contentImg = "/src/assets/img/lectureThumbnail.png";
//       } else if (mod === 2) {
//         item.contentImg = "/src/assets/img/lectureThumbnail1.jpg";
//       } else if (mod === 3) {
//         item.contentImg = "/src/assets/img/lectureThumbnail2.jpg";
//       } else {
//         item.contentImg = "/src/assets/img/lectureThumbnail3.jpg";
//       }
//     });
//   });

//   // 🔹 저장
//   localStorage.setItem("lectureList", JSON.stringify(lectureList));
//   localStorage.setItem("userList", JSON.stringify(userList));
// })();