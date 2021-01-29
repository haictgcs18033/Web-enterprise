import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";


 export const client=[
    
    {
       path: '/login',
       exact: false,
       component:LoginPage
   },
   {
    path:'',
    exact:true,
    component:HomePage
  },
  
]