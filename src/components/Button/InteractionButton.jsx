import React, { useState } from "react";
import * as B from './Styles';

function InteractionButton({ likeCount, onLikeClick }) {
  const [isLiked, setIsLiked] = useState(false);
  const handleLikeClick = () => {
    // 클릭 시 아이콘 상태를 변경
    setIsLiked(!isLiked);
    // 아이콘 상태를 부모 컴포넌트로 전달
    onLikeClick(!isLiked);
  };

  return (
    <B.InteractioButton onClick={handleLikeClick}>
      {isLiked ? (
        <B.HeartIcon
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="rgb(255, 0, 0)"
        >
          <path
            d="M11.9999 6.49201L13.4848 5.00461C15.5225 2.9634 18.8529 2.9634 20.8905 5.00445C22.9308 7.04707 22.9308 10.3876 20.8928 12.4291L13.4587 19.9397L13.4565 19.9419C13.067 20.332 12.5427 20.5339 11.9999 20.5261C11.4563 20.5339 10.9319 20.3321 10.5402 19.9397L3.10804 12.4311C1.06908 10.3875 1.06908 7.04719 3.10835 5.00445C5.14712 2.96345 8.47614 2.96345 10.5151 5.00461L11.9999 6.49201Z"
            fill="rgb(255, 0, 0)"
          ></path>
        </B.HeartIcon>
      ) : (

        <B.HeartIcon
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="##f8f8f8"
        >
          <path
            d="M11.9999 6.49201L13.4848 5.00461C15.5225 2.9634 18.8529 2.9634 20.8905 5.00445C22.9308 7.04707 22.9308 10.3876 20.8928 12.4291L13.4587 19.9397L13.4565 19.9419C13.067 20.332 12.5427 20.5339 11.9999 20.5261C11.4563 20.5339 10.9319 20.3321 10.5402 19.9397L3.10804 12.4311C1.06908 10.3875 1.06908 7.04719 3.10835 5.00445C5.14712 2.96345 8.47614 2.96345 10.5151 5.00461L11.9999 6.49201Z"
            fill="##f8f8f8"
          ></path>
        </B.HeartIcon>
      )}
      <B.IconLabel>{likeCount}</B.IconLabel>
    </B.InteractioButton>
  );
}

export default InteractionButton;
