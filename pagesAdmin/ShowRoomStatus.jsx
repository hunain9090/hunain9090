import { useEffect, useState } from "react";
import axios from "axios";

function ShowStatus() {
  const apiUrl = "http://localhost:5000";

  const [statusList, setStatusList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchStatusList = async () => {
    try {
      const res = await axios.get(`${apiUrl}/roomstatus/showstatus`);

      if (res.data.success) {
        setStatusList(res.data.statusList);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch status");
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchStatusList();
  }, []);

  return (
    <div className="content-wrapper">
      <div className="row">
        <div className="col-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Room Status List</h4>

              {/* 🔄 Loading */}
              {loading && <p>Loading...</p>}

              {/* 🔴 Error */}
              {error && <div className="alert alert-danger">{error}</div>}

              {/* 📋 Table */}
              {!loading && statusList.length > 0 && (
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Status Name</th>
                    
                      </tr>
                    </thead>
                    <tbody>
                      {statusList.map((item, index) => (
                        <tr key={item._id}>
                          <td>{index + 1}</td>
                          <td>
                            <span className="badge badge-info">
                              {item.status}
                            </span>
                          </td>
                        
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* ⚠ No data */}
              {!loading && statusList.length === 0 && (
                <p>No room status found</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowStatus;
