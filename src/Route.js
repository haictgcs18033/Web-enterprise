import Faculty from "./pages/AdminDashboard/Faculty/Faculty";
import UserDashboard from "./pages/AdminDashboard/Users/UserDashboard";
import AdminLogin from "./pages/AdminLogin";
import AdminUser from "./pages/AdminUser";
import ChangePassword from "./pages/ChangePassword";
import ForgotPassword from "./pages/ForgotPassword";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";


export const client = [
    {
        path: '/changepassword',
        component: ChangePassword
    },
    {
        path: '/not',
        component: NotFound
    },
    {
        path: '/login',
        component: LoginPage
    },
    {
        path: '/forget-password',
        component: ForgotPassword
    },
    {
        path: '/',
        component: HomePage
    },
]
export const admin = [
    {
        path: '/admin',
        component: AdminLogin
    },
    {
        path: '/user',
        component: AdminUser
    }
<<<<<<< HEAD

=======
]
export const adminDashboardRoute = [
    {
        path: '/admin/dashboard/users',
        component: UserDashboard
    },
    {
        path: '/admin/dashboard/faculty',
        component: Faculty
    }
>>>>>>> 75579a7af11009077629d67c87826efe95af69a2
]