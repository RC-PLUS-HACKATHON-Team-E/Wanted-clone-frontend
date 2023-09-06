import styled from 'styled-components';

//전체 뷰
export const RecruitContainer = styled.div`
  width: 100%;
  display: flex;
  background-color: white;
`;
export const MainContainer= styled.div`
  margin: 0 auto;
  //원래는 8인데 header 설정 때문에
  //padding: 2rem 0 8rem;
  padding: 8rem 0 8rem;
  //width: 87.72%;
  width: 100%;
  max-width: 1060px;
`;

export const ListContainer= styled.div`
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  display: block;
`;

export const ListWrap = styled.ul`
  width: 100%;
  display:block;
  margin: -1rem;
  padding: 0;
  list-style: none;
  border: 0;
`;

export const ListBox = styled.li`
  width: 23%;
  padding: 1rem;
  list-style: none;
  //vertical-align: top;
  margin: 0;
  border: 0;
  display: inline-block;
  text-align: match-parent;
`;

