import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getCourseById } from "../services/courseService";
import { enrollCourse } from "../services/enrollmentService";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import "../assets/css/courseDetails.css";

function CourseDetails() {

    const { id } = useParams();

    const [course, setCourse] = useState(null);
    const [showSidebar, setShowSidebar] = useState(false);

    useEffect(() => {
        loadCourse();
    }, []);

    const loadCourse = async () => {
        try {
            const response = await getCourseById(id);
            setCourse(response.data);
        } catch (error) {
            console.log(error);
            alert("Failed to Load Course");
        }
    };

    const handleEnroll = async () => {
        try {
            await enrollCourse(course.id);
            alert("Enrollment Successful");
        } catch (error) {
            console.log(error);
            alert("Enrollment Failed");
        }
    };

    if (!course) {
        return (
            <div className="container mt-5">
                <h2>Loading...</h2>
            </div>
        );
    }

    return (
        <>
            

<Navbar
    simple={false}
    toggleSidebar={() => setShowSidebar(!showSidebar)}
/>


            <div className="d-flex">

                <Sidebar show={showSidebar} />

                <main
                    className="flex-grow-1"
                    style={{
                        background: "#f7f9fc",
                        minHeight: "100vh",
                        padding: "25px"
                    }}
                >

                    <div className="course-details-page">

                        <div className="row g-4">

                            {/* Image */}

                            <div className="col-lg-7">

                                <div className="course-banner">

                                    <img
                                        src={course.thumbnailUrl}
                                        alt={course.title}
                                        className="img-fluid rounded-4 w-100"
                                    />

                                </div>

                            </div>

                            {/* Right Card */}

                            <div className="col-lg-5">

                                <div className="info-card shadow-sm">

                                    <span className="badge bg-success mb-3">
                                        Beginner to Advanced
                                    </span>

                                    <h2 className="fw-bold">
                                        {course.title}
                                    </h2>

                                    <p className="text-muted">
                                        {course.description}
                                    </p>

                                    <div className="mb-3">
                                        ⭐⭐⭐⭐⭐
                                        <span className="ms-2 text-muted">
                                            4.8 (12,500 Students)
                                        </span>
                                    </div>

                                    <h2 className="text-success fw-bold">
                                        ₹{course.price}

                                        <span
                                            className="text-decoration-line-through text-secondary ms-2"
                                            style={{ fontSize: "20px" }}
                                        >
                                            ₹999
                                        </span>
                                    </h2>

                                    <hr />

                                    <div className="row text-center">

                                        <div className="col">
                                            <h5>25</h5>
                                            <small>Lessons</small>
                                        </div>

                                        <div className="col">
                                            <h5>12h</h5>
                                            <small>Hours</small>
                                        </div>

                                        <div className="col">
                                            <h5>✔</h5>
                                            <small>Certificate</small>
                                        </div>

                                        <div className="col">
                                            <h5>∞</h5>
                                            <small>Lifetime</small>
                                        </div>

                                    </div>

                                    <hr />

                                    <button
                                        className="btn btn-primary w-100"
                                        onClick={handleEnroll}
                                    >
                                        Enroll Now
                                    </button>

                                </div>

                            </div>

                        </div>

                        {/* Tabs */}

                        <div className="tab-section mt-5">

                            <ul className="nav nav-tabs">

                                <li className="nav-item">
                                    <button className="nav-link active">
                                        Overview
                                    </button>
                                </li>

                                <li className="nav-item">

                                    <Link
    to={`/course/${course.id}/curriculum`}
    className="nav-link"
>
    Curriculum
</Link>

                                </li>

                                <li className="nav-item">
                                    <button className="nav-link">
                                        Instructor
                                    </button>
                                </li>

                                <li className="nav-item">
                                    <button className="nav-link">
                                        Reviews
                                    </button>
                                </li>

                            </ul>

                            <div className="mt-4">

                                <h4 className="fw-bold">
                                    Course Overview
                                </h4>

                                <p>{course.description}</p>

                                <h5 className="mt-4">
                                    What You'll Learn
                                </h5>

                                <ul>

                                    <li>Complete Beginner to Advanced Concepts</li>
                                    <li>Real World Projects</li>
                                    <li>Interview Preparation</li>
                                    <li>Hands-on Coding Practice</li>
                                    <li>Certificate of Completion</li>

                                </ul>

                            </div>

                        </div>

                    </div>

                </main>

            </div>

        </>
    );
}

export default CourseDetails;