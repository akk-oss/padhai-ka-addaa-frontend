import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import { getMyCourses } from "../services/myCourseService";
import ProgressChart from "../components/ProgressChart";
import "../assets/css/studentDashboard.css";

function StudentDashboard() {

    const [courses, setCourses] = useState([]);
    const [totalLessons, setTotalLessons] = useState(0);
    const [completedLessons, setCompletedLessons] = useState(0);
    const [overallProgress, setOverallProgress] = useState(0);

    useEffect(() => {
        loadCourses();
    }, []);

    const loadCourses = async () => {

        try {

            const response = await getMyCourses(1);

            const data = Array.isArray(response) ? response : [];

            setCourses(data);

            let lessons = 0;
            let completed = 0;

            data.forEach(course => {

                lessons += course.totalLessons || 0;
                completed += course.completedLessons || 0;

            });

            setTotalLessons(lessons);
            setCompletedLessons(completed);

            if (lessons > 0) {
                setOverallProgress(
                    Math.round((completed / lessons) * 100)
                );
            }

        } catch (err) {

            console.log(err);
            setCourses([]);

        }

    };

    return (

        <DashboardLayout>

            {/* Welcome */}

            <div className="welcome-card">

                <div>

                    <h2>

                        👋 Welcome Back,
                        {" "}
                        {localStorage.getItem("fullName") || "Student"}

                    </h2>

                    <p>

                        Keep learning, keep growing!

                    </p>

                </div>

                <img
                    src="/images/student.png"
                    alt="student"
                    className="student-img"
                />

            </div>

            {/* Stats */}

            <div className="row mt-4">

                <div className="col-lg-3 col-md-6 mb-4">

                    <div className="stats-card">

                        <h2>{courses.length}</h2>

                        <p>Enrolled Courses</p>

                    </div>

                </div>

                <div className="col-lg-3 col-md-6 mb-4">

                    <div className="stats-card green">

                        <h2>{completedLessons}</h2>

                        <p>Completed Lessons</p>

                    </div>

                </div>

                <div className="col-lg-3 col-md-6 mb-4">

                    <div className="stats-card red">

                        <h2>{overallProgress}%</h2>

                        <p>Average Score</p>

                    </div>

                </div>

                <div className="col-lg-3 col-md-6 mb-4">

                    <div className="stats-card purple">

                        <h2>{totalLessons}</h2>

                        <p>Total Lessons</p>

                    </div>

                </div>

            </div>

            {/* Bottom */}

            <div className="row mt-4">

                {/* Continue Learning */}

                <div className="col-lg-7">

                    <div className="dashboard-box">

                        <div className="d-flex justify-content-between mb-3">

                            <h4>

                                Continue Learning

                            </h4>

                        </div>

                        {

                            courses.map(course => (

                                <div
                                    key={course.id}
                                    className="course-item"
                                >

                                    <img
                                        src="/images/springboot.png"
                                        className="course-image"
                                        alt=""
                                    />

                                    <div className="course-info">

                                        <h6>

                                            {course.courseTitle}

                                        </h6>

                                        <small>

                                            Progress {course.progress ?? 0}%

                                        </small>

                                        <div className="progress mt-2">

                                            <div
                                                className="progress-bar bg-primary"
                                                style={{
                                                    width: `${course.progress ?? 0}%`
                                                }}
                                            ></div>

                                        </div>

                                    </div>

                                    <Link
                                        to={`/course/${course.courseId}/lessons`}
                                        className="btn btn-primary btn-sm"
                                    >

                                        Continue

                                    </Link>

                                </div>

                            ))

                        }

                    </div>

                </div>

                {/* Upcoming Tests */}

                <div className="col-lg-5">

                    <div className="dashboard-box">

                        <div className="d-flex justify-content-between mb-3">

                            <h4>

                                Upcoming Tests

                            </h4>

                            <Link to="/course/1/quiz">

                                View All

                            </Link>

                        </div>

                        <div className="test-item">

                            <div>

                                <h6>

                                    Java Mock Test

                                </h6>

                                <small>

                                    03 Jul 2026

                                </small>

                            </div>

                            <Link
                                to="/course/1/quiz"
                                className="btn btn-primary btn-sm"
                            >

                                Start

                            </Link>

                        </div>

                        <div className="test-item">

                            <div>

                                <h6>

                                    Spring Boot Quiz

                                </h6>

                                <small>

                                    05 Jul 2026

                                </small>

                            </div>

                            <Link
                                to="/course/1/quiz"
                                className="btn btn-primary btn-sm"
                            >

                                Start

                            </Link>

                        </div>

                        <div className="test-item">

                            <div>

                                <h6>

                                    DBMS Test

                                </h6>

                                <small>

                                    08 Jul 2026

                                </small>

                            </div>

                            <Link
                                to="/course/1/quiz"
                                className="btn btn-primary btn-sm"
                            >

                                Start

                            </Link>

                        </div>

                    </div>

                </div>

            </div>

            {/* Chart */}

            <div className="mt-4">

                <ProgressChart />

            </div>

        </DashboardLayout>

    );

}

export default StudentDashboard;