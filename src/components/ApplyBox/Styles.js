import styled from 'styled-components';

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
  font-family: Pretendard;
`

export const ContextBox = styled.li`
  margin: 0;
  list-style-type: none;
  width: 50%;
  height: 4.6219rem;
  letter-spacing: normal;
  text-align: left;
  font-family: Pretendard;
`

export const ContextLabel = styled.h4`
  display: block;
  font-size: 1.4rem;
  font-weight: 600;
  color: #999;
  margin: 0 0 0.8rem 0;
  line-height: 1.2;
  font-family: Pretendard;
  letter-spacing: inherit;
  text-align: inherit;
`;

export const NumberLabel = styled.p`
  display: block;
  font-size: 1.5rem;
  margin: 0;
  font-weight: 600;
  color: #333;
  font-family: Pretendard;
`;

export const InteractionWrap = styled.div`
  margin-top: 2.4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start; 
`;



