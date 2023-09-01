import React from 'react'
import {useSelector} from 'react-redux'
import styled from 'styled-components'

/**
 * 홈
 * @category Home
 */
const HomePage = () => {
  // Redux 값 불러오기
  const {user} = useSelector(state => state.LoginReducer)

  return (
    <Home>
      <Wrap>
        <h4 style={{color: 'white'}}>항상 {user.name}님을 응원합니다 !</h4>
      </Wrap>
      <hr />
      <Wrap>
        <h4 style={{color: 'white'}}>실제 개발 할 때는 인라인 스타일 보다는 styled-components 를 사용해주세요.</h4>
      </Wrap>
    </Home>
  )
}

const Home = styled.div`
  width: 100%
  display: flex;
  flex-direction: column;
  background-color: blue;
  padding: 1rem;
`

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  background-color: green;
  margin-left: 5rem;
  margin-right: 5rem;
`

export default HomePage
