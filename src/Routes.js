/** @format */

import Faculty from './pages/AdminDashboard/Faculty/Faculty';
import FacultySetting from './pages/AdminDashboard/Faculty/FacultySetting';
import UserDashboard from './pages/AdminDashboard/Users/UserDashboard';
import AdminLogin from './pages/AdminLogin';
import ChangePassword from './pages/ChangePassword';
import ForgotPassword from './pages/ForgotPassword';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NotFound from './pages/NotFound';
import StudentLanding from './pages/StudentDashboard/StudentLanding';
import UploadContribution from './pages/StudentDashboard/UploadContribution';

export const admin = [
  {
    path: '/admin',
    exact: true,
    component: AdminLogin,
  },
];
export const adminDashboardRoute = [
  {
    path: '/admin/dashboard/faculty/setting/:id',
    exact: false,
    component: FacultySetting,
  },
  {
    path: '/admin/dashboard/users',
    exact: false,
    component: UserDashboard,
  },

  {
    path: '/admin/dashboard/faculty',
    exact: false,
    component: Faculty,
  },
];
export const studentDashboardRoute = [
  {
    path: '/student/upload-contribution',
    exact: false,
    component: UploadContribution,
  },
  {
    path: '/student/home',
    exact: true,
    component: StudentLanding,
  },
];

export const client = [
  {
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
    path: '/changepassword',
    exact: false,
    component: ChangePassword,
  },

  {
    path: '/login',
    exact: false,
    component: LoginPage,
  },
  {
    path: '/forget-password',
    exact: false,
    component: ForgotPassword,
  },
  {
    path: '',
    exact: false,
    component: NotFound,
  },
];
