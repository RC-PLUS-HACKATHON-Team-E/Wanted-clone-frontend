import React from 'react';
import * as B from './Styles';

function ApplyButton({ label, imageSrc }) {
  return (
    <B.ApplyButton>
      {imageSrc && <B.ButtonImage src={imageSrc} alt="" />}
      <B.Label>{label}</B.Label>
    </B.ApplyButton>
  );
}

export default ApplyButton;
