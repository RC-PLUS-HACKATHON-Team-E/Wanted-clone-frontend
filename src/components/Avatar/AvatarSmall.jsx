import React from "react";
import * as A from './Styles';
import { useDispatch } from "react-redux";
import { openAvatar } from "../../store/actions/avatar";

function AvatarSmall(props) {

  const dispatch = useDispatch();
  const openAvatarModal = () => {
    dispatch(openAvatar());

  };
  const { zIndex, marginLeft } = props





  return (
    <A.AvatarSmall style={{ zIndex: zIndex, marginLeft: marginLeft}} onClick={openAvatarModal}>
      <A.AvatarImg src="https://static.wanted.co.kr/oneid-user/profile_default.png" alt=""/>
    </A.AvatarSmall>

  );
}

export default AvatarSmall;
