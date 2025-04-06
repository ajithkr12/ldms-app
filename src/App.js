import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import SideMenu from "./components/SideMenu";
import HeaderBar from "./components/HeaderBar";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import Devices from "./pages/Devices";
import Orders from "./pages/Orders";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings/Settings";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [isSidebarActive, setSidebarActive] = useState(false);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarActive((prev) => !prev);
  const openMobileSidebar = () => {
    setMobileSidebarOpen(true);
    document.body.classList.add("overlay-active");
  };
  const closeMobileSidebar = () => {
    setMobileSidebarOpen(false);
    document.body.classList.remove("overlay-active");
  };

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route
        path="/*"
        element={
          <ProtectedRoute>
            <div className="App">
              <SideMenu
                closeMobileSidebar={closeMobileSidebar}
                isSidebarActive={isSidebarActive}
                isMobileSidebarOpen={isMobileSidebarOpen}
              />
              <main
                className={`dashboard-main ${isSidebarActive ? "active" : ""}`}
              >
                <HeaderBar
                  toggleSidebar={toggleSidebar}
                  openMobileSidebar={openMobileSidebar}
                  closeMobileSidebar={closeMobileSidebar}
                  isSidebarActive={isSidebarActive}
                  isMobileSidebarOpen={isMobileSidebarOpen}
                />
                <Routes>
                  <Route index element={<Dashboard />} />
                  <Route path="customers" element={<Customers />} />
                  <Route path="devices" element={<Devices />} />
                  <Route path="orders" element={<Orders />} />
                  <Route path="reports" element={<Reports />} />
                  <Route path="settings" element={<Settings />} />
                </Routes>
                <footer className="d-footer">
                  <div className="row align-items-center justify-content-between">
                    <div className="col-auto">
                      <p className="mb-0">2024 © copyrights</p>
                    </div>
                  </div>
                </footer>
              </main>
            </div>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;

// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router";
// import { Navigate } from "react-router-dom";

// import SideMenu from "./components/SideMenu";
// import HeaderBar from "./components/HeaderBar";
// import Dashboard from "./pages/Dashboard";
// import Customers from "./pages/Customers";
// import Devices from "./pages/Devices";
// import Orders from "./pages/Orders";
// import Reports from "./pages/Reports";
// import Settings from "./pages/Settings/Settings";
// import LoginPage from "./pages/LoginPage";
// import ProtectedRoute from "./components/ProtectedRoute";
// import { isLoggedIn } from "./api/dashboardUserServices";
// import { useNavigate, useLocation } from "react-router-dom";
// function App() {
//   const [isSidebarActive, setSidebarActive] = useState(false);
//   const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarActive((prevState) => !prevState);
//   };

//   const openMobileSidebar = () => {
//     setMobileSidebarOpen(true);
//     document.body.classList.add("overlay-active");
//   };

//   const closeMobileSidebar = () => {
//     setMobileSidebarOpen(false);
//     document.body.classList.remove("overlay-active");
//   };

//   const navigate = useNavigate();
//   const location = useLocation();

//   if (!isLoggedIn()) {
//     // Redirect to login and preserve the current location for post-login navigation
//     navigate("/login", { state: { from: location } });
//   }

//   return (
//     <Router>
//       <Routes>
//         {/* Public Route */}
//         {/* <Route path="/" element={<LoginPage />} /> */}
//         <Route path="/login" element={<LoginPage />} />
//         {/* <Route path="*" component={<>Not found </>} /> */}

//         {/* Protected Routes */}
//         <Route
//           path="/*"
//           element={
//             // <ProtectedRoute>
//             <div className="App">
//               <SideMenu
//                 closeMobileSidebar={closeMobileSidebar}
//                 isSidebarActive={isSidebarActive}
//                 isMobileSidebarOpen={isMobileSidebarOpen}
//               />
//               <main
//                 className={`dashboard-main ${isSidebarActive ? "active" : ""}`}
//               >
//                 <HeaderBar
//                   toggleSidebar={toggleSidebar}
//                   openMobileSidebar={openMobileSidebar}
//                   closeMobileSidebar={closeMobileSidebar}
//                   isSidebarActive={isSidebarActive}
//                   isMobileSidebarOpen={isMobileSidebarOpen}
//                 />

//                 <Routes>
//                   <Route index element={<Dashboard />} />
//                   <Route path="customers" element={<Customers />} />
//                   <Route path="devices" element={<Devices />} />
//                   <Route path="orders" element={<Orders />} />
//                   <Route path="reports" element={<Reports />} />
//                   <Route path="settings" element={<Settings />} />
//                 </Routes>

//                 <footer className="d-footer">
//                   <div className="row align-items-center justify-content-between">
//                     <div className="col-auto">
//                       <p className="mb-0">2024 © copyrights</p>
//                     </div>
//                   </div>
//                 </footer>
//               </main>
//             </div>
//             // </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// // function App() {
// //   const [isSidebarActive, setSidebarActive] = useState(false);
// //   const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);

// //   const toggleSidebar = () => {
// //     setSidebarActive((prevState) => !prevState);
// //   };

// //   const openMobileSidebar = () => {
// //     setMobileSidebarOpen(true);
// //     document.body.classList.add("overlay-active");
// //   };

// //   const closeMobileSidebar = () => {
// //     setMobileSidebarOpen(false);
// //     document.body.classList.remove("overlay-active");
// //   };

// //   return (
// //     <Router>
// //       <Routes>
// //         {/* Public Route */}
// //         <Route path="/login" element={<LoginPage />} />

// //         {/* Protected Routes */}
// //         <Route
// //           path="/*"
// //           element={
// //             <ProtectedRoute>
// //               <div className="App">
// //                 <SideMenu
// //                   closeMobileSidebar={closeMobileSidebar}
// //                   isSidebarActive={isSidebarActive}
// //                   isMobileSidebarOpen={isMobileSidebarOpen}
// //                 />
// //                 <main
// //                   className={`dashboard-main ${
// //                     isSidebarActive ? "active" : ""
// //                   }`}
// //                 >
// //                   <HeaderBar
// //                     toggleSidebar={toggleSidebar}
// //                     openMobileSidebar={openMobileSidebar}
// //                     closeMobileSidebar={closeMobileSidebar}
// //                     isSidebarActive={isSidebarActive}
// //                     isMobileSidebarOpen={isMobileSidebarOpen}
// //                   />
// //                   <Routes>
// //                     <Route path="/" element={<Dashboard />} />
// //                     <Route path="/customers" element={<Customers />} />
// //                     <Route path="/devices" element={<Devices />} />
// //                     <Route path="/orders" element={<Orders />} />
// //                     <Route path="/reports" element={<Reports />} />
// //                     <Route path="/settings" element={<Settings />} />
// //                   </Routes>

// //                   <footer className="d-footer">
// //                     <div className="row align-items-center justify-content-between">
// //                       <div className="col-auto">
// //                         <p className="mb-0">2024 © copyrights</p>
// //                       </div>
// //                     </div>
// //                   </footer>
// //                 </main>
// //               </div>
// //             </ProtectedRoute>
// //           }
// //         />
// //       </Routes>
// //     </Router>
// //   );
// // }

// export default App;
