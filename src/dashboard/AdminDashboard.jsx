import DashboardLayout from "../layouts/DashboardLayout";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";



function AdminDashboard() {
    const [stats, setStats] = useState({
    totalStudents: 0,
    totalTeachers: 0,
    totalCourses: 0,
    totalLessons: 0,
});

useEffect(() => {
    loadDashboard();
}, []);

const loadDashboard = async () => {
    try {

        const token = localStorage.getItem("token");

        const response = await axios.get(
            "https://padhai-ka-addaa.onrender.com/api/dashboard/admin",
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        setStats(response.data);

    } catch (error) {
        console.error(error);
    }
};

    return (

        <DashboardLayout>

            <div className="mb-4">

                <h2 className="fw-bold">
                    👑 Admin Dashboard
                </h2>

                <p className="text-muted">
                    Welcome Admin! Manage the complete LMS platform.
                </p>

            </div>

            {/* Dashboard Cards */}

            <div className="row g-4">

                <div className="col-lg-3 col-md-6">

                    <div className="card shadow border-0 rounded-4 text-center p-4 h-100">

                        <h1 className="text-primary display-5 fw-bold">
                           {stats.totalStudents}
                        </h1>

                        <h5>Total Students</h5>

                    </div>

                </div>

                <div className="col-lg-3 col-md-6">

                    <div className="card shadow border-0 rounded-4 text-center p-4 h-100">

                        <h1 className="text-success display-5 fw-bold">
                       {stats.totalTeachers}
                        </h1>

                        <h5>Total Teachers</h5>

                    </div>

                </div>

                <div className="col-lg-3 col-md-6">

                    <div className="card shadow border-0 rounded-4 text-center p-4 h-100">

                        <h1 className="text-warning display-5 fw-bold">
                          {stats.totalCourses}
                        </h1>

                        <h5>Total Courses</h5>

                    </div>

                </div>

                <div className="col-lg-3 col-md-6">

                    <div className="card shadow border-0 rounded-4 text-center p-4 h-100">

                        <h1 className="text-danger display-5 fw-bold">
                           {stats.totalLessons}
                        </h1>

                        <h5>Total Lessons</h5>

                    </div>

                </div>

            </div>

            {/* Quick Actions */}

            <div className="row mt-5 g-4">

                <div className="col-lg-4">

                    <div className="card shadow border-0 p-4">

                        <h4>👨 Users</h4>

                        <p className="text-muted">
                            Manage Students & Teachers
                        </p>

                        <Link
                            to="/admin/users"
                            className="btn btn-primary w-100"
                        >
                            Manage Users
                        </Link>

                    </div>

                </div>

                <div className="col-lg-4">

                    <div className="card shadow border-0 p-4">

                        <h4>📚 Courses</h4>

                        <p className="text-muted">
                            Create & Manage Courses
                        </p>

                        <Link
                            to="/courses"
                            className="btn btn-success w-100"
                        >
                            Manage Courses
                        </Link>

                    </div>

                </div>

                <div className="col-lg-4">

                    <div className="card shadow border-0 p-4">

                        <h4>📄 Notes</h4>

                        <p className="text-muted">
                            Upload & Manage Notes
                        </p>

                        <Link
                            to="/upload-notes"
                            className="btn btn-warning w-100"
                        >
                            Manage Notes
                        </Link>

                    </div>

                </div>

                <div className="col-lg-4">

                    <div className="card shadow border-0 p-4">

                        <h4>📝 Quiz</h4>

                        <p className="text-muted">
                            Create & Manage Quiz
                        </p>

                        <Link
                            to="/teacher/quiz"
                            className="btn btn-info w-100"
                        >
                            Manage Quiz
                        </Link>

                    </div>

                </div>

                <div className="col-lg-4">

                    <div className="card shadow border-0 p-4">

                        <h4>📂 Categories</h4>

                        <p className="text-muted">
                            Manage Course Categories
                        </p>

                        <Link
                            to="/categories"
                            className="btn btn-secondary w-100"
                        >
                            Categories
                        </Link>

                    </div>

                </div>

                <div className="col-lg-4">

                    <div className="card shadow border-0 p-4">

                        <h4>📊 Reports</h4>

                        <p className="text-muted">
                            View LMS Reports
                        </p>

                        <Link
                            to="/admin/reports"
                            className="btn btn-dark w-100"
                        >
                            Reports
                        </Link>

                    </div>

                </div>

            </div>

            {/* Recent Activities */}

            <div className="card shadow border-0 mt-5">

                <div className="card-header bg-primary text-white">

                    <h5 className="mb-0">
                        Recent Activities
                    </h5>

                </div>

                <div className="card-body">

                    <table className="table table-hover">

                        <thead>

                            <tr>

                                <th>User</th>

                                <th>Activity</th>

                                <th>Date</th>

                            </tr>

                        </thead>

                        <tbody>

                            <tr>

                                <td>Alok Kushwaha</td>

                                <td>Uploaded Java Notes</td>

                                <td>Today</td>

                            </tr>

                            <tr>

                                <td>Teacher 1</td>

                                <td>Created Spring Boot Course</td>

                                <td>Today</td>

                            </tr>

                            <tr>

                                <td>Student 5</td>

                                <td>Completed Java Quiz</td>

                                <td>Yesterday</td>

                            </tr>

                        </tbody>

                    </table>

                </div>

            </div>

        </DashboardLayout>

    );

}


export default AdminDashboard;