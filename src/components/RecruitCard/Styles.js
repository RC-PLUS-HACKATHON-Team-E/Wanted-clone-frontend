import styled from 'styled-components';


export const CardContainer = styled.div`
  display: block;
  position: relative;
`;

export const CardWrap = styled.a`
  display: block;
  color: inherit;
  font-family: inherit;
  cursor: pointer;
`;

export const ImageBox = styled.header`
  padding-bottom: 75%;
  position: relative;
  background-size: cover;
  background-position: 50%;
  border-radius: 0.4rem;
  box-shadow: inset 0 0 0 0.1rem rgba(0,0,0,.1);
`;

export const ContentBox = styled.div`
  padding: 1.4rem 0;
`;

export const PositionLabel = styled.div`
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  position: relative;
  color: #333;
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.2;
  max-height: 2.4em;
  overflow: hidden;
  text-align: left;
  word-break: break-word;
  font-family: Pretendard;
`;
export const CompanyLabel = styled.div`
  color: #333;
  font-weight: 600;
  font-size: 1.4rem;
  line-height: normal;
  text-align: left;
  word-break: break-word;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin-top: 1rem;
  font-family: Pretendard;`;

export const LocationLabel = styled.div`
  font-weight: 400;
  color: #999;
  font-size: 1.4rem;
  line-height: normal;
  text-align: left;
  word-break: break-word;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin-top: 1rem;
  font-family: Pretendard;`;

export const RewardLabel = styled.div`
  margin-top: 1rem;
  color: #333;
  font-size: 1.4rem;
  font-weight: 500;
  text-align: left;
  word-break: break-word;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-family: Pretendard;
`;

export const Dot = styled.span`
  margin: 0 0.3rem;
  top: -0.4rem;
  position: relative;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  font-weight: 400;
  text-align: left;
  word-break: break-word;
`;

export const Extra = styled.span`
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  font-weight: 400;
  text-align: left;
  word-break: break-word;
`;










