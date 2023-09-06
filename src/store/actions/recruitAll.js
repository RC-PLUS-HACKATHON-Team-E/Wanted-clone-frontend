import axios from "axios";

export const FETCH_RECRUITS_SUCCESS = 'FETCH_RECRUITS_SUCCESS';
export const FETCH_RECRUITS_FAILURE = 'FETCH_RECRUITS_FAILURE';

export const fetchRecruitsSuccess = (recruits) => ({
  type: FETCH_RECRUITS_SUCCESS,
  payload: recruits,
});

export const fetchRecruitsFailure = (error) => ({
  type: FETCH_RECRUITS_FAILURE,
  payload: error,
});


export const fetchRecruits = () => async (dispatch) => {
  try {
    const response = await axios.get('http://3.34.237.206:8080/posts');
    console.log('Response:', response);
    const data = response.data;
    console.log('데ㅐ이터', data);

    dispatch(fetchRecruitsSuccess(data));
  } catch (error) {
    dispatch(fetchRecruitsFailure(error.message));
  }
};
