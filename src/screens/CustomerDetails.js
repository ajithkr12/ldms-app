import React, { useState } from "react";
import { useForm } from "react-hook-form";

function CustomerDetails(props) {
  const [activeTab, setActiveTab] = useState("tab1");
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  // Function to handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  function closePopup(e) {
    e.preventDefault();
    props.toggle();
  }
  return (
    <div className="popup">
      <div className="popup-inner" style={{ minWidth: "1200px" }}>
        <div className="popup-header d-flex justify-content-between align-items-center">
          <div className="header-title">Customer Details</div>
          <button
            class="has-indicator w-40-px h-40-px bg-neutral-200 rounded-circle d-flex justify-content-center align-items-center m-0"
            type="button"
            onClick={closePopup}
          >
            <iconify-icon
              icon="iconoir:xmark"
              class="text-primary-light text-xl"
            ></iconify-icon>
          </button>
        </div>

        {/* OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO */}
        <div style={{ margin: "10px 0px" }} className="xxl-6">
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
        <div style={{ margin: "10px 0px" }} className="xxl-6">
          <select
            value={selectedOption}
            onChange={handleChange}
            style={{
              padding: "10px",
              fontSize: "14px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              width: "150px",
              appearance: "auto", // Ensures default dropdown arrow is visible
              WebkitAppearance: "auto", // For Safari
              MozAppearance: "auto", // For Firefox
            }}
          >
            <option value="">Select Device</option>
            <option value="Maharashtra">Device 1</option>
            <option value="Bihar">Device 2</option>
            <option value="Goa">Device 3</option>
            <option value="Gujrat">Device 4</option>
          </select>
        </div>

        <div class="row gy-4 mb-12">
          <div class="col-xxl-6 col-sm-6">
            <div class="card px-24 py-16 shadow-none radius-8 border h-100 bg-gradient-start-3">
              <div class="card-body p-0">
                <div class="d-flex flex-wrap align-items-center justify-content-between gap-1 mb-8">
                  <div class="d-flex align-items-center">
                    <h3>Customer Details 1</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xxl-6 col-sm-6">
            <div class="card px-24 py-16 shadow-none radius-8 border h-100 bg-gradient-start-3">
              <div class="card-body p-0">
                <div class="d-flex flex-wrap align-items-center justify-content-between gap-1 mb-8">
                  <div class="d-flex align-items-center">
                    <h3>Customer Details 2</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO */}

        <div className="popup-footer d-flex justify-content-end align-items-center">
          <button
            style={{
              padding: "4px 22px",
              marginRight: "10px",
              cursor: "pointer",
              backgroundColor: "#ccc",
              color: "black",
              border: "none",
              borderRadius: "5px",
            }}
            onClick={closePopup}
          >
            Cancel
          </button>
          <button
            type="submit"
            style={{
              padding: "4px 22px",
              cursor: "pointer",
              backgroundColor: "#007bff",
              color: "black",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Submit
          </button>
        </div>

        {/* <button onClick={props.toggle}>Close</button> */}
      </div>
    </div>
  );
}
export default CustomerDetails;
