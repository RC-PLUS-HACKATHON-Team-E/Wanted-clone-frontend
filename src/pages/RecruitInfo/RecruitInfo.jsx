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
import RecruitCard from "../../components/RecruitCard/RecruitCard";
import { useSelector, useDispatch } from 'react-redux';
import { openModal, closeModal } from '../../store/actions/modal';
import BookmarkModal from "../../components/BookmarkModal/BookmarkModal";
function RecruitInfo() {
  const imageList = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
  ];

  const isModalOpen = useSelector((state) => state.modal.isModalOpen);
  // const dispatch = useDispatch();

  // const openBookmarkModal = () => {
  //   console.log("clickekked");
  //   dispatch(openModal()); // 모달 열기 액션 디스패치
  // };
  //
  // const closeBookmarkModal = () => {
  //   dispatch(closeModal()); // 모달 닫기 액션 디스패치
  // };

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
