import { Dispatch, SetStateAction } from "react";
import { EMAIL_CHECK } from "../../../utils/regularExpression";

export const nickNameValidator = ({
  nickname,
  setNicknameValidate,
}: {
  nickname: string;
  setNicknameValidate: Dispatch<SetStateAction<boolean>>;
}) => {
  if (nickname.length <= 2) {
    setNicknameValidate((prev) => false);
    return "닉네임은 두글자 이상으로 지어주세요";
  }
  setNicknameValidate((prev) => true);

  return "완벽해요!";
};

export const emailValidator = ({
  email,
  setEmailValidate,
}: {
  email: string;
  setEmailValidate: Dispatch<SetStateAction<boolean>>;
}) => {
  if (!EMAIL_CHECK.test(email)) {
    setEmailValidate((prev) => false);
    return "이메일은 abc@abc.abc 형식으로 기입해주세요";
  }
  setEmailValidate((prev) => true);

  return "완벽해요!!😊";
};
