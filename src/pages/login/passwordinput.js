import { useContext, useEffect, useState } from "react";
import Styles from './PasswordInput.module.css'; // CSS 모듈 import
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, updateuser } from '../../store/actions/login';
import { useNavigate } from "react-router-dom";
import axios from "axios";

function PasswordInput(props) {
  let [Password, setPassword] = useState('');
  let [PwIsValid, setPwIsValid] = useState(true);
  const userEmail = useSelector(state => state.auth.userEmail); //아직 로그인 전 단계

  let dispatch = useDispatch();
  let navigate = useNavigate();

  const handlePwChange = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);
    setPwIsValid(true);
  }

  const handlePwCheck = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('password', Password);
    formData.append('username', userEmail);//userEmail

    let entries = formData.entries();
    for (const pair of entries) {
      console.log('formdata: ', pair[0], pair[1]);
    }

    axios.post(process.env.REACT_APP_SERVER_BASE_URL + '/users/sign-in', {/*파라미터의 키(key) 이름은 원하는 대로 정의할 수 O 하지만 주의할 점은, 사용하는 API의 문서나 요구사항에 따라 정해진 키 이름을 사용해야 할 수도 O API가 특정 키 이름을 요구하지 않는 경우에는 자유롭게 원하는 키 이름을 사용할 수 O*/
      params: formData,
      withCredentials: true,
    })
      .then((response) => {
        console.log('반환값', response);
        dispatch(login(userEmail)); //로그인에 성공한 유저 정보만이 저장
        console.log('유저로그인 성공 -> 유저정보 저장');
        setPwIsValid(true);
        navigate('/');

      })
      .catch((error) => {
        console.log('에러', error.response.data);
        if (error.response.data.code === "400") {
          console.log('유저로그인 실패 -> 유저정보 저장x');
          setPwIsValid(false);
          alert('비밀번호가 틀렸습니다.');
        } else {
          console.error('Error checking password:', error);
          alert('비밀번호 확인 중 오류가 발생했습니다.');
        }
      });
  }

  return (
    <div className={Styles['pwinput-background']}>
      <div className={Styles['pwinput-wrapper']}>
        <div className={Styles['pwinput-header']}>
          <div className={Styles['pwinput-header-side']}>
            <button type="button" className={Styles['pwinput-cancel-btn']} onClick={() => { navigate('/login/email'); }}>
              <svg viewBox="0 0 18 18" className={Styles['back-btn']}><path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path></svg>
            </button>
          </div>
          <div className={Styles['pwinput-title']}>
            <p>이메일로 로그인</p>
          </div>
          <div className={Styles['pwinput-header-side']}></div>
        </div>
        <div className={Styles['pwinput-container']}>
          <form onSubmit={handlePwCheck}>
            <div className={Styles['pwinput-label']}>
              <label htmlFor="pwinput">비밀번호</label>
            </div>
            <input
              type="password"
              placeholder="비밀번호를 입력해주세요"
              name="pwinput"
              id="pwinput"
              className={`${Styles['pwinput-input']} ${PwIsValid ? Styles['pwinput-input-success'] : Styles['pwinput-input-error']}`}
              onChange={handlePwChange}
            ></input>
            {Password.length > 0 &&
              <div className={`${Styles.pwinput} ${PwIsValid ? Styles.success : Styles.error}`}>
                비밀번호가 일치하지 않습니다.
              </div>}
            <button
              type="submit"
              className={`${Styles['confirm-button']} ${Password.length > 0 ? Styles['success'] : Styles['error']}`}
              onClick={() => { }}
            >
              다음
            </button>
            <button
              type="button"
              className={Styles['pw-reset-btn']}
              onClick={() => { navigate('/pw-reset') }}>
              <span className={Styles['pw-reset']}>
                비밀번호 초기화/변경
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PasswordInput;