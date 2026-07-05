import DashboardLayout from "../layouts/DashboardLayout";
import { Link } from "react-router-dom";

function TeacherDashboard() {

    return (

        <DashboardLayout>

            <div className="mb-4">

                <h2 className="fw-bold">
                    👨‍🏫 Teacher Dashboard
                </h2>

                <p className="text-muted">
                    Manage your courses, lessons and students.
                </p>

            </div>

            <div className="row g-4">

                <div className="col-lg-3 col-md-6">

                    <div className="card shadow border-0 text-center p-4">

                        <h1 className="text-primary">12</h1>

                        <h5>Total Courses</h5>

                    </div>

                </div>

                <div className="col-lg-3 col-md-6">

                    <div className="card shadow border-0 text-center p-4">

                        <h1 className="text-success">520</h1>

                        <h5>Total Students</h5>

                    </div>

                </div>

                <div className="col-lg-3 col-md-6">

                    <div className="card shadow border-0 text-center p-4">

                        <h1 className="text-warning">84</h1>

                        <h5>Total Lessons</h5>

                    </div>

                </div>

                <div className="col-lg-3 col-md-6">

                    <div className="card shadow border-0 text-center p-4">

                        <h1 className="text-danger">15</h1>

                        <h5>Notes Uploaded</h5>

                    </div>

                </div>

            </div>

            <div className="row mt-5 g-4">

                <div className="col-lg-4">

                    <div className="card shadow border-0 p-4">

                        <h4>📚 Courses</h4>

                        <Link
                            to="/courses"
                            className="btn btn-primary mt-3"
                        >
                            Manage Courses
                        </Link>

                    </div>

                </div>

                <div className="col-lg-4">

                    <div className="card shadow border-0 p-4">

                        <h4>🎥 Lessons</h4>

                        <Link
                            to="/teacher/lessons"
                            className="btn btn-success mt-3"
                        >
                            Manage Lessons
                        </Link>

                    </div>

                </div>

                <div className="col-lg-4">

                    <div className="card shadow border-0 p-4">

                        <h4>📄 Notes</h4>

                        <Link
                            to="/upload-notes"
                            className="btn btn-warning mt-3"
                        >
                            Upload Notes
                        </Link>

                    </div>

                </div>

                <div className="col-lg-4">

                    <div className="card shadow border-0 p-4">

                        <h4>📝 Quiz</h4>

                        <Link
                            to="/teacher/quiz"
                            className="btn btn-info mt-3"
                        >
                            Manage Quiz
                        </Link>

                    </div>

                </div>

                <div className="col-lg-4">

                    <div className="card shadow border-0 p-4">

                        <h4>👨‍🎓 Students</h4>

                        <Link
                            to="/teacher/students"
                            className="btn btn-dark mt-3"
                        >
                            View Students
                        </Link>

                    </div>

                </div>

            </div>

        </DashboardLayout>

    );

}

export default TeacherDashboard;