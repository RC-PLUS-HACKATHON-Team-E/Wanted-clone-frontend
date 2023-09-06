import React, { useEffect } from "react";
import * as M from './Styles';
import { useSelector, useDispatch } from 'react-redux';
import AvatarLarge from "../Avatar/AvatarLarge";
import { closeAvatar } from "../../store/actions/avatar";
import { fetchLikesByPostId } from "../../store/actions/likedName";


function AvatarModal(postId=1) {
  const isAvatarOpen = useSelector((state) => state.avatar.isAvatarOpen);
  const likedUser = useSelector((state) => state.likedName.likesByPostId[postId] || []);
  const dispatch = useDispatch();


  const closeModalHandler = () => {
    dispatch(closeAvatar());
  };

  useEffect(() => {
    if (isAvatarOpen) {
      document.body.style.overflow = 'hidden';
      dispatch(fetchLikesByPostId(postId));
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isAvatarOpen, postId]);

  return (
      <M.ModalRoot>
        <M.ModalBack/>
      <M.ModalContainer isOpen={isAvatarOpen}>
        <M.HeadWrap>이 포지션을 좋아한 사람들
          <M.CloseModalButton onClick={closeModalHandler}>
          <M.CloseImg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M17.97 19.03a.749.749 0 1 0 1.06-1.06l-6.5-6.5a.749.749 0 0 0-1.06 0l-6.5 6.5a.749.749 0 1 0 1.06 1.06L12 13.06l5.97 5.97zM12 10.94 6.03 4.97a.749.749 0 1 0-1.06 1.06l6.5 6.5a.749.749 0 0 0 1.06 0l6.5-6.5a.749.749 0 1 0-1.06-1.06L12 10.94z"></path>
            </svg>
          </M.CloseImg>
        </M.CloseModalButton>
        </M.HeadWrap>
        <M.ContentWrap>
          <M.ContentList>
            <M.LikeList><M.CountBox>1명</M.CountBox>이 좋아요</M.LikeList>
            <M.AvatarList>
              {likedUser.map((name, index) => (
                <div key={index}>
                  <AvatarLarge />
                  {name}
                </div>
              ))}
            </M.AvatarList>
          </M.ContentList>
        </M.ContentWrap>
      </M.ModalContainer>
      </M.ModalRoot>
  );
}

export default AvatarModal;
