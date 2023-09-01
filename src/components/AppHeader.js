import React from 'react'
import styled from 'styled-components'
import {Link, useNavigate} from 'react-router-dom'
import packageJson from '../../package.json'
import {ReactComponent as NeordinaryLogo} from '../assets/neordinary-logo.svg'

const AppHeader = () => {
  const navigate = useNavigate()

  // const dispatch = useDispatch()
  // const sidebarShow = useSelector((state) => state.sidebarShow)
  // const [visible, setVisible] = useState(false)

  return (
    <Header>
      <Wrap>
        <NeordinaryLogo width='30rem' />
        <HeaderText>
          {process.env.REACT_APP_ENV !== 'production' ? (
            <>
              REACT_APP_ENV : ${process.env.REACT_APP_ENV}
              <br />
              REACT_APP_API : ${process.env.REACT_APP_API}
              <br />
              프로젝트 : ${packageJson.name}
              <br />
              설명 : ${packageJson.description}
              <br />
              버전 : ${packageJson.version}
            </>
          ) : (
            ''
          )}
        </HeaderText>
      </Wrap>
      <Wrap>
        <Link to='/login'>
          <Button>로그아웃</Button>
        </Link>
        <Button
          onClick={() => {
            // replace true 는 뒤로가기시 이전 페이지로 안가짐
            navigate('/dashboard', {replace: true})
          }}
        >
          대시보드로 화면 전환
        </Button>
        <Button
          onClick={() => {
            // replace false (혹은 생략) 는 뒤로가기시 이전 페이지 가짐
            navigate('/')
          }}
        >
          홈
        </Button>
      </Wrap>
    </Header>
  )
}

const Header = styled.div`
  width: 100%;
  height: 11rem;
  background-color: red;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 3px 16px 0 rgba(0, 0, 0, 0.06);
`

const Wrap = styled.div`
  display: flex;
  align-items: center;
  background-color: green;
  margin-left: 5rem;
  margin-right: 5rem;
`

const HeaderText = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  font-family: 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
`

const Button = styled.div`
  padding: 1rem;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  border-radius: 0.6rem;
  background-color: blue;
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  text-align: center;
  cursor: pointer;
`

export default AppHeader
