import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as OrderServices from "../api/orderServices";

const ORDER_STATUSES = {
  ORDERED: { label: "Ordered", value: "ORDERED" },
  ORDER_CONFIRMED: { label: "Order Confirmed", value: "ORDER_CONFIRMED" },
  OUT_OF_DELIVERY: { label: "Out of Delivery", value: "OUT_OF_DELIVERY" },
  DELIVERED: { label: "Delivered", value: "DELIVERED" },
  CANCELLED: { label: "Cancelled", value: "CANCELLED" },
};

function OrderUpdateForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(formData) {
    try {
      const response = await OrderServices.updateOrderStatus(
        props.orderId,
        formData.orderStatus
      );
      console.log("Updated Data:", response);
      alert("Form updated successfully!");
      handleSubmit();
      props.toggle(); // Close the popup after successful update
    } catch (error) {
      console.error("Error updating order status:", error);
      alert("Failed to update order status. Please try again.");
    }
  }

  function closePopup(e) {
    e.preventDefault();
    props.toggle();
  }

  return (
    <div className="popup">
      <div className="popup-inner">
        <div className="popup-header d-flex justify-content-between align-items-center">
          <div className="header-title">View And Update Order</div>
          <button
            className="has-indicator w-40-px h-40-px bg-neutral-200 rounded-circle d-flex justify-content-center align-items-center m-0"
            type="button"
            onClick={closePopup}
          >
            <iconify-icon
              icon="iconoir:xmark"
              className="text-primary-light text-xl"
            ></iconify-icon>
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* <div className="xxl-12">Order ID: {props.orderId}</div> */}
          <div className="xxl-12 fs-6 fw-bolder">Order Status</div>
          <div className="d-flex mt-6">
            <select
              {...register("orderStatus")}
              defaultValue={ORDER_STATUSES.ORDERED.value}
              className="form-select"
            >
              {Object.values(ORDER_STATUSES).map((status) => (
                <option key={status.value} value={status.value}>
                  {status.label}
                </option>
              ))}
            </select>
          </div>
          <div
            className="popup-footer d-flex justify-content-end align-items-center"
            style={{ minWidth: "640px" }}
          >
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
              Update
            </button>
          </div>
        </form>
        {/* <button onClick={props.toggle}>Close</button> */}
      </div>
    </div>
  );
}
export default OrderUpdateForm;
