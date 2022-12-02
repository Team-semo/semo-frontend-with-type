import React from "react";

const NicknamePage = () => {
  return (
    <div>
      <h1>닉네임을 입력해주세요</h1>
      <form action="submit">
        <input type="text" />
        <button>제출</button>
      </form>
    </div>
  );
};

export default NicknamePage;
