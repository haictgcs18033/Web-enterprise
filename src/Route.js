import ForgotPassword from "./pages/ForgotPassword";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";


export const client = [
  {
    path: '/login',
    component: LoginPage
  },
  {
    path: '/forget-password',
    component: ForgotPassword
  },
  {
    path: '',
    component: HomePage
  },

]