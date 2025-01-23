export const calculateRemainingTime = (endDate: string): string => {
    const end = new Date(endDate.split("(")[0]);  
    const now = new Date();
    const diff = end.getTime() - now.getTime();
  
    if (diff <= 0) return "지원 마감";  
  
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
  
    // '일'과 '시간:분:초' 포맷으로 반환
    return `${days}일 ${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };
  