import { useEffect, useState } from "react";
import axios from "axios";
import DashboardLayout from "../layouts/DashboardLayout";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaUserShield,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

import "../assets/css/adminUsers.css";

function AdminUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(
    "https://padhai-ka-addaa.onrender.com/api/admin/users",
    {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
);

      setUsers(response.data);
    } catch (error) {
      console.error("Error loading users:", error);
      alert("Unable to load users.");
    }
  };
const deleteUser = async (id) => {
  if (!window.confirm("Are you sure you want to delete this user?")) {
    return;
  }

  try {
    const token = localStorage.getItem("token");

    await axios.delete(
      `https://padhai-ka-addaa.onrender.com/api/admin/users/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    loadUsers();
  } catch (error) {
    console.error(error);
    alert("Delete failed.");
  }
};

  const getRoleIcon = (role) => {
    if (role === "ADMIN") return <FaUserShield />;
    if (role === "TEACHER") return <FaChalkboardTeacher />;
    return <FaUserGraduate />;
  };

  return (
    <DashboardLayout>
      <div className="users-header">
        <div>
          <h2>👥 User Management</h2>
          <p>Manage Students, Teachers & Admins</p>
        </div>

        <button className="btn btn-primary">
          + Add User
        </button>
      </div>

      <div className="users-table">
        <table className="table align-middle">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>

                  <td>
                    <div className="user-name">
                      <div className="avatar">
                        {user.fullName.charAt(0)}
                      </div>

                      {user.fullName}
                    </div>
                  </td>

                  <td>{user.email}</td>

                  <td>
                    <span className={`role ${user.role.toLowerCase()}`}>
                      {getRoleIcon(user.role)}
                      {" "}
                      {user.role}
                    </span>
                  </td>

                  <td>
                    <button className="btn btn-warning btn-sm me-2">
                      <FaEdit />
                    </button>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteUser(user.id)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}

export default AdminUsers;