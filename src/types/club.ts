/**
 * 동아리 목록 표시할 때 정보 JSON
*/
export interface Club {
  id: string;
  name: string;
  description: string;
  imageUrl?: string;
} 

//즐겨찾기 기능에 사용되는 정보 JSON
export interface FavoritesProps{
  favorites: string[];
  onToggleFavorite: (id: string) => void;  
}


export interface ClubInfoCardProps {
  title: string;
  foundationDate: string;
  memberCount: number;
  awards: string[];
  logoSrc: string;
}

export type FavoritesContextType = {
  favorites: string[];
  toggleFavorite: (id: string) => void;
};


//동아리 Grid에 사용되는 정보 JSON
export interface ClubProps{
  id: string;
  imageSrc: string;
  logoSrc: string;
  title: string;
  daysLeft: string;
  description: string[];
  school: string;
  tag: string;
  isFavorited: boolean;  
  onToggleFavorite: (id: string) => void;  
}


export interface RecruitmentDetailCardProps {
  id: string;
  imageSrc: string;
  logoSrc: string;
  title: string;
  description: string[];
  tag: string;
  school: string;
  daysLeft: string;
  isFavorited: boolean;
  onToggleFavorite: (id: string) => void; // 올바른 함수 타입 정의
  buttonText?: string;
  buttonLink?: string;
  showButton: boolean;
}

export interface ClubApplicationContentProps {
  club: {
    id: string;
    imageSrc: string;
    logoSrc: string;
    title: string;
    description: string[];
    tag: string;
    school: string;
    daysLeft: string;
    isFavorited: boolean;
    onToggleFavorite: (id: string) => void;
  };
  questions: { id: number; text: string; maxAnswerLength:number }[]; // 질문 데이터 타입 정의

}

//동아리 지원서 관련 props

export interface Question {
  id: number;
  text: string;
}
 
export interface QuestionsProps {
  questions: Question[];
}

export interface QuestionCardProps {
  question: string;  
  isOpen: boolean;
  onToggle: () => void;
  answer: string;
  onChangeAnswer: (value: string) => void;
  maxAnswerLength: number; 
}

export interface QuestionListProps {
  questions: { text: string; maxAnswerLength: number }[];
  openIndices: number[];
  onToggle: (index: number) => void;
  answers: string[];
  onChangeAnswer: (index: number, value: string) => void;
}


export interface RemainingTimeCardProps {
  startDate: string;
  endDate: string;
}