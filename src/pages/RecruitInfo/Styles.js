import styled from 'styled-components';

//전체 뷰
export const RecruitContainer = styled.div`
  width: 100%;
  display: flex;
  background-color: white;
`;

export const MainContainer= styled.div`
  margin: 0 auto;
  padding: 2rem 0 8rem;
  //width: 87.72%;
  width: 100%;
  max-width: 1060px;
`;

//실제 사용 뷰
export const TopContainer = styled.div`
  display: inline-block;
  flex-direction: column;
  position: relative;
`;

export const JobContentWrap = styled.div`
  display: inline-block;
  width: calc(100% - 36rem);
  vertical-align: top;
  margin: 0;
  padding: 0;
  border: 0;

`;

export const BottomContainer = styled.div`
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  margin-top: 8rem;
  position: relative;
`;

export const ListTitle = styled.h5`
  margin: 0 0 2rem;
  color: #333;
  line-height: normal;
  font-weight: 600;
  font-size: 1.8rem;
  letter-spacing: -.002em;
  font-family: inherit;
  padding: 0;
  border: 0;
`;

export const AsideWrap = styled.aside`
  top: 8rem;
  width: 34rem;
  position: fixed;
  right: calc((100% - 106rem) / 2);
  display: block;
  background-color: #fff;
`;

export const ListBox = styled.div`
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
`;

export const RecruitList = styled.ul`
  margin: -1rem;
  padding: 0;
  list-style: none;
  border: 0;
  box-sizing: border-box;
  display: block;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
`;

export const RecruitBox = styled.li`
  width: 25%;
  padding: 1rem;
  list-style: none;
  display: inline-block;
  vertical-align: top;
  margin: 0;
  border: 0;
  box-sizing: border-box;
  color: inherit;
`;


export const CustomHr = styled.hr`
  display: block;
  unicode-bidi: isolate;
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
  margin-inline-start: auto;
  margin-inline-end: auto;
  overflow: hidden;
  border-style: inset;
  border-width: 0.1rem;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
`;
