import React, { useState, useEffect, useTransition, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import IconRightButton from "../components/IconRightButton";
import OrderUpdateForm from "../screens/OrderUpdateForm";

import * as OrderServices from "../api/orderServices";

const Orders = () => {
  const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format
  const twoDaysAgo = new Date();
  twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);
  const formattedTwoDaysAgo = twoDaysAgo.toISOString().split("T")[0]; // Get date 2 days ago in YYYY-MM-DD format

  const [activeTab, setActiveTab] = useState("Lpg");
  const [orderTypeTab, setOrderTypeTab] = useState("Lpg");
  const [openOrderUpdate, setOpenOrderUpdate] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState(null); // State to store selected order ID
  const [startDate, setStartDate] = useState(formattedTwoDaysAgo); // Set default start date to 2 days ago
  const [endDate, setEndDate] = useState(today); // Set default end date to today
  const location = useLocation();
  const navigate = useNavigate();
  const [listLoading, listLoader] = useTransition();
  const [orderList, setOrderList] = useState([]);

  const queryParams = new URLSearchParams(location.search);

  const fetchOrders = async () => {
    console.log("Location changed");

    const status = queryParams.get("status") || undefined;

    const startDate = queryParams.get("startDate");
    const endDate = queryParams.get("endDate");
    const resourceType = queryParams.get("resourceType");
    const page = queryParams.get("page");
    // const pageSize = queryParams.get("pageSize") ?? 15;

    // console.log("pages", page, pageSize);

    const response = await OrderServices.getOrders({
      status: status || "",
      startDate: startDate || "2025-03-12",
      endDate: endDate || "2025-03-14",
      resourceType: resourceType || undefined,
      page: page || 1,
      pageSize: 15,
    });

    setOrderList(response.orders);

    // Handle the query parameters as needed
    console.log({ status, startDate, endDate, resourceType, page });
    // console.log(response);
  };

  useEffect(() => {
    if (!listLoading) {
      listLoader(fetchOrders);
      //   hasFetchedOrders.current = true;
    }
  }, [location.search]);

  const updateURL = (params) => {
    const queryParams = new URLSearchParams(params).toString();
    navigate(`?${queryParams}`);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    tab = tab === "All" ? "" : tab;
    updateURL({ resourceType: tab, startDate, endDate });
  };

  const handleOrderTabChange = (tab) => {
    console.log("Order tab changed to", tab);
    setOrderTypeTab(tab);
    updateURL({ resourceType: activeTab, startDate, endDate, status: tab });
  };

  const handleDateChange = (start, end) => {
    setStartDate(start);
    setEndDate(end);
    updateURL({ resourceType: activeTab, startDate: start, endDate: end });
  };

  const togglePop = (orderId) => {
    setSelectedOrderId(orderId); // Set the selected order ID
    setOpenOrderUpdate(!openOrderUpdate);
  };

  return (
    <div className="dashboard-main-body">
      {openOrderUpdate && (
        <OrderUpdateForm
          toggle={togglePop}
          orderId={selectedOrderId}
          handleSubmit={fetchOrders}
        />
      )}

      <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
        <div style={{ marginBottom: "0px" }}>
          <button
            onClick={() => handleTabChange("Lpg")}
            style={{
              padding: "4px 22px",
              marginRight: "10px",
              cursor: "pointer",
              backgroundColor: activeTab === "Lpg" ? "#007bff" : "#ccc",
              color: activeTab === "Lpg" ? "white" : "black",
              border: "none",
              borderRadius: "5px",
            }}
          >
            LPG
          </button>
          <button
            onClick={() => handleTabChange("Water")}
            style={{
              padding: "4px 22px",
              marginRight: "10px",
              cursor: "pointer",
              backgroundColor: activeTab === "Water" ? "#007bff" : "#ccc",
              color: activeTab === "Water" ? "white" : "black",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Water
          </button>
          <button
            onClick={() => handleTabChange("All")}
            style={{
              padding: "4px 22px",
              cursor: "pointer",
              backgroundColor: activeTab === "All" ? "#007bff" : "#ccc",
              color: activeTab === "All" ? "white" : "black",
              border: "none",
              borderRadius: "5px",
            }}
          >
            All
          </button>
        </div>
      </div>

      <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
        <div className="d-flex align-items-center gap-4">
          {/* <div className="navbar-search" style={{ width: "450px" }}>
            <input type="text" name="search" placeholder="Search" />
            <iconify-icon
              icon="ion:search-outline"
              className="icon"
            ></iconify-icon>
          </div> */}
          <div className="card h-100">
            <div className="card-body p-10">
              <input
                type="date"
                name="startDate"
                value={startDate}
                onChange={(e) => handleDateChange(e.target.value, endDate)}
                placeholder="Start Date"
              />
            </div>
          </div>
          <div className="card h-100">
            <div className="card-body p-10">
              <input
                type="date"
                name="endDate"
                value={endDate}
                onChange={(e) => handleDateChange(startDate, e.target.value)}
                placeholder="End Date"
              />
            </div>
          </div>
          <select
            style={{ width: "200px" }}
            className="form-select"
            value={orderTypeTab}
            onChange={(e) => handleOrderTabChange(e.target.value)}
          >
            <option value="">All</option>
            <option value="ORDERED">New Orders</option>
            <option value="ORDER_CONFIRMED">Order Confirmed</option>
            <option value="OUT_OF_DELIVERY">Out For Delivery</option>
            <option value="DELIVERED">Delivered</option>
            <option value="CANCELLED">Cancelled</option>
          </select>
        </div>
      </div>

      <div className="row gy-4">
        {listLoading ? (
          <div className="col-xxl-9 d-flex justify-content-center align-items-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="col-xxl-12">
            <div className="card h-100">
              <div className="card-body p-24">
                <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between mb-20">
                  <h6 className="mb-2 fw-bold text-lg mb-0">
                    Latest Notifications
                  </h6>
                </div>
                <div className="table-responsive scroll-sm">
                  <table className="table bordered-table sm-table mb-0">
                    <thead>
                      <tr>
                        <th scope="col">Sl.No</th>
                        <th scope="col">Date </th>
                        <th scope="col">Details</th>
                        <th scope="col">Status</th>
                        <th scope="col" className="text-center">
                          Update
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {orderList.map((order, index) => (
                        <tr key={order.id}>
                          <td>{index + 1}</td>
                          <td>
                            {new Date(
                              order.customerChosenTime
                            ).toLocaleString()}
                          </td>
                          <td>
                            {order.customer.fullName +
                              " " +
                              order.customer.address}
                          </td>
                          <td>{order.orderStatus}</td>
                          <td className="text-center">
                            <button
                              onClick={() => togglePop(order.id)}
                              style={{
                                padding: "2px 22px",
                                cursor: "pointer",
                                backgroundColor: "#FFFFFF",
                                color: "#3A36DB",
                                border: "1px solid #3A36DB",
                                borderRadius: "5px",
                                fontSize: "14px",
                              }}
                            >
                              Update
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between mt-20">
                  <h6 className="mb-2 fw-bold text-lg mb-0"></h6>
                  <div className="d-flex align-items-center">
                    <a
                      href="#"
                      className="text-primary-600 hover-text-primary d-flex align-items-center gap-2"
                      onClick={() => {
                        const currentPage = parseInt(
                          queryParams.get("page") || 1,
                          10
                        );
                        if (currentPage > 1) {
                          updateURL({
                            ...Object.fromEntries(queryParams),
                            page: currentPage - 1,
                          });
                        }
                      }}
                    >
                      <iconify-icon
                        icon="solar:alt-arrow-left-linear"
                        className="icon"
                        style={{ fontSize: "24px" }}
                      ></iconify-icon>
                    </a>
                    <p
                      className="text-primary-500 hover-text-primary"
                      style={{ fontSize: "14px", margin: "0px 12px 0px 12px" }}
                    >
                      Page {queryParams.get("page") || 1}
                    </p>
                    <a
                      href="#"
                      className="text-primary-600 hover-text-primary d-flex align-items-center gap-2"
                      onClick={() => {
                        const currentPage = parseInt(
                          queryParams.get("page") || 1,
                          10
                        );
                        updateURL({
                          ...Object.fromEntries(queryParams),
                          page: currentPage + 1,
                        });
                      }}
                    >
                      <iconify-icon
                        icon="solar:alt-arrow-right-linear"
                        className="icon"
                        style={{ fontSize: "24px" }}
                      ></iconify-icon>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
