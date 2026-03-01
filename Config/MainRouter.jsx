import {createBrowserRouter} from "react-router-dom"
import webRoutes from "./WebRouter";
import adminRoutes from "./adminRouter";
import staffRoutes from "./StaffRouter";


let WebAndAdminRoutes=createBrowserRouter(
[
webRoutes,
adminRoutes,
...staffRoutes
]

)


export default WebAndAdminRoutes;