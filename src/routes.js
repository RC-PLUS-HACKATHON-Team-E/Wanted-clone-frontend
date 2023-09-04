import React from 'react'
import { Route } from "react-router-dom";

const Home = React.lazy(() => import('./pages/home/Home'))
const Dashboard = React.lazy(() => import('./pages/dashboard/Dashboard'))
const Page404 = React.lazy(() => import('./pages/page404/Page404'))
const Page500 = React.lazy(() => import('./pages/page500/Page500'))
const Login = React.lazy(() => import('./pages/login/login'));
const PasswordInput = React.lazy(() => import('./pages/login/passwordinput'));
const Signup = React.lazy(() => import('./pages/signup/signup'));
const SkillSelection = React.lazy(() => import('./pages/UserDetails/skillselection'));
const Workplacesetup = React.lazy(() => import('./pages/UserDetails/workplacesetup'));
const Tagsetup = React.lazy(() => import('./pages/UserDetails/tagsetup'));
const RecruitInfo = React.lazy(() => import('./pages/RecruitInfo/RecruitInfo'));

const routes = [
  {path: '/', name: 'Login', element: Login},
  {path: '/dashboard', name: 'Dashboard', element: Dashboard},
  {path: '/404', name: '404', element: Page404},
  {path: '/500', name: '500', element: Page500},
  {path: '/login/email', name: 'Login', element: Login},
  {path: '/login/password', name: 'PasswordInput', element: PasswordInput},
  {path: '/signup', name: 'Signup', element: Signup},
  {path: '/skillselect', name: 'SkillSelection', element: SkillSelection},
  {path: '/workplacesetup', name: 'Workplacesetup', element: Workplacesetup},
  {path: '/tagsetup', name: 'Tagsetup', element: Tagsetup},
  {path: '/recruitinfo', name: 'RecruitInfo', element: RecruitInfo}
]
export default routes
