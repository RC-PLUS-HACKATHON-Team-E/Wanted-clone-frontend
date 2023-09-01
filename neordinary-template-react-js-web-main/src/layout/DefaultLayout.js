import React from 'react'
import AppHeader from '../components/AppHeader'
import AppContent from '../components/AppContent'
import AppFooter from '../components/AppFooter'
import styled from 'styled-components'
import {supportDeviceSize} from '../components/styled'

/**
 * 기본 레이아웃
 * @category Layout
 */
const DefaultLayout = () => {
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
    <Root>
      <AppHeader />
      <AppContent />
      <AppFooter />
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 1080px;
  background-color: green;

  @media all and (max-width: ${supportDeviceSize}px) {
    width: 100vw;
  }
`

export default DefaultLayout
