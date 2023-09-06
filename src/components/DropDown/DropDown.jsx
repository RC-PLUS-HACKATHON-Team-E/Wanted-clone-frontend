import React, { useState } from "react";
import * as D from './Styles';
import { DropdownLink, SelectedLabel } from "./Styles";
function DropdownButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("전체");

  const categories = ["전체", "개발", "디자인", "건설"];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectCategory = (category) => {
    setSelectedCategory(category);
    setIsOpen(false);
  };

  return (
    <D.DropdownContainer>
      <D.DropdownBtn onClick={toggleDropdown}>
        {selectedCategory}
      </D.DropdownBtn>
      {isOpen && (
        <D.DropdownContent>
          {categories.map((category) => (
            <D.DropdownLink
              key={category}
              href="#"
              onClick={() => selectCategory(category)}
            >
              {category}
            </D.DropdownLink>
          ))}
        </D.DropdownContent>
      )}
      {/* 선택된 카테고리를 표시하는 레이블 */}
      <D.SelectedLabel>{selectedCategory}</D.SelectedLabel>
    </D.DropdownContainer>
  );
}

export default DropdownButton;
