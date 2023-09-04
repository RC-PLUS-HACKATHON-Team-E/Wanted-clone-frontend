import React from 'react';
import * as B from './Styles';

function InteractionButton({ label, imageSrc }) {
  return (
    <B.InteractioButton>
      {imageSrc && <B.ButtonImage src={imageSrc} alt="" />}
      {/*0은 정보를 받아 봐야함 일단은 0으로 */}
      <B.Label>{label}</B.Label>
    </B.InteractioButton>
  );
}

export default InteractionButton;
