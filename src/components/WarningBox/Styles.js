import styled from 'styled-components';

export const WarningContainer = styled.div`
  display: block;
  margin-top: 1rem;
  border-radius: 0.5rem;
  background-color: #f3f5f8;
`;

export const WarningWrap = styled.div`
  padding: 2.5rem 3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;


export const ContentBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContentLabel = styled.h5`
  margin: 0 2rem;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 2.2rem;
  color: #333;
  font-family: Pretendard;
`;

export const DropdownBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  align-items: center;
`;
