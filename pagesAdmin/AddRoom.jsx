import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AddRoom() {
  let apiUrl = "http://localhost:5000";

  let [roomStatus, setRoomStatus] = useState([]);
  let [roomType, setRoomType] = useState([]);
  let [room, setRoom] = useState({
    roomName:"",
    roomNumber: "",
    roomDescription: "Our rooms offer a harmonious blend of comfort and elegance,designed to provide an exceptional stay for every guest",
    roomPrice:"" ,
    roomType: "",
    roomStatus: "",
    roomImage: "",
  });

  let [alert, setAlert] = useState({
    status: true,
    message: "",
  });

  let navigate=useNavigate()
  
  const fetchStatus = async () => {
    try {
      let res = await axios.get(`${apiUrl}/roomstatus/showstatus`);

      if (res.data.success) {
        setRoomStatus(res.data.statusList);
        console.log(roomStatus);
      }
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

  const addRoomSubmit = async () => {
   let errMsg="Fill All The Feilds"
   if(room.roomName=="" || room.roomDescription==""|| room.roomNumber==""||room.roomPrice==""||room.roomStatus=="" || room.roomType==""){
  setAlert(
    {
      status:false,
      message:errMsg
    }
  )
  
  }else{ 
    
    try {
      let formData = new FormData();
      formData.append("roomName", room.roomName);
      formData.append("roomNumber", room.roomNumber);
      formData.append("roomDescription", room.roomDescription);
      formData.append("roomStatus", room.roomStatus);
      formData.append("roomType", room.roomType);
      formData.append("roomImage", room.roomImage);
      formData.append("roomPrice", room.roomPrice);

      let res = await axios.post(`${apiUrl}/rooms/createroom`, formData);
      if (res.data.success) {
        setAlert({
          status: res.data.success,
          message: "Room Added Successfully",
        });

setTimeout(()=>{
navigate("/dashboard/showroom")
},2000)

      }
else{

setAlert({
          status: res.data.success,
          message:res.data.message 
        });

}


    } catch (err) {

setAlert({
          status: false,
          message: err.response.data.message,
        });
      
    }}
  };

  useEffect(() => {
    fetchStatus();
    fetchType();
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
                      onChange={handleInputOnChange}
                    >
                      <option value="693557843151bab5c43e2e56">
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
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputCity1">Room Description</label>
                    <textarea
                      name="roomDescription"
                      id=""
                      className="form-control"
                      value={room.roomDescription}
                      onChange={handleInputOnChange}
                    ></textarea>
                  </div>

                  <button
                    className="btn btn-primary mr-2"
                    onClick={addRoomSubmit}
                  >
                    Add Room
                  </button>
                  <button className="btn btn-light">Cancel</button>
                <h6>{}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* content-wrapper ends */}
    </>
  );
}

export default AddRoom;
