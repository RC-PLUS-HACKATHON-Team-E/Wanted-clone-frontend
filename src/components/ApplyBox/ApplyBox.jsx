import React, { useState } from "react";
import * as A from './Styles';
import BookmarkButton from "../Button/BookmarkButton";
import ApplyButton from "../Button/ApplyButton";
import InteractionButton from "../Button/InteractionButton";
import { useDispatch } from "react-redux";
import { openModal } from "../../store/actions/modal";
function ApplyBox() {



  return (
    <A.ApplyContainer>
      <A.ContentWrap>
        <A.TitleLabel>채용보상금</A.TitleLabel>
        <A.ContentBox>
          <A.ContextBox>
            <A.ContextLabel>추천인</A.ContextLabel>
            <A.NumberLabel>500,000원</A.NumberLabel>
          </A.ContextBox>
          <A.ContextBox>
            <A.ContextLabel>지원자</A.ContextLabel>
            <A.NumberLabel>500,000원</A.NumberLabel>
          </A.ContextBox>
        </A.ContentBox>
      </A.ContentWrap>
      <BookmarkButton label="북마크하기" />
      <ApplyButton label="지원하기" />
      <A.InteractionWrap>
        <InteractionButton likeCount="0" />
      </A.InteractionWrap>
    </A.ApplyContainer>
  );
}

export default ApplyBox;
