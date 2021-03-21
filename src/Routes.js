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
    component: AdminLogin,
  },
];
export const adminDashboardRoute = [
  {
    path: '/admin/dashboard/faculty/setting/:id',
    component: FacultySetting,
  },
  {
    path: '/admin/dashboard/users',
    component: UserDashboard,
  },

  {
    path: '/admin/dashboard/faculty',
    component: Faculty,
  },
];
export const studentDashboardRoute = [
  {
    path: '/student/upload-contribution',
    component: UploadContribution,
  },
  {
    path: '/student/home',
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
