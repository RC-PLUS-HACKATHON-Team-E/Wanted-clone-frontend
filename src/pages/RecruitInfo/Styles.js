import styled from 'styled-components';

//전체 뷰
export const RecruitContainer = styled.div`
  width: 100%;
  display: flex;
  background-color: #f8f8f8;
`;

//실제 사용 뷰
export const JobDetailContainer = styled.div`
  width: 87.72%;
  max-width: 106rem;
  display: flex;
  flex-direction: column;
  padding: 2rem 0 8rem;
`;

export const JobContentWrap = styled.div`
  display: inline-block;
  width: calc(100% - 36rem);
  vertical-align: top;
`;

export const InterviewWrap = styled.div`
  display: inline-block;
  width: calc(100% - 36rem);
  margin-top: 8rem;
`;

export const AsideWrap = styled.aside`
  top: 7rem;
  width: 34rem;
  position: fixed;
  right: calc((100% - 106rem) / 2);
  display: block;
  background-color: #fff; 
`;
