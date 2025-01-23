const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const apiClient = async <T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> => {
  const headers: HeadersInit = {
    //default 값
    "Content-type": "application/json",

    //설정 값(ex. 'Authorization': 'Bearer myToken')
    ...options.headers,
  };

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    //설정 options
    ...options,

    //headers 값 덮어쓰기기
    headers,
  });

  //에러 처리
  if (!response.ok) {
    const error = await response.json();
    throw new Error("에러: " + error.message);
  }

  return response.json();
};

//Header만 포함된 api
export const apiClientForHeaders = async (
  endpoint: string,
  options: RequestInit = {}
): Promise<Headers> => {
  const headers: HeadersInit = {
    // 기본 헤더
    "Content-type": "application/json",

    // 사용자 정의 헤더
    ...options.headers,
  };

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  // 에러 처리
  if (!response.ok) {
    const error = await response.text(); // 본문이 없을 수도 있으므로 text로 읽음
    throw new Error(`에러: ${error || response.statusText}`);
  }
  console.log(response);

  // Headers 반환
  return response.headers;
};
