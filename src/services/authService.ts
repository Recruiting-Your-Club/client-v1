import { apiClient } from "./apiClient";

interface LoginResponse {
  token: string;
  username: string;
}

export const login = async (userEmail: string, userPassword: string) => {
  const requestBody = {
    email: userEmail,
    password: userPassword,
  };

  const response = await apiClient<LoginResponse>("auth/login", {
    method: "POST",
    //headers 속성은 나중에 response값 body로 보내면 제거
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });

  return response;
};

export const register = async (
  username: string,
  userEmail: string,
  userPassword: string
) => {
  const requestBody = {
    username: username,
    email: userEmail,
    password: userPassword,
    role: "USER",
  };

  const response = await apiClient<{ token: string }>("auth/register", {
    method: "POST",
    body: JSON.stringify(requestBody),
  });

  return response;
};
