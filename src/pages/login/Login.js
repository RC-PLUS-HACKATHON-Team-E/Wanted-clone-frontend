import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {loginAction} from '../../store/actions/login'
import {useDispatch} from 'react-redux'
import styled from 'styled-components'
import {isEmpty} from '../../utils/utility'
import {supportDeviceSize} from '../../components/styled'

/**
 * 로그인
 * @category Login
 */
const LoginPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [name, setName] = useState('')

  // Input 에서 엔터키 누를 경우
  const onKeyPress = event => {
    if (event.key === 'Enter') {
      handleLogin().then()
    }
  }

  // 로그인 버튼 클릭
  const handleLogin = async () => {
    try {
      if (isEmpty(name)) {
        alert('이름을 입력해 주세요.')
        return
      }

      //서버통신 코드 작성

      //redux 넣어주기
      dispatch(loginAction({name: name}))

      navigate(`/`)
    } catch (error) {
      alert('네트워크 통신 실패. 잠시후 다시 시도해주세요.')
    }
  }

  return (
    <LoginRoot>
      <Wrap>
        <div style={{fontSize: '2.5rem', fontWeight: '600', marginBottom: '4rem'}}>로그인</div>
        <div style={{fontSize: '1.8rem', fontWeight: '600', marginBottom: '1rem'}}>이름</div>
        <InputWrap
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder='이름을 입력해주세요.'
          onKeyPress={onKeyPress}
        />
        <LoginButton onClick={handleLogin}>로그인</LoginButton>
      </Wrap>
    </LoginRoot>
  )
}

const LoginRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1080px;
  height: 100vh;
  background-color: green;

  @media all and (max-width: ${supportDeviceSize}px) {
    width: 100vw;
  }
`

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  width: 45rem;
  height: 30rem;
  padding: 3rem;
  border: 0.5rem solid yellow;
  background-color: red;
`

const InputWrap = styled.input`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 4rem;
  padding-left: 1rem;
  margin-bottom: 6rem;
`

const LoginButton = styled.div`
  width: 100%;
  padding: 1rem;
  border-radius: 0.6rem;
  background-color: rgb(59, 105, 246);
  font-size: 1.8rem;
  font-weight: 600;
  color: white;
  text-align: center;
  cursor: pointer;
`

export default LoginPage
