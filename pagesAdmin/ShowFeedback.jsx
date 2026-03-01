import { useEffect, useState } from "react";
import axios from "axios";

function ShowFeedback() {
  const [feedbacks, setFeedbacks] = useState([]);
  
  let [alert,setAlert]=useState({
  status:true,
  message:""
})
const apiUrl = "http://localhost:5000";
  
    const fetchFeedbacks = async () => {
      try {
        const res = await axios.get(`${apiUrl}/feedback`);
        if (res.data.success) {
          setFeedbacks(res.data.feedback);
        }
      } catch (err) {
        console.error("Error fetching feedbacks:", err);
      }
    };

  
  let deleteFeedback=async(delId)=>{

try{
let res = await axios.delete(`${apiUrl}/feedback/${delId}`)

if(res.data.success){
  setAlert({
    status:res.data.success,
    message:"Feedback Deleted SuccessFully"
  })

  setFeedbacks(prev=>prev.filter(item=>item._id!=delId))

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
  fetchFeedbacks()

  
},[])


  return (
    <> 
        {
      alert.message && (<div className={`alert ${alert.status? "alert-success":"alert-danger"}`} role="alert">
  {alert.message}
</div>)
    }
    <div className="container my-5">
      <h3>All Feedback</h3>
      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>User</th>
            <th>Booking ID</th>
            <th>Rating</th>
            <th>Comment</th>
            <th>Service</th>
            <th>Cleanliness</th>
            <th>Comfort</th>
            <th>Value for Money</th>
          
          </tr>
        </thead>
        <tbody>
          {feedbacks.map((fb) => (
            <tr key={fb._id}>
              <td>{fb.userId?.userName || "N/A"}</td>
              <td>{fb.bookingId?._id || "N/A"}</td>
              <td>{fb.rating}</td>
              <td>{fb.comment}</td>
              <td>{fb.serviceRating}</td>
              <td>{fb.cleanlinessRating}</td>
              <td>{fb.comfortRating}</td>
              <td>{fb.valueForMoneyRating}</td>
                     <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteFeedback(fb._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
   
  );
}

export default ShowFeedback;
