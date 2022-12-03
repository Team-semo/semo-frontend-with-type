import React, { useState } from "react";

interface IMockData {
  name: string;
}

const mockData: IMockData[] = [
  { name: "프론트엔드" },
  { name: "백엔드" },
  { name: "머신러닝" },
  { name: "AI" },
  { name: "일러스트" },
  { name: "UI / UX" },
  { name: "기획" },
];

const InterestPage = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const checkBeforeSelected = (target: string) => {
    return selectedTags.includes(target) ? true : false;
  };

  const excludeTags = (target: string) => {
    const targetIndex = selectedTags.indexOf(target);
    const newTags = selectedTags.splice(targetIndex, 1);
    setSelectedTags(newTags);
  };

  const includeTags = (target: string) => {
    setSelectedTags((prev) => [...prev, target]);
  };

  const handleClickInteresting = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { innerText } = e.currentTarget;
    if (checkBeforeSelected(innerText)) {
      excludeTags(innerText);
      console.log(selectedTags);
      return;
    }
    includeTags(innerText);
    console.log(selectedTags);
  };

  return (
    <div>
      <h3>관심 분야를 선택해주세요 🍀</h3>
      <ul>
        {mockData.map((data) => (
          <li>
            <button onClick={handleClickInteresting}>{data.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InterestPage;
