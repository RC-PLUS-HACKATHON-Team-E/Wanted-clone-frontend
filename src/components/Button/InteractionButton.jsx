import React, { useEffect, useState } from "react";
import * as B from './Styles';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setLikeCount } from "../../store/actions/like";


function InteractionButton({ }) {
  const [isLiked, setIsLiked] = useState(false);
  const [postingId, setPostingId] = useState(1);

  const likeCount = useSelector((state) => state.like.likeCount);
  const dispatch = useDispatch();

  const handleLikeClick = async () => {
    // 클릭 상태에 따라 POST 또는 DELETE 요청 보내기
    try {
      if (isLiked) {
        await axios.delete(`http://3.34.237.206:8080/posts/${postingId}/likes`, {
          params: {
            "posting-id": postingId
          }
        });
        console.log("좋아요 취소 성공");
      } else {
        // 클릭되지 않은 상태에서 클릭한 경우, POST 요청 보내기
        await axios.post(`http://3.34.237.206:8080/posts/${postingId}/likes`, {
          params: {
            "posting-id": postingId
          }
        });
        console.log("좋아요 누르기 성공");
        // dispatch(setLikeCount(response.data));
      }
      setIsLiked(!isLiked);
    } catch (error) {
      console.error("Error sending like request:", error);
    }
  };



  useEffect(() => {
    axios
      .get(`http://3.34.237.206:8080/posts/${postingId}/likes`, {
        params: {
          "posting-id": postingId
        }
      })
      .then((response) => {
        console.log("좋아요 get하는 부분", response.data);
        dispatch(setLikeCount(response.data.count));
        console.log("좋아요 바귄건", likeCount);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [likeCount]);


  return (
    <B.InteractioButton onClick={handleLikeClick}>
      <B.IconWrap>
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
      </B.IconWrap>
    </B.InteractioButton>
  );
}

export default InteractionButton;
