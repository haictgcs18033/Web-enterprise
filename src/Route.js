import ForgotPassword from "./pages/ForgotPassword";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";


export const client = [

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
    {
        path: '/not',
        component: NotFound
    }

]