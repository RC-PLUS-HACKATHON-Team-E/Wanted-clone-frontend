import React, { useEffect } from "react";
import * as R from './Styles';
import MainInfo from "../../components/MainInfo/MainInfo";
import TextInfo from "../../components/TextInfo/TextInfo";
import ApplyBox from "../../components/ApplyBox/ApplyBox";
import QuestionBox from "../../components/QuestionBox/QuestionBox";
import ImageCarousel from "../../components/Carousel/Carousel";
import AddInfo from "../../components/AddInfo/AddInfo";
import CompanyBox from "../../components/CompanyBox/CompanyBox";
import WarningBox from "../../components/WarningBox/WarningBox";
import RecruitCard from "../../components/RecruitCard/RecruitCard";
import { useSelector, useDispatch } from 'react-redux';
import { openModal, closeModal } from '../../store/actions/modal';
import BookmarkModal from "../../components/BookmarkModal/BookmarkModal";
import { fetchRecruitData } from "../../store/middleware/recruitMiddleware";
function RecruitInfo() {

  const isModalOpen = useSelector((state) => state.modal.isModalOpen);
  const postingId = 1; //하드 코딩

  // const { postingId } = match.params;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecruitData(postingId));
  }, [dispatch, postingId]);

  const recruitData = useSelector((state) => state.recruit.recruitData);


  return (
    <R.RecruitContainer>
      <R.MainContainer>
      <R.TopContainer>
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
          <ApplyBox />
          <QuestionBox/>
        </R.AsideWrap>
      </R.TopContainer>
      <R.BottomContainer>
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
      </R.BottomContainer>
      </R.MainContainer>

      {isModalOpen && <BookmarkModal />}
    </R.RecruitContainer>
  );
}

export default RecruitInfo;
