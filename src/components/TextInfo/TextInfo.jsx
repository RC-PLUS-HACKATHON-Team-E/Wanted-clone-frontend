import React from 'react';
import * as T from './Styles';
import HashTag from "../HashTag/HashTag";




function TextInfo() {

  const text = ['Confluence', 'JIRA', 'Figma'];
  return (
    <T.TextContainer>
      <T.TextContent>조직 소개</T.TextContent>
      {/*12 13이 반복*/}
      <T.SubTitleContent>주요 업무</T.SubTitleContent>
      <T.TextContent>내용이 들어갑니다.</T.TextContent>
      <T.SubTitleContent>자격요건</T.SubTitleContent>
      <T.TextContent>내용이 들어갑니다.</T.TextContent>
      <T.SubTitleContent>우대사항</T.SubTitleContent>
      <T.TextContent>내용이 들어갑니다.</T.TextContent>
      <T.SubTitleContent>혜택 및 복지</T.SubTitleContent>
      <T.TextContent>내용이 들어갑니다.</T.TextContent>
      <T.SkillLabel>기술스택 ・ 툴</T.SkillLabel>
      <T.SkillBox>
        {text.map((label, index) => (
          <HashTag key={index} text={label} color="#E4F4EC" />
        ))}</T.SkillBox>
    </T.TextContainer>

  );
}

export default TextInfo;
