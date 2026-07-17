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

  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "STUDENT",
  });

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

      console.error(error);

    }

  };

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const addUser = async () => {

    try {

      const token = localStorage.getItem("token");

      await axios.post(
        "https://padhai-ka-addaa.onrender.com/api/admin/users",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("User Added Successfully");

      setShowModal(false);

      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "STUDENT",
      });

      loadUsers();

    } catch (error) {

      console.error(error);

      alert("Add User Failed");

    }

  };

  const deleteUser = async (id) => {

    if (!window.confirm("Delete this user?")) return;

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

      alert("Delete Failed");

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

        <button
          className="btn btn-primary"
          onClick={() => setShowModal(true)}
        >
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
            {users.map((user) => (
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
                    {getRoleIcon(user.role)} {user.role}
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
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div
          className="modal d-block"
          style={{ background: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">

              <div className="modal-header">
                <h5>Add User</h5>

                <button
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>

              <div className="modal-body">

                <input
                  className="form-control mb-3"
                  placeholder="Full Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                />

                <input
                  className="form-control mb-3"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />

                <input
                  className="form-control mb-3"
                  placeholder="Phone Number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />

                <input
                  className="form-control mb-3"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />

                <select
                  className="form-select"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                >
                  <option value="STUDENT">Student</option>
                  <option value="TEACHER">Teacher</option>
                  <option value="ADMIN">Admin</option>
                </select>

              </div>

              <div className="modal-footer">

                <button
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>

                <button
                  className="btn btn-success"
                  onClick={addUser}
                >
                  Save User
                </button>

              </div>

            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}

export default AdminUsers;