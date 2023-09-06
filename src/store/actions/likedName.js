export const FETCH_LIKES_SUCCESS = 'FETCH_LIKES_SUCCESS';
export const FETCH_LIKES_FAILURE = 'FETCH_LIKES_FAILURE';

export const fetchLikesSuccess = (postId, likes) => ({
  type: FETCH_LIKES_SUCCESS,
  payload: { postId, likes },
});

export const fetchLikesFailure = (error) => ({
  type: FETCH_LIKES_FAILURE,
  payload: error,
});

export const fetchLikesByPostId = (postId) => async (dispatch) => {
  try {
    // Axios를 사용하여 GET 요청을 보냅니다.
    const response = await axios.get(`/posts/${postId}/likes/users`);

    // 서버 응답이 성공인 경우
    if (response.status === 200) {
      // 데이터를 성공적으로 받아왔을 때 fetchLikesSuccess 액션을 디스패치하여 상태를 업데이트합니다.
      dispatch(fetchLikesSuccess(postId, response.data.likes));
    } else {
      // 응답이 성공하지 않은 경우 fetchLikesFailure 액션을 디스패치하여 에러를 처리합니다.
      dispatch(fetchLikesFailure('Failed to fetch likes data'));
    }
  } catch (error) {
    // 요청이 실패하면 fetchLikesFailure 액션을 디스패치하여 에러를 처리합니다.
    dispatch(fetchLikesFailure(error.message));
  }
};




