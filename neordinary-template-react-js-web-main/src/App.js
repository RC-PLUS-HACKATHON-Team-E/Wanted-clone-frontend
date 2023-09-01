import React, {Suspense} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

const loading = <div>화면을 불러오는 중 입니다.</div>

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./pages/login/Login'))
const Page404 = React.lazy(() => import('./pages/page404/Page404'))
const Page500 = React.lazy(() => import('./pages/page500/Page500'))

//컴포넌트
const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={loading}>
        <Routes>
          <Route exact path='/login' name='Login Page' element={<Login />} />
          <Route exact path='/404' name='Page 404' element={<Page404 />} />
          <Route exact path='/500' name='Page 500' element={<Page500 />} />
          <Route exact path='/*' name='Home' element={<DefaultLayout />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
