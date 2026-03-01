import { useEffect, useState } from "react";
import axios from "axios";

function ShowTypes() {
  const apiUrl = "http://localhost:5000";

  const [typesList, setTypesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchTypeList = async () => {
    try {
      const res = await axios.get(`${apiUrl}/types/showtypes`);

      if (res.data.success) {
        // 🔑 Backend ka key: roomTypeList
        setTypesList(Array.isArray(res.data.roomTypeList) ? res.data.roomTypeList : []);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch types");
      setTypesList([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTypeList();
  }, []);

  return (
    <div className="content-wrapper">
      <div className="row">
        <div className="col-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Room Type List</h4>

              {/* 🔄 Loading */}
              {loading && <p>Loading...</p>}

              {/* 🔴 Error */}
              {error && <div className="alert alert-danger">{error}</div>}

              {/* 📋 Table */}
              {!loading && typesList.length > 0 && (
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Type Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      {typesList.map((item, index) => (
                        <tr key={item._id}>
                          <td>{index + 1}</td>
                          <td>
                            <span className="badge badge-info">
                              {item.typeRoom}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* ⚠ No data */}
              {!loading && typesList.length === 0 && (
                <p>No room types found</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowTypes;
