import React, {useState} from 'react'
import {getLoginInfoUserName} from '../../dataManager/localStorageManager'

/**
 * 대시보드
 * @category Dashboard
 */
const Dashboard = () => {
  const [loginInfoUserName] = useState(getLoginInfoUserName)

  return (
    <div>
      대시보드입니다.
      <h4 className='card-title mb-0'>{loginInfoUserName} 님, 너디너리 템플릿에 오신 것을 환영합니다 🎉</h4>
    </div>
  )
}

export default Dashboard
