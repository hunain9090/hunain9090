import { useState } from "react";
import axios from "axios";

function AddStatus() {
  const [roomstatus, setRoomStatus] = useState({
    status: "",
  });

  const [alert, setAlert] = useState({
    success: false,
    message: "",
  });

  let apiUrl = "http://localhost:5000";

  const handleStatusInputChange = (e) => {
    let { name, value } = e.target;
    setRoomStatus((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleStatusSubmit = async (e) => {
    e.preventDefault();

    if (!roomstatus.status) {
      setAlert({ success: false, message: "Status is required" });
      return;
    }

    try {
      let res = await axios.post(
        `${apiUrl}/roomstatus/createstatus`,
        roomstatus
      );

      if (res.data.success) {
        setAlert({
          success: true,
          message: "Room status added successfully",
        });

        setRoomStatus({ status: "" });
      }
    } catch (err) {
      setAlert({
        success: false,
        message: err.response?.data?.message || "Something went wrong",
      });
    }
  };

  return (
    <div className="content-wrapper">
      <div className="row">
        <div className="col-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Add Room Status</h4>

            
              {alert.message && (
                <div
                  className={`alert ${
                    alert.success ? "alert-success" : "alert-danger"
                  }`}
                >
                  {alert.message}
                </div>
              )}

              <div className="form-group">
                <label>Room Status</label>
                <input
                  type="text"
                  className="form-control"
                  name="status"
                  placeholder="approve / reserve"
                  value={roomstatus.status}
                  onChange={handleStatusInputChange}
                />
              </div>

              <button className="btn btn-primary mr-2" onClick={handleStatusSubmit}>
                Add Status
              </button>
              <button className="btn btn-light">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddStatus;
