// import logo from './logo.svg';
import Header from './components/Header';
import Body from './components/Body';
import './App.css'; 
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import {createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom'

function App() {
  return (
    <>
    <Header/>
    <Outlet/>
   
    </>
  );
}

  export const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact showContact ={true} onClick={()=>console.log("clicked")}/>
      },
      {
        path:"/restaurants/:id",
        element:<RestaurantMenu/>
      },
    ],
    errorElement:<Error/>
  },
  
])




export default <RouterProvider router={appRouter}/>
