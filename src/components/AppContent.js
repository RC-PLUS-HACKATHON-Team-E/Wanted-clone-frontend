import React, {Suspense} from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import routes from '../routes'

const loading = <div>화면을 불러오는 중 입니다.</div>

const AppContent = () => {
  return (
    <div>
      <Suspense fallback={loading}>
        <Routes>
          {routes.map((route, idx) => {
            return (
              route.element && (
                <Route key={idx} path={route.path} exact={route.exact}  name={route.name} element={<route.element />} />
              )
            )
          })}
          <Route path='/' element={<Navigate to='home' replace />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default React.memo(AppContent)
