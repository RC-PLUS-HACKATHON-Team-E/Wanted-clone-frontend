import React from 'react';
import * as A from './Styles';
import { AddWrap } from "./Styles";


function TextInfo() {
  return (
    <A.AddContainer>
      <A.AddWrap>
        <A.AddTitle>마감일</A.AddTitle>
        <A.AddContent>상시</A.AddContent>
      </A.AddWrap>
      <A.AddWrap>
        <A.AddTitle>근무지역</A.AddTitle>
        <A.AddContent>강서구 마곡중앙8로 14(마곡동)</A.AddContent>
      </A.AddWrap>
    </A.AddContainer>



  );
}
  export default TextInfo;
