const clubData = [
  {
    id: "ensharp",
    imageSrc: "/img/club_image_example1.jpeg",
    logoSrc: "/img/club_logo_example1.png",
    school: "세종대학교",
    title: "엔샵",
    tag: "#프로그래밍",
    daysLeft: "D-3",
    description: ["C# 스터디", "공모전", "프로그래밍 프로젝트"],
    posterImageSrc: "/img/club_poster_example1.jpg",
    questions: [
      { id: 1, text: "스터디를 통해 배운 가장 중요한 것은 무엇인가요?" },
      { id: 2, text: "공모전에서 어떤 역할을 맡았나요?" },
    ], 
    foundationDate: "2015년 3월 1일",
    memberCount: 25,
    awards: ["2019년 공모전 대상", "2021년 최우수 동아리"],
    major:"개발",
    startDate: "2024.12.23(월)",
    endDate: "2025.01.23(목)",
  },
  {
    id: "hanson",
    imageSrc: "https://via.placeholder.com/150",
    logoSrc: "/img/company_logo_example1.png",
    school: "세종대학교",
    title: "한손",
    tag: "#만화",
    daysLeft: "D-11",
    description: ["일러스트", "칸만화", "공모전"],
    posterImageSrc: "/img/club_poster_example1.jpg",
    questions: [
      { id: 1, text: "일러스트 제작에서 어떤 도구를 사용하나요?" },
      { id: 2, text: "가장 도전적이었던 프로젝트는 무엇인가요?" },
    ],
    foundationDate: "2015년 3월 1일",
    memberCount: 25,
    awards: ["2019년 공모전 대상", "2021년 최우수 동아리"],
    major:"미술",
    startDate: "2024.12.23(월)",
    endDate: "2025.01.23(목)",
  },
  {
    id: "D",
    imageSrc: "https://via.placeholder.com/150",
    logoSrc: "/img/company_logo_example1.png",
    school: "세종대학교",
    title: "Title 3",
    tag: "#프로그래밍",
    daysLeft: "Description",
    description: ["C# 스터디", "공모전", "프로그래밍 프로젝트"],
    posterImageSrc: "/img/club_poster_example1.jpg",
    questions: [
      { id: 1, text: "팀 프로젝트에서 협업을 어떻게 진행했나요?" },
      { id: 2, text: "배운 기술을 실제로 활용한 경험은 무엇인가요?" },
    ],
    foundationDate: "2015년 3월 1일",
    memberCount: 25,
    awards: ["2019년 공모전 대상", "2021년 최우수 동아리"],
    major:"개발",
    startDate: "2024.12.23(월)",
    endDate: "2025.01.23(목)",
  },
  {
    id: "F",
    imageSrc: "https://via.placeholder.com/150",
    logoSrc: "/img/company_logo_example1.png",
    school: "세종대학교",
    title: "Title 4",
    tag: "#프로그래밍",
    daysLeft: "Description",
    description: ["C# 스터디", "공모전", "프로그래밍 프로젝트"],
    posterImageSrc: "/img/club_poster_example1.jpg",
    questions: [
      { id: 1, text: "프로그래밍을 배우게 된 계기는 무엇인가요?" },
      { id: 2, text: "가장 재미있게 진행한 프로젝트는 무엇인가요?" },
    ],
    foundationDate: "2015년 3월 1일",
    memberCount: 25,
    awards: ["2019년 공모전 대상", "2021년 최우수 동아리"],
    major:"개발",
    startDate: "2024.12.23(월)",
    endDate: "2025.01.23(목)",
  },
  {
    id: "A",
    imageSrc: "https://via.placeholder.com/150",
    logoSrc: "/img/company_logo_example1.png",
    school: "세종대학교",
    title: "Title 5",
    tag: "#프로그래밍",
    daysLeft: "Description",
    description: ["C# 스터디", "공모전", "프로그래밍 프로젝트"],
    posterImageSrc: "/img/club_poster_example1.jpg",
    questions: [
      { id: 1, text: "코딩을 통해 어떤 문제를 해결한 적이 있나요?" },
      { id: 2, text: "앞으로 배우고 싶은 프로그래밍 언어는 무엇인가요?" },
    ],
    foundationDate: "2015년 3월 1일",
    memberCount: 25,
    awards: ["2019년 공모전 대상", "2021년 최우수 동아리"],
    major:"개발",
    startDate: "2024.12.23(월)",
    endDate: "2025.01.23(목)",
  },
  {
    id: "E",
    imageSrc: "https://via.placeholder.com/150",
    logoSrc: "/img/company_logo_example1.png",
    school: "세종대학교",
    title: "Title 6",
    tag: "#프로그래밍",
    daysLeft: "Description",
    description: ["C# 스터디", "공모전", "프로그래밍 프로젝트"],
    posterImageSrc: "/img/club_poster_example1.jpg",
    questions: [
      { id: 1, text: "스터디에서 가장 보람을 느낀 순간은 언제였나요?" },
      { id: 2, text: "다른 사람에게 프로그래밍을 가르친 경험이 있나요?" },
    ],
    foundationDate: "2015년 3월 1일",
    memberCount: 25,
    awards: ["2019년 공모전 대상", "2021년 최우수 동아리"],
    major:"개발",
    startDate: "2024.12.23(월)",
    endDate: "2025.01.23(목)",
  },
  {
    id: "G",
    imageSrc: "https://via.placeholder.com/150",
    logoSrc: "/img/company_logo_example1.png",
    school: "세종대학교",
    title: "Title 7",
    tag: "#프로그래밍",
    daysLeft: "Description",
    description: ["C# 스터디", "공모전", "프로그래밍 프로젝트"],
    posterImageSrc: "/img/club_poster_example1.jpg",
    questions: [
      { id: 1, text: "공모전에서 가장 도전적인 부분은 무엇이었나요?" },
      { id: 2, text: "팀워크를 강화하기 위해 어떤 노력을 했나요?" },
    ],
    foundationDate: "2015년 3월 1일",
    memberCount: 25,
    awards: ["2019년 공모전 대상", "2021년 최우수 동아리"],
    major:"개발",
    startDate: "2024.12.23(월)",
    endDate: "2025.01.23(목)",
  },
  {
    id: "V",
    imageSrc: "https://via.placeholder.com/150",
    logoSrc: "/img/company_logo_example1.png",
    school: "세종대학교",
    title: "Title 8",
    tag: "#프로그래밍",
    daysLeft: "Description",
    description: ["C# 스터디", "공모전", "프로그래밍 프로젝트"],
    posterImageSrc: "/img/club_poster_example1.jpg",
    questions: [
      { id: 1, text: "프로그래밍을 하면서 가장 어려웠던 점은 무엇인가요?" },
      { id: 2, text: "앞으로 도전해보고 싶은 프로젝트는 무엇인가요?" },
    ],
    foundationDate: "2015년 3월 1일",
    memberCount: 25,
    awards: ["2019년 공모전 대상", "2021년 최우수 동아리"],
    major:"개발",
    startDate: "2024.12.23(월)",
    endDate: "2025.01.23(목)",
  },
];

export default clubData;
