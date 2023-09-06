import React from "react";
import * as A from './Styles';

function AvatarSmall(props) {
  const { zIndex, marginLeft } = props

  const handleClick = () => {
    console.log(`zIndex: ${zIndex}, marginLeft: ${marginLeft}`);
  }




  return (
    <A.AvatarSmall style={{ zIndex: zIndex, marginLeft: marginLeft}} onClick={handleClick}>
      <A.AvatarImg src="https://static.wanted.co.kr/oneid-user/profile_default.png" alt=""/>
    </A.AvatarSmall>

  );
}

export default AvatarSmall;
