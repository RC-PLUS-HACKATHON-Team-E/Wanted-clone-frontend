import styled from 'styled-components';


export const ModalRoot = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  overflow: hidden;
  z-index: 1400;
  margin: 0;
  padding: 0;
  border: 0;`;



export const ModalContainer = styled.div`
  top: 50%;
  left: 50%;
  width: 100%;
  height: auto;
  //일단 rem 대신 가로폭 때문에
  max-width: 460px;
  max-height: calc(100vh - 15rem);
  // display: ${props => (props.isOpen ? 'block' : 'none')};
  display: block;
  transform: translate(-50%,-50%);
  padding: 2rem;
  z-index: 5;
  overflow: hidden;
  border-radius: 0.5rem;
  background-color: #fff;
  position: absolute;
  border: 0.1rem solid #aaa;
  font-family: Pretendard;
  margin: 0;
`;

export const ModalWrap = styled.div`
  height: 100%;
  padding: 2rem;
  border: 0;
  margin: 0;
  text-align: center;
  justify-content: center;
`;

export const ModalBox = styled.div`
  height: 11.8rem;
  font-size: 1.6rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #333;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0;
  padding: 0;
  border: 0;
`;

export const CloseModalButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  border: none;
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  cursor: pointer;
`;

export const CloseImg = styled.span`
  display: flex;
  align-items: inherit;
  justify-content: inherit;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  margin: 0;
  padding: 0;
  border: 0;
  & > svg {
    width: 16px;
    height: 16px;
    fill: #999;
`;


export const BookmarkLabel = styled.p`
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: center;
  font-family: Pretendard;
  font-size: inherit;
  line-height: inherit;
  margin: 0;
  padding: 0;
`;

export const InfoBtn = styled.button`
  color: #36f;
  margin-top: 1.5rem;
  font-family: Pretendard;
  font-size: inherit;
  line-height: inherit;
  padding: 0;
  border: 0;
  background: none;
  cursor: pointer;
`;
