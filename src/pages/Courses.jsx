import { useEffect, useState } from "react";
import { getCourses } from "../services/courseService";
import { Link } from "react-router-dom";
import "../assets/css/courses.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Courses() {

    const [courses, setCourses] = useState([]);
    const [showSidebar, setShowSidebar] = useState(false);

    useEffect(() => {
        loadCourses();
    }, []);

    const loadCourses = async () => {
        try {
            const response = await getCourses();
            console.log(response);
            setCourses(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>

            <Navbar
                toggleSidebar={() => setShowSidebar(!showSidebar)}
            />

            <div className="d-flex">

                <Sidebar show={showSidebar} />

                <div className="flex-grow-1 course-page">

                    <div className="course-header">

                        <h2 className="course-title">
                            📚 All Courses
                        </h2>

                        <select className="form-select course-sort">

                            <option>Popular</option>
                            <option>Newest</option>
                            <option>Price</option>

                        </select>

                    </div>

                    <div className="category-tabs">

                        <button className="category-btn active">
                            All
                        </button>

                        <button className="category-btn">
                            Programming
                        </button>

                        <button className="category-btn">
                            Database
                        </button>

                        <button className="category-btn">
                            Java
                        </button>

                        <button className="category-btn">
                            Web
                        </button>

                        <button className="category-btn">
                            Python
                        </button>

                    </div>

                    {courses.map((course) => (

                        <div
                            className="course-card p-3 mb-4"
                            key={course.id}
                        >

                            <div className="row align-items-center">

                                {/* Image */}

                                <div className="col-lg-3 col-12 mb-3 mb-lg-0">

                                    <img
                                        src={course.thumbnailUrl}
                                        alt={course.title}
                                        className="course-img img-fluid"
                                    />

                                </div>

                                {/* Content */}

                                <div className="col-lg-6 col-12 course-content">

                                    <h3>
                                        {course.title}
                                    </h3>

                                    <p className="text-muted">
                                        {course.description}
                                    </p>

                                    <div className="d-flex flex-wrap gap-3">

                                        <span className="level">
                                            Beginner to Advanced
                                        </span>

                                        <span className="rating">
                                            ⭐⭐⭐⭐⭐
                                        </span>

                                    </div>

                                    <div className="mt-3 d-flex flex-wrap gap-3">

                                        <span>👨‍🎓 450 Students</span>

                                        <span>🎥 25 Lessons</span>

                                    </div>

                                </div>

                                {/* Price */}

                                <div className="col-lg-3 col-12 text-lg-end text-start course-action">

                                    <div className="course-price">

                                        ₹{course.price}

                                        <span className="old-price">
                                            ₹999
                                        </span>

                                    </div>

                                    <Link
                                        to={`/course/${course.id}`}
                                        className="btn btn-primary mt-3"
                                    >
                                        View Details
                                    </Link>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </>
    );
}

export default Courses;