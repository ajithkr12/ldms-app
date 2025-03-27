import React, { useState, useTransition, useEffect } from "react";
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
  const [name, setName] = useState(initialData.fullName || "");
  const [email, setEmail] = useState(initialData.email || "");
  const [password, setPassword] = useState(initialData.password || "");
  const [retypePassword, setRetypePassword] = useState(
    initialData.password || ""
  );
  const [selectedRoleId, setSelectedRoleId] = useState(
    initialData.roleId || ""
  );
  const [masters, setMasters] = useState({
    roles: [],
  });
  const [error, setError] = useState("");
  const [masatersLoading, masatersLoader] = useTransition();

  const fetchMasters = async () => {
    const data = await getAllRoles();

    setMasters((prevMasters) => ({
      ...prevMasters,
      roles: data,
    }));
  };

  // Update state when initialData changes
  useEffect(() => {
    console.log("initialData : ", initialData);
    setName(initialData.fullName || "");
    setEmail(initialData.email || "");
    setPassword(initialData.password || "");
    setRetypePassword(initialData.password || "");
    setSelectedRoleId(initialData.roleId || "");
  }, [initialData]);

  useEffect(() => {
    masatersLoader(fetchMasters);
  }, []);

  console.log("selectedRoleId : ", selectedRoleId);

  const handleSubmit = async () => {
    //  VALIDATION LOGIC START
    if (!name || !email || !password || !retypePassword) {
      setError("All fields are required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email format");
      return;
    }

    if (password !== retypePassword) {
      setError("Passwords do not match");
      return;
    }
    //  VALIDATION LOGIC END

    // const updatedUser = { name, email, password, roleId: selectedRoleId };

    if (initialData.fullName) {
      // edit user
      // console.log("Edit User : ", updatedUser);
      const res = await editDashboardUser(
        initialData.id,
        name,
        email,
        selectedRoleId
      );
      if (!res.success) {
        setError("Error creating user");
        return; // Stop execution if there is an error
      }
      // console.log("Add User : ", updatedUser);
      await refreshUserList();
      handleClose();
      return;
    }
    const res = await createDashboardUser(
      name,
      email,
      password,
      selectedRoleId
    );
    if (!res.success) {
      setError("Error creating user");
      return; // Stop execution if there is an error
    }
    // console.log("Add User : ", updatedUser);
    await refreshUserList();
    handleClose();
    // await handleSave(newUser);
  };

  if (!show) return null;

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
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {!initialData.id && (
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            )}

            {!initialData.id && (
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Re-type password"
                  value={retypePassword}
                  onChange={(e) => setRetypePassword(e.target.value)}
                />
              </div>
            )}

            <div className="form-group">
              <select
                value={selectedRoleId || ""}
                onChange={(e) => setSelectedRoleId(e.target.value)}
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
