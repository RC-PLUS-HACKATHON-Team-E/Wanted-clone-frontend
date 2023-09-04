import React from 'react';
import * as Q from './Styles';


const QuestionIcon = (
  <Q.QuestionIcon>
    <path d="M3.345 9.72a.75.75 0 0 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06l-4.25-4.25a.75.75 0 0 0-1.06 1.06L7.065 6l-3.72 3.72z" />
  </Q.QuestionIcon>
);


function QuestionBox() {
  return (
    <Q.QuestionContainer>
      <Q.TextWrap>
        <Q.TextLabel>이 포지션의 면접 예상 질문 확인하기</Q.TextLabel>
        <Q.SubtextLabel>AI 면접코칭 받기 {QuestionIcon}</Q.SubtextLabel>
      </Q.TextWrap>
      <Q.ImageBox
        src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fposition%2Fwanted-plus.png&amp;w=256&amp;q=100"
        alt="ai-interview"
        height="256"
        loading="lazy"
      />
    </Q.QuestionContainer>
  );
}

export default QuestionBox;
