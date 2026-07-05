import { Link } from "react-router-dom";
import {
  FaBookOpen,
  FaUserGraduate,
  FaClipboardCheck,
  FaChalkboardTeacher,
} from "react-icons/fa";

import "../assets/css/hero.css";

function Hero() {
  return (
    <section className="hero-section">

      <div className="container-fluid">

        <div className="hero-content">

          <h1 className="hero-title">
            Your One Stop Platform
            <br />
            <span>For Complete Learning</span>
          </h1>

          <p className="hero-desc">
            Explore quality courses, video lectures, notes,
            quizzes and mock tests — all in one place.
          </p>

          <div className="hero-buttons">

            <Link
              to="/courses"
              className="btn btn-primary hero-btn"
            >
              Explore Courses
            </Link>

            <Link
              to="/mock-tests"
              className="btn btn-outline-primary hero-btn"
            >
              Try Mock Test
            </Link>

          </div>

          <div className="hero-stats">

            <div className="stat-card">

              <FaBookOpen className="stat-icon purple" />

              <div>
                <h6>50+</h6>
                <small>Courses</small>
              </div>

            </div>

            <div className="stat-card">

              <FaUserGraduate className="stat-icon blue" />

              <div>
                <h6>2K+</h6>
                <small>Students</small>
              </div>

            </div>

            <div className="stat-card">

              <FaClipboardCheck className="stat-icon orange" />

              <div>
                <h6>2K+</h6>
                <small>Tests Attempted</small>
              </div>

            </div>

            <div className="stat-card">

              <FaChalkboardTeacher className="stat-icon indigo" />

              <div>
                <h6>20+</h6>
                <small>Expert Teachers</small>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;