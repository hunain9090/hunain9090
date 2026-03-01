import {RouterProvider} from "react-router-dom"
import WebAndAdminRoutes from "./Config/MainRouter";
import SignUpModel from "./Components/signUpModel";


function App() {
  return (  

<>

<RouterProvider router={WebAndAdminRoutes}/>
<SignUpModel/>

</>

  );
}

export default App;