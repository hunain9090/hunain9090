import { useState } from "react";
import axios from "axios";

function AddType() {
  const [roomtypes, setRoomTypes] = useState({
    typeRoom: "",
  });

  const [alert, setAlert] = useState({
    success: false,
    message: "",
  });

  let apiUrl = "http://localhost:5000";

  const handleTypeInputChange = (e) => {
    let { name, value } = e.target;
    setRoomTypes((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTypeSubmit = async (e) => {
    e.preventDefault();

    if (!roomtypes.typeRoom) {
      setAlert({ success: false, message: "Type is required" });
      return;
    }

    try {
      let res = await axios.post(
        `${apiUrl}/types/createtype`,
        roomtypes
      );

      if (res.data.success) {
        setAlert({
          success: true,
          message: "Room types added successfully",
        });

        setRoomTypes({ typeRoom: "" });
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
              <h4 className="card-title">Add Room Types</h4>

            
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
                <label>Room Types</label>
                <input
                  type="text"
                  className="form-control"
                  name="typeRoom"
                  placeholder="luxuary / economic"
                  value={roomtypes.typeRoom}
                  onChange={handleTypeInputChange}
                />
              </div>

              <button className="btn btn-primary mr-2" onClick={handleTypeSubmit}>
                Add Type
              </button>
              <button className="btn btn-light">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddType;
