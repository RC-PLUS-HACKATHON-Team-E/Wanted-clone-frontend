import React from 'react'
import AppHeader from '../components/AppHeader'
import AppContent from '../components/AppContent'
import AppFooter from '../components/AppFooter'
import {supportDeviceSize} from '../components/styled'
import Styles from './DefaultLayout.module.css';
import Navbar from '../components/navbar'
import {useNavigate, useLocation} from 'react-router-dom';;

/**
 * 기본 레이아웃
 * @category Layout
 */
const DefaultLayout = () => {
  let navigate = useNavigate();
  let location = useLocation();
  /*const navigate = useNavigate()

  // Redux 값 불러오기
  const {user} = useSelector(state => state.LoginReducer)

  // 페이지 첫 로딩시 로직
  useEffect(() => {
    // 벨리데이션
    if (!user.name) {
      alert('로그인을 해주세요')
      navigate('/login')
    }
  }, [])*/

  return (
    <div className="DefaultLayout">
      {location.pathname === "/login/email"
        || location.pathname === "/login/password"
        || location.pathname === "/signup"
        || location.pathname === "/skillselect"
        || location.pathname === "/workplacesetup"
        || location.pathname === "/tagsetup" ? null : <Navbar navigate={navigate}></Navbar>}
    </div>
  )
}


export default DefaultLayout
