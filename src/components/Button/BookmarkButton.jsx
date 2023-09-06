import React from "react";
import * as B from './Styles';
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../store/actions/modal";


function BookmarkButton() {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);

  const buttonLabel = isModalOpen ? "북마크 완료" : "북마크하기";

  const openBookmarkModal = () => {
    dispatch(openModal());

  };


  return (
    <B.BookmarkButton  onClick={openBookmarkModal}>
      <B.ButtonImage
        xmlns="http://www.w3.org/2000/svg"
        width="13"
        height="17"
        viewBox="0 0 13 17"
        fill="#36f"
      >
        <path
          d={
            isModalOpen
              ? "M6.25 13.21L.905 16.22c-.403.228-.905-.06-.905-.517V0.596C0 .267.27 0 .605 0h11.29c.334 0 .605.267.605.596v15.107c0 .458-.502.745-.905.518L6.25 13.209z"
              : "M1.481 1.481h9.382v10.727c0 .409.331.74.74.74.41 0 .741-.331.741-.74V.74c0-.41-.331-.741-.74-.741H.74C.33 0 0 .332 0 .74v14.814c0 .568.614.925 1.108.643l5.18-2.873 5.104 2.873c.355.203.807.08 1.01-.276.203-.355.08-.808-.275-1.01l-5.471-3.083c-.228-.13-.507-.13-.735 0l-4.44 2.45V1.48z"
          }
        />      </B.ButtonImage>
      <B.Label>{buttonLabel}</B.Label>
    </B.BookmarkButton>
  );
}

export default BookmarkButton;
