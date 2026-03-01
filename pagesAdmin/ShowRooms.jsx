import axios from "axios";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"

function ShowRoom() {

let apiUrl = "http://localhost:5000";

let [roomList,setRoomList]=useState([])
let [alert,setAlert]=useState({
  status:true,
  message:""
})
let navigate=useNavigate()

let fetchRooms=async()=>{
// try{
  let res=await axios.get(`${apiUrl}/rooms/showrooms`)

  console.log(res)
  if(res.data.success){

setRoomList(res.data.roomsList)

}



// }


}


const navigateToEditRoom=(navigateId)=>{

navigate(`/dashboard/editroom/${navigateId}`)


}





let deleteRoom=async(delId)=>{

try{
let res=await axios.delete(`${apiUrl}/rooms/deleteroom/${delId}`)

if(res.data.success){
  setAlert({
    status:res.data.success,
    message:"Room Deleted SuccessFully"
  })

  setRoomList(prev=>prev.filter(item=>item._id!=delId))



setTimeout(()=>{
  // navigate("/dashboard/showroom")
  // fetchRooms()
          setAlert({ status:true, message:"" }); // hide alert

  
},2000)

  

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
  fetchRooms()

  
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
            <h4 className="card-title">View Rooms</h4>
            <p className="card-description">
               <code></code>
            </p>
{     roomList.length!=0? <div className="table-responsive pt-3">
              <table className="table table-bordered">
                <thead>
                  <tr>
                     <th>Room Name</th>
                    <th>Room Number</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>Room Type</th>
                    <th>Room Status</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                 {
                  roomList.map((rooms)=>{
                    return(
 <tr>
                    
                    <td>{rooms.roomName??"No Name"} </td>
                    <td>{rooms.roomNumber}</td>
                    <td>{rooms.roomPrice}</td>
                    <td>{rooms.roomDescription}</td>
                    <td><img src={`${apiUrl}/uploads/${rooms.roomImage}`} className="img-fluid" alt="" /></td>
                    <td>{rooms.roomType.typeRoom}</td>
                    <td>{rooms.roomStatus.status}</td>
                    <td><button className="btn btn-warning"  onClick={()=>{
                      navigateToEditRoom(rooms._id)
                    }} >Edit</button></td>
                    <td><button className="btn btn-danger" onClick={()=>{
                      deleteRoom(rooms._id)
                    }} >X</button></td>

                  </tr>

                    )
                  })



                 }
                 
                </tbody>
              </table>
            </div>
            :
            <h3 className="text-center">No Rooms Found</h3>}
          </div>
        </div>
      </div>
     
    </div>
  </div>
  {/* content-wrapper ends */}
</>


      );
}

export default ShowRoom;