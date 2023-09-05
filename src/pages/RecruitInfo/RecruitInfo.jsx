import React from 'react';
import * as R from './Styles';
import MainInfo from "../../components/MainInfo/MainInfo";
import TextInfo from "../../components/TextInfo/TextInfo";
import ApplyBox from "../../components/ApplyBox/ApplyBox";
import QuestionBox from "../../components/QuestionBox/QuestionBox";
import ImageCarousel from "../../components/Carousel/Carousel";
import AddInfo from "../../components/AddInfo/AddInfo";
import CompanyBox from "../../components/CompanyBox/CompanyBox";
import WarningBox from "../../components/WarningBox/WarningBox";
function RecruitInfo() {
  const imageList = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
  ];

  return (
    <R.RecruitContainer>
      <R.JobDetailContainer>
        <R.JobContentWrap>
          <ImageCarousel/>
          <MainInfo/>
          <TextInfo/>
          <R.CustomHr />
            <AddInfo/>
            <CompanyBox/>
            <WarningBox/>
        </R.JobContentWrap>
        <R.AsideWrap>
          <ApplyBox/>
          <QuestionBox/>
        </R.AsideWrap>
      </R.JobDetailContainer>
    </R.RecruitContainer>
  );
}

export default RecruitInfo;
