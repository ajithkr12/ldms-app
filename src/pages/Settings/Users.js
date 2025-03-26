import React, { useState, useEffect, useTransition } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AddUserPopup from "./AddUserPopup";
import { getAllUsers } from "../../api/dashboardUserServices";

const Users = () => {
  const [show, setShow] = useState(false);
  const [editingUser, setEditingUser] = useState(null); // State to hold the user being edited
  const [listLoading, listLoader] = useTransition();
  const [userList, setUserList] = useState([]);

  const handleClose = () => {
    setShow(false);
    setEditingUser(null); // Reset editing user when popup is closed
  };

  const handleShow = () => setShow(true);

  const handleEdit = (user) => {
    setEditingUser(user); // Set the user to be edited
    setShow(true); // Open the popup
  };

  const fetchUserList = async () => {
    const data = await getAllUsers();
    // console.log(data);
    setUserList(data);
  };

  const refreshUserList = () => {
    listLoader(fetchUserList);
    console.log("refreshing user list");
  };

  useEffect(() => {
    listLoader(fetchUserList);
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-end mb-3">
        <Button className="btn btn-primary" onClick={handleShow}>
          Add User
        </Button>
      </div>

      <AddUserPopup
        show={show}
        handleClose={handleClose}
        refreshUserList={refreshUserList}
        initialData={editingUser || {}} // Pass the user being edited or an empty object
      />

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Update</th>
          </tr>
        </thead>
        {listLoading ? (
          <>loading..</>
        ) : (
          <tbody>
            {userList.map((user, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{user.fullName}</td>
                <td>{user.email}</td>
                <td>{user.role ? user.role.name : "Not defined"}</td>
                <td>
                  <Button
                    className="btn btn-secondary btn-sm"
                    onClick={() => handleEdit(user)} // Open popup with user data
                  >
                    Edit
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

export default Users;
