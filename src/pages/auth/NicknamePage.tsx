import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Redirect from "../../router/Redirect";
import { AUTH } from "../../router/routerPath";
import { emailValidator, nickNameValidator } from "./hooks/useValidate";

const NicknamePage = () => {
  const navigate = useNavigate();

  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [nicknameAlert, setNicknameAlert] = useState("");
  const [emailAlert, setEmailAlert] = useState("");
  const [nicknameValidate, setNicknameValidate] = useState(false);
  const [emailValidate, setEmailValidate] = useState(false);

  const handleNicknameSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate(AUTH.auth + "/" + AUTH.interest);

    setNickname("");
    setEmail("");
  };

  const changeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNickname(value);
    setNicknameAlert(
      nickNameValidator({ nickname: value, setNicknameValidate })
    );
  };
  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmail(value);
    setEmailAlert(emailValidator({ email: value, setEmailValidate }));
  };

  return (
    <div>
      <h1>닉네임을 설정해주세요</h1>
      <form action="submit" onSubmit={handleNicknameSubmit}>
        <input type="text" onChange={changeNickname} value={nickname} />
        <p>{nicknameAlert}</p>
        <input type="text" onChange={changeEmail} value={email} />
        <p>{emailAlert}</p>

        <button disabled={!(nicknameValidate && emailValidate)}>제출</button>
      </form>
    </div>
  );
};

export default NicknamePage;
