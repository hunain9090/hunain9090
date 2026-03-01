import AdminLayout from "../Layouts/AdminLayout";
import Dashboard from "../pagesAdmin/Dashboard";
import AddRoom from "../pagesAdmin/AddRoom";
import ShowRoom from "../pagesAdmin/ShowRooms";
import EditRoom from "../pagesAdmin/EditRoom";
import ShowBookings from "../pagesAdmin/ShowBookings";
import ShowContact from "../pagesAdmin/ShowContact";
import ShowStaff from "../pagesAdmin/ShowStaff";
import AdminProtectedRoutes from "../AuthProtecton/AdminProtetedRoutes";
import ShowServiceRequest from "../pagesAdmin/ShowServiceRequest";
import AddStatus from "../pagesAdmin/AddRoomStatus";
import ShowStatus from "../pagesAdmin/ShowRoomStatus";
import AddType from "../pagesAdmin/AddRoomType";
import ShowTypes from "../pagesAdmin/ShowType";
import ShowFeedback from "../pagesAdmin/ShowFeedback";
import ShowUsers from "../pagesAdmin/ShowUsers";

const adminRoutes = {
  path: "/dashboard",
  element: <AdminProtectedRoutes />,   // 🔐 PROTECTION
  children: [
    {
      element: <AdminLayout />,        // layout inside protection
      children: [
        { index: true, element: <Dashboard /> },
        { path: "addroom", element: <AddRoom /> },
        { path: "showroom", element: <ShowRoom /> },
        { path: "editroom/:id", element: <EditRoom /> },
        { path: "showbooking", element: <ShowBookings /> },
        { path: "showcontact", element: <ShowContact /> },
        { path: "showusers", element: <ShowUsers /> },
        { path: "showstaff", element: <ShowStaff /> },
        { path: "showrequest", element: <ShowServiceRequest /> },
        { path: "addstatus", element: <AddStatus /> },
        { path: "showstatus", element: <ShowStatus /> },
        { path: "addtype", element: <AddType/> },
        { path: "showtype", element: <ShowTypes/> },
          { path: "showfeedback", element: <ShowFeedback /> },
      ],
    },
  ],
};

export default adminRoutes;
