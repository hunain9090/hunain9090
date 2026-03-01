import axios from "axios";
import { useEffect, useState } from "react";

function ShowStaff() {
   
        const [staff,setStaff] = useState([])

        const [Alert,setAlert] = useState({
          success: true,
          message: ""
        })
        const apiUrl = "http://localhost:5000";

        const fetchStaff = async () =>{
            try{
        const res = await axios.get(`${apiUrl}/staff`);

           console.log(res);
           
         setStaff(res.data.staff)
            }
            catch(err){
                console.log(err);
                setAlert({
                    success: false,
                    message: "Fail to fetch"
                })        
            }
    }
    useEffect(()=>{
        fetchStaff()
    },[])

      // Approve staff
  const handleApprove = async (id) => {
    try {
      await axios.put(`${apiUrl}/staff/approve/${id}`);
      setAlert({ 
        success: true,
         message: "Staff approved!" });

      fetchStaff();
    } catch (err) {
      console.log(err);
      setAlert({ 
    success: false, 
    message: "Failed to approve staff" });
    }
  };

  // Reject staff
  const handleReject = async (id) => {
    try {
      await axios.put(`${apiUrl}/staff/reject/${id}`);
      setAlert({ success: true, message: "Staff rejected!" });
      fetchStaff();
    } catch (err) {
      console.log(err);
      setAlert({ success: false, message: "Failed to reject staff" });
    }
  };
    return ( 
    <>
    <div className="container">
  <div className="row">
    <div className="col-md-12">
      <h3 className="my-5 text-center">Staff Detail</h3>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone </th>
      <th scope="col">Role </th>
      
      <th scope="col">Shift</th>
      <th scope="col">Image</th>
      <th scope="col">Status</th>
      <th scope="col-2">Action</th>
    </tr>
  </thead>
  <tbody>
   {
          staff.map((staff,index)=>{
      return(
          <tr key = {staff._id}> 
            
      <th scope="row">{index + 1}</th>
      <td>{staff.fullname}</td>
      <td>{staff.email}</td>
      <td>{staff.phone}</td>
      <td>{staff.roleinHotel}</td>
      
      <td>{staff.shift}</td>
      <td> 
        <img src={`${apiUrl}/uploads/${staff.profileimg}`} alt="staff" width="60" />
        </td>
          <td>
                      {staff.status === "pending" && (
                        <span className="badge bg-warning">Pending</span>
                      )}
                      {staff.status === "approved" && (
                        <span className="badge bg-success">Approved</span>
                      )}
                      {staff.status === "rejected" && (
                        <span className="badge bg-danger">Rejected</span>
                      )}
                    </td>
                    <td>
                      
                        <>
                          <button
                            className="btn btn-success btn-sm me-2"
                            onClick={() => handleApprove(staff._id)}>Approve</button>
                          <button 
                          className="btn btn-danger btn-sm" 
                          onClick={() => handleReject(staff._id)}>Reject</button>
                        </>
                      
                    </td>
    </tr>
      )
  
            
        })
    }
    
  </tbody>
</table>

    </div>
  </div>
</div>
    </>
     );
}

export default ShowStaff;