import axios from "axios";
import { useEffect, useState } from "react";

function ShowUsers() {

let apiUrl = "http://localhost:5000";

let [Users,setUsers]=useState([])
let [alert,setAlert]=useState({
  status:true,
  message:""
})

let fetchUsers=async()=>{
try{
  let res=await axios.get(`${apiUrl}/showusers`)

  console.log(res)
  if(res.data.success){

setUsers(res.data.allUsers)

}

}catch(err){
  console.log(err.response.data.message)
}


}



const deleteUser=async(delId)=>{
try{
  let res=await axios.delete(`${apiUrl}/deleteuser/${delId}`)

  if(res.data.success){
    setAlert({
      status:true,
      message:"User Deleted Successfully"
    })


    setTimeout(() => {
      fetchUsers()
      setAlert({
      status:true,
      message:""
    })
      
    }, 2000);




  }

}catch(err){
  setAlert({
      status:false,
      message:err.response.data.message
    })
}


}




useEffect(()=>{
  fetchUsers()

  
},[])


    return (
<>

    {
      alert.message && (<div className={`alert ${alert.status? "alert-success":"alert-danger"}`} role="alert">
  {alert.message}
</div>)
    }
  <div className="content-wrapper">
    <div className="row">
      
      <div className="col-lg-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">View Users</h4>
            <p className="card-description">
               <code></code>
            </p>

{
Users.length!=0?
   <div className="table-responsive pt-3">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    
                    <th>Name</th>
                    <th>Email</th>
                    <th>Image</th>
                    
                  </tr>
                </thead>
                <tbody>
                 {
                  Users.map((Users)=>{
                    return(
 <tr>
                    
                    <td>{Users.userName} </td>
                    <td>{Users.email} </td>
                    
                    <td><img src={`${apiUrl}/uploads/${Users.image}`} alt="" /> </td>
                 
                 
                  
                    <td><button className="btn btn-danger" onClick={()=>{
                      deleteUser(Users._id)
                    }} >X</button></td>

                  </tr>

                    )
                  })



                 }
                 
                </tbody>
              </table>
            </div>
            :
            <h2>No Contacts Available</h2>

}        
          </div>
        </div>
      </div>
     
    </div>
  </div>
  {/* content-wrapper ends */}
</>


      );
}

export default ShowUsers;