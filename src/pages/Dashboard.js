import React, { useState } from "react";
import DashboardLpg from "../screens/DashboardLpg";
import DashboardWater from "../screens/DashboardWater";

const Dashboard = () => {
  // State to keep track of the active tab
  const [activeTab, setActiveTab] = useState("tab1");

  // Function to handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="dashboard-main-body">
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
        <ul className="d-flex align-items-center gap-2">
          <li className="fw-medium">
            <a
              href="index.html"
              className="d-flex align-items-center gap-1 hover-text-primary"
            >
              <iconify-icon
                icon="solar:home-smile-angle-outline"
                className="icon text-lg"
              ></iconify-icon>
              Dashboard
            </a>
          </li>
          <li>-</li>
          {/* <li className="fw-medium">Investment</li> */}
        </ul>
      </div>

      {activeTab === "tab1" && <DashboardLpg />}
      {activeTab === "tab2" && <DashboardWater />}
      {activeTab === "tab3" && <div>Content for Tab 3</div>}
    </div>
  );
};

export default Dashboard;
