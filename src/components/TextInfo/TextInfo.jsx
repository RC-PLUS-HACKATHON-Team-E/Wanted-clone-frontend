import React from 'react';
import * as T from './Styles';




function TextInfo() {
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
    </T.TextContainer>

  );
}

export default TextInfo;
