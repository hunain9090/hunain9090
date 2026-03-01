import axios from "axios";
import { useEffect, useState } from "react";

function ShowContact() {

let apiUrl = "http://localhost:5000";

let [Contact,setContact]=useState([])
let [alert,setAlert]=useState({
  status:true,
  message:""
})

let fetchContact=async()=>{
// try{
  let res=await axios.get(`${apiUrl}/contact`)

  console.log(res)
  if(res.data.success){

setContact(res.data.contact)

}




}


let deleteContact=async(delId)=>{

try{
let res=await axios.delete(`${apiUrl}/contact/${delId}`)

if(res.data.success){
  setAlert({
    status:res.data.success,
    message:"Contact Deleted SuccessFully"
  })

  setContact(prev=>prev.filter(item=>item._id!=delId))

}


}
catch(err){
setAlert(
  {
    status:false,
    message:err.response.data.message
  }
)
}




}



useEffect(()=>{
  fetchContact()

  
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
            <h4 className="card-title">View Contact</h4>
            <p className="card-description">
               <code></code>
            </p>

{
Contact.length!=0?
   <div className="table-responsive pt-3">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>City</th>
                    <th>Message</th>
                  </tr>
                </thead>
                <tbody>
                 {
                  Contact.map((contact)=>{
                    return(
 <tr>
                    
                    <td>{contact.name} </td>
                    <td>{contact.email} </td>
                    <td>{contact.phone} </td>
                    <td>{contact.city} </td>
                    <td>{contact.message} </td>
                 
                  
                    <td><button className="btn btn-danger" onClick={()=>{
                      deleteContact(contact._id)
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

export default ShowContact;