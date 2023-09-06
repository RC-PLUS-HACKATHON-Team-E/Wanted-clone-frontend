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
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBack = styled.div`
  background-color: rgba(0,0,0,.5);
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
`;



export const ModalContainer = styled.div`
  top: 50%;
  left: 50%;
  border-radius: 0.5rem;
  width: 50rem;
  height: 50rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  background-color: #fff;
  box-shadow: 0.4rem 0.4rem 0.4rem 0 rgba(0,0,0,.1);
  margin: 0;
  border: 0;
  
  //z-index: 5;
  //position: absolute;
`;

export const HeadWrap = styled.div`
  position: relative;
  //height: 5.4rem;
  height: auto;
  text-align: center;
  padding: 1.6rem 2rem;
  border-bottom: 0.1rem solid #eee;
  color: #333;
  font-size: 1.6rem;
  font-weight: 600;
  display: block;
  margin: 0;
  font-family: Pretendard;
  //flex: 0 0 auto;
`;

export const ContentWrap = styled.div`
  padding: 0;
  flex: 1 1;
  overflow-y: auto;
`;

export const ContentList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  border: 0;
  font-family: Pretendard;
`;
export const LikeList = styled. li`
  border-bottom: none;
  //height: 5.4rem;
  line-height: 2.8rem;
  background: #f8f8fa;
  font-size: 1.4rem;
  font-weight: 400;
  color: #b5b5b5;
  padding: 1.3rem 2rem;
  word-wrap: break-word;
  margin: 0;
  font-family: Pretendard;
`;

export const AvatarList = styled. li`
  //float: left;
  //width: 5rem;
  padding: 1.3rem 2rem;
  height: auto;
  margin-right: 1rem;
  background-size: cover;
  background-position: 50%;
  font-size: 1.6rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  //border: 0.1rem solid #f7f7f7;
  color: #757575;
  background-color: white;
  line-height: 1;
  overflow: hidden;
  user-select: none;
  font-family: Pretendard;
`;

export const CountBox = styled.strong`
  line-height: 2.8rem;
  font-size: 1.4rem;
  font-family: inherit;
`;


export const CloseModalButton = styled.button`
  color: #999;
  position: absolute;
  top: 0;
  right: 0;
  padding: 1.5rem;
  line-height: 0;
  cursor: pointer;
  border: none;
  background: none;
  margin: 0;
`;

export const CloseImg = styled.span`
  width: 100%;
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
    width: 2rem;
    height: 2rem;
    fill: #999;
`;
