import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from './components/navbar'; // Navbar 컴포넌트를 import합니다.

const loading = <div>화면을 불러오는 중 입니다.</div>;
// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'));
// Pages
const Page404 = React.lazy(() => import('./pages/page404/Page404'))
const Page500 = React.lazy(() => import('./pages/page500/Page500'))
const Login = React.lazy(() => import('./pages/login/login'));
const PasswordInput = React.lazy(() => import('./pages/login/passwordinput')); // PasswordInput 컴포넌트를 import합니다.
const Signup = React.lazy(() => import('./pages/signup/signup')); // Signup 컴포넌트를 import합니다.
const SkillSelection = React.lazy(() => import('./pages/UserDetails/skillselection')); // SkillSelection 컴포넌트를 import합니다.
const Workplacesetup = React.lazy(() => import('./pages/UserDetails/workplacesetup')); // Workplacesetup 컴포넌트를 import합니다.
const Tagsetup = React.lazy(() => import('./pages/UserDetails/tagsetup')); // Tagsetup 컴포넌트를 import합니다.

const App = () => {

  return (
      <Suspense fallback={loading}>
        <Routes>
          <Route path='/' element={<DefaultLayout />}>
            <Route index element={<Login />} />
          <Route path='/login/email' element={<Login />} />
          <Route path='/login/password' element={<PasswordInput />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/skillselect' element={<SkillSelection  />} />
          <Route path='/workplacesetup' element={<Workplacesetup />} />
          <Route path='/tagsetup' element={<Tagsetup />} />
          <Route exact path='/404' name='Page 404' element={<Page404 />} />
          <Route exact path='/500' name='Page 500' element={<Page500 />} />
          </Route>
        </Routes>
      </Suspense>
  );
};

export default App;
