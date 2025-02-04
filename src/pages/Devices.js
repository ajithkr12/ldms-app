import React, { useState } from "react";
import DeviceForm from "../screens/DeviceForm";

const Devices = () => {
  // State to keep track of the active tab
  const [activeTab, setActiveTab] = useState("tab1");
  const [seen, setSeen] = useState(false);

  // Function to handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  function togglePop() {
    setSeen(!seen);
  }
  return (
    <div class="dashboard-main-body">
      {seen ? <DeviceForm toggle={togglePop} /> : null}

      <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
        {/* START */}
        <div style={{ marginBottom: "00px" }}>
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
        </div>
        {/* END */}
        {/* <ul className="d-flex align-items-center gap-2">
          <li className="fw-medium">
            <a
              href="index.html"
              className="d-flex align-items-center gap-1 hover-text-primary"
            >
              <iconify-icon
                icon="solar:home-smile-angle-outline"
                className="icon text-lg"
              ></iconify-icon>
              Customers
            </a>
          </li>
          <li>-</li>
          <li className="fw-medium">Investment</li> 
        </ul> */}

        <div>
          <button
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
            {/* <iconify-icon
              icon="material-symbols:add-rounded"
              class="icon"
            ></iconify-icon> */}
            Add New
          </button>
        </div>
      </div>

      <div class="row gy-4">
        <div class="col-xxl-12">
          <div class="card h-100">
            <div class="card-body p-24">
              <div class="d-flex align-items-center flex-wrap gap-2 justify-content-between mb-20">
                <h6 class="mb-2 fw-bold text-lg mb-0">Latest Notifications</h6>
                {/* <a
                href="#"
                class="text-primary-600 hover-text-primary d-flex align-items-center gap-1"
              >
                View All
                <iconify-icon
                  icon="solar:alt-arrow-right-linear"
                  class="icon"
                ></iconify-icon>
              </a> */}
              </div>
              <div class="table-responsive scroll-sm">
                <table class="table bordered-table sm-table mb-0">
                  <thead>
                    <tr>
                      <th scope="col">Sl.No</th>
                      <th scope="col">Customes ID</th>
                      <th scope="col">Cus.Name</th>
                      <th scope="col">Location</th>
                      <th scope="col">Details 1 </th>
                      <th scope="col" class="text-center">
                        No.of Devices
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <h6 class="text-md mb-0 fw-normal">DVS23458987IN</h6>
                      </td>
                      <td>
                        <h6 class="text-md mb-0 fw-normal">John Wick</h6>
                        <span class="text-sm text-secondary-light fw-normal">
                          Sample
                        </span>
                      </td>
                      <td>1234 Elm Street, Suite 100</td>
                      <td>Parameter</td>
                      <td class="text-center">2</td>
                    </tr>

                    <tr>
                      <td>2</td>
                      <td>
                        <h6 class="text-md mb-0 fw-normal">DVS23458987IN</h6>
                      </td>
                      <td>
                        <h6 class="text-md mb-0 fw-normal">Jane Smith</h6>
                        <span class="text-sm text-secondary-light fw-normal">
                          Sample
                        </span>
                      </td>
                      <td>5678 Maple Avenue, Apt. 202,</td>
                      <td>Parameter</td>
                      <td class="text-center">1</td>
                    </tr>

                    <tr>
                      <td>3</td>
                      <td>
                        <h6 class="text-md mb-0 fw-normal">DVS23458987IN</h6>
                      </td>
                      <td>
                        <h6 class="text-md mb-0 fw-normal">Michael Johnson</h6>
                        <span class="text-sm text-secondary-light fw-normal">
                          Sample
                        </span>
                      </td>
                      <td>1298 oak Street, Suite 100</td>
                      <td>Parameter</td>
                      <td class="text-center">1</td>
                    </tr>

                    <tr>
                      <td>4</td>
                      <td>
                        <h6 class="text-md mb-0 fw-normal">DVS23458987IN</h6>
                      </td>
                      <td>
                        <h6 class="text-md mb-0 fw-normal">Emily Davis</h6>
                        <span class="text-sm text-secondary-light fw-normal">
                          Sample
                        </span>
                      </td>
                      <td>1234 ref Street, Suite 100</td>
                      <td>Parameter</td>
                      <td class="text-center">1</td>
                    </tr>

                    <tr>
                      <td>5</td>
                      <td>
                        <h6 class="text-md mb-0 fw-normal">DVS23458987IN</h6>
                      </td>
                      <td>
                        <h6 class="text-md mb-0 fw-normal">William Brown</h6>
                        <span class="text-sm text-secondary-light fw-normal">
                          Sample
                        </span>
                      </td>
                      <td>5555 Birch Lane, Floor 3</td>
                      <td>Parameter</td>
                      <td class="text-center">2</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="d-flex align-items-center flex-wrap gap-2 justify-content-between mt-20">
                <h6 class="mb-2 fw-bold text-lg mb-0"></h6>
                <div class="d-flex align-items-center">
                  <a
                    href="#"
                    class="text-primary-600 hover-text-primary d-flex align-items-center gap-2"
                  >
                    <iconify-icon
                      icon="solar:alt-arrow-left-linear"
                      class="icon"
                      style={{ fontSize: "24px" }}
                    ></iconify-icon>
                  </a>
                  <p
                    class="text-primary-500 hover-text-primary"
                    style={{ fontSize: "14px", margin: "0px 12px 0px 12px" }}
                  >
                    Page 1
                  </p>
                  <a
                    href="#"
                    class="text-primary-600 hover-text-primary d-flex align-items-center gap-2"
                  >
                    <iconify-icon
                      icon="solar:alt-arrow-right-linear"
                      class="icon"
                      style={{ fontSize: "24px" }}
                    ></iconify-icon>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Devices;
