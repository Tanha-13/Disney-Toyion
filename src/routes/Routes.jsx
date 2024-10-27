import {createBrowserRouter} from 'react-router-dom';
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import AllToys from '../pages/AllToys/AllToys';
import Login from '../pages/Login/Login/Login';
import Register from '../pages/Login/Register/Register';
import Blog from '../pages/Blog/Blog';
import ErrorPage from '../pages/ErrorPage/ErrorPage';


// const router = createBrowserRouter([
//     createRoutesFromElements(
//         <Route path='/' element={<MainLayout />}>
//             <Route path='' element={<Home />} />
//         </Route>
//     )
// ]);

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/all',
                element:<AllToys></AllToys>,
              },
              {
                path:'/add',
                // element:<PrivateRoute><AddToys></AddToys></PrivateRoute>
              },
              {
                path:'/myToys',
                // element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
              },
              {
                path: '/login',
                element: <Login></Login>
              },
              {
                path: '/register',
                element: <Register></Register>
              },
              {
                path:'/blog',
                element:<Blog></Blog>
              }
        ]
    }
])
export default router;