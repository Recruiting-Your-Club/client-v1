import { useState } from "react";
import { login, register } from "@/services/authService";
import { authManager } from "@/services/authManager";
import { useUserInfo, userInfoType } from "@/hooks/useUserInfo";
type FormData = {
  email: string;
  password: string;
  username?: string;
  studentNumber?: string;
};

export default function AuthForms() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    username: "",
    studentNumber: "",
  });

  const { setUserInfo } = useUserInfo();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  //서버로 정보 보내는 함수
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      //로그인 관련 로직
      if (isLogin) {
        const response = await login(formData.email, formData.password);

        //구조 분해 할당
        const { token: accessToken, username } = response;
        authManager.setAccessToken(accessToken);

        // refreshToken 생기면 exToken 지우고 로직 수정
        let exToken = authManager.getAccessToken();
        if (exToken === null) {
          exToken = "a";
        }

        //전역 상태 정보 저장
        const userInfo: userInfoType = {
          username: username,
          accessToken: exToken,
        };
        setUserInfo(userInfo);

        alert("로그인 성공");
      }
      //회원가입 관련 로직
      else {
        if (!formData.username) {
          alert("이름을 입력해주세요.");
          return;
        }
        await register(formData.username, formData.email, formData.password);
        alert("회원가입 성공");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 409) {
        alert("이미 사용 중인 이메일 주소입니다.");
      } else {
        alert(error.response && error.response.message);
      }
    }
  };

  return (
    <div className="min-h-screen items-center flex justify-center bg-gray-50 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-gray-900 font-pretendard-extraBold text-3xl">
            {isLogin ? "로그인" : "회원가입"}
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            {!isLogin && (
              <div className="-space-y-px">
                <div>
                  <label htmlFor="username" className="sr-only">
                    이름
                  </label>
                  <input
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 font-pretendard-regular sm:text-sm"
                    id="username"
                    name="username"
                    type="text"
                    required={!isLogin}
                    value={formData.username}
                    onChange={onChange}
                    placeholder="이름"
                  ></input>
                </div>
                <div>
                  <label htmlFor="studentNumber" className="sr-only">
                    학번
                  </label>
                  <input
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    id="studentNumber"
                    name="studentNumber"
                    type="text"
                    required={!isLogin}
                    value={formData.studentNumber}
                    onChange={onChange}
                    placeholder="학번"
                  ></input>
                </div>
              </div>
            )}
            <div>
              <label htmlFor="email" className="sr-only">
                이메일
              </label>
              <input
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 ${
                  isLogin ? "rounded-t-md" : ""
                } focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={onChange}
                placeholder="이메일"
              ></input>
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                비밀번호
              </label>
              <input
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={onChange}
                placeholder="비밀번호"
              ></input>
            </div>
          </div>

          <div>
            <button
              type="submit"
              onClick={() => handleSubmit}
              className="font-pretendard-regular text-base group relative w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {isLogin ? "로그인" : "회원가입"}
            </button>
          </div>
        </form>
        <div className="text-sm text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="font-pretendard-semiBold text-lg text-indigo-600 hover:text-indigo-500"
          >
            {isLogin ? "회원가입하기" : "로그인하기"}
          </button>
        </div>
      </div>
    </div>
  );
}
