// import {createBrowserRouter} from "react-router-dom"
import WebLayout from "../Layouts/WebLayout"
import Home from "../PagesWeb/Home"
import About from "../PagesWeb/About"
import SignUp from "../PagesWeb/SignUp";
import Login from "../PagesWeb/Login";
import RoomDetail from "../PagesWeb/RoomDetail";
import MyBookings from "../PagesWeb/MyBookings";
import ViewRooms from "../PagesWeb/ViewRooms";

import Contact from "../PagesWeb/Contact";
import ServiceRequest from "../PagesWeb/ServiceRequest";
import FeedBack from "../PagesWeb/FeedBack";



let webRoutes=
{
path:"/",
element:<WebLayout/>,
children:[
{index:true, element:<Home/>},
{path:"about", element:<About/>},
{path:"signup", element:<SignUp/>},
{path:"login", element:<Login/>},
{path:"roomdetail/:id", element:<RoomDetail/>},
{path:"mybookings/:userId", element:<MyBookings/>},
{path:"viewrooms", element:<ViewRooms/>},
{path:"/feedback/:id", element:<FeedBack/>},
{path:"contact", element:<Contact/>},
{path:"/servicerequest/:id", element:<ServiceRequest/>},




]


}





export default webRoutes;