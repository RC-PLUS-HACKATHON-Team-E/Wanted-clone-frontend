import React, { useEffect } from "react";
import * as M from './Styles';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../store/actions/modal';
import { InfoBtn, ModalContainer } from "./Styles";

function BookmarkModal() {
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);
  const dispatch = useDispatch();

  const closeModalHandler = () => {
    dispatch(closeModal());
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  return (
      <M.ModalRoot>
      <M.ModalContainer isOpen={isModalOpen}>
        {/*<M.ModalWrap>*/}
          <M.ModalBox>
        <M.CloseModalButton onClick={closeModalHandler}>
          <M.CloseImg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M5.93289 4.6068C5.56201 4.33162 5.03569 4.36219 4.69935 4.69853C4.32938 5.0685 4.32938 5.66834 4.69935 6.03831L10.6611 12L4.69935 17.9617L4.60763 18.0679C4.33244 18.4388 4.36302 18.9651 4.69935 19.3015L4.80561 19.3932C5.17649 19.6684 5.7028 19.6378 6.03914 19.3015L12.0009 13.3402L17.9626 19.3015L18.0688 19.3932C18.4397 19.6684 18.966 19.6378 19.3023 19.3015C19.6723 18.9315 19.6723 18.3317 19.3023 17.9617L13.3406 12L19.3023 6.03831L19.3941 5.93206C19.6693 5.56118 19.6387 5.03487 19.3023 4.69853L19.1961 4.6068C18.8252 4.33162 18.2989 4.36219 17.9626 4.69853L12.0009 10.6598L6.03914 4.69853L5.93289 4.6068Z"></path>
          </svg>
          </M.CloseImg>
        </M.CloseModalButton>
            <M.BookmarkLabel>북마크에 저장되었습니다.</M.BookmarkLabel>
            <M.InfoBtn>저장된 포지션 보기</M.InfoBtn>
          </M.ModalBox>
        {/*</M.ModalWrap>*/}
      </M.ModalContainer>
      </M.ModalRoot>
  );
}

export default BookmarkModal;
