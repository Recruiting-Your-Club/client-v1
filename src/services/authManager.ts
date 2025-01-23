let accessToken: string | null = null;

function setAccessToken(token: string): void {
  accessToken = token;
}

function getAccessToken(): string | null {
  return accessToken;
}

function clearAccessToken(): void {
  accessToken = null;
}

export const authManager = {
  setAccessToken,
  getAccessToken,
  clearAccessToken,
};
