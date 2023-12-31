import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as Search } from '../assets/search.svg';
import { ReactComponent as More } from '../assets/more.svg';
import { ReactComponent as Notibtn } from '../assets/notibtn.svg';
import { Routes, Route, Link, useNavigate, useLocation, Outlet, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, updateuser } from '../store/actions/login';
import styles from './AppHeader.module.css';

function AppHeader(props) {
  let location = useLocation();
  let auth = useSelector((state) => state.auth);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const LogOut = () => {
    axios.get(process.env.REACT_APP_SERVER_BASE_URL+'/users/sign-out')
        .then((response) => {
            console.log('로그아웃 성공:', response);
            dispatch(logout());
        }).catch((error) => {
            console.error('로그아웃 실패:', error);
        });
}

  return (
    <header className={styles['App-header']}>
      <div className={styles['mainbar']}>
        <div className={styles['top_logo']}>
          <button type="button" className={styles['MainBar_hamberger']}>
            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ficon-menu.png&amp;w=17&amp;q=75" alt="hamberger menu" />
          </button>
          <div>
            <Logo onClick={() => navigate('/')} />
          </div>
        </div>
        <div className={styles['mainmenu']}>
          <ul className={styles['navbar-list']}>
            <li className={`${styles['navbar-item']} ${location.pathname === '/employment' ? styles['active'] : ''}`} onClick={() => navigate('/employment')}>채용</li>
            <li className={`${styles['navbar-item']} ${location.pathname === '/event' ? styles['active'] : ''}`} onClick={() => navigate('/event')}>이벤트</li>
            <li className={`${styles['navbar-item']} ${location.pathname === '/resume' ? styles['active'] : ''}`} onClick={() => navigate('/resume')}>이력서</li>
            <li className={`${styles['navbar-item']} ${location.pathname === '/social' ? styles['active'] : ''}`} onClick={() => navigate('/social')}>소셜</li>
            <li className={`${styles['navbar-item']} ${location.pathname === '/freelancer' ? styles['active'] : ''}`} onClick={() => navigate('/freelancer')}>프리랜서</li>
            <li className={`${styles['navbar-item']} ${location.pathname === '/ai-prediction' ? styles['active'] : ''}`} onClick={() => navigate('/ai-prediction')}>AI 합격예측</li>
          </ul>
        </div>
        <div className={styles['aside']}>
          <ul className={styles['aside-list']}>
            <li className={styles['aside-item']}>
              <button type="button" className={styles['search-button']}>
                <Search onClick={() => navigate('/search')} />
              </button>
            </li>
            {auth.isLoggedIn &&
              <li className={styles['aside-item']}>
                <button type="button" className={styles['notiButton']}>
                  <Notibtn width="18" height="18" className={styles['notibtn']}></Notibtn>
                </button>
              </li>}
            {auth.isLoggedIn ?
              <li className={styles['aside-item']}>
                <button type="button" className={styles['user-profileButton']} onClick={LogOut}>
                  <div className={styles['avatarBorder']}>
                    <div className={styles['avatarImage']}></div>
                  </div>
                </button>
              </li>
              : <li className={styles['aside-item']}>
                <button type="button" className={styles['login-button']} onClick={() => navigate('/login/email')}>
                  회원가입/로그인
                </button>
              </li>}
            <li className={styles['aside-item4']}>
              {/* <span className={styles['vertical-line']}>ㅣ</span> */}
            </li>
            <li className={styles['aside-item']}>
              <button type="button" className={styles['company-service-button']} onClick={() => navigate('/company-service')}>
                기업서비스
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles['mainbar2-1']}>
        <div className={styles['top_logo']}>
          <button type="button" className={styles['MainBar_hamberger']}>
            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ficon-menu.png&amp;w=17&amp;q=75" alt="hamberger menu" />
          </button>
          <div>
            <Logo onClick={() => navigate('/')} />
          </div>
        </div>
        {auth.isLoggedIn ?
          <button type="button" className={styles['user-profileButton']} onClick={LogOut}>
            <div className={styles['avatarBorder']}>
              <div className={styles['avatarImage']}></div>
            </div>
          </button>
          : <div className={styles['login-button2-container']}>
            <button type="button" className={styles['login-button2']} onClick={() => navigate('/login/email')}>
              회원가입하기
            </button>
          </div>}
      </div>
      <div className={styles['mainbar2-2']}>
        <div className={styles['mainmenu']}>
          <ul className={styles['navbar-list']}>
            <li className={`${styles['navbar-item']} ${location.pathname === '/employment' ? styles['active'] : ''}`} onClick={() => navigate('/employment')}>채용</li>
            <li className={`${styles['navbar-item']} ${location.pathname === '/event' ? styles['active'] : ''}`} onClick={() => navigate('/event')}>이벤트</li>
            <li className={`${styles['navbar-item']} ${location.pathname === '/resume' ? styles['active'] : ''}`} onClick={() => navigate('/resume')}>이력서</li>
            <li className={`${styles['navbar-item']} ${location.pathname === '/social' ? styles['active'] : ''}`} onClick={() => navigate('/social')}>소셜</li>
            <li className={`${styles['navbar-item']} ${location.pathname === '/freelancer' ? styles['active'] : ''}`} onClick={() => navigate('/freelancer')}>프리랜서</li>
            <li className={`${styles['navbar-item']} ${location.pathname === '/ai-prediction' ? styles['active'] : ''}`} onClick={() => navigate('/ai-prediction')}>AI 합격예측</li>
          </ul>
        </div>
        <div>
          <button type="button" className={styles['search-button']}>
            <Search onClick={() => navigate('/search')} />
          </button>
          <button type="button" className={styles['more-button']}>
            <More />
          </button>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;