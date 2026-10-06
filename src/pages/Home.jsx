import { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

import "../assets/css/home.css";

function Home() {

  const [showSidebar, setShowSidebar] = useState(false);

  // =========================
  // COURSES FROM DATABASE
  // =========================
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  // =========================
  // FETCH COURSES
  // =========================
  useEffect(() => {

    const fetchCourses = async () => {

      try {

        const response = await axios.get(
          "https://padhai-ka-addaa.onrender.com/api/courses"
        );

        console.log("Courses API Response:", response.data);

        setCourses(response.data.data || []);

      } catch (error) {

        console.error(
          "Courses fetch error:",
          error
        );

      } finally {

        setLoading(false);

      }
    };

    fetchCourses();

  }, []);


  // =========================
  // CATEGORIES
  // =========================
  const categories = [
    {
      icon: "📚",
      title: "UP Board",
      subtitle: "Class 9th - 12th",
    },
    {
      icon: "🎓",
      title: "CBSE",
      subtitle: "Class 9th - 12th",
    },
    {
      icon: "🏫",
      title: "Navodaya",
      subtitle: "Class 6th Entrance",
    },
    {
      icon: "📝",
      title: "SSC CHSL",
      subtitle: "10+2 Level",
    },
    {
      icon: "🏆",
      title: "SSC CGL",
      subtitle: "Graduate Level",
    },
    {
      icon: "🎯",
      title: "JEECUP",
      subtitle: "Polytechnic Entrance",
    },
  ];


  // =========================
  // BUY COURSE / RAZORPAY
  // =========================
  const handleBuyCourse = async (course) => {

    const token = localStorage.getItem("token");

    if (!token) {

      alert("Please login first");

      window.location.href = "/login";

      return;
    }

    try {

      // Existing backend Razorpay order API
      const response = await axios.post(

        "https://padhaikaaddaa.online/api/payment/create-order",

        {
          courseId: course.id
        },

        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }

      );

      const data = response.data;

      console.log("Order Response:", data);


      // =========================
      // RAZORPAY CHECKOUT
      // =========================
      const options = {

        key: data.key,

        amount: data.amount,

        currency: "INR",

        name: "Padhai Ka Addaa",

        description: course.title,

        order_id: data.orderId,

        handler: function (paymentResponse) {

          console.log(
            "Payment ID:",
            paymentResponse.razorpay_payment_id
          );

          console.log(
            "Order ID:",
            paymentResponse.razorpay_order_id
          );

          console.log(
            "Signature:",
            paymentResponse.razorpay_signature
          );

          alert("Payment Successful!");

        },

        theme: {
          color: "#0d6efd"
        }

      };


      // Razorpay popup open
      const razorpay =
        new window.Razorpay(options);

      razorpay.open();


    } catch (error) {

      console.error(
        "Razorpay Error:",
        error
      );

      alert(
        error.response?.data?.message ||
        "Payment start nahi ho paya."
      );

    }

  };


  // =========================
  // HERO COURSE
  // =========================
  const heroCourse = courses.length > 0
    ? courses[0]
    : null;


  return (
    <>

      <Navbar
        toggleSidebar={() =>
          setShowSidebar(!showSidebar)
        }
      />


      <div className="home-layout">

        <Sidebar show={showSidebar} />


        <main className="home-main">


          {/* ================= HERO ================= */}

          <section className="home-hero">

            <div className="container">

              <div className="row align-items-center">


                <div className="col-lg-7">

                  <span className="hero-badge">
                    🚀 Welcome to Padhai Ka Addaa
                  </span>


                  <h1 className="hero-title">

                    आपकी सफलता की

                    <br />

                    <span>
                      तैयारी एक ही जगह
                    </span>

                  </h1>


                  <p className="hero-description">

                    UP Board, CBSE, Navodaya, SSC CHSL,
                    SSC CGL और JEECUP Entrance Exam
                    की complete preparation courses के साथ।

                  </p>


                  <div className="hero-buttons">

                    <button
                      className="btn btn-warning btn-lg"
                    >
                      Explore Courses →
                    </button>


                    <button
                      className="btn btn-outline-light btn-lg"
                    >
                      🎥 Free Classes
                    </button>

                  </div>


                  <div className="hero-stats">

                    <div>
                      <strong>10K+</strong>
                      <span>Students</span>
                    </div>

                    <div>
                      <strong>50+</strong>
                      <span>Courses</span>
                    </div>

                    <div>
                      <strong>1000+</strong>
                      <span>Classes</span>
                    </div>

                    <div>
                      <strong>24×7</strong>
                      <span>Learning</span>
                    </div>

                  </div>

                </div>


                {/* ================= HERO COURSE ================= */}

                <div className="col-lg-5">

                  <div className="hero-course-card">

                    {loading ? (

                      <div className="hero-course-label">
                        Loading course...
                      </div>

                    ) : heroCourse ? (

                      <>

                        <div className="hero-course-label">
                          🔥 {heroCourse.tag || "POPULAR COURSE"}
                        </div>


                        <div className="hero-course-icon">
                          {heroCourse.icon || "📚"}
                        </div>


                        <h2>
                          {heroCourse.title}
                        </h2>


                        <p>
                          {heroCourse.subtitle ||
                            heroCourse.description}
                        </p>


                        <div className="hero-course-list">

                          <div>
                            ✓ Complete Syllabus
                          </div>

                          <div>
                            ✓ Live Classes
                          </div>

                          <div>
                            ✓ Important Questions
                          </div>

                          <div>
                            ✓ Previous Year Questions
                          </div>

                          <div>
                            ✓ Notes & Mock Tests
                          </div>

                        </div>


                        <div className="hero-price">

                          ₹{heroCourse.price}

                          {heroCourse.oldPrice && (
                            <del>
                              ₹{heroCourse.oldPrice}
                            </del>
                          )}

                        </div>


                        <button
                          className="hero-buy-button"
                          onClick={() =>
                            handleBuyCourse(heroCourse)
                          }
                        >
                          Buy Course →

                        </button>

                      </>

                    ) : (

                      <div className="hero-course-label">
                        No course available
                      </div>

                    )}

                  </div>

                </div>

              </div>

            </div>

          </section>


          {/* ================= CATEGORIES ================= */}

          <section className="categories-section">

            <div className="container">

              <div className="section-heading">

                <span>
                  EXAM CATEGORIES
                </span>

                <h2>
                  अपनी परीक्षा चुनें
                </h2>

                <p>
                  अपनी परीक्षा के अनुसार complete course चुनें
                </p>

              </div>


              <div className="row g-4">

                {categories.map(
                  (category, index) => (

                    <div
                      className="col-xl-2 col-lg-4 col-md-6"
                      key={index}
                    >

                      <div className="category-card">

                        <div className="category-icon">
                          {category.icon}
                        </div>

                        <h3>
                          {category.title}
                        </h3>

                        <p>
                          {category.subtitle}
                        </p>

                        <button>
                          View Courses →
                        </button>

                      </div>

                    </div>

                  )
                )}

              </div>

            </div>

          </section>


          {/* ================= POPULAR COURSES ================= */}

          <section className="popular-section">

            <div className="container">

              <div className="section-heading">

                <span>
                  ⭐ POPULAR COURSES
                </span>

                <h2>
                  अपने लक्ष्य के लिए सही Course चुनें
                </h2>

                <p>
                  Complete syllabus और exam-focused preparation
                </p>

              </div>


              <div className="row g-4">


                {loading ? (

                  <div className="col-12 text-center">

                    <h4>
                      Courses loading...
                    </h4>

                  </div>

                ) : courses.length === 0 ? (

                  <div className="col-12 text-center">

                    <h4>
                      अभी कोई course available नहीं है।
                    </h4>

                  </div>

                ) : (

                  courses.map((course) => (

                    <div
                      className="col-xl-4 col-lg-6"
                      key={course.id}
                    >

                      <div className="course-card">


                        {/* COURSE HEADER */}

                        <div
                          className={`course-cover ${
                            course.gradient ||
                            "course-blue"
                          }`}
                        >

                          <span className="course-tag">

                            {course.tag ||
                              "COURSE"}

                          </span>


                          <div className="course-icon">

                            {course.icon ||
                              "📚"}

                          </div>


                          <h3>

                            {course.title}

                          </h3>


                          <strong>

                            {course.subtitle ||
                              course.description}

                          </strong>

                        </div>


                        {/* COURSE BODY */}

                        <div className="course-body">

                          <h4>

                            {course.subtitle ||
                              course.title}

                          </h4>


                          <p className="course-subjects">

                            {course.subjects ||
                              "Complete Course"}

                          </p>


                          <div className="course-features">

                            <span>
                              ✓ Complete Syllabus
                            </span>

                            <span>
                              ✓ Live Classes
                            </span>

                            <span>
                              ✓ Notes & PDFs
                            </span>

                            <span>
                              ✓ Mock Tests
                            </span>

                          </div>


                          <div className="course-bottom">


                            <div className="course-price">

                              <strong>

                                ₹{course.price}

                              </strong>


                              {course.oldPrice && (

                                <del>

                                  ₹{course.oldPrice}

                                </del>

                              )}

                            </div>


                            <button
                              onClick={() =>
                                handleBuyCourse(course)
                              }
                            >
                              Buy Now →
                            </button>


                          </div>

                        </div>

                      </div>

                    </div>

                  ))

                )}

              </div>

            </div>

          </section>


          {/* ================= WHY US ================= */}

          <section className="why-section">

            <div className="container">

              <div className="section-heading light">

                <span>
                  WHY PADHAI KA ADDAA?
                </span>

                <h2>
                  आपकी सफलता, हमारी जिम्मेदारी
                </h2>

                <p>
                  Exam preparation के लिए जरूरी सभी सुविधाएं
                </p>

              </div>


              <div className="row g-4">


                <div className="col-md-3">

                  <div className="why-card">

                    <div>🎥</div>

                    <h4>
                      Live Classes
                    </h4>

                    <p>
                      Expert teachers की live classes
                    </p>

                  </div>

                </div>


                <div className="col-md-3">

                  <div className="why-card">

                    <div>📖</div>

                    <h4>
                      Complete Notes
                    </h4>

                    <p>
                      Chapter-wise notes और PDFs
                    </p>

                  </div>

                </div>


                <div className="col-md-3">

                  <div className="why-card">

                    <div>📝</div>

                    <h4>
                      Mock Tests
                    </h4>

                    <p>
                      Real exam pattern पर आधारित tests
                    </p>

                  </div>

                </div>


                <div className="col-md-3">

                  <div className="why-card">

                    <div>🏆</div>

                    <h4>
                      Exam Focused
                    </h4>

                    <p>
                      Important Questions और PYQs
                    </p>

                  </div>

                </div>


              </div>

            </div>

          </section>


          {/* ================= CTA ================= */}

          <section className="cta-section">

            <div className="container">

              <div className="course-cta">

                <div>

                  <span>
                    🎯 START YOUR PREPARATION TODAY
                  </span>

                  <h2>
                    अपने Exam की तैयारी आज ही शुरू करें
                  </h2>

                  <p>
                    Affordable Courses • Complete Syllabus •
                    Exam Focused Preparation
                  </p>

                </div>


                <button>
                  Explore All Courses →
                </button>

              </div>

            </div>

          </section>


          <Footer />

        </main>

      </div>

    </>

  );

}

export default Home;