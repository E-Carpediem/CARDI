const userList = [
    { id: "00000001", userNumber: "20260001", role: "student", userId: "student01", userName: "이홍근", phoneNumber: "010-1111-2222", classCount: 5, signDate: "2026-01-03", subscriptionStatus: true, subscriptionSignDate: "2026-01-03" },
    { id: "00000002", userNumber: "20260002", role: "lecture", userId: "lecturer01", userName: "정지훈", phoneNumber: "010-2222-3333", signDate: "2026-01-05", membershipStatus: true, membershipSignDate: "2026-01-05", contentCount: 7, approveState: "승인" },
    { id: "00000003", userNumber: "20260003", role: "student", userId: "student02", userName: "김민준", phoneNumber: "010-3333-4444", classCount: 3, signDate: "2026-01-07", subscriptionStatus: false, subscriptionSignDate: null },
    { id: "00000004", userNumber: "20260004", role: "lecture", userId: "lecturer02", userName: "이서연", phoneNumber: "010-4444-5555", signDate: "2026-01-09", membershipStatus: true, membershipSignDate: "2026-01-09", contentCount: 12, approveState: "미승인" },
    { id: "00000005", userNumber: "20260005", role: "student", userId: "student03", userName: "박지훈", phoneNumber: "010-5555-6666", classCount: 8, signDate: "2026-01-11", subscriptionStatus: true, subscriptionSignDate: "2026-01-11" },
    { id: "00000006", userNumber: "20260006", role: "lecture", userId: "lecturer03", userName: "최수현", phoneNumber: "010-6666-7777", signDate: "2026-01-13", membershipStatus: false, membershipSignDate: null, contentCount: 4, approveState: "승인" },
    { id: "00000007", userNumber: "20260007", role: "student", userId: "student04", userName: "정예진", phoneNumber: "010-7777-8888", classCount: 2, signDate: "2026-01-15", subscriptionStatus: true, subscriptionSignDate: "2026-01-15" },
    { id: "00000008", userNumber: "20260008", role: "lecture", userId: "lecturer04", userName: "강도현", phoneNumber: "010-8888-9999", signDate: "2026-01-17", membershipStatus: true, membershipSignDate: "2026-01-17", contentCount: 9, approveState: "미승인" },
    { id: "00000009", userNumber: "20260009", role: "student", userId: "student05", userName: "윤지민", phoneNumber: "010-1234-5678", classCount: 6, signDate: "2026-01-19", subscriptionStatus: false, subscriptionSignDate: null },
    { id: "00000010", userNumber: "20260010", role: "lecture", userId: "lecturer05", userName: "장유나", phoneNumber: "010-2345-6789", signDate: "2026-01-21", membershipStatus: true, membershipSignDate: "2026-01-21", contentCount: 15, approveState: "승인" },
    { id: "00000011", userNumber: "20260011", role: "student", userId: "student06", userName: "임태양", phoneNumber: "010-3456-7890", classCount: 1, signDate: "2026-01-23", subscriptionStatus: true, subscriptionSignDate: "2026-01-23" },
    { id: "00000012", userNumber: "20260012", role: "lecture", userId: "lecturer06", userName: "한하은", phoneNumber: "010-4567-8901", signDate: "2026-01-25", membershipStatus: false, membershipSignDate: null, contentCount: 3, approveState: "미승인" },
    { id: "00000013", userNumber: "20260013", role: "student", userId: "student07", userName: "김태희", phoneNumber: "010-5678-9012", classCount: 9, signDate: "2026-01-27", subscriptionStatus: true, subscriptionSignDate: "2026-01-27" },
    { id: "00000014", userNumber: "20260014", role: "lecture", userId: "lecturer07", userName: "박나래", phoneNumber: "010-6789-0123", signDate: "2026-01-29", membershipStatus: true, membershipSignDate: "2026-01-29", contentCount: 11, approveState: "승인" },
    { id: "00000015", userNumber: "20260015", role: "student", userId: "student08", userName: "최우식", phoneNumber: "010-7890-1234", classCount: 4, signDate: "2026-02-01", subscriptionStatus: false, subscriptionSignDate: null },
    { id: "00000016", userNumber: "20260016", role: "lecture", userId: "lecturer08", userName: "이서준", phoneNumber: "010-8901-2345", signDate: "2026-02-03", membershipStatus: true, membershipSignDate: "2026-02-03", contentCount: 6, approveState: "미승인" },
    { id: "00000017", userNumber: "20260017", role: "student", userId: "student09", userName: "한지수", phoneNumber: "010-9012-3456", classCount: 7, signDate: "2026-02-05", subscriptionStatus: true, subscriptionSignDate: "2026-02-05" },
    { id: "00000018", userNumber: "20260018", role: "lecture", userId: "lecturer09", userName: "오세훈", phoneNumber: "010-1122-3344", signDate: "2026-02-07", membershipStatus: false, membershipSignDate: null, contentCount: 18, approveState: "승인" },
    { id: "00000019", userNumber: "20260019", role: "student", userId: "student10", userName: "남주혁", phoneNumber: "010-2233-4455", classCount: 10, signDate: "2026-02-09", subscriptionStatus: true, subscriptionSignDate: "2026-02-09" },
    { id: "00000020", userNumber: "20260020", role: "lecture", userId: "lecturer10", userName: "박보검", phoneNumber: "010-3344-5566", signDate: "2026-02-11", membershipStatus: true, membershipSignDate: "2026-02-11", contentCount: 2, approveState: "미승인" },
    { id: "00000021", userNumber: "20260021", role: "student", userId: "student11", userName: "류준열", phoneNumber: "010-4455-6677", classCount: 3, signDate: "2026-02-13", subscriptionStatus: false, subscriptionSignDate: null },
    { id: "00000022", userNumber: "20260022", role: "lecture", userId: "lecturer11", userName: "공효진", phoneNumber: "010-5566-7788", signDate: "2026-02-15", membershipStatus: true, membershipSignDate: "2026-02-15", contentCount: 14, approveState: "승인" },
    { id: "00000023", userNumber: "20260023", role: "student", userId: "student12", userName: "손나은", phoneNumber: "010-6677-8899", classCount: 6, signDate: "2026-02-17", subscriptionStatus: true, subscriptionSignDate: "2026-02-17" },
    { id: "00000024", userNumber: "20260024", role: "lecture", userId: "lecturer12", userName: "전소미", phoneNumber: "010-7788-9900", signDate: "2026-02-19", membershipStatus: false, membershipSignDate: null, contentCount: 5, approveState: "미승인" },
    { id: "00000025", userNumber: "20260025", role: "student", userId: "student13", userName: "아이유", phoneNumber: "010-8899-0011", classCount: 2, signDate: "2026-02-21", subscriptionStatus: true, subscriptionSignDate: "2026-02-21" },
    { id: "00000026", userNumber: "20260026", role: "lecture", userId: "lecturer13", userName: "설현", phoneNumber: "010-9900-1122", signDate: "2026-02-23", membershipStatus: true, membershipSignDate: "2026-02-23", contentCount: 10, approveState: "승인" },
    { id: "00000027", userNumber: "20260027", role: "student", userId: "student14", userName: "수지", phoneNumber: "010-1010-2020", classCount: 8, signDate: "2026-02-25", subscriptionStatus: false, subscriptionSignDate: null },
    { id: "00000028", userNumber: "20260028", role: "lecture", userId: "lecturer14", userName: "유재석", phoneNumber: "010-2020-3030", signDate: "2026-02-27", membershipStatus: true, membershipSignDate: "2026-02-27", contentCount: 20, approveState: "미승인" },
    { id: "00000029", userNumber: "20260029", role: "student", userId: "student15", userName: "강호동", phoneNumber: "010-3030-4040", classCount: 5, signDate: "2026-03-01", subscriptionStatus: true, subscriptionSignDate: "2026-03-01" },
    { id: "00000030", userNumber: "20260030", role: "lecture", userId: "lecturer15", userName: "신동엽", phoneNumber: "010-4040-5050", signDate: "2026-03-03", membershipStatus: false, membershipSignDate: null, contentCount: 8, approveState: "승인" },
    { id: "00000031", userNumber: "20260031", role: "student", userId: "student16", userName: "이효리", phoneNumber: "010-5050-6060", classCount: 1, signDate: "2026-03-05", subscriptionStatus: true, subscriptionSignDate: "2026-03-05" },
    { id: "00000032", userNumber: "20260032", role: "lecture", userId: "lecturer16", userName: "손예진", phoneNumber: "010-6060-7070", signDate: "2026-03-07", membershipStatus: true, membershipSignDate: "2026-03-07", contentCount: 13, approveState: "미승인" },
    { id: "00000033", userNumber: "20260033", role: "student", userId: "student17", userName: "현빈", phoneNumber: "010-7070-8080", classCount: 4, signDate: "2026-03-09", subscriptionStatus: false, subscriptionSignDate: null },
    { id: "00000034", userNumber: "20260034", role: "lecture", userId: "lecturer17", userName: "조인성", phoneNumber: "010-8080-9090", signDate: "2026-03-11", membershipStatus: true, membershipSignDate: "2026-03-11", contentCount: 17, approveState: "승인" },
    { id: "00000035", userNumber: "20260035", role: "student", userId: "student18", userName: "공유", phoneNumber: "010-9090-1010", classCount: 7, signDate: "2026-03-12", subscriptionStatus: true, subscriptionSignDate: "2026-03-12" },
    { id: "00000036", userNumber: "20260036", role: "lecture", userId: "lecturer18", userName: "송혜교", phoneNumber: "010-1212-3434", signDate: "2026-03-13", membershipStatus: false, membershipSignDate: null, contentCount: 1, approveState: "미승인" },
    { id: "00000037", userNumber: "20260037", role: "student", userId: "student19", userName: "전지현", phoneNumber: "010-3434-5656", classCount: 9, signDate: "2026-03-14", subscriptionStatus: true, subscriptionSignDate: "2026-03-14" },
    { id: "00000038", userNumber: "20260038", role: "lecture", userId: "lecturer19", userName: "차태현", phoneNumber: "010-5656-7878", signDate: "2026-03-14", membershipStatus: true, membershipSignDate: "2026-03-14", contentCount: 16, approveState: "승인" },
    { id: "00000039", userNumber: "20260039", role: "student", userId: "student20", userName: "조정석", phoneNumber: "010-7878-9090", classCount: 3, signDate: "2026-03-15", subscriptionStatus: false, subscriptionSignDate: null },
    { id: "00000040", userNumber: "20260040", role: "lecture", userId: "lecturer20", userName: "마동석", phoneNumber: "010-9090-1212", signDate: "2026-03-15", membershipStatus: true, membershipSignDate: "2026-03-15", contentCount: 19, approveState: "미승인" },
    { id: "00000041", userNumber: "20260041", role: "student", userId: "student21", userName: "하정우", phoneNumber: "010-1313-2424", classCount: 6, signDate: "2026-03-16", subscriptionStatus: true, subscriptionSignDate: "2026-03-16" },
    { id: "00000042", userNumber: "20260042", role: "lecture", userId: "lecturer21", userName: "송강호", phoneNumber: "010-2424-3535", signDate: "2026-03-16", membershipStatus: false, membershipSignDate: null, contentCount: 6, approveState: "승인" },
    { id: "00000043", userNumber: "20260043", role: "student", userId: "student22", userName: "이병헌", phoneNumber: "010-3535-4646", classCount: 10, signDate: "2026-03-17", subscriptionStatus: true, subscriptionSignDate: "2026-03-17" },
    { id: "00000044", userNumber: "20260044", role: "lecture", userId: "lecturer22", userName: "원빈", phoneNumber: "010-4646-5757", signDate: "2026-03-17", membershipStatus: true, membershipSignDate: "2026-03-17", contentCount: 9, approveState: "미승인" },
    { id: "00000045", userNumber: "20260045", role: "student", userId: "student23", userName: "장동건", phoneNumber: "010-5757-6868", classCount: 2, signDate: "2026-03-18", subscriptionStatus: false, subscriptionSignDate: null },
    { id: "00000046", userNumber: "20260046", role: "lecture", userId: "lecturer23", userName: "고소영", phoneNumber: "010-6868-7979", signDate: "2026-03-18", membershipStatus: true, membershipSignDate: "2026-03-18", contentCount: 11, approveState: "승인" },
    { id: "00000047", userNumber: "20260047", role: "student", userId: "student24", userName: "김혜수", phoneNumber: "010-7979-8080", classCount: 5, signDate: "2026-03-19", subscriptionStatus: true, subscriptionSignDate: "2026-03-19" },
    { id: "00000048", userNumber: "20260048", role: "lecture", userId: "lecturer24", userName: "전도연", phoneNumber: "010-8080-9191", signDate: "2026-03-19", membershipStatus: false, membershipSignDate: null, contentCount: 4, approveState: "미승인" },
    { id: "00000049", userNumber: "20260049", role: "student", userId: "student25", userName: "나문희", phoneNumber: "010-9191-1010", classCount: 8, signDate: "2026-03-20", subscriptionStatus: true, subscriptionSignDate: "2026-03-20" },
    { id: "00000050", userNumber: "20260050", role: "lecture", userId: "lecturer25", userName: "윤여정", phoneNumber: "010-1020-3040", signDate: "2026-03-20", membershipStatus: true, membershipSignDate: "2026-03-20", contentCount: 15, approveState: "승인" },
    { id: "00000051", userNumber: "20260051", role: "student", userId: "student26", userName: "김구라", phoneNumber: "010-1111-3333", classCount: 4, signDate: "2026-03-21", subscriptionStatus: false, subscriptionSignDate: null },
    { id: "00000052", userNumber: "20260052", role: "lecture", userId: "lecturer26", userName: "이경규", phoneNumber: "010-2222-4444", signDate: "2026-03-21", membershipStatus: true, membershipSignDate: "2026-03-21", contentCount: 8, approveState: "미승인" },
    { id: "00000053", userNumber: "20260053", role: "student", userId: "student27", userName: "박명수", phoneNumber: "010-3333-5555", classCount: 6, signDate: "2026-03-21", subscriptionStatus: true, subscriptionSignDate: "2026-03-21" },
    { id: "00000054", userNumber: "20260054", role: "lecture", userId: "lecturer27", userName: "정준하", phoneNumber: "010-4444-6666", signDate: "2026-03-21", membershipStatus: false, membershipSignDate: null, contentCount: 3, approveState: "승인" },
    { id: "00000055", userNumber: "20260055", role: "student", userId: "student28", userName: "노홍철", phoneNumber: "010-5555-7777", classCount: 9, signDate: "2026-03-21", subscriptionStatus: true, subscriptionSignDate: "2026-03-21" },
    { id: "00000056", userNumber: "20260056", role: "lecture", userId: "lecturer28", userName: "하하", phoneNumber: "010-6666-8888", signDate: "2026-03-21", membershipStatus: true, membershipSignDate: "2026-03-21", contentCount: 12, approveState: "미승인" },
    { id: "00000057", userNumber: "20260057", role: "student", userId: "student29", userName: "길", phoneNumber: "010-7777-9999", classCount: 2, signDate: "2026-03-21", subscriptionStatus: false, subscriptionSignDate: null },
    { id: "00000058", userNumber: "20260058", role: "lecture", userId: "lecturer29", userName: "전현무", phoneNumber: "010-8888-1111", signDate: "2026-03-21", membershipStatus: true, membershipSignDate: "2026-03-21", contentCount: 7, approveState: "승인" },
    { id: "00000059", userNumber: "20260059", role: "student", userId: "student30", userName: "김성주", phoneNumber: "010-9999-2222", classCount: 7, signDate: "2026-03-21", subscriptionStatus: true, subscriptionSignDate: "2026-03-21" },
    { id: "00000060", userNumber: "20260060", role: "lecture", userId: "lecturer30", userName: "붐", phoneNumber: "010-1234-9876", signDate: "2026-03-21", membershipStatus: false, membershipSignDate: null, contentCount: 5, approveState: "미승인" },
    { id: "00000061", userNumber: "20260061", role: "student", userId: "student31", userName: "김희철", phoneNumber: "010-2345-8765", classCount: 3, signDate: "2026-03-21", subscriptionStatus: false, subscriptionSignDate: null },
    { id: "00000062", userNumber: "20260062", role: "lecture", userId: "lecturer31", userName: "이특", phoneNumber: "010-3456-7654", signDate: "2026-03-21", membershipStatus: true, membershipSignDate: "2026-03-21", contentCount: 10, approveState: "승인" },
    { id: "00000063", userNumber: "20260063", role: "student", userId: "student32", userName: "규현", phoneNumber: "010-4567-6543", classCount: 8, signDate: "2026-03-21", subscriptionStatus: true, subscriptionSignDate: "2026-03-21" },
    { id: "00000064", userNumber: "20260064", role: "lecture", userId: "lecturer32", userName: "신동", phoneNumber: "010-5678-5432", signDate: "2026-03-21", membershipStatus: true, membershipSignDate: "2026-03-21", contentCount: 14, approveState: "미승인" },
    { id: "00000065", userNumber: "20260065", role: "student", userId: "student33", userName: "은혁", phoneNumber: "010-6789-4321", classCount: 1, signDate: "2026-03-21", subscriptionStatus: true, subscriptionSignDate: "2026-03-21" },
    { id: "00000066", userNumber: "20260066", role: "lecture", userId: "lecturer33", userName: "동해", phoneNumber: "010-7890-3210", signDate: "2026-03-21", membershipStatus: false, membershipSignDate: null, contentCount: 2, approveState: "승인" },
    { id: "00000067", userNumber: "20260067", role: "student", userId: "student34", userName: "려욱", phoneNumber: "010-8901-2109", classCount: 5, signDate: "2026-03-21", subscriptionStatus: false, subscriptionSignDate: null },
    { id: "00000068", userNumber: "20260068", role: "lecture", userId: "lecturer34", userName: "성민", phoneNumber: "010-9012-1098", signDate: "2026-03-21", membershipStatus: true, membershipSignDate: "2026-03-21", contentCount: 17, approveState: "미승인" },
    { id: "00000069", userNumber: "20260069", role: "student", userId: "student35", userName: "진영", phoneNumber: "010-1122-9988", classCount: 10, signDate: "2026-03-21", subscriptionStatus: true, subscriptionSignDate: "2026-03-21" },
    { id: "00000070", userNumber: "20260070", role: "lecture", userId: "lecturer35", userName: "영웅", phoneNumber: "010-2233-8877", signDate: "2026-03-21", membershipStatus: true, membershipSignDate: "2026-03-21", contentCount: 6, approveState: "승인" },
    { id: "00000071", userNumber: "20260071", role: "student", userId: "student36", userName: "태민", phoneNumber: "010-3344-7766", classCount: 4, signDate: "2026-03-21", subscriptionStatus: false, subscriptionSignDate: null },
    { id: "00000072", userNumber: "20260072", role: "lecture", userId: "lecturer36", userName: "종현", phoneNumber: "010-4455-6655", signDate: "2026-03-21", membershipStatus: false, membershipSignDate: null, contentCount: 9, approveState: "미승인" },
    { id: "00000073", userNumber: "20260073", role: "student", userId: "student37", userName: "키", phoneNumber: "010-5566-5544", classCount: 7, signDate: "2026-03-21", subscriptionStatus: true, subscriptionSignDate: "2026-03-21" },
    { id: "00000074", userNumber: "20260074", role: "lecture", userId: "lecturer37", userName: "민호", phoneNumber: "010-6677-4433", signDate: "2026-03-21", membershipStatus: true, membershipSignDate: "2026-03-21", contentCount: 11, approveState: "승인" },
    { id: "00000075", userNumber: "20260075", role: "student", userId: "student38", userName: "온유", phoneNumber: "010-7788-3322", classCount: 2, signDate: "2026-03-21", subscriptionStatus: true, subscriptionSignDate: "2026-03-21" },
    { id: "00000076", userNumber: "20260076", role: "lecture", userId: "lecturer38", userName: "지드래곤", phoneNumber: "010-8899-2211", signDate: "2026-03-21", membershipStatus: false, membershipSignDate: null, contentCount: 20, approveState: "미승인" },
    { id: "00000077", userNumber: "20260077", role: "student", userId: "student39", userName: "탑", phoneNumber: "010-9900-1100", signDate: "2026-03-21", classCount: 6, subscriptionStatus: false, subscriptionSignDate: null },
    { id: "00000078", userNumber: "20260078", role: "lecture", userId: "lecturer39", userName: "태양", phoneNumber: "010-1010-2121", signDate: "2026-03-21", membershipStatus: true, membershipSignDate: "2026-03-21", contentCount: 13, approveState: "승인" },
    { id: "00000079", userNumber: "20260079", role: "student", userId: "student40", userName: "대성", phoneNumber: "010-2121-3232", classCount: 9, signDate: "2026-03-21", subscriptionStatus: true, subscriptionSignDate: "2026-03-21" },
    { id: "00000080", userNumber: "20260080", role: "lecture", userId: "lecturer40", userName: "승리", phoneNumber: "010-3232-4343", signDate: "2026-03-21", membershipStatus: true, membershipSignDate: "2026-03-21", contentCount: 4, approveState: "미승인" },
    { id: "00000081", userNumber: "20260081", role: "student", userId: "student41", userName: "진", phoneNumber: "010-4343-5454", classCount: 3, signDate: "2026-03-21", subscriptionStatus: false, subscriptionSignDate: null },
    { id: "00000082", userNumber: "20260082", role: "lecture", userId: "lecturer41", userName: "슈가", phoneNumber: "010-5454-6565", signDate: "2026-03-21", membershipStatus: false, membershipSignDate: null, contentCount: 16, approveState: "승인" },
    { id: "00000083", userNumber: "20260083", role: "student", userId: "student42", userName: "제이홉", phoneNumber: "010-6565-7676", classCount: 8, signDate: "2026-03-21", subscriptionStatus: true, subscriptionSignDate: "2026-03-21" },
    { id: "00000084", userNumber: "20260084", role: "lecture", userId: "lecturer42", userName: "RM", phoneNumber: "010-7676-8787", signDate: "2026-03-21", membershipStatus: true, membershipSignDate: "2026-03-21", contentCount: 8, approveState: "미승인" },
    { id: "00000085", userNumber: "20260085", role: "student", userId: "student43", userName: "지민", phoneNumber: "010-8787-9898", classCount: 5, signDate: "2026-03-21", subscriptionStatus: true, subscriptionSignDate: "2026-03-21" },
    { id: "00000086", userNumber: "20260086", role: "lecture", userId: "lecturer43", userName: "뷔", phoneNumber: "010-9898-1212", signDate: "2026-03-21", membershipStatus: false, membershipSignDate: null, contentCount: 3, approveState: "승인" },
    { id: "00000087", userNumber: "20260087", role: "student", userId: "student44", userName: "정국", phoneNumber: "010-1213-2324", classCount: 1, signDate: "2026-03-21", subscriptionStatus: false, subscriptionSignDate: null },
    { id: "00000088", userNumber: "20260088", role: "lecture", userId: "lecturer44", userName: "찬열", phoneNumber: "010-2324-3435", signDate: "2026-03-21", membershipStatus: true, membershipSignDate: "2026-03-21", contentCount: 18, approveState: "미승인" },
    { id: "00000089", userNumber: "20260089", role: "student", userId: "student45", userName: "백현", phoneNumber: "010-3435-4546", classCount: 7, signDate: "2026-03-21", subscriptionStatus: true, subscriptionSignDate: "2026-03-21" },
    { id: "00000090", userNumber: "20260090", role: "lecture", userId: "lecturer45", userName: "카이", phoneNumber: "010-4546-5657", signDate: "2026-03-21", membershipStatus: true, membershipSignDate: "2026-03-21", contentCount: 7, approveState: "승인" },
    { id: "00000091", userNumber: "20260091", role: "student", userId: "student46", userName: "디오", phoneNumber: "010-5657-6768", classCount: 4, signDate: "2026-03-21", subscriptionStatus: false, subscriptionSignDate: null },
    { id: "00000092", userNumber: "20260092", role: "lecture", userId: "lecturer46", userName: "수호", phoneNumber: "010-6768-7879", signDate: "2026-03-21", membershipStatus: false, membershipSignDate: null, contentCount: 1, approveState: "미승인" },
    { id: "00000093", userNumber: "20260093", role: "student", userId: "student47", userName: "세훈", phoneNumber: "010-7879-8980", classCount: 9, signDate: "2026-03-21", subscriptionStatus: true, subscriptionSignDate: "2026-03-21" },
    { id: "00000094", userNumber: "20260094", role: "lecture", userId: "lecturer47", userName: "레이", phoneNumber: "010-8980-9091", signDate: "2026-03-21", membershipStatus: true, membershipSignDate: "2026-03-21", contentCount: 15, approveState: "승인" },
    { id: "00000095", userNumber: "20260095", role: "student", userId: "student48", userName: "시우민", phoneNumber: "010-9091-1023", classCount: 2, signDate: "2026-03-21", subscriptionStatus: true, subscriptionSignDate: "2026-03-21" },
    { id: "00000096", userNumber: "20260096", role: "lecture", userId: "lecturer48", userName: "첸", phoneNumber: "010-1023-2034", signDate: "2026-03-21", membershipStatus: false, membershipSignDate: null, contentCount: 12, approveState: "미승인" },
    { id: "00000097", userNumber: "20260097", role: "student", userId: "student49", userName: "크리스", phoneNumber: "010-2034-3045", classCount: 6, signDate: "2026-03-21", subscriptionStatus: false, subscriptionSignDate: null },
    { id: "00000098", userNumber: "20260098", role: "lecture", userId: "lecturer49", userName: "루한", phoneNumber: "010-3045-4056", signDate: "2026-03-21", membershipStatus: true, membershipSignDate: "2026-03-21", contentCount: 19, approveState: "승인" },
    { id: "00000099", userNumber: "20260099", role: "student", userId: "student50", userName: "타오", phoneNumber: "010-4056-5067", classCount: 10, signDate: "2026-03-21", subscriptionStatus: true, subscriptionSignDate: "2026-03-21" },
    { id: "00000100", userNumber: "20260100", role: "lecture", userId: "lecturer50", userName: "우리", phoneNumber: "010-5067-6078", signDate: "2026-03-21", membershipStatus: true, membershipSignDate: "2026-03-21", contentCount: 5, approveState: "미승인" },
];

localStorage.setItem('userList', JSON.stringify(userList));
const userListData = JSON.parse(localStorage.getItem('userList'));

const $totalUser = document.querySelector(".tm-content-top-ct");
const arraySub = userList.filter((sub) => sub.subscriptionStatus === true);
const arrayUnSub = userList.filter((sub) => sub.subscriptionStatus === false);
const arrayMembership = userList.filter((sub) => sub.membershipStatus === true);
const arrayUnMembership = userList.filter((sub) => sub.membershipStatus === false);


function userTotalManagement(arrayList) {
    document.querySelectorAll('.tm-content').forEach(el => el.remove());
    const pageMaxArray = arrayList.length < 10 ? arrayList.length : 10;
    // 페이지네이션 관련 코드입니다. 추후 추가될 예정입니다.

    // const userTotalPagination = Math.ceil(arrayList.length / 10);
    // const usPaginationCurrentPage = 1;
    for (let i = pageMaxArray - 1; i >= 0; i--) {
        $totalUser.insertAdjacentHTML('afterend',
            `<div class="tm-content">
        <p> ${i + 1} </p>
        <p> ${arrayList[i].id} </p>
        <p> ${arrayList[i].userName} </p>
        <p> ${arrayList[i].role === "student" ? "수강생" : "강사"} </p>
        <p> ${arrayList[i].phoneNumber} </p>
        <p> ${arrayList[i].role === "student" ? arrayList[i].classCount : arrayList[i].contentCount}건 </p>
        <p> ${arrayList[i].signDate} </p>
        <p> ${arrayList[i].role === "student"
                ? (arrayList[i].subscriptionSignDate === null ? "-" : arrayList[i].subscriptionSignDate)
                : (arrayList[i].membershipSignDate === null ? "-" : arrayList[i].membershipSignDate)}  </p>
        <p> ${arrayList[i].role === "student"
                ? (arrayList[i].subscriptionStatus === true ? "구독중" : "미구독")
                : (arrayList[i].membershipStatus === true ? "등록중" : "미등록")} </p>
    </div>`)

        const $userRoleColor = document.querySelector('.tm-content >p:nth-child(4)');
        const $userMembershipColor = document.querySelector('.tm-content >p:nth-child(9)');

        arrayList[i].role === "student" ? $userRoleColor.className += 'tm-content-role-student' : $userRoleColor.className += 'tm-content-role-lecture';
        arrayList[i].role === "student"
            ? (arrayList[i].subscriptionStatus === true ? $userMembershipColor.className += 'tm-content-memebership-student' : $userMembershipColor.className += 'tm-content-memebership-lecture')
            : (arrayList[i].membershipStatus === true ? $userMembershipColor.className += 'tm-content-memebership-student' : $userMembershipColor.className += 'tm-content-memebership-lecture');

    };

}

userTotalManagement(userListData);
const $ArraySub = document.querySelector('.m-fileter>p:nth-of-type(1)');
const $ArrayMembership = document.querySelector('.m-fileter>p:nth-of-type(2)');
const $ArrayUnSub = document.querySelector('.m-fileter>p:nth-of-type(3)');
const $ArrayUnMembership = document.querySelector('.m-fileter>p:nth-of-type(4)');

$ArraySub.addEventListener('click', () => {
    userTotalManagement(arraySub);
})

$ArrayUnSub.addEventListener('click', () => {
    userTotalManagement(arrayUnSub);
})

$ArrayMembership.addEventListener('click', () => {
    userTotalManagement(arrayMembership);
})

$ArrayUnMembership.addEventListener('click', () => {
    userTotalManagement(arrayUnMembership);
})
