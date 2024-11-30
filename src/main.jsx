import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';
import Coffees from './components/Coffees.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import Users from './components/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <App />,
    children:[
      {
        path: "/",
        element: <Coffees/>,
        loader: ()=> fetch("https://coffee-store-server-tau-amber.vercel.app/coffee")
      },
      {
        path: "/addCoffee",
        element: <AddCoffee/>
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee/>,
        loader: ({params}) => fetch(`https://coffee-store-server-tau-amber.vercel.app/coffee/${params.id}`)
      },
      {
        path:"signin",
        element: <SignIn/>
      },
      {
        path: "signup",
        element: <SignUp/>
      },
      {
        path: "/users",
        element: <Users/>,
        loader: ()=> fetch("https://coffee-store-server-tau-amber.vercel.app/users")
      }
    ]
    
  },
  
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
   <RouterProvider router={router}/>
   </AuthProvider>
  </StrictMode>,
)
