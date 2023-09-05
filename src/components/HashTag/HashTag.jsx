import React from 'react';
import * as H from './Styles';
import styled from "styled-components";

// const LabelStyled = styled.span`
//   color: ${(props) => props.color || 'black'};
// `;

function HashTag({ text, color  }) {
  const HashContainer = styled(H.HashTagContainer)`
    background-color: ${color || '#f3f5f8'};
  `;
  return <HashContainer>{text}</HashContainer>;
}

export default HashTag;
