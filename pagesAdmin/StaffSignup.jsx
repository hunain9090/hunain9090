import { useRef, useState } from "react";
import axios from "axios"


function StaffSignup() {
    const apiUrl = "http://localhost:5000"

    const fileInputRef = useRef(null);

    const [StaffSignup,setStaffSignup]= useState({
        fullname: "",
        email: "",
        password: "",
        phone: "",
        roleinHotel: "",
        shift: "",
        profileimg: ""
    })

      const [alert, setAlert] = useState({
      success: true,
      message: ""
  })

    const handleStaffSignUpInputChange = (e)=>{
        let {name,value} = e.target
        setStaffSignup((prev)=>{
          return{
            ...prev,
            [name]: value
          }
        })
    }
     const handleStaffImageInputChange = (e) => {
    
    let { name, files } = e.target
    
    setStaffSignup((prev) => {
      return {
        ...prev,
        [name]: files[0]
      }
    })
  }
    const handleStaffSignupSubmit = async ()=>{
        try{
      let formData = new FormData();

      formData.append("fullname", StaffSignup.fullname)
      formData.append("email", StaffSignup.email)
      formData.append("password", StaffSignup.password)
      formData.append("phone", StaffSignup.phone)
      formData.append("roleinHotel", StaffSignup.roleinHotel)
      
      formData.append("shift", StaffSignup.shift)
      formData.append("profileimg", StaffSignup.profileimg)

      const res = await axios.post(`${apiUrl}/staff/signup`, formData)

  
       console.log(res);
       
       if(res.data.success){
        setAlert({
            success: true,
            message: "SignUp Successfully"
        })
       }
       else{
       
        
        setAlert({
             success: false,
             message: res.data.message
        })
        }

       setStaffSignup({
        fullname: "",
        email: "",
        password: "",
        phone: "",
        roleinHotel: "",
        salary: "",
        shift: "",
        profileimg: ""
        })
      
     fileInputRef.current.value = "";

        }
        catch(err){
            console.log(err);

             setAlert({
              success: false,
            message: err.response?.data?.message || err.message || "Something went wrong"
          })
            
        }
     
    }
    return ( 
    <>


   {
  alert.message && (
    <div className={`alert ${alert.success ? "alert-success" : "alert-danger"}`} role="alert">
      {alert.message}
    </div>
  )
}



<div className="container my-5">
  <div className="row justify-content-center">
    <div className="col-md-5">
      <div className="card">
        <div className="card-header text-center">
          <h4>Staff Sign Up</h4>
        </div>

        <div className="card-body">
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="fullname"
              value={StaffSignup.fullname}
              onChange={handleStaffSignUpInputChange}
              className="form-control"
              placeholder="Enter full name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              value={StaffSignup.email}
              onChange={handleStaffSignUpInputChange}
              className="form-control"
              placeholder="Enter email"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              value={StaffSignup.password}
              onChange={handleStaffSignUpInputChange}
              className="form-control"
              placeholder="Enter password"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input
              type="number"
              name="phone"
              value={StaffSignup.phone}
              onChange={handleStaffSignUpInputChange}
              className="form-control"
              placeholder="Enter phone number"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Role in Hotel</label>
            <select
              name="roleinHotel"
              value={StaffSignup.roleinHotel}
              onChange={handleStaffSignUpInputChange}
              className="form-control"
            >
              <option value="">Select Role</option>
              <option value="receptionist">Receptionist</option>
              <option value="manager">Manager</option>
              <option value="housekeeping">Housekeeping</option>
            </select>
          </div>

        

          <div className="mb-3">
            <label className="form-label">Shift</label>
            <select
              name="shift"
              value={StaffSignup.shift}
              onChange={handleStaffSignUpInputChange}
              className="form-control"
            >
              <option value="">Select Shift</option>
              <option value="morning">Morning</option>
              <option value="evening">Evening</option>
              <option value="night">Night</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Image</label>
            <input
              type="file"
              ref={fileInputRef}
              name="profileimg"
              onChange={handleStaffImageInputChange}
              className="form-control"
            />
          </div>

          <div className="d-grid">
            <button
              type="button"
              className="theme-btn btn-style fill w-100"
              onClick={handleStaffSignupSubmit}
            >
              <span>Sign Up</span>
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

export default StaffSignup;