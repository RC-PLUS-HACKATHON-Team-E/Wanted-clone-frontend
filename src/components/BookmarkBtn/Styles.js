import styled from 'styled-components';

// 스타일드 컴포넌트를 사용하여 버튼 스타일을 정의합니다.
export const BookmarkBtn = styled.button`
  background: none;
  padding: 0.8rem 0.6rem;
  width: 4.2rem;
  height: 4.2rem;
  top: 0;
  right: 0;
  flex-direction: row;
  z-index: 1;
  justify-content: flex-end;
  align-items: flex-start;
  border-radius: 0.3rem;
  position: absolute;
  display: flex;
  font-size: 1.2rem;
  font-weight: 400;
  //border: none은 조정 필요
  border: none;
  cursor: pointer;
  color: #fff;


  //gap: 0.5rem; /* 아이콘과 텍스트 사이의 간격 조정 */

  // color: ${(props) => (props.active ? 'black' : 'white')}; /* 버튼 활성/비활성 시 텍스트 색상 변경 */
`;
