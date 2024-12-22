import { useState } from "react";

type FormData = {
  id: string;
  password: string;
  username?: string;
  club?: string;
};

export default function AuthForms() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState<FormData>({
    id: "",
    password: "",
    username: "",
    club: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  //서버로 정보 보내는 함수
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
                  <label htmlFor="club" className="sr-only">
                    동아리
                  </label>
                  <input
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    id="club"
                    name="club"
                    type="text"
                    required={!isLogin}
                    value={formData.club}
                    onChange={onChange}
                    placeholder="동아리"
                  ></input>
                </div>
              </div>
            )}
            <div>
              <label htmlFor="id" className="sr-only">
                아이디
              </label>
              <input
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 ${
                  isLogin ? "rounded-t-md" : ""
                } focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                id="id"
                name="id"
                type="text"
                required
                value={formData.id}
                onChange={onChange}
                placeholder="아이디"
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
