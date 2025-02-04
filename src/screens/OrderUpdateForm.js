import React, { useState } from "react";
import { useForm } from "react-hook-form";

function OrderUpdateForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(formData) {
    console.log("Updated Data:", formData);
    alert("Form updated successfully!");
    // e.preventDefault();

    // props.toggle();
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
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO */}
          <div className="xxl-12">Order ID:23451234567892345</div>
          <div className="xxl-12 fs-6 fw-bolder">Order Status</div>
          <div className="d-flex mt-6">
            <input type="checkbox" id="switch" name="hai" />
            <label for="switch" className="m-0">
              Toggle
            </label>
            <p className="my-0 mx-8">toogle switch</p>
          </div>
          <div className="d-flex mt-6">
            <input type="checkbox" id="switch" name="hai" />
            <label for="switch" className="m-0">
              Toggle
            </label>
            <p className="my-0 mx-8">Out For Delivery</p>
          </div>
          <div className="d-flex mt-6">
            <input type="checkbox" id="switch" name="hai" />
            <label for="switch" className="m-0">
              Toggle
            </label>
            <p className="my-0 mx-8">Delivered</p>
          </div>
          {/* OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO */}

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
