import React from 'react';
import * as T from './Styles';
import BookmarkBtn from "../BookmarkBtn/BookmarkBtn";




function RecruitCard() {


  return (
    <T.CardContainer>
      <T.CardWrap>
        <T.ImageBox
          style={{
            backgroundImage: 'url("https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F16840%2F89thklibfmcfzimn__400_400.jpg&w=400&q=75")',
          }}
        >
          <BookmarkBtn/>
          </T.ImageBox>
        <T.ContentBox>
          <T.PositionLabel>[VS사업본부] Cyber Security 전문가</T.PositionLabel>
          <T.CompanyLabel>엘지전자(LG전자)</T.CompanyLabel>
          <T.LocationLabel>서울<T.Dot>.</T.Dot><T.Extra>한국</T.Extra></T.LocationLabel>
          <T.RewardLabel>채용보상금 100만원</T.RewardLabel>
        </T.ContentBox>
      </T.CardWrap>
    </T.CardContainer>

  );
}

export default RecruitCard;
