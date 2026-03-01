
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function FeedBack() {
    const apiUrl= "http://localhost:5000";
    const { id } = useParams(); 
    

    const [feedback,setFeedback] = useState({
        rating: "",
        comment: "",
        serviceRating: "",
        cleanlinessRating: "",
        comfortRating: "",
        valueForMoneyRating: "",
    })

    const [alert,setAlert] = useState({
        success: false,
        message: "",
    })

    const handleInpueFeedbackchange =(e)=>{
      let {name,value} = e.target;
      setFeedback((prev)=>{
        return{
        ...prev,
        [name]: value,
        }
      })
    }

    const handleFeedbackSubmit = async (e) =>{
      const token = localStorage.getItem("token");
      let userId = null;
    if (token) {
    const decoded = jwtDecode(token);
    userId = decoded._id; 
     }
         e.preventDefault();
        try{
        const res = await axios.post(`${apiUrl}/feedback`,{
          ...feedback,
          bookingId: id,
          userId: userId
        })
      console.log(res);

      if(res.data.success){
        setAlert({
            success: true,
            message: res.data.message,
        })
      }
      setFeedback({
        rating: "",
        comment: "",
        serviceRating: "",
        cleanlinessRating: "",
        comfortRating: "",
        valueForMoneyRating: "",
      })
        }
     catch(err){
        console.log(err);
        setAlert({
            success: false,
            message: err.response?.data?.message || "Something went wrong"
        })
        
     }
      
    }
    return ( 
    <>
       <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8 my-5">

          <div className="card shadow">
            <div className="card-header bg-dark text-white">
              <h5 className="mb-0 text-white">Give Your Feedback</h5>
            </div>
<div className="text-center mt-3">
      {alert.message && (
           <p style={{ color: alert.success ? "green" : "red" }}>
           {alert.message}
          </p>           
                 )}
</div>
 

            <div className="card-body">

              

                {/* Overall Rating */}
                <div className="mb-3">
                  <label className="form-label">Overall Rating (1–5)</label>
                  <select
                    className="form-select"
                    name="rating"
                    value={feedback.rating}
                    onChange={handleInpueFeedbackchange}
                  >
                    <option value="">Select Rating</option>
                    <option value="1">1 - Very Bad</option>
                    <option value="2">2 - Bad</option>
                    <option value="3">3 - Average</option>
                    <option value="4">4 - Good</option>
                    <option value="5">5 - Excellent</option>
                  </select>
                </div>

                {/* Comment */}
                <div className="mb-3">
                  <label className="form-label">Comment</label>
                  <textarea
                    className="form-control"
                    name="comment"
                    value={feedback.comment}
                    onChange={handleInpueFeedbackchange}
                    rows="3"
                    placeholder="Write your experience..."
                    required
                  ></textarea>
                </div>

                {/* Service Rating */}
                <div className="mb-3">
                  <label className="form-label">Service Rating</label>
                  <input
                    type="number"
                    className="form-control"
                    name="serviceRating"
                    value={feedback.serviceRating}
                    onChange={handleInpueFeedbackchange}
                    min="1"
                    max="5"
                    placeholder="1–5"
                  />
                </div>

                {/* Cleanliness Rating */}
                <div className="mb-3">
                  <label className="form-label">Cleanliness Rating</label>
                  <input
                    type="number"
                    className="form-control"
                    name="cleanlinessRating"
                    value={feedback.cleanlinessRating}
                    onChange={handleInpueFeedbackchange}
                    min="1"
                    max="5"
                    placeholder="1–5"
                  />
                </div>

                {/* Comfort Rating */}
                <div className="mb-3">
                  <label className="form-label">Comfort Rating</label>
                  <input
                    type="number"
                    className="form-control"
                    name="comfortRating"
                    value={feedback.comfortRating}
                    onChange={handleInpueFeedbackchange}
                    min="1"
                    max="5"
                    placeholder="1–5"
                  />
                </div>

                {/* Value For Money */}
                <div className="mb-4">
                  <label className="form-label">Value For Money</label>
                  <input
                    type="number"
                    className="form-control"
                    name="valueForMoneyRating"
                    value={feedback.valueForMoneyRating}
                    onChange={handleInpueFeedbackchange}
                    min="1"
                    max="5"
                    placeholder="1–5"
                  />
                </div>

                <button className="btn btn-success w-100" onClick={handleFeedbackSubmit}>
                  Submit Feedback
                </button>

              

            </div>
          </div>

        </div>
      </div>
    </div>
    </>
     );
}

export default FeedBack;