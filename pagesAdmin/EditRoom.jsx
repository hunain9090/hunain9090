import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditRoom() {
  let apiUrl = "http://localhost:5000";
let navigate=useNavigate()
let {id}=useParams()


  let [roomStatus, setRoomStatus] = useState([]);
  let [roomType, setRoomType] = useState([]);
  let [room, setRoom] = useState({
    roomName:"a",
    roomNumber: "abc",
    roomDescription: "abc",
    roomPrice: 0,
    roomType: "",
    roomStatus: "",
    roomImage: "",
  });

  let [alert, setAlert] = useState({
    status: true,
    message: "",
  });


let fetchOldRoomData=async()=>{

try{
let res=await axios.get(`${apiUrl}/rooms/showroom/${id}`)

if(res.data.success){

console.log(res.data.findRoomById)

  setRoom(
    {
      ...res.data.findRoomById,
      roomStatus:res.data.findRoomById.roomStatus?._id,
      roomType:res.data.findRoomById.roomType._id
    }
  )

}


}catch(err){

  console.log(err.response.data.message)

}


}


  const fetchStatus = async () => {
    try {
      let res = await axios.get(`${apiUrl}/roomstatus/showstatus`);
console.log(res.data)
      if (res.data.success) {
        setRoomStatus(res.data.statusList);
        console.log(roomStatus);
      }
      return res
    } catch (err) {
      console.log(err.response.data.message);
    }
  };

  const fetchType = async () => {
    try {
      let res = await axios.get(`${apiUrl}/types/showtypes`);

      if (res.data.success) {
        setRoomType(res.data.roomTypeList);
      }
return res
    } catch (err) {
      console.log(err.response.data.message);
    }
  };

  const handleInputOnChange = (e) => {
    let { name, value } = e.target;

    setRoom((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleImageInputOnChange = (e) => {
    let { name, files } = e.target;

    console.log(files[0]);

    setRoom({
      ...room,
      [name]: files[0],
    });
  };

 

const UpdateRoomSubmit=async()=>{

try{

let formData=new FormData()

      formData.append("roomName", room.roomName);
      formData.append("roomNumber", room.roomNumber);
      formData.append("roomDescription", room.roomDescription);
      formData.append("roomStatus", room.roomStatus);
      formData.append("roomType", room.roomType);
      formData.append("roomPrice", room.roomPrice);
      
      if(room.roomImage instanceof File){
        
        formData.append("roomImage", room.roomImage);

}




  let res=await axios.put(`${apiUrl}/rooms/updateroom/${id}`,formData)
if(res.data.success){

  setAlert({
status:res.data.success,
message:"Room Updated Successfully"

})

}


}catch(err){
  setAlert({

    status:false,
    message:err.response.data.message
  
  }
  )
}


}



  useEffect(() => {
  //   fetchStatus();
  //   fetchType();
  //  fetchOldRoomData() 

Promise.all([fetchStatus(),fetchType()]).then(()=>{
  fetchOldRoomData()
})



   

  }, []);

  return (
    <>

    {
      alert.message && (<div className={`alert ${alert.status? "alert-success":"alert-danger"}`} role="alert">
  {alert.message}
</div>)
    }
      <div className="content-wrapper">
        <div className="row">
          <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Add New Room</h4>
                <p className="card-description"></p>
                
                  <div className="form-group">
                    <label htmlFor="exampleInputName1">Room Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="roomName"
                      id="exampleInputName1"
                      placeholder="Room Name"
                      value={room.roomName}
                      onChange={handleInputOnChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputName1">Room Number</label>
                    <input
                      type="text"
                      className="form-control"
                      name="roomNumber"
                      id="exampleInputName1"
                      placeholder="Room Number"
                      value={room.roomNumber}
                      onChange={handleInputOnChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="exampleInputName1">Room Price</label>
                    <input
                      type="number"
                      className="form-control"
                      id="exampleInputName1"
                      placeholder="Name"
                      name="roomPrice"
                      value={room.roomPrice}
                      onChange={handleInputOnChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="exampleSelectGender">roomStatus</label>
                    <select
                      className="form-control"
                      id="exampleSelectGender"
                      name="roomStatus"
                      value={room.roomStatus}
                      onChange={handleInputOnChange}
                    >
                      <option value="693557843151bab5c43e2e56">
                        Choose Status
                      </option>
                      {roomStatus.map((s) => {
                        return (
                          <option key={s._id} value={s._id}>
                            {s.status}
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="exampleSelectGender">roomType</label>
                    <select
                      className="form-control"
                      id="exampleSelectGender"
                      name="roomType"
                      value={room.roomType}
                      onChange={handleInputOnChange}
                    >
                      <option value="">
                        Choose Type
                      </option>
                      {roomType.map((t) => {
                        return (
                          <option key={t._id} value={t._id}>
                            {t.typeRoom}
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  <div className="form-group">
                    <label>roomImage</label>
                    <input
                      type="file"
                      name="roomImage"
                      className="form-control"
                      onChange={handleImageInputOnChange}
                      // value={room.roomImage}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputCity1">Room Description</label>
                    <textarea
                      name="roomDescription"
                      id=""
                      className="form-control"
                      onChange={handleInputOnChange}
                      value={room.roomDescription}
                    ></textarea>
                  </div>
                  <div className="form-group">
<img src={`${apiUrl}/uploads/${room.roomImage}`} className="img-fluid" alt="" />
                    
                  </div>



                  <button
                    className="btn btn-primary mr-2"
                    onClick={UpdateRoomSubmit}
                  >
                    Update Room
                  </button>
                  <button className="btn btn-light">Cancel</button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* content-wrapper ends */}
    </>
  );
}

export default EditRoom;
