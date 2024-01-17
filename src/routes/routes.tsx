import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import AdminDashboard from "../pages/admin/AdminDashboard";
import Login from "../pages/login/Login";

const router = createBrowserRouter([
{
    path: '/',
    element: <App />,
    children: [
        {
            path: 'about',
            element: <About />
        },
        {
            path: 'contact',
            element: <Contact />
        }
    ]
},
{
    path: '/admin',
    element: <App />,
    children: [
        {
            index:true,
            element: <AdminDashboard />
        }
    ]
},
{
    path: '/login',
    element: <Login />
}
])

export default router