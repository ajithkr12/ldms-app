import React, { useState } from "react";
import { useForm } from "react-hook-form";

function CustomerForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
          <div className="header-title">Create New Customer</div>
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
          <table class="table bordered-table sm-table mb-0">
            <tbody>
              <tr>
                <td className="form-table-column">Name</td>
                <td className="form-table-column">
                  <input
                    className="m-0"
                    type="text"
                    // value={username}
                    // onChange={(e) => setUsername(e.target.value)}
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <p className="form-error-text">{errors.name.message}</p>
                  )}
                </td>
                <td className="form-table-column">Address</td>
                <td class="text-center">
                  <input
                    className="m-0"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </td>
              </tr>

              <tr>
                <td className="form-table-column">Number</td>

                <td className="form-table-column">
                  <input
                    className="m-0"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />{" "}
                </td>
                <td className="form-table-column">Email</td>
                <td class="text-center">
                  <input
                    className="m-0"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </td>
              </tr>
            </tbody>
          </table>
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
        </form>
        {/* <button onClick={props.toggle}>Close</button> */}
      </div>
    </div>
  );
}
export default CustomerForm;
