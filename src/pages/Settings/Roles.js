import React, { useState, useEffect, useTransition } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AddRolePopup from "./AddRolePopup";
import { getAllRoles } from "../../api/dashboardUserServices";

const Roles = () => {
  const [show, setShow] = useState(false);
  const [editingRole, setEditingRole] = useState(null); // State to hold the user being edited
  const [listLoading, listLoader] = useTransition();
  const [rolesList, setRolesList] = useState([]);

  const handleClose = () => {
    setShow(false);
    setEditingRole(null);
  };

  const handleShow = () => setShow(true);

  const handleEdit = (role) => {
    setEditingRole(role); // Set the user to be edited
    setShow(true); // Open the popup
  };

  const fetchRolesList = async () => {
    console.log("fetching roles list");

    const data = await getAllRoles();
    // console.log(data);
    setRolesList(data);
  };

  useEffect(() => {
    listLoader(fetchRolesList);
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-end mb-3">
        <Button className="btn btn-primary" onClick={handleShow}>
          Add Role
        </Button>
      </div>

      <AddRolePopup
        show={show}
        handleClose={handleClose}
        refreshRolesList={async () => {
          await listLoader(await fetchRolesList);
        }}
        initialData={editingRole || {}}
      />

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        {listLoading ? (
          <>loading..</>
        ) : (
          <tbody>
            {rolesList.map((user, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{user.label}</td>
                <td>
                  <Button
                    className="btn btn-secondary btn-sm"
                    onClick={() => handleEdit(user)}
                  >
                    Edit
                  </Button>
                </td>

                <td>
                  <Button
                    className="btn btn-secondary btn-sm"
                    // onClick={() => handleEdit(user)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default Roles;
