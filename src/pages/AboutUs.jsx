import { useState } from "react";
import "../assets/css/AboutUs.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function AboutUs() {

  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />

      <div className="dashboard-container">

        <Sidebar show={showSidebar} />

        <div className="dashboard-content">

          <div className="about-container">

            <div className="about-hero">
              <h1>About PadhAI Ka Addaa</h1>

              <p>
                Learn Skills. Build Your Career. Achieve Your Dreams.
              </p>
            </div>

            <div className="about-section">

              <h2>Who We Are</h2>

              <p>
                PadhAI Ka Addaa is an online learning platform designed to
                provide quality education for students across India. Our
                mission is to make learning simple, affordable, and
                accessible for everyone.
              </p>

            </div>

            <div className="about-section">

              <h2>Our Mission</h2>

              <p>
                Our mission is to empower students with practical skills,
                industry-focused courses, quizzes, notes and career guidance
                that help them achieve academic and professional success.
              </p>

            </div>

            <div className="about-section">

              <h2>What We Offer</h2>

              <ul>
                <li>✔ Online Video Courses</li>
                <li>✔ PDF Notes</li>
                <li>✔ Practice Quiz</li>
                <li>✔ Resume Builder</li>
                <li>✔ Certificates</li>
                <li>✔ Career Guidance</li>
                <li>✔ Affordable Paid Courses</li>
              </ul>

            </div>

            <div className="about-section">

              <h2>Why Choose Us?</h2>

              <ul>
                <li>Experienced Instructors</li>
                <li>Affordable Courses</li>
                <li>Easy Learning Experience</li>
                <li>Mobile Friendly Platform</li>
                <li>Lifetime Access to Purchased Courses</li>
                <li>Regular Content Updates</li>
              </ul>

            </div>

            <div className="about-section">

              <h2>Our Vision</h2>

              <p>
                We aim to become one of India's most trusted online learning
                platforms by helping millions of students improve their
                knowledge and build successful careers.
              </p>

            </div>

          </div>

        </div>

      </div>

    </>
  );
}

export default AboutUs;