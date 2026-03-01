import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function MyBookings() {
  let { userId } = useParams();
  let [myBookings, setMyBookings] = useState([]);
  let apiUrl = "http://localhost:5000";
let navigate=useNavigate()
  let [alert, setAlert] = useState({
    status: true,
    message: "",
  });

  const fetchBookingByUserId = async () => {
    try {
     console.log("Ok")
      let res = await axios.get(`${apiUrl}/booking/mybookings/${userId}`
     //      , {
     //    headers: {
     //      authorization: localStorage.getItem("token"),
     //      "Content-Type": "application/json",
     //    },
     //  }
     );

      console.log(res)
if(res.data.success){
     setMyBookings(res.data.booking)
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
            fetchBookingByUserId();
          }, 1000);
        }
      } catch (err) {
        setAlert({
          status: false,
          message: err.response.data.message,
        });
      }
    };


const navigateToServiceRequest=async(bId)=>{

  navigate(`/servicerequest/${bId}`)

}


useEffect(()=>{
fetchBookingByUserId()
},[])


  return (
    <>
 

 {/* banner area */}
      <div className="rts__section banner__area is__home__two banner__height banner__center">
        <div className="banner__content">
          <div className="banner__slider__image">
            <img src="/imgs/banner/slides-2.webp" alt="" />
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="banner__slide__content">
                  <h1 className="wow fadeInUp">
                   My Bookings
                  </h1>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* banner area end */}


{/* =================== booking table starts============ */}

      
        <div className="row">
          <div className="col-lg-12 my-5 text-center">
               <h2>You Bookings</h2>
          </div>
          <div className="col-lg-12">
                    {alert.message && (
        <div
          className={`alert ${alert.status ? "alert-success" : "alert-danger"}`}
          role="alert"
        >
          {alert.message}
        </div>
      )}
          </div>
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">View Bookings</h4>
                <p className="card-description">
                  <code></code>
                </p>
                {myBookings.length != 0 ? (
                  <div className="table-responsive pt-3">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>Room</th>

                          <th>checkInDate</th>
                          <th>checkOutDate</th>
                          <th>Image</th>
                          <th>totalPrice</th>

                          <th>Check In Status</th>
                          <th>status</th>

                          <th>Cancel Booking</th>
                          <th>Service</th>

                          
                        </tr>
                      </thead>
                      <tbody>
                        {myBookings.map((bl) => {
                          return (
                            <tr>
                              <td>{bl.roomId.roomName ?? "Room Deleted"}</td>
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
                              <td>${bl.totalPrice}</td>

                              {/* ==========this condition is for booking check In & out status status start================ */}

                              {bl.checkIn_OutStatus == "Not Yet" ? (
                                <td className="text-center">
                                  <p
                                    style={{ whiteSpace: "nowrap" }}
                                    className=" p-1 badge-warning rounded-pill"
                                  >
                                    {bl.checkIn_OutStatus}
                                  </p>
                                </td>
                              ) : bl.checkIn_OutStatus == "Check In" ? (
                                <td className="text-center">
                                  <p
                                    style={{ whiteSpace: "nowrap" }}
                                    className=" p-1 badge-info rounded-pill"
                                  >
                                    {bl.checkIn_OutStatus}
                                  </p>
                                </td>
                              ) : (
                                <td className="text-center">
                                  <p
                                    style={{ whiteSpace: "nowrap" }}
                                    className=" p-1 badge-primary rounded-pill"
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

                              <td>
                                <button
                                  className="btn btn-danger"
                                  onClick={() => {
                                    UpdateStatusToCancel(bl._id, bl.status);
                                  }}
                                >
                                  Cancel
                                </button>
                              </td>

{
  bl.checkIn_OutStatus == "Check In" && (
     <button
                                  className="btn btn-primary"
                                  onClick={() => {
                                    navigateToServiceRequest(bl._id, bl.status);
                                  }}
                                >
                                  Service Request
                                </button>
  )
}

<td>
          {bl.status === "confirmed" && !bl.feedbackGiven ? (
            <button
              className="btn btn-success"
              onClick={() => navigate(`/feedback/${bl._id}`)}
            >
              Give Feedback
            </button>
          ) : bl.feedbackGiven ? (
            <span className="badge bg-secondary">Feedback Submitted</span>
          ) : (
            <span className="badge bg-warning">Not Eligible</span>
          )}
        </td>

                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <h3 className="text-center">No Bookings Found</h3>
                )}
              </div>
            </div>
          </div>
        </div>
      
      {/* ===============booking table ends =============*/}
    </>
  );
}

export default MyBookings;
