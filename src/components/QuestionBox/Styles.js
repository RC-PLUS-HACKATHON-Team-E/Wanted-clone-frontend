import styled from 'styled-components';
export const QuestionContainer = styled.a`
height: 9.2rem;
  margin-top: 1.2rem;
  padding: 2.4rem 3rem 2.4rem 3rem;
  background-color: #f7fcff;
  border: 0.1rem solid #e0f1fe;
  border-radius: 0.4rem;
  display: flex;
  align-items: center;
  //cursor: pointer;
`;


export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 1rem;
  gap:1rem;
  `;

export const TextLabel = styled.span`
  color: #333333;
  font-size: 1.4rem;
  letter-spacing: .0145em;
  line-height: 2rem;
  font-weight: 600;
  //display: flex;
  //flex-direction: row;
`;

export const SubtextLabel = styled.span`
  color: #36f;
  font-size: 1.2rem;
  letter-spacing: .0252em;
  line-height: 1.6rem;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const QuestionIcon = styled.svg`
  display: flex;
  align-items: center;
  grid-gap: 0.3rem;
  width: 1rem;
  height: 1.2rem;
  fill: #3366ff;
`;

export const ImageBox = styled.img`
  width: 6.8rem;
  height: 6.8rem;
`;
