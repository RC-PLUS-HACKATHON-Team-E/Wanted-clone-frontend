import React from 'react';
import * as B from './Styles';
import { useDispatch, useSelector } from "react-redux";
import { openAvatar } from "../../store/actions/avatar";

function ApplyButton() {

  const dispatch = useDispatch();
  const isAvatarOpen = useSelector((state) => state.avatar.isAvatarOpen);
  const openAvatarModal = () => {
    dispatch(openAvatar());

  };

  return (
    <B.ApplyButton onClick={openAvatarModal}>
      {/*{imageSrc && <B.ButtonImage src={imageSrc} alt="" />}*/}
      <B.Label>지원하기</B.Label>
    </B.ApplyButton>
  );
}

export default ApplyButton;
