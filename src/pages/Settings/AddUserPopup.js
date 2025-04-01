import React, { useState, useEffect } from "react";
import "./AddUserPopup.css";
import {
  createDashboardUser,
  editDashboardUser,
  getAllRoles,
} from "../../api/dashboardUserServices";

const AddUserPopup = ({
  show,
  handleClose,
  refreshUserList,
  initialData = {},
}) => {
  const [state, setState] = useState({
    name: initialData.fullName || "",
    email: initialData.email || "",
    password: initialData.password || "",
    retypePassword: initialData.password || "",
    selectedRoleId: initialData.roleId || "",
    masters: { roles: [] },
    error: "",
  });

  const fetchMasters = async () => {
    if (!show) return;
    const data = await getAllRoles();
    setState((prevState) => ({
      ...prevState,
      masters: { roles: data },
    }));
  };

  // Update state when initialData changes
  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      name: initialData.fullName || "",
      email: initialData.email || "",
      password: initialData.password || "",
      retypePassword: initialData.password || "",
      selectedRoleId: initialData.roleId || "",
    }));
  }, [initialData]);

  useEffect(() => {
    fetchMasters();
  }, [show]);

  const handleInputChange = (field, value) => {
    setState((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
    const { name, email, password, retypePassword, selectedRoleId } = state;

    // VALIDATION LOGIC START
    if (!name || !email || !password || !retypePassword) {
      setState((prevState) => ({
        ...prevState,
        error: "All fields are required",
      }));
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setState((prevState) => ({
        ...prevState,
        error: "Invalid email format",
      }));
      return;
    }

    if (password !== retypePassword) {
      setState((prevState) => ({
        ...prevState,
        error: "Passwords do not match",
      }));
      return;
    }
    // VALIDATION LOGIC END

    const res = initialData.fullName
      ? await editDashboardUser(initialData.id, name, email, selectedRoleId)
      : await createDashboardUser(name, email, password, selectedRoleId);

    if (!res.success) {
      setState((prevState) => ({
        ...prevState,
        error: "Error creating user",
      }));
      return;
    }

    await refreshUserList();
    handleClose();
  };

  if (!show) return null;

  const {
    name,
    email,
    password,
    retypePassword,
    selectedRoleId,
    masters,
    error,
  } = state;

  return (
    <div className="modal-overlay">
      <div
        className="modal-container"
        style={{ width: "400px", height: "500px" }}
      >
        <div className="modal-header">
          <h6>{initialData.name ? "Edit User" : "Add User"}</h6>
          <button
            className="close-button"
            onClick={handleClose}
            style={{
              backgroundColor: "red",
              color: "white",
              border: "none",
              padding: "2px",
              height: "25px",
              width: "25px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            &times;
          </button>
        </div>
        <div className="modal-body">
          {error && <div className="error-message">{error}</div>}
          <form>
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => handleInputChange("name", e.target.value)}
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
            </div>

            {!initialData.id && (
              <>
                <div className="form-group">
                  <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) =>
                      handleInputChange("password", e.target.value)
                    }
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    placeholder="Re-type password"
                    value={retypePassword}
                    onChange={(e) =>
                      handleInputChange("retypePassword", e.target.value)
                    }
                  />
                </div>
              </>
            )}

            <div className="form-group">
              <select
                value={selectedRoleId || ""}
                onChange={(e) =>
                  handleInputChange("selectedRoleId", e.target.value)
                }
              >
                <option value="" disabled>
                  Select a role
                </option>
                {masters.roles.map((role) => (
                  <option key={role.id} value={role.id}>
                    {role.name}
                  </option>
                ))}
              </select>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button className="btn-secondary" onClick={handleClose}>
            Close
          </button>
          <button className="btn-primary" onClick={handleSubmit}>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddUserPopup;
