/** @format */

import ContributionDetail from './Components/ContributionDetail/ContributionDetail';
// import ContributionDetailIframe from './Components/ContributionDetailIframe/ContributionDetailIframe';
import UploadedTable from './Components/UploadedTable/UploadedTable';
import Faculty from './pages/AdminDashboard/Faculty/Faculty';
import FacultySetting from './pages/AdminDashboard/Faculty/FacultySetting';
import UserDashboard from './pages/AdminDashboard/Users/UserDashboard';
import AdminLogin from './pages/AdminLogin';
import ChangePassword from './pages/ChangePassword';

import CoordinatorComment from './pages/CoordinatorDashboard/CoordinatorComment';
import CoordinatorLanding from './pages/CoordinatorDashboard/CoordinatorLanding';
import ForgotPassword from './pages/ForgotPassword';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import FacultyContribution from './pages/ManagerDashboard/FacultyContribution';
import ManagerLanding from './pages/ManagerDashboard/ManagerLanding';
import NotFound from './pages/NotFound';
import ResetToken from './pages/ResetToken';
import ContributionSubmit from './pages/StudentDashboard/ContributionSubmit';
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
export const managerDashboardRoute = [
    {
        path: '/manager/faculty/contribution/:idFaculty',
        exact: false,
        component: FacultyContribution
    },
    {
        path: '/manager/changepassword',
        exact: false,
        component: ChangePassword,
    },
    {
        path: '/manager/home',
        exact: true,
        component: ManagerLanding
    }
]
export const coordinatorDashboardRoute = [
    {
        path: '/coordinator/comment/:idContribution',
        exact: false,
        component: CoordinatorComment
    },
    {
        path: '/coordinator/changepassword',
        exact: false,
        component: ChangePassword,
    },
    {
        path: '/coordinator/home',
        exact: false,
        component: CoordinatorLanding
    },
]
export const studentDashboardRoute = [
    {
        path: '/student/comment/:idContribution',
        exact: false,
        component: CoordinatorComment
    },
    {
        path: '/student/contribution-submit',
        exact: false,
        component: ContributionSubmit
    },
    {
        path: '/student/upload-contribution',
        exact: false,
        component: UploadContribution,
    },
    {
        path: '/student/uploaded-contribution/:id',
        exact: false,
        component: UploadContribution,
    },
    {
        path: '/student/changepassword',
        exact: false,
        component: ChangePassword,
    },
    {
        path: '/student/uploaded-table',
        exact: false,
        component: UploadedTable,
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
        path: '/reset-password/:resetToken',
        exact: false,
        component: ResetToken,
    },
    {
        path: '/contribution-detail',
        exact: false,
        component: ContributionDetail,
    },
    // {
    //     path: '/contribution-detail/detail',
    //     exact: false,
    //     component: ContributionDetailIframe,
    // },
    {
        path: '',
        exact: false,
        component: NotFound,
    },
];
