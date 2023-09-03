import { useContext, useEffect, useState } from "react";
import Styles from './PasswordInput.module.css'; // CSS 모듈 import
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, updateuser } from '../../store/actions/login';

function PasswordInput(props) {
  let [Password, setPassword] = useState('');
  let [PwIsValid, setPwIsValid] = useState(true);
  let auth = useSelector((state) => state.auth);
  let dispatch = useDispatch();

  const handlePwChange = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);
    setPwIsValid(true);
  }

  const handlePwCheck = (e) => {
    e.preventDefault();

    if (Password === 'abc1234@') {
      dispatch(login());
      dispatch(updateuser('kim'));
      console.log(auth);
      props.navigate('/');
      setPwIsValid(true);
    } else {
      dispatch(logout());
      setPwIsValid(false);
    }
  }

  return (
    <div className={Styles['pwinput-background']}>
      <div className={Styles['pwinput-wrapper']}>
        <div className={Styles['pwinput-header']}>
          <div className={Styles['pwinput-header-side']}>
            <button type="button" className={Styles['pwinput-cancel-btn']} onClick={() => { props.navigate('/login/email'); }}>
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
              onClick={() => { props.navigate('/pw-reset') }}>
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
