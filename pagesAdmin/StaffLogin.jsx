import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";

function Stafflogin() {
      let apiUrl = "http://localhost:5000";
      const navigate = useNavigate();

  let [stafflogin, setStaffLogin] = useState({
    email: "",
    password: "",
  });

  let [alert, setAlert] = useState({
    status: true,
    message: "",
  });


  const handleInputChange = (e) => {
    let { name, value } = e.target;

    setStaffLogin((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };



  const handleLoginSubmit = async () => {
    try {
      let res = await axios.post(`${apiUrl}/staff/login`,stafflogin);
      if (res.data.success) {
        
        localStorage.setItem("adminToken",res.data.token)
        console.log(res.data.token)
        let decode=jwtDecode(res.data.token)

        
        console.log(decode)

localStorage.setItem("role",decode.role)

        setAlert({
          status: res.data.success,
          message: res.data.message,
        }); 
        navigate("/dashboard/");
      }

    } catch (err) {
      setAlert({
        status: false,
        message: err.response.data.message,
      });
    }
  };
    return (
        
     <>
     <div className="container mt-5">
  <div className="row justify-content-center">
     {alert.message && (
            <div
              className={`alert ${
                alert.status ? "alert-success" : "alert-danger"
              }`}
              role="alert"
            >
              {alert.message}
            </div>
          )}
    <div className="col-md-5">
      <div className="card">
        <div className="card-header text-center">
          <h4>Staff Login</h4>
        </div>
        <div className="card-body">
 
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                name="email"
                value={stafflogin.email}
                onChange={handleInputChange}
                
              />
            </div>
       
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                name="password"
                value={stafflogin.password}
                onChange={handleInputChange}
             
              />
            </div>
          
            <div className="d-grid">
               <button
                    className="theme-btn btn-style fill w-100"
                    onClick={handleLoginSubmit}
                  >
                    <span>Login</span>
      
                  </button>
            </div>
       
        </div>
      </div>
    </div>
  </div>
</div>
    </> 
    );
}

export default Stafflogin

