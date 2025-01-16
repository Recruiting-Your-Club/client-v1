const getFirstCharacter = (str: string): string => {
  if (!str || typeof str !== "string") {
    return "문장이 아닙니다.";
  }

  return str.trim().charAt(0);
};

export { getFirstCharacter };
