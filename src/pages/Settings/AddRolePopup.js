import React, { useState, useEffect } from "react";
import "./AddUserPopup.css";
import {
  getResourcesAndAccessMasters,
  createRoleAndAssignAccess,
  getRoleResourceAccess,
} from "../../api/dashboardUserServices";

const AddRolePopup = ({ initialData, show, handleClose, refreshRolesList }) => {
  const [masters, setMasters] = useState({ resources: [], accesses: [] });
  const [formState, setFormState] = useState({
    roleName: initialData.label || "",
    resourceAccessMap: [],
    error: "",
  });

  // Fetch master data and default resource-access map
  const fetchMasters = async () => {
    if (!show) return;

    const masterData = await getResourcesAndAccessMasters();
    setMasters({
      resources: masterData.resources,
      accesses: masterData.accesses,
    });

    if (initialData.id !== undefined) {
      await fetchDefaultResourceAccessMap(initialData.id, masterData);
    } else {
      setDefaultResourceAccessMap(masterData);
    }
  };

  const fetchDefaultResourceAccessMap = async (roleId, masterData) => {
    const resourcesAndAccesses = await getRoleResourceAccess(roleId);
    const defaultResourceAccessMap = resourcesAndAccesses.map((entry) => ({
      resourceId: entry.resourceId,
      accessId: entry.accessId,
    }));
    setFormState((prevState) => ({
      ...prevState,
      roleName: initialData.label,
      resourceAccessMap: defaultResourceAccessMap,
    }));
  };

  const setDefaultResourceAccessMap = (masterData) => {
    const disabledAccess = masterData.accesses.find(
      (access) => access.level === "DISABLED"
    );
    const defaultResourceAccessMap = masterData.resources.map((resource) => ({
      resourceId: resource.id,
      accessId: disabledAccess.id,
    }));
    setFormState((prevState) => ({
      ...prevState,
      roleName: initialData.label,
      resourceAccessMap: defaultResourceAccessMap,
    }));
  };

  const handleInputChange = (field, value) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleAccessChange = (resourceId, accessId) => {
    setFormState((prevState) => ({
      ...prevState,
      resourceAccessMap: prevState.resourceAccessMap.map((entry) =>
        entry.resourceId === resourceId ? { ...entry, accessId } : entry
      ),
    }));
  };

  const handleSubmit = async () => {
    const { roleName, resourceAccessMap } = formState;

    if (!roleName) {
      setFormState((prevState) => ({
        ...prevState,
        error: "Role name is required",
      }));
      return;
    }

    const payload = { roleName, resourceAccessMap };
    await createRoleAndAssignAccess(payload);
    await refreshRolesList();
    handleClose();
  };

  useEffect(() => {
    if (show) fetchMasters();
  }, [show]);

  if (!show) return null;

  const { roleName, resourceAccessMap, error } = formState;
  const { resources, accesses } = masters;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h6>Add Role</h6>
          <button className="close-button" onClick={handleClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          {error && <div className="error-message">{error}</div>}
          <form>
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter role name"
                value={roleName}
                onChange={(e) => handleInputChange("roleName", e.target.value)}
              />
            </div>

            <h6>Resources and Accesses</h6>
            <table className="resource-access-table">
              <thead>
                <tr>
                  <th>Resource</th>
                  <th>Access</th>
                </tr>
              </thead>
              <tbody>
                {resources.map((resource) => (
                  <ResourceAccessRow
                    key={resource.id}
                    resource={resource}
                    accesses={accesses}
                    resourceAccessMap={resourceAccessMap}
                    handleAccessChange={handleAccessChange}
                  />
                ))}
              </tbody>
            </table>
          </form>
        </div>
        <div className="modal-footer">
          <button className="btn-secondary" onClick={handleClose}>
            Close
          </button>
          <button className="btn-primary" onClick={handleSubmit}>
            Save Role
          </button>
        </div>
      </div>
    </div>
  );
};

const ResourceAccessRow = ({
  resource,
  accesses,
  resourceAccessMap,
  handleAccessChange,
}) => {
  const selectedAccessId =
    resourceAccessMap.find((entry) => entry.resourceId === resource.id)
      ?.accessId || "";

  return (
    <tr>
      <td>{resource.name}</td>
      <td>
        <select
          value={selectedAccessId}
          onChange={(e) => handleAccessChange(resource.id, e.target.value)}
        >
          <option value="" disabled>
            Select access
          </option>
          {accesses.map((access) => (
            <option key={access.id} value={access.id}>
              {access.level}
            </option>
          ))}
        </select>
      </td>
    </tr>
  );
};

export default AddRolePopup;
