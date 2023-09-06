import { fetchRecruitDataSuccess } from '../actions/recruit';
import axios from 'axios';

axios.defaults.baseURL = 'http://3.34.237.206:8080/';

export const fetchRecruitData = (postingId) => async (dispatch) => {
  try {
    const response = await axios.get(`/posts/${postingId}`);
    console.log('Response:', response);

    const data = response.data.count;
    dispatch(fetchRecruitDataSuccess(data));
  } catch (error) {
  }
};


//   try {
//     const response = await axios.get(`/posts/${postingId}`, {
//       params: { postingId: postingId },
//     });
//
//     console.log('Response:', response);
//
//     const data = response.data;
//     dispatch(fetchRecruitDataSuccess(data));
//   } catch (error) {
//   }
// };
