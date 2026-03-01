import axios from "axios";
import { useEffect, useState } from "react";

function ShowServiceRequest() {
  let apiUrl = "http://localhost:5000";

  const [requestList, setRequestList] = useState([]);
  const [alert, setAlert] = useState({
    status: true,
    message: "",
  });

  /* ================= FETCH REQUESTS ================= */
  const fetchRequests = async () => {
    try {
      let res = await axios.get(`${apiUrl}/request/showrequest`);
      if (res.data.success) {
        setRequestList(res.data.requestList);
      }
    } catch (err) {
      setAlert({
        status: false,
        message: "Failed to load requests",
      });
    }
  };

  /* ================= UPDATE STATUS ================= */
  const updateRequestStatus = async (id, status) => {
    try {
      let res = await axios.put(`${apiUrl}/request/updaterequest/${id}`, {
        status: status,
      });

console.log(res)

      if (res.data.success) {
        setAlert({
          status: true,
          message: `Request ${status} Successfully`,
        });

        fetchRequests();
      }
    } catch (err) {
      setAlert({
        status: false,
        message: err.response?.data?.message || "Error",
      });
    }
  };

  /* ================= DELETE REQUEST ================= */
  const deleteRequest = async (id) => {
    try {
      let res = await axios.delete(`${apiUrl}/request/deleterequest/${id}`);

      if (res.data.success) {
        setAlert({
          status: true,
          message: "Request Deleted Successfully",
        });

        fetchRequests();
      }
    } catch (err) {
      setAlert({
        status: false,
        message: err.response?.data?.message || "Error",
      });
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <>
      {alert.message && (
        <div
          className={`alert ${
            alert.status ? "alert-success" : "alert-danger"
          }`}
        >
          {alert.message}
        </div>
      )}

      <div className="content-wrapper">
        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Service Requests</h4>

                {requestList.length !== 0 ? (
                  <div className="table-responsive pt-3">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>User</th>
                          <th>Email</th>
                          <th>Room</th>
                          <th>Service</th>
                          <th>Message</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>

                      <tbody>
                        {requestList.map((req) => (
                          <tr key={req._id}>
                            <td>{req.bookingId?.userId?.userName}</td>
                            <td>{req.bookingId?.userId?.email}</td>
                            <td>{req.bookingId?.roomId?.roomName}</td>
                            <td>{req.serviceType}</td>
                            <td>{req.message}</td>

                            {/* STATUS BADGE */}
                            <td>
                              {req.status === "Approved" ? (
                                <span className="badge badge-success p-2">
                                  Approved
                                </span>
                              ) : req.status === "Rejected" ? (
                                <span className="badge badge-danger p-2">
                                  Rejected
                                </span>
                              ) : (
                                <span className="badge badge-warning p-2">
                                  Pending
                                </span>
                              )}
                            </td>

                            {/* ACTIONS */}
                            <td>
                              {req.status === "Pending" && (
                                <>
                                  <button
                                    className="btn btn-success btn-sm mr-2"
                                    onClick={() =>
                                      updateRequestStatus(
                                        req._id,
                                        "Approved"
                                      )
                                    }
                                  >
                                    Approve
                                  </button>

                                  <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() =>
                                      updateRequestStatus(
                                        req._id,
                                        "Rejected"
                                      )
                                    }
                                  >
                                    Reject
                                  </button>
                                </>
                              )}

                              {req.status === "Rejected" && (
                                <button
                                  className="btn btn-danger btn-sm"
                                  onClick={() => deleteRequest(req._id)}
                                >
                                  Delete
                                </button>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <h4 className="text-center">No Requests Found</h4>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowServiceRequest;
