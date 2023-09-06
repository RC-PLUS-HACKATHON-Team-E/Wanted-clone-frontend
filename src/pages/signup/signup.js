import React, { useState, useEffect } from "react";
import { ReactComponent as Bluecheck } from "../../assets/bluecheck.svg";
import { ReactComponent as Gradualchange } from '../../assets/gradualchange.svg';
import { ReactComponent as Wantedlogo } from '../../assets/wantedlogo.svg';
import Styles from './Signup.module.css'; // CSS 모듈을 import
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/actions/login';
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup(props) {
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let [name, setName] = useState('');
    let [password, setPassword] = useState('');
    let [passwordConfirm, setPasswordConfirm] = useState('');
    let [phone, setPhone] = useState('');
    let [verificationCode, setVerificationCode] = useState('');
    let [selectedCountry, setSelectedCountry] = useState('KR');
    let [isCodeValid, setIsCodeValid] = useState();
    let [isFormValid, setIsFormValid] = useState();
    let [isPwValid, setIsPwValid] = useState(true);
    let [isPnValid, setIsPnValid] = useState(false);
    let [passwordMatch, setpasswordMatch] = useState(true);
    let [receivedAuth, setReceivedAuth] = useState(false);
    const userEmail = useSelector(state => state.auth.userEmail);

    const handlePhoneChange = (e) => {
        setUserData({
            ...userData,
            phone: e.target.value,
          });
        setReceivedAuth(false);
        validatePhonenum(e.target.value);
    };

    const handleVerificationCodeChange = (e) => {
        setVerificationCode(e.target.value);

        if (e.target.value === '1234') {
            setIsCodeValid(true);
        }
    };

    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
    };

    const handleNameChange = (e) => {
        setUserData({
            ...userData,
            name: e.target.value,
        });
    };

    const handleSendVerificationCode = () => {
        setReceivedAuth(true);
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        validatePassword(newPassword, userData.password);
    };

    const handlePasswordConfirmChange = (e) => {
        const confirmPassword = e.target.value;
        setUserData({
            ...userData,
            password: e.target.value,
          });
        validatePassword(password, confirmPassword);
    };

    const validatePassword = (password, passwordConfirm) => {
        const passowrdPattern = /^.*(?=^.{8,16}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
        setIsPwValid(passowrdPattern.test(password));
        if (passowrdPattern.test(password)) {
            setpasswordMatch(password === passwordConfirm);
        }
    };

    const validatePhonenum = (phone) => {
        const PhonenumPattern = /^[0-9]{3}[0-9]{4}[0-9]{4}$/;
        setIsPnValid(PhonenumPattern.test(phone));
    };

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        sendUserData();
    };

    const [isAllChecked, setIsAllChecked] = useState(false);
    const [isAgeChecked, setIsAgeChecked] = useState(false);
    const [isTermsChecked, setIsTermsChecked] = useState(false);
    const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);
    const [isCustomInfoChecked, setIsCustomInfoChecked] = useState(false);
    const [isEmailChecked, setIsEmailChecked] = useState(false);
    const [isPushChecked, setIsPushChecked] = useState(false);
    const [isSmsChecked, setIsSmsChecked] = useState(false);

    const handleCheckChange = (e, type) => {
        const isChecked = e.target.checked;

        switch (type) {
            case 'all':
                setIsAllChecked(isChecked);
                setIsAgeChecked(isChecked);
                setIsTermsChecked(isChecked);
                setIsPrivacyChecked(isChecked);
                setIsCustomInfoChecked(isChecked);
                setIsEmailChecked(isChecked);
                setIsPushChecked(isChecked);
                setIsSmsChecked(isChecked);
                break;
            case 'age':
                setIsAgeChecked(isChecked);
                break;
            case 'terms':
                setIsTermsChecked(isChecked);
                break;
            case 'privacy':
                setIsPrivacyChecked(isChecked);
                break;
            case 'customInfo':
                setIsCustomInfoChecked(isChecked);
                break;
            case 'email':
                setIsEmailChecked(isChecked);
                break;
            case 'push':
                setIsPushChecked(isChecked);
                break;
            case 'sms':
                setIsSmsChecked(isChecked);
                break;
            default:
                break;
        }
    };
    
    const sendUserData = () => {
        axios.post('/users/sign-up', userData,  { params: {username: userEmail} })
            .then((response) => {
                if (isFormValid) {
                    navigate('/skillselect');
                }
                //회원가입 성공시 유효성 검사로 쓰인 이메일 데이터 초기화
                dispatch(validate(null));
                console.log('유저데이터', userData);
                console.log('유저 데이터 전송 성공:', response);
            }).catch((error) => {
                console.log('수정정보',userData);
                console.error('유저 데이터 전송 실패:', error);
            });
    }

    let [userData, setUserData] = useState({
        email: userEmail,
        name: '',
        password: '',
        phoneNumber: '',
      });

    useEffect(() => {
        const Valid =
            isAgeChecked &&
            isTermsChecked &&
            isPrivacyChecked &&
            passwordMatch &&
            userData.name &&
            verificationCode;

        setIsFormValid(Valid);
    }, [isAgeChecked, isTermsChecked, isPrivacyChecked, passwordMatch, userData.name, isCodeValid]);

    useEffect(() => {
        handleSendVerificationCode(verificationCode);
    }, [verificationCode]);

    useEffect(() => {
        console.log('전달받은 이메일:', userEmail);
        setReceivedAuth(false);
    }, []);

    return (
        <div className={Styles['signup-background']}>
            <div className={Styles['wanted-logo-wrapper']}>
                <Gradualchange width="50" height="20"></Gradualchange>
                <Wantedlogo width="87.5" height="20"></Wantedlogo>
            </div>
            <div className={Styles['signup-wrapper']}>
                <div className={Styles['signup-header']}>
                    <div className={Styles['sigunup-header-side']}>
                        <button
                            type="button"
                            className={Styles['signup-cancel-btn']}
                            onClick={() => {
                                if (window.confirm('회원가입을 취소하고 이전 화면으로 되돌아갑니다. 계속하시겠어요?')) {
                                    dispatch(validate(null));
                                    navigate('/login');
                                }
                            }}
                        >
                            취소
                        </button>
                    </div>
                    <div className={Styles['signup-title']}>
                        <p>회원가입</p>
                    </div>
                    <div className={Styles['sigunup-header-side']}></div>
                </div>
                <div className={Styles['sigunup-container']}>
                    <form onSubmit={handleSignupSubmit}>
                        <div className={Styles['email-label']}>
                            <label htmlFor="email">이메일</label>
                        </div>
                        <input
                            type="email"
                            value={userEmail}
                            name="email"
                            id="email"
                            className={Styles['email-input-block']}
                            disabled
                        ></input>
                        <div className={Styles['name-label']}>
                            <label htmlFor="name">이름</label>
                        </div>
                        <input
                            type="text"
                            value={userData.name}
                            placeholder="이름을 입력해주세요."
                            name="name"
                            id="name"
                            className={Styles['name-input-block']}
                            onChange={handleNameChange}
                        ></input>
                        <div className={Styles['phone-label']}>
                            <label htmlFor="phone">휴대폰 번호</label>
                        </div>
                        <div className={Styles['country-select-box']}>
                            <select
                                value={selectedCountry}
                                onChange={handleCountryChange}
                                className={Styles['country-select']}
                            >
                                <option value="KR">South Korea (+82)</option>
                                <option value="Aus">Austria (+43)</option>
                                <option value="Singa">Singapore (+65)</option>
                                <option value="Un-states">United States (+1)</option>
                            </select>
                        </div>

                        <div className={Styles['phone-input-wrapper']}>
                            <input
                                type="text"
                                value={userData.phone}
                                placeholder="(예시) 01013245768"
                                name="phone"
                                id="phone"
                                className={Styles['phone-input-block']}
                                onChange={handlePhoneChange}
                            ></input>
                            <button
                                type="button"
                                onClick={handleSendVerificationCode}
                                className={`${Styles['verification-btn']} ${isPnValid ? Styles['success'] : ''}`}
                            >
                                인증번호 받기
                            </button>
                        </div>
                        <input
                            type="text"
                            value={verificationCode}
                            placeholder="인증번호를 입력해주세요."
                            name="verificationCode"
                            id="verificationCode"
                            className={`${Styles['verification-code-input-block']} ${isFormValid ? Styles['success'] : ''}`}
                            onChange={handleVerificationCodeChange}
                        ></input>
                        <div className={`${receivedAuth ? Styles['receivedAuth-success'] : Styles['receivedAuth-error']}`}>
                            전송완료
                        </div>
                        <div className={Styles['password-label']}>
                            <label htmlFor="password">비밀번호</label>
                        </div>
                        <input
                            type="password"
                            value={password}
                            placeholder="비밀번호를 입력해주세요."
                            name="password"
                            id="password"
                            className={`${Styles['password-input-block']} ${isPwValid ? Styles['success'] : Styles['error']}`}
                            onChange={handlePasswordChange}
                        ></input>
                        {password.length > 0 && (
                            <div className={`${Styles['password']} ${isPwValid ? Styles['success'] : Styles['error']}`}>
                                올바르지 않은 비밀번호입니다.
                            </div>
                        )}
                        <input
                            type="password"
                            value={userData.password}
                            placeholder="비밀번호를 다시 한번 입력해주세요."
                            name="passwordConfirm"
                            id="passwordConfirm"
                            className={`${Styles['passwordConfirm-input-block']} ${passwordMatch ? Styles['success'] : Styles['error']
                                }`}
                            onChange={handlePasswordConfirmChange}
                        ></input>
                        {userData.password.length > 0 && (
                            <div className={`${Styles['passwordConfirm']} ${passwordMatch ? Styles['success'] : Styles['error']}`}>
                                비밀번호가 서로 일치하지 않습니다.
                            </div>
                        )}
                        <p className={Styles['password-validation-text']}>
                            영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합해 8자 이상 16자 이하로 입력해주세요.
                        </p>
                        <div className={Styles['Terms-checkbox1']}>
                            <input
                                type="checkbox"
                                checked={isAllChecked}
                                onChange={(e) => handleCheckChange(e, 'all')}
                            />
                            <label className={Styles['checkbox-container']}>전체 동의</label>
                        </div>
                        <hr className={Styles['terms-hr']} />

                        {/* 나머지 체크박스와 입력 필드 */}
                        <div className={Styles['Terms-checkbox']}>
                            <input
                                type="checkbox"
                                checked={isAgeChecked}
                                onChange={(e) => handleCheckChange(e, 'age')}
                            />
                            <label className={Styles['checkbox-container']}>
                                만 14세 이상입니다. (필수)
                            </label>
                        </div>

                        <div className={Styles['Terms-checkbox']}>
                            {/* 이용약관, 개인정보 수집 및 이용 동의, 맞춤 정보 */}
                            <input
                                type="checkbox"
                                checked={isTermsChecked}
                                onChange={(e) => handleCheckChange(e, 'terms')}
                            />
                            <label className={Styles['checkbox-container']}>원티드 이용약관 동의 (필수)</label>
                        </div>
                        <div className={Styles['Terms-checkbox']}>
                            <input
                                type="checkbox"
                                checked={isPrivacyChecked}
                                onChange={(e) => handleCheckChange(e, 'privacy')}
                            />
                            <label className={Styles['checkbox-container']}>원티드 개인정보 수집 및 이용 동의 (필수)</label>
                        </div>
                        <div className={Styles['Terms-checkbox']}>
                            <input
                                type="checkbox"
                                checked={isCustomInfoChecked}
                                onChange={(e) => handleCheckChange(e, 'customInfo')}
                            />
                            <label className={Styles['checkbox-container']}>
                                채용 소식, 커리어 콘텐츠, 이벤트 등 원티드 맞춤 정보 받기
                            </label>
                        </div>

                        {/* 알림 설정 */}
                        <div className={Styles['notification-checkbox-group']}>
                            <label className={Styles['checkbox-container2']}>
                                <input
                                    type="checkbox"
                                    checked={isEmailChecked}
                                    onChange={(e) => handleCheckChange(e, 'email')}
                                    style={{ display: 'none' }}
                                />
                                <span>
                                    <Bluecheck className={Styles['blue-check']} style={{ stroke: isEmailChecked ? '#36f' : 'rgb(136, 136, 136)' }}></Bluecheck>
                                </span>
                                <p>이메일</p>
                            </label>
                            <label className={Styles['checkbox-container2']}>
                                <input
                                    type="checkbox"
                                    checked={isPushChecked}
                                    onChange={(e) => handleCheckChange(e, 'push')}
                                    style={{ display: 'none' }}
                                />
                                <span>
                                    <Bluecheck className={Styles['blue-check']} style={{ stroke: isPushChecked ? '#36f' : 'rgb(136, 136, 136)' }}></Bluecheck>
                                </span>
                                <p>앱 푸시</p>
                            </label>
                            <label className={Styles['checkbox-container2']}>
                                <input
                                    type="checkbox"
                                    checked={isSmsChecked}
                                    onChange={(e) => handleCheckChange(e, 'sms')}
                                    style={{ display: 'none' }}
                                />
                                <span>
                                    <Bluecheck className={Styles['blue-check']} style={{ stroke: isSmsChecked ? '#36f' : 'rgb(136, 136, 136)' }}></Bluecheck>
                                </span>
                                <p>문자 메시지</p>
                            </label>
                        </div>

                        <button
                            type="submit"
                            className={`${Styles['join-now-button']} ${isFormValid ? Styles['success'] : ''}`}
                            onClick={() => { }}
                        >
                            가입하기
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;