import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import {
    FaUserGraduate,
    FaChalkboardTeacher,
    FaUserShield,
    FaEdit,
    FaTrash
} from "react-icons/fa";

import "../assets/css/adminUsers.css";

function AdminUsers() {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        setUsers([
            {
                id: 1,
                fullName: "Alok Kushwaha",
                email: "alok@gmail.com",
                role: "STUDENT"
            },
            {
                id: 2,
                fullName: "Rahul Kumar",
                email: "rahul@gmail.com",
                role: "TEACHER"
            },
            {
                id: 3,
                fullName: "Admin",
                email: "admin@gmail.com",
                role: "ADMIN"
            }
        ]);

    }, []);

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

                        {

                            users.map(user => (

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

                                            {user.role}

                                        </span>

                                    </td>

                                    <td>

                                        <button className="btn btn-warning btn-sm me-2">

                                            <FaEdit />

                                        </button>

                                        <button className="btn btn-danger btn-sm">

                                            <FaTrash />

                                        </button>

                                    </td>

                                </tr>

                            ))

                        }

                    </tbody>

                </table>

            </div>

        </DashboardLayout>

    );

}

export default AdminUsers;