import React, { useState } from "react";
import * as A from './Styles';
import BookmarkButton from "../Button/BookmarkButton";
import ApplyButton from "../Button/ApplyButton";
import InteractionButton from "../Button/InteractionButton";
import AvatarSmall from "../Avatar/AvatarSmall";
import { useSelector } from "react-redux";
function ApplyBox() {

  const likeCount = useSelector((state) => state.like.likeCount);

  const renderAvatarSmall = (count) => {
    const avatars = [];
    for (let i = 0; i < count; i++) {
      const zIndex = likeCount - i;
      const marginLeft = i > 0 ? "-1.2rem" : "0";
      console.log(`Avatar ${i}: zIndex=${zIndex}, marginLeft=${marginLeft}`);
      avatars.push( <AvatarSmall
        key={i}
        style={{  zIndex, marginLeft }}
      />);
    }
    return avatars;
  };



  return (
    <A.ApplyContainer>
      <A.ContentWrap>
        <A.TitleLabel>채용보상금</A.TitleLabel>
        <A.ContentBox>
          <A.ContextBox>
            <A.ContextLabel>추천인</A.ContextLabel>
            <A.NumberLabel>500,000원</A.NumberLabel>
          </A.ContextBox>
          <A.ContextBox>
            <A.ContextLabel>지원자</A.ContextLabel>
            <A.NumberLabel>500,000원</A.NumberLabel>
          </A.ContextBox>
        </A.ContentBox>
      </A.ContentWrap>
      <A.ShareBtn>
        <svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.8419 5.13156C20.8419 3.34425 19.3929 1.89474 17.6051 1.89474C15.8181 1.89474 14.3682 3.34457 14.3682 5.13156L14.3777 5.37944C14.384 5.46157 14.3934 5.54316 14.4058 5.62409L14.4152 5.67411L6.48256 9.86022L6.41109 9.78015C5.79271 9.13677 4.91641 8.75021 3.9697 8.75021C2.1352 8.75021 0.631592 10.194 0.631592 11.9933C0.631592 13.7933 2.13485 15.2364 3.9697 15.2364L4.20171 15.2286C5.04647 15.1719 5.82161 14.8075 6.3874 14.2307L6.45098 14.1587L15.0769 18.7102C15.2605 18.8071 15.4707 18.841 15.6754 18.8067L15.7022 18.8022L15.8292 18.7718C16.077 18.6942 16.2842 18.5172 16.3988 18.28L16.4722 18.148C16.5528 18.0206 16.6553 17.9073 16.7783 17.8116C17.3632 17.3544 18.2064 17.4579 18.6625 18.0422C19.1191 18.627 19.0157 19.4704 18.4326 19.9256C17.8475 20.3823 17.004 20.2788 16.5478 19.6945L16.4536 19.5905C16.1191 19.272 15.593 19.238 15.2181 19.5307C14.8057 19.8527 14.7324 20.4481 15.0543 20.8605C16.1547 22.2699 18.1889 22.5196 19.5985 21.4192C21.007 20.3199 21.2563 18.2855 20.156 16.8762C19.0556 15.4667 17.0211 15.2169 15.6126 16.3178L15.4226 16.4779C15.3616 16.5334 15.303 16.5911 15.2426 16.6547L6.6973 12.1478L6.67428 12.1292C6.60376 12.0831 6.52833 12.0476 6.45025 12.0225L6.41688 12.0139L6.49246 11.9899C6.53023 11.9752 6.56816 11.9579 6.60613 11.9379L15.9611 7.00213L16.1289 6.88917L16.159 6.86384L16.2612 6.76385C16.5102 6.48039 16.57 6.07014 16.4003 5.72293L16.3408 5.5818C16.2895 5.43808 16.263 5.28694 16.263 5.13156C16.263 4.391 16.8645 3.78948 17.6051 3.78948C18.3463 3.78948 18.9471 4.39053 18.9471 5.13156C18.9471 5.87326 18.3467 6.47363 17.6051 6.47363L17.4765 6.48228C17.0141 6.54501 16.6577 6.94138 16.6577 7.421C16.6577 7.94422 17.0818 8.36837 17.6051 8.36837C19.3932 8.36837 20.8419 6.91969 20.8419 5.13156ZM2.52634 11.9933C2.52634 11.2581 3.16483 10.6449 3.9697 10.6449L4.14547 10.6549C4.60709 10.7073 5.00699 10.9637 5.22962 11.334L5.26108 11.395L5.28192 11.4515C5.38641 11.702 5.59409 11.9092 5.85157 12.0023L5.89393 12.0152L5.85009 12.0269C5.61829 12.1049 5.41331 12.2729 5.296 12.5268L5.22001 12.668C4.96724 13.0762 4.49734 13.3416 3.9697 13.3416C3.16435 13.3416 2.52634 12.7292 2.52634 11.9933Z" fill="#3366ff"></path>
        </svg>
      </A.ShareBtn>
      <BookmarkButton label="북마크하기" />
      <ApplyButton label="지원하기" />
      <A.InteractionWrap>
        <InteractionButton />
        <A.AvatarBox>
          {renderAvatarSmall(likeCount)}
        </A.AvatarBox>
      </A.InteractionWrap>
    </A.ApplyContainer>
  );
}

export default ApplyBox;
