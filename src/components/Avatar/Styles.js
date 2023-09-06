import styled from 'styled-components';

export const AvatarContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 50%;
  border: 0.1rem solid #f7f7f7;
  color: #fff;
  background-color: #dbdcdf;
  font-size: 1.538em;
  line-height: 1;
  overflow: hidden;
  user-select: none;
`;


export const AvatarSmall = styled(AvatarContainer)`
  width: 2.8rem;
  height: 2.8rem;
  z-index: auto;
  margin-left: auto;
`;

export const AvatarLarge = styled(AvatarContainer)`
  float: left;
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
  margin-right: 1rem;
  background-size: cover;
  background-position: 50%;
  font-size: 2.6rem;
`;


export const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
  text-align: center;
  object-fit: cover;
  color: transparent;
  vertical-align: middle;
  overflow-clip-margin: content-box;
  overflow: clip;
  padding: 0;
  border: 0;
`;





