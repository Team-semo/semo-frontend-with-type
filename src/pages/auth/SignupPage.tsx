import React from "react";
import { useNavigate } from "react-router-dom";
import { HOME, AUTH } from "../../router/routerPath";

const LoginAndSignUp = () => {
  const navigate = useNavigate();
  const handleStartWithKakao = () => {
    // kakaotalk 관련 로직이 진행된 후
    const uuid = { name: "주현" };
    if (!uuid) {
      navigate(HOME);
    }
    navigate(AUTH.nickname);
  };

  return (
    <div>
      <h1>어서오세요!</h1>
      <button onClick={handleStartWithKakao}>카카오톡으로 시작하기</button>
    </div>
  );
};

export default LoginAndSignUp;
