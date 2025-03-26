import React, { useState } from "react";
import Users from "./Users";
import Roles from "./Roles";

import "./Settings.css";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("users");

  const renderTabContent = () => {
    switch (activeTab) {
      case "users":
        return <Users />;
      case "roles":
        return <Roles />;

      default:
        return <Users />;
    }
  };

  return (
    <div className="dashboard-main-body">
      <h1 className="h4">Settings</h1>
      <div className="tabs">
        <ul className="d-flex align-items-center gap-2">
          <li
            className={`tab-item ${activeTab === "users" ? "active" : ""}`}
            onClick={() => setActiveTab("users")}
          >
            Users
          </li>
          <li
            className={`tab-item ${activeTab === "roles" ? "active" : ""}`}
            onClick={() => setActiveTab("roles")}
          >
            Roles
          </li>
        </ul>
      </div>

      <div className="row gy-4">
        <div className="col-xxl-12 col-sm-12">{renderTabContent()}</div>
      </div>
    </div>
  );
};

export default Settings;
