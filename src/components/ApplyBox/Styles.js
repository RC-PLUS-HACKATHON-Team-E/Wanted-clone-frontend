import styled from 'styled-components';
// import './fonts/Pretendard-subset.css';
export const ApplyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 29.84rem;
  height:28.165rem;
  padding: 2.4rem 2rem;
  //margin: 0 0 10px 0;
  background-color: #fff;
  border: 0.1rem solid #e1e2e3; 
  border-radius: 0.3rem;
  align-items: center;
`;

export const ContentWrap = styled.div`
  width: 29.84rem;
  height: 9.165rem;
  display: flex;
  flex-direction: column;
  position: relative; 
`;

export const TitleLabel = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: normal;
  text-align: left;
  color: #333;
  display: block;
  margin: 0;
  padding: 0;
  font-family: Pretendard;
`;

export const ContentBox = styled.ul`
  padding: 0;
  list-style-type: none;
  width: 29.84rem;
  height: 4.6225rem;
  margin: 2.4rem 0;
  display: flex;
  flex-direction: row;
  position: relative;
`

export const ContextBox = styled.li`
  list-style-type: none;
  width: 50%;
  height: 4.6219rem;
  letter-spacing: normal;
  text-align: left;
`

export const ContextLabel = styled.h3`
  display: block;
  font-size: 1.4rem;
  margin-block-start: 1.33em;
  margin-block-end: 1.33em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;
  line-height: 1.2;
`;

export const NumberLabel = styled.p`
  display: block;
  font-size: 1.5rem;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: 600;
  color: #333;
`;


