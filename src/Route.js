import Faculty from "./pages/AdminDashboard/Faculty/Faculty";
import FacultySetting from "./pages/AdminDashboard/Faculty/FacultySetting";
import UserDashboard from "./pages/AdminDashboard/Users/UserDashboard";
import AdminLogin from "./pages/AdminLogin";
import ChangePassword from "./pages/ChangePassword";
import ForgotPassword from "./pages/ForgotPassword";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import StudentLanding from "./pages/StudentDashboard/StudentLanding";
import UploadContribution from "./pages/StudentDashboard/UploadContribution";


export const client = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/changepassword',
        component: ChangePassword
    },
  
    {
        path: '/login',
        component: LoginPage
    },
    {
        path: '/forget-password',
        component: ForgotPassword
    },
]
export const admin = [
    {
        path: '/admin',
        component: AdminLogin
    }
]
export const adminDashboardRoute = [
    {
        path:'/admin/dashboard/faculty/setting/:id',
        component:FacultySetting
     },
    {
        path: '/admin/dashboard/users',
        component: UserDashboard
    },
  
    {
        path: '/admin/dashboard/faculty',
        component: Faculty
    },
   
]
export const studentDashboardRoute=[
    {
      path:'/student/upload-contribution',
      component:UploadContribution
    },
    {
        path:'/student/home',
        component:StudentLanding
    }
]