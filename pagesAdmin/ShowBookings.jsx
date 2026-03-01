import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ShowBookings() {
  let apiUrl = "http://localhost:5000";

  let [BookingList, setBookingList] = useState([]);
  let [alert, setAlert] = useState({
    status: true,
    message: "",
  });

  let navigate = useNavigate();

  let fetchBookings = async () => {
    // try{
    let res = await axios.get(`${apiUrl}/booking`);

    console.log(res);
    if (res.data.success) {
      setBookingList(res.data.bookings);
    }

    // }
  };

  const UpdateBookingStatus = async (updateId, currentStatus) => {
    try {
      if (currentStatus == "confirmed") {
        setAlert({
          status: false,
          message: "Booking Already Confirmed",
        });
      } else {
        let res = await axios.put(`${apiUrl}/booking/${updateId}`, {
          status: "confirmed",
        });
        if (res.data.success) {
          setAlert({
            status: res.data.success,
            message: "Status Updated Successfully",
          });
        }

        setTimeout(() => {
          fetchBookings();
        }, 1000);
      }
    } catch (err) {
      setAlert({
        status: false,
        message: err.response.data.message,
      });
    }
  };

  const UpdateStatusToCancel = async (updateId, currentStatus) => {
    try {
      if (currentStatus == "cancelled") {
        setAlert({
          status: false,
          message: "Booking Already Cancelled",
        });
      } else {
        let res = await axios.put(`${apiUrl}/booking/${updateId}`, {
          status: "cancelled",
        });
        if (res.data.success) {
          setAlert({
            status: res.data.success,
            message: "Status Updated Cancelled",
          });
        }

        setTimeout(() => {
          fetchBookings();
        }, 1000);
      }
    } catch (err) {
      setAlert({
        status: false,
        message: err.response.data.message,
      });
    }
  };

const UpdateCheckInStatus=async(checkStatusId,CurrentCheckStatus)=>{


if(CurrentCheckStatus=="Check In"){

setAlert(
  {
    status:false,
    message:"Already Updated To Check In"
  }
)

}


else{

  
  
  try{
    
    let res=await axios.put(`${apiUrl}/booking/${checkStatusId}`,{
      checkIn_OutStatus:"Check In"
    })

if(res.data.success){
  setAlert({
status:true,
message:"Status Updated Successfully"

  })

fetchBookings()

setTimeout(()=>{
setAlert(
  {
    ...alert,
    message:""
  }
)
},[2000])


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





}
const UpdateCheckOutStatus=async(checkStatusId,CurrentCheckStatus)=>{


if(CurrentCheckStatus=="Check Out"){

setAlert(
  {
    status:false,
    message:"Already Updated To Check Out"
  }
)

}


else{

  
  
  try{
    
    let res=await axios.put(`${apiUrl}/booking/${checkStatusId}`,{
      checkIn_OutStatus:"Check Out"
    })

if(res.data.success){
  setAlert({
status:true,
message:"Status Updated Successfully"

  })

fetchBookings()

setTimeout(()=>{
setAlert(
  {
    ...alert,
    message:""
  }
)
},[2000])


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





}



let DeleteBooking=async(delId)=>{

try{
let res=await axios.delete(`${apiUrl}/booking/${delId}`)

if(res.data.success){
  setAlert({
  status:res.data.success,
  message:res.data.message
})

fetchBookings()
}


}catch(err){

setAlert({
  status:false,
  message:err.response.data.message
})

}

}



  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <>
      {alert.message && (
        <div
          className={`alert ${alert.status ? "alert-success" : "alert-danger"}`}
          role="alert"
        >
          {alert.message}
        </div>
      )}
      <div className="content-wrapper">
        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">View Bookings</h4>
                <p className="card-description">
                  <code></code>
                </p>
                {BookingList.length != 0 ? (
                  <div className="table-responsive pt-3">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>User</th>
                          <th>Room</th>

                          <th>checkInDate</th>
                          <th>checkOutDate</th>
                          <th>Image</th>
                          <th>totalPrice</th>
                          <th>phoneNumber</th>
                          <th>Check In Status</th>
                          <th>status</th>
                          <th>Update Check</th>

                          <th>Confirm Booking</th>
                          <th>Cancel Booking</th>
                        </tr>
                      </thead>
                      <tbody>
                        {BookingList.map((bl) => {
                          return (
                            <tr>
                              <td>{bl.userId?.email || "User Deleted"} </td>
                              <td>{bl.roomId?.roomName || "Room Deleted"}</td>
                              <td>{bl.checkInDate}</td>
                              <td>{bl.checkOutDate}</td>
                              <td>
                                <img
                                  src={`${apiUrl}/uploads/${bl.roomId.roomImage}`}
                                  className="img-fluid"
                                  alt=""
                                  style={{
                                    width: "80px",
                                    height: "60px",
                                    objectFit: "cover",
                                  }}
                                />
                              </td>
                              <td>{bl.totalPrice}</td>
                              <td>{bl.phoneNumber}</td>

                              {/* ==========this condition is for booking check In & out status status start================ */}

                              {bl.checkIn_OutStatus == "Not Yet" ? (
                                <td className="w-100">
                                  <p
                                    style={{ whiteSpace: "nowrap" }}
                                    className=" p-2 badge-warning rounded-pill"
                                  >
                                    {bl.checkIn_OutStatus}
                                  </p>
                                </td>
                              ) : bl.checkIn_OutStatus == "Check In" ? (
                                <td className="">
                                  <p
                                    style={{ whiteSpace: "nowrap" }}
                                    className=" p-2 badge-info rounded-pill"
                                  >
                                    {bl.checkIn_OutStatus}
                                  </p>
                                </td>
                              ) : (
                                <td className="">
                                  <p
                                    style={{ whiteSpace: "nowrap" }}
                                    className=" p-2 badge-primary rounded-pill"
                                  >
                                    {bl.checkIn_OutStatus}
                                  </p>
                                </td>
                              )}

                              {/* ==========this condition is for booking check In & out status status Ends================ */}

                              {/* ==========this condition is for booking status start================ */}
                              {bl.status == "confirmed" ? (
                                <td>
                                  <p className=" p-2 badge-success rounded-pill">
                                    {bl.status}
                                  </p>
                                </td>
                              ) : bl.status == "cancelled" ? (
                                <td>
                                  <p className=" p-2 badge-danger rounded-pill">
                                    {bl.status}
                                  </p>
                                </td>
                              ) : (
                                <td>
                                  <p className=" p-2 badge-warning rounded-pill">
                                    {bl.status}
                                  </p>
                                </td>
                              )}

                              {/* ==========this condition is for booking status ends================ */}

                              {/* ==========================this condition iss for check IN AND OUT button starts============ */}

                              {
                                bl.checkIn_OutStatus=="Not Yet"?
                                <td className="text-center" style={{minWidth:"140px"}}>
                                  <button
                                    className="btn btn-warning"
                                    onClick={() => {
                                      UpdateCheckInStatus(bl._id, bl.checkIn_OutStatus);
                                    }}
                                  >
                                    Check In 
                                  </button>
                                </td>:
<td className="text-center" style={{minWidth:"140px"}}>
                                  <button
                                    className="btn btn-success"
                                    onClick={() => {
                                      UpdateCheckOutStatus(bl._id, bl.checkIn_OutStatus);
                                    }}
                                  >
                                    Check Out 
                                  </button>
                                </td>




                              }

                              {/* ==========================this condition iss for check in button ends============ */}

                              <td>
                                <button
                                  className="btn btn-warning"
                                  onClick={() => {
                                    UpdateBookingStatus(bl._id, bl.status);
                                  }}
                                >
                                  Confirm
                                </button>
                              </td>
                              <td>

{
  bl.status == "cancelled"?     <button
                                  className="btn btn-danger"
                                  onClick={() => {
                                    DeleteBooking(bl._id, bl.status);
                                  }}
                                >
                                  X
                                </button>
                                :
<button
                                  className="btn btn-danger"
                                  onClick={() => {
                                    UpdateStatusToCancel(bl._id, bl.status);
                                  }}
                                >
                                  Cancel
                                </button>
}

                                
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <h3 className="text-center">No Rooms Found</h3>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* content-wrapper ends */}
    </>
  );
}

export default ShowBookings;
