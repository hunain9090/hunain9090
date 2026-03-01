import StaffSignup from "../pagesAdmin/StaffSignup";
import Stafflogin from "../pagesAdmin/StaffLogin";

const staffRoutes = [
  {
    path: "/staff-login",
    element: <Stafflogin />,
  },
  {
    path: "/staff-signup",
    element: <StaffSignup />,
  },
];

export default staffRoutes;
