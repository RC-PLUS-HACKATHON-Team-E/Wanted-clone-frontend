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
import { ListWrap } from "./Styles";
import RecruitCard from "../../components/RecruitCard/RecruitCard";
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
        <R.ListWrap>
          <R.ListTitle>OOO님, 이 포지션을 찾고 계셨나요?</R.ListTitle>
          <R.ListBox>
            <R.RecruitList>
              {/*이부분 매핑*/}
              <R.RecruitBox>
                <RecruitCard/>
              </R.RecruitBox>
              <R.RecruitBox>
                <RecruitCard/>
              </R.RecruitBox>
              <R.RecruitBox>
                <RecruitCard/>
              </R.RecruitBox>
              <R.RecruitBox>
                <RecruitCard/>
              </R.RecruitBox>
            </R.RecruitList>
          </R.ListBox>

        </R.ListWrap>
      </R.JobDetailContainer>
    </R.RecruitContainer>
  );
}

export default RecruitInfo;
