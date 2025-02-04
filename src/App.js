import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router";

import SideMenu from "./components/SideMenu";
import HeaderBar from "./components/HeaderBar";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import Devices from "./pages/Devices";
import Orders from "./pages/Orders";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

function App() {
  const [isSidebarActive, setSidebarActive] = useState(false);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarActive((prevState) => !prevState);
  };

  const openMobileSidebar = () => {
    setMobileSidebarOpen(true);
    document.body.classList.add("overlay-active");
  };

  const closeMobileSidebar = () => {
    setMobileSidebarOpen(false);
    document.body.classList.remove("overlay-active");
  };

  return (
    <div className="App">
      <SideMenu
        closeMobileSidebar={closeMobileSidebar}
        isSidebarActive={isSidebarActive}
        isMobileSidebarOpen={isMobileSidebarOpen}
      />
      <main className={`dashboard-main ${isSidebarActive ? "active" : ""}`}>
        <HeaderBar
          toggleSidebar={toggleSidebar}
          openMobileSidebar={openMobileSidebar}
          closeMobileSidebar={closeMobileSidebar}
          isSidebarActive={isSidebarActive}
          isMobileSidebarOpen={isMobileSidebarOpen}
        />
        {/* <Home /> */}
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/devices" element={<Devices />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Router>

        <footer class="d-footer">
          <div class="row align-items-center justify-content-between">
            <div class="col-auto">
              <p class="mb-0"> 2024@copyrights</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
