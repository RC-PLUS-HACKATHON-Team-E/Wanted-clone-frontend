import styled from 'styled-components';

export const BookmarkButton = styled.button`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 5rem;
  background-color: #fff;
  color: #36f;
  border: 0.1rem solid #36f; 
  border-radius: 2.5rem; 
  cursor: pointer; 
  align-items: center;
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: normal;
  text-align: center;
  margin-bottom: 1rem;
  justify-content: center;
  position: relative;
  font-family: Pretendard;
`;

export const ApplyButton = styled.button`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 5rem;
  background-color: #36f;
  color: #fff;
  border-radius: 2.5rem; 
  cursor: pointer; 
  align-items: center;
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: normal;
  text-align: center;
  justify-content: center;
  position: relative;
  border: none;
  font-family: Pretendard;
`;

export const InteractioButton = styled.button`
  display: flex;
  flex-direction: row;
  min-width: 4.8rem;
  height: 3.2rem;
  padding: 0 1.4rem;
  //background: none;
  background-color: #f8f8f8;
  border-radius: 100rem; 
  cursor: pointer; 
  align-items: center;
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: normal;
  text-align: center;
  justify-content: center;
  position: relative;
  border: none;
  vertical-align: middle;
  box-sizing: border-box;
  line-height: normal;
`;

export const ButtonImage = styled.svg`
  width: 1.3rem;
  height: 1.7rem;
  color: rgb(51, 102, 255);
  //max-width: 100%; 
  margin-right: 0.8rem;
  box-sizing: border-box;
`;

export const Label = styled.span`
  font-family: Pretendard;
`;

export const IconLabel = styled.span`
  font-family: Pretendard;
  font-size: 1.2rem;
  color: #333;
`;

export const HeartIcon = styled.svg`
  margin-right: 0.4rem;
  width: 16px;
  height: 16px;
  fill: ${(props) => (props.isLiked ? '#FF0000' : '#e1e2e3')};
`;


