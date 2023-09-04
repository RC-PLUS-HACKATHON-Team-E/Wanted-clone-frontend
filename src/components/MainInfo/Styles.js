import styled from 'styled-components';
export const MainContainer = styled.div`
  display: block;
  margin: 4rem 0 3rem;
`;
export const TitleLabel = styled.h2`
  color: #333;
  font-size: 2.2rem;
  font-weight: 600;
  margin: 0 0 1rem;
  word-break: keep-all;
  word-wrap: break-word;
`;

export const SubWrap = styled.div`
  display: block;
  margin: 4rem 0 3rem;
`;

export const SubTitle = styled.h6`
  color: #999;
  font-size: 1.4rem;
  font-weight: 600;
  margin: 0;
  display: inline-flex;
`;

export const SubContent = styled.span`
  display: inline-block;
  padding: 0 1rem;
  position: relative;
  white-space: nowrap;
  margin-left: 1rem;
  color: #999;
  &::before {
    content: "";
    display: block;
    width: 1rem;
    height: 1.2rem;
    background: #e1e2e3;
    position: absolute;
    top: 0.4rem;
    left: 0;
  }
`;

export const SubDot = styled.span`
  margin: 0 0.5rem;
  top: -0.3rem;
  position: relative;
`;

export const AddWrap = styled.div`
  display: block;
  margin-top: 2rem;
`;

export const AddBox = styled.ul`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0;
  margin-inline-end: 0;
  padding-inline-start: 4rem;
  list-style: none;
`;

export const AddList = styled.li`
  display: inline-block;
  text-align: center;
`;

export const ListInfo = styled.a`
  display: inline-block;
  margin-right: 0.6rem;
  margin-bottom: 1rem;
  padding: 0.9rem 1.4rem;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1;
  color: #333;
  background-color: #f3f5f8;
  border-radius: 2.5rem;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
}
`;




