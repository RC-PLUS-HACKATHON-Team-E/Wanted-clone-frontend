import { useContext, useEffect, useState } from "react";
import { ReactComponent as Loginlogo } from '../../assets/login-logo.svg';
import { ReactComponent as Google } from "../../assets/google.svg";
import { ReactComponent as Apple } from '../../assets/apple.svg';
import { ReactComponent as Kakao } from '../../assets/kakao.svg';
import Styles from './Login.module.css'; // CSS 모듈 import
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, signin } from '../../store/actions/login';
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login(props) {
  let [email, setEmail] = useState('');
  let [selectedLanguage, setSelectedLanguage] = useState('ko');
  let flagImageSrc = '';
  let [emailIsValid, setEmailIsValid] = useState();
  let dispatch = useDispatch();
  let navigate = useNavigate();

  if (selectedLanguage === 'ko') {
    flagImageSrc = 'https://static.wanted.co.kr/images/wantedoneid/ico_KR.svg';
  } else if (selectedLanguage === 'en') {
    flagImageSrc = 'https://static.wanted.co.kr/images/wantedoneid/ico_WW.svg'; // 다른 언어에 대한 이미지 URL로 변경
  }

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    /* 이메일 정규 표현식 */
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    setEmailIsValid(emailPattern.test(inputEmail));
    console.log(emailIsValid);
    /*
    [요약 설명]
    1. test() 메소드: 인수로 전달된 문자열에 특정 패턴과 일치하는 문자열이 있는지를 검색
    2. 패턴과 일치하는 문자열이 있으면 true를, 없으면 false를 반환
    */
  }


  const handleEmailCheck = (e) => {
    e.preventDefault();
    axios.get('/users/validate-duplicate', {
      params: {email: email},
    }).then((response) => {
      console.log(response.data);
      if (response.data) {
        dispatch(login(email));//로그인한 유저의 최소정보
        navigate('/login/password');
      } else {
        dispatch(validate(email));//로그인아니라도 회원가입시 사용할 유저 이메일 저장
        navigate('/signup');
      }
    }).catch((error) => {
      console.error('Error checking password:', error);
      alert('이메일 확인 중 오류가 발생했습니다.');
    });
  };

  return (
    <div className={Styles['login-background']}>
      <div className={Styles['login-wrapper']}>
        <div className={Styles['login-header']}>
          <div className={Styles['loginlogo']}>
            <Loginlogo width="93" height="28"></Loginlogo>
          </div>
          <h1>하나의 계정으로
            <br />
            더욱 편리하게</h1>
          <h2>원티드가 제공하는 서비스를
            <br />
            하나의 계정으로 모두 이용할 수 있습니다.
          </h2>
        </div>
        <div className={Styles['login-container']}>
          <form onSubmit={handleEmailCheck}>
            <div className={Styles['email-label']}>
              <label htmlFor="email">이메일</label>
            </div>
            <input
              /*label for와 input의 id값 */
              type="email"
              placeholder="이메일을 입력해주세요"
              name="email"
              id="email"
              className={`${Styles['email-input']} ${emailIsValid || email.length === 0 ? Styles['email-input-success'] : Styles['email-input-error']}`}
              onChange={handleEmailChange}
            ></input>
            {email.length > 0 &&
              <div className={`${Styles['email']} ${emailIsValid ? Styles['success'] : Styles['error']}`}>
                올바른 이메일을 입력해주세요.
              </div>}
            <button
              type="submit"
              className={`${Styles['confirm-button']} ${emailIsValid ? Styles['success'] : ''}`}
              onClick={() => { /* 존재하는 이메일인지 확인하는 함수 추가 */ }}
            >
              이메일로 계속하기
            </button>
          </form>
          <p className={Styles['or']}>또는</p>
          <div className={Styles['social-login-wrapper']}>
            <button type="button" className={Styles['social-login']}>
              <span>
                <Apple width="56" height="56"></Apple>
              </span>
              <p>Apple</p>
            </button>
            <button type="button" className={Styles['social-login']}>
              <span>
                <Google width="56" height="56"></Google>
              </span>
              <p>Google</p>
            </button>
            <button type="button" className={Styles['social-login']}>
              <span>
                <Kakao width="56" height="56"></Kakao>
              </span>
              <p>Kakao</p>
            </button>
          </div>
          <button className={Styles['find-email-button']}>
            계정을 잊으셨나요?
          </button>
          <hr className={Styles['additional-info-hr']}></hr>
          <div className={Styles['additional-info-wrapper']}>
            <button className={Styles['terms-of-service']}>
              이용약관
            </button>
            <button className={Styles['privacy-policy']}>
              개인정보처리방침
            </button>
          </div>
          <p className={Styles['Wantedlab']}>© Wantedlab, Inc.</p>
          <div className={Styles['language-select-box']}>
            <img src={flagImageSrc} width="23" height="16" className={Styles['flag-mark']} />
            <select className={Styles['lang']} value={selectedLanguage} onChange={(e) => { setSelectedLanguage(e.target.value) }}>
              <option value="ko">한국어</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
