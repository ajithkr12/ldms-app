import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Replace useHistory with useNavigate
import CustomerForm from "../screens/CustomerForm";
import CustomerDetails from "../screens/CustomerDetails";
import { getCustomers } from "../api/customerServices";

const Customers = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [seen, setSeen] = useState(false);
  const [pageEnd, setPageEnd] = useState(false);
  const [openCustomerDetails, setOpenCustomerDetails] = useState(false);
  const [customers, setCustomers] = useState([]);
  // const [totalPages, setTotalPages] = useState(1);

  const location = useLocation();
  const navigate = useNavigate();

  // Extract query parameters from the URL
  const queryParams = new URLSearchParams(location.search);
  const currentPage = parseInt(queryParams.get("page") || "1", 10);
  const searchTerm = queryParams.get("search") || "";

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const togglePop = () => {
    setSeen(!seen);
  };

  const togglePopDetails = () => {
    setOpenCustomerDetails(!openCustomerDetails);
  };

  const getData = async () => {
    const response = await getCustomers({
      page: currentPage,
      limit: 10,
      search: searchTerm,
    });
    setPageEnd(response.isEnd);
    setCustomers(response.customers);
  };

  useEffect(() => {
    getData();
  }, [currentPage, searchTerm]);

  const updateURL = (params) => {
    const newParams = new URLSearchParams(location.search);
    Object.keys(params).forEach((key) => {
      if (params[key] !== null && params[key] !== undefined) {
        newParams.set(key, params[key]);
      } else {
        newParams.delete(key);
      }
    });
    navigate({ search: newParams.toString() }); // Use navigate instead of history.push
  };

  const handleSearch = (e) => {
    updateURL({ search: e.target.value, page: 1 });
  };

  const handlePageChange = (direction) => {
    if (direction === "prev" && currentPage > 1) {
      updateURL({ page: currentPage - 1 });
    } else if (direction === "next") {
      updateURL({ page: currentPage + 1 });
    }
  };

  return (
    <div className="dashboard-main-body">
      {seen ? <CustomerForm toggle={togglePop} /> : null}
      {openCustomerDetails ? (
        <CustomerDetails toggle={togglePopDetails} />
      ) : null}

      <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
        {/* <div style={{ marginBottom: "00px" }}>
          <button
            onClick={() => handleTabChange("tab1")}
            style={{
              padding: "4px 22px",
              marginRight: "10px",
              cursor: "pointer",
              backgroundColor: activeTab === "tab1" ? "#007bff" : "#ccc",
              color: activeTab === "tab1" ? "white" : "black",
              border: "none",
              borderRadius: "5px",
            }}
          >
            LPG
          </button>
          <button
            onClick={() => handleTabChange("tab2")}
            style={{
              padding: "4px 22px",
              marginRight: "10px",
              cursor: "pointer",
              backgroundColor: activeTab === "tab2" ? "#007bff" : "#ccc",
              color: activeTab === "tab2" ? "white" : "black",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Water
          </button>
          <button
            onClick={() => handleTabChange("tab3")}
            style={{
              padding: "4px 22px",
              cursor: "pointer",
              backgroundColor: activeTab === "tab3" ? "#007bff" : "#ccc",
              color: activeTab === "tab3" ? "white" : "black",
              border: "none",
              borderRadius: "5px",
            }}
          >
            All
          </button>
        </div> */}

        <div>
          <input
            type="text"
            placeholder="Search customers..."
            value={searchTerm}
            onChange={handleSearch}
            style={{
              padding: "4px 12px",
              marginRight: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
          {/* <button
            onClick={togglePop}
            style={{
              padding: "4px 22px",
              cursor: "pointer",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              display: "flex",
              flexDirection: "row",
            }}
          >
            Add New
          </button> */}
        </div>
      </div>

      <div className="row gy-4 h-100">
        <div className="col-xxl-12">
          <div className="card h-100">
            <div className="card-body p-24">
              <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between mb-20">
                <h6 className="mb-2 fw-bold text-lg mb-0">Customer List</h6>
              </div>
              <div className="table-responsive scroll-sm">
                <table className="table bordered-table sm-table mb-0">
                  <thead>
                    <tr>
                      <th scope="col">Sl.No</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Address</th>
                      <th scope="col">Registration Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customers.map((customer, index) => (
                      <tr key={customer.id}>
                        <td>{(currentPage - 1) * 10 + index + 1}</td>
                        <td>{customer.fullName}</td>
                        <td>{customer.email}</td>
                        <td>{customer.address || "N/A"}</td>
                        <td>{customer.registrationNumber}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between mt-20">
                <button
                  onClick={() => handlePageChange("prev")}
                  disabled={currentPage === 1}
                  style={{
                    padding: "4px 12px",
                    cursor: currentPage === 1 ? "not-allowed" : "pointer",
                    backgroundColor: currentPage === 1 ? "#ccc" : "#007bff",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                  }}
                >
                  Previous
                </button>
                <p
                  style={{
                    fontSize: "14px",
                    margin: "0px 12px",
                  }}
                >
                  Page {currentPage}
                </p>
                <button
                  onClick={() => handlePageChange("next")}
                  disabled={pageEnd}
                  style={{
                    padding: "4px 12px",
                    cursor: pageEnd ? "not-allowed" : "pointer",
                    backgroundColor: pageEnd ? "#ccc" : "#007bff",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                  }}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
