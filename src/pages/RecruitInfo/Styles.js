import styled from 'styled-components';

//전체 뷰
export const RecruitContainer = styled.div`
  width: 100%;
  display: flex;
  background-color: white;
`;

//실제 사용 뷰
export const JobDetailContainer = styled.div`
  width: 100%;
  max-width: 1060px;
  display: flex;
  flex-direction: column;
  padding: 2rem 0 8rem;
`;

export const JobContentWrap = styled.div`
  display: inline-block;
  width: calc(100% - 36rem);
  vertical-align: top;
  padding: 0;
`;

export const InterviewWrap = styled.div`
  display: inline-block;
  width: calc(100% - 36rem);
  margin-top: 8rem;
`;

export const AsideWrap = styled.aside`
  top: 8rem;
  width: 34rem;
  position: fixed;
  right: calc((100% - 106rem) / 2);
  display: block;
  background-color: #fff;
`;

