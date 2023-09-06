import axios from "axios";

export const FETCH_LIKES_SUCCESS = 'FETCH_LIKES_SUCCESS';
export const FETCH_LIKES_FAILURE = 'FETCH_LIKES_FAILURE';

export const fetchLikesSuccess = (postId, userName) => ({
  type: FETCH_LIKES_SUCCESS,
  payload: { postId, userName },
});

export const fetchLikesFailure = (error) => ({
  type: FETCH_LIKES_FAILURE,
  payload: error,
});

export const fetchLikesByPostId = (postId) => async (dispatch) => {

  try {
    const response = await axios.get(`/posts/${postId}/likes/users`);
    if (response.status === 200) {
      const likedUsers = response.data;

      likedUsers.forEach((user) => {
        dispatch(fetchLikesSuccess(postId, user.name));
      });

      console.log('결과는', likedUsers);
    } else {
      dispatch(fetchLikesFailure('Failed to fetch likes data'));
      console.log('에러');
    }
  } catch (error) {
    dispatch(fetchLikesFailure(error.message));
    console.log('에러');
  }
};




