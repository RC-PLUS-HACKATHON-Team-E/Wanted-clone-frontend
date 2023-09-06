export const FETCH_RECRUIT_DATA_SUCCESS = 'FETCH_RECRUIT_DATA_SUCCESS';

export const fetchRecruitDataSuccess = (data) => ({
  type: FETCH_RECRUIT_DATA_SUCCESS,
  payload: data,
});
