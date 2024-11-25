import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="border border-[#ebeece] w-full max-w-md bg-white ">
        <div className="flex justify-center mb-6 ">
          <button
            className={`w-1/2 py-3  ${showLogin
                ? "bg-white text-[#344f24]"
                : "bg-[#f3f3f3] text-gray-600 hover:bg-gray-300"
              }`}
            onClick={() => setShowLogin(true)}
          >
            Giriş Yap
          </button>
          <button
            className={`w-1/2 py-3  ${!showLogin
                ? "bg-white text-[#344f24]"
                : "bg-[#f3f3f3] text-gray-600 hover:bg-gray-300"
              }`}
            onClick={() => setShowLogin(false)}
          >
            Üye Ol
          </button>
        </div>
        {showLogin ? <SignIn /> : <SignUp />}
      </div>
    </div>
  );
}

function SignIn() {
  const navigate = useNavigate();
  return (
    <div>
      <form>
        <div className="mb-4 px-6 mt-14">
          <label>E-posta</label>
          <input
            type="email"
            className="mt-1 block w-full px-4 py-3 border border-gray-300  shadow-sm focus:outline-none focus:border-[#344f24] "

          />
        </div>
        <div className="mb-6 px-6">
          <label>Şifre</label>
          <input
            type="password"
            className="mt-1 block w-full px-4 py-3 border border-gray-300  shadow-sm focus:outline-none focus:border-[#344f24]"

          />
        </div>
        <div className="px-6">
          <button className="w-full bg-[#73845e] text-white px-6 py-3 rounded-lg hover:bg-[#5a6d46] transition duration-300">
            GİRİŞ YAP
          </button>
        </div>
        <div className="mt-6 text-center text-sm text-gray-500">veya</div>
        <div className="mt-4 text-center px-6 mb-8">
          <button onClick={() => navigate("/")} className="flex justify-center items-center w-full py-3 px-4 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100">
            <FaGoogle /> <span className="ml-2">Google ile Giriş Yap</span>
          </button>
        </div>
      </form>
    </div>
  );
}

function SignUp() {
  const navigate = useNavigate();
  return (
    <div>
      <form>
        <div className="mb-4 px-6 mt-14">
          <label>E-posta</label>
          <input
            type="email"
            className="mt-1 block w-full px-4 py-3 border border-gray-300  shadow-sm focus:outline-none focus:border-[#344f24] "

          />
        </div>
        <div className="mb-6 px-6">
          <label>Şifre</label>
          <input
            type="password"
            className="mt-1 block w-full px-4 py-3 border border-gray-300  shadow-sm focus:outline-none focus:border-[#344f24]"

          />
        </div>
        <div className="px-6">
          <button className="w-full bg-[#73845e] text-white px-6 py-3 rounded-lg hover:bg-[#5a6d46] transition duration-300">
            ÜYE OL
          </button>
          <div className="text-xs text-[#666] mt-1">**Şifreniz en az 10 karakter olmalı.1 büyük harf ve rakam içermelidir.</div>
        </div>
        <div className="mt-6 text-center text-sm text-gray-500">veya</div>
        <div className="mt-4 text-center px-6 mb-8">
          <button onClick={() => navigate("/")} className="flex justify-center items-center w-full py-3 px-4 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100">
            <FaGoogle /> <span className="ml-2">Google ile kaydol</span>
          </button>
        </div>
      </form>
    </div>
  );
}