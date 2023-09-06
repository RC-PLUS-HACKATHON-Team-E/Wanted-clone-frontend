import React from 'react';
import * as T from './Styles';
import BookmarkBtn from "../BookmarkBtn/BookmarkBtn";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function RecruitCard() {
  const navigate = useNavigate();
  const recruits = useSelector((state) => state.recruitAll.recruits);

  const handleCardClick = (postingId) => {
    navigate(`/recruitInfo/${postingId}`);
  };

  return (
    <T.CardContainer>
      {recruits.map((recruit, index) => (
        <T.CardWrap key={index} onClick={() => handleCardClick(recruit.postingId)}>
          <T.ImageBox
            style={{
              backgroundImage: 'url("https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F16840%2F89thklibfmcfzimn__400_400.jpg&w=400&q=75")',
            }}
          >
            <BookmarkBtn/>
          </T.ImageBox>
          <T.ContentBox>
            <T.PositionLabel>{recruit.postingName}</T.PositionLabel>
            <T.CompanyLabel>{recruit.companyName}</T.CompanyLabel>
            <T.LocationLabel>{recruit.region}<T.Dot>.</T.Dot><T.Extra>한국</T.Extra></T.LocationLabel>
            <T.RewardLabel>채용보상금 {recruit.wage}만원</T.RewardLabel>
          </T.ContentBox>
        </T.CardWrap>
      ))}
    </T.CardContainer>
  );
}

export default RecruitCard;
