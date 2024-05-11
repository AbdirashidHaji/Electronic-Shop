import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Forgotpasswrd from  "../pages/ForgotPassowrd"
import SignUp from "../pages/SignUp"
const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
           {
                path : "",
                element : <Home/>
            },
            {
                path : "login",
                element : <Login/>
            },
            {
                path : "forgot-password",
                element : <Forgotpasswrd/>
            },
            {
                path : "sign-up",
                element : <SignUp/>
            }
        ]
    }
])


export default router