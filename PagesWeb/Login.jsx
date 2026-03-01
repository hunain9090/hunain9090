import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";



function Login() {
  let apiUrl = "http://localhost:5000";
let navigate=useNavigate();
  // =========================By This State we have pass values to input later this state will be update when on change function of input will be called============================
  let [logInBody, setLogInBody] = useState({
    email: "",
    password: "",
  });

  // This state is for alert

  let [alert, setAlert] = useState({
    status: true,
    message: "",
  });

  // this is on change function called on input change
  const handleInputChange = (e) => {
    let { name, value } = e.target;

    setLogInBody((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  // =============calling Api for submitting signUp data==========================

  const handleLoginSubmit = async () => {
    try {
      let res = await axios.post(`${apiUrl}/login`, logInBody);
      if (res.data.success) {
        
        localStorage.setItem("token",res.data.jwtToken)

let decode=jwtDecode(res.data.jwtToken)
localStorage.setItem("userId",decode._id)
        
        setAlert({
          status: res.data.success,
          message: res.data.message,
        });

setTimeout(()=>{
navigate("/")


},[])

      }

      // ========================Else Block is liye use nahi kia kio k jab data.success false horaha hai toh res.status mai hum nay 200 k bajai err k code pass kiye hai or error direct catch mai aata hai
    } catch (err) {
      setAlert({
        status: false,
        message: err.response.data.message,
      });
    }
  };

  return (
    <>
      {/* contact area */}
      <div className="rts__section section__padding">
        <div className="container my-5">
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
          <div className="row g-30 align-items-center">
            <div className="col-lg-2"></div>

            <div className="col-lg-8">
              <div className="rts__contact">
                <span className="h4 d-block mb-30 text-center">
                  Login To Your Account
                </span>
                <div className="rts__contact__form" id="contact-form">
                  <div className="form-input">
                    <label htmlFor="email">Your Email</label>
                    <div className="pr">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        value={logInBody.email}
                        onChange={handleInputChange}
                      />
                      <i className="flaticon-envelope" />
                    </div>
                  </div>
                  <div className="form-input">
                    <label htmlFor="password">Your Password</label>
                    <div className="pr">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Your Password"
                        value={logInBody.password}
                        onChange={handleInputChange}
                      />
                      <i className="bi bi-lock-fill"></i>
                    </div>
                  </div>

                  <button
                    className="theme-btn btn-style fill w-100"
                    onClick={handleLoginSubmit}
                  >
                    <span>Login</span>
      
                  </button>
<h6 className="text-center my-3">Dont Have An Account ? <Link to="/signup" className="text-primary">SignUp</Link></h6>

<hr />

                </div>
                <div id="form-messages" className="mt-20" />
              </div>
            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>
      </div>
      {/* contact area end */}
    </>
  );
}

export default Login;
