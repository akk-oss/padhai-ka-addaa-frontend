import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import "../assets/css/home.css";

function home() {
  const [showSidebar, setShowSidebar] = useState(false);

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


    // Razorpay Checkout
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

  const courses = [
    {
      id: 1,
      title: "UP Board Class 10th",
      subtitle: "Complete Board Exam Course",
      subjects: "Hindi • English • Maths • Science • SST",
      price: 399,
      oldPrice: 999,
      tag: "POPULAR",
      icon: "📚",
      gradient: "course-orange",
    },
    {
      id: 2,
      title: "CBSE Class 10th",
      subtitle: "Complete CBSE Syllabus",
      subjects: "Maths • Science • English • SST",
      price: 499,
      oldPrice: 1299,
      tag: "BEST SELLER",
      icon: "🎓",
      gradient: "course-blue",
    },
    {
      id: 3,
      title: "Navodaya Entrance",
      subtitle: "Class 6th JNVST Preparation",
      subjects: "Maths • Mental Ability • Language",
      price: 299,
      oldPrice: 699,
      tag: "POPULAR",
      icon: "🏫",
      gradient: "course-green",
    },
    {
      id: 4,
      title: "SSC CHSL",
      subtitle: "Complete SSC CHSL Course",
      subjects: "Maths • Reasoning • English • GK",
      price: 499,
      oldPrice: 999,
      tag: "EXAM SPECIAL",
      icon: "📝",
      gradient: "course-purple",
    },
    {
      id: 5,
      title: "SSC CGL",
      subtitle: "Complete CGL Preparation",
      subjects: "Quant • Reasoning • English • GK",
      price: 699,
      oldPrice: 1499,
      tag: "PREMIUM",
      icon: "🏆",
      gradient: "course-red",
    },
    {
      id: 6,
      title: "JEECUP Entrance",
      subtitle: "UP Polytechnic Preparation",
      subjects: "Maths • Physics • Chemistry",
      price: 399,
      oldPrice: 899,
      tag: "NEW",
      icon: "🎯",
      gradient: "course-teal",
    },
  ];

  const handleBuyCourse = (course) => {
    // Future Razorpay integration
    console.log("Buy Course:", course);

    // Example:
    // window.location.href = `/course/${course.id}`;
  };

  return (
    <>
      <Navbar
        toggleSidebar={() => setShowSidebar(!showSidebar)}
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
                    <span>तैयारी एक ही जगह</span>
                  </h1>

                  <p className="hero-description">
                    UP Board, CBSE, Navodaya, SSC CHSL,
                    SSC CGL और JEECUP Entrance Exam
                    की complete preparation courses के साथ।
                  </p>

                  <div className="hero-buttons">

                    <button className="btn btn-warning btn-lg">
                      Explore Courses →
                    </button>

                    <button className="btn btn-outline-light btn-lg">
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


                {/* HERO COURSE */}

                <div className="col-lg-5">

                  <div className="hero-course-card">

                    <div className="hero-course-label">
                      🔥 MOST POPULAR COURSE
                    </div>

                    <div className="hero-course-icon">
                      📚
                    </div>

                    <h2>
                      UP Board Class 10th
                    </h2>

                    <p>
                      Complete Board Exam Preparation
                    </p>

                    <div className="hero-course-list">

                      <div>✓ All Subjects</div>
                      <div>✓ Complete Syllabus</div>
                      <div>✓ Important Questions</div>
                      <div>✓ Previous Year Questions</div>
                      <div>✓ Notes & Mock Tests</div>

                    </div>

                    <div className="hero-price">
                      ₹399
                      <del>₹999</del>
                    </div>

                    <button
                      className="hero-buy-button"
                      onClick={() =>
                        handleBuyCourse(courses[0])
                      }
                    >
                      Buy Course →
                    </button>

                  </div>

                </div>

              </div>

            </div>
          </section>


          {/* ================= CATEGORIES ================= */}

          <section className="categories-section">

            <div className="container">

              <div className="section-heading">

                <span>EXAM CATEGORIES</span>

                <h2>
                  अपनी परीक्षा चुनें
                </h2>

                <p>
                  अपनी परीक्षा के अनुसार complete course चुनें
                </p>

              </div>


              <div className="row g-4">

                {categories.map((category, index) => (

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

                ))}

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

                {courses.map((course) => (

                  <div
                    className="col-xl-4 col-lg-6"
                    key={course.id}
                  >

                    <div className="course-card">

                      {/* COURSE HEADER */}

                      <div
                        className={`course-cover ${course.gradient}`}
                      >

                        <span className="course-tag">
                          {course.tag}
                        </span>

                        <div className="course-icon">
                          {course.icon}
                        </div>

                        <h3>
                          {course.title}
                        </h3>

                        <strong>
                          {course.subtitle}
                        </strong>

                      </div>


                      {/* COURSE BODY */}

                      <div className="course-body">

                        <h4>
                          {course.subtitle}
                        </h4>

                        <p className="course-subjects">
                          {course.subjects}
                        </p>


                        <div className="course-features">

                          <span>✓ Complete Syllabus</span>

                          <span>✓ Live Classes</span>

                          <span>✓ Notes & PDFs</span>

                          <span>✓ Mock Tests</span>

                        </div>


                        <div className="course-bottom">

                          <div className="course-price">

                            <strong>
                              ₹{course.price}
                            </strong>

                            <del>
                              ₹{course.oldPrice}
                            </del>

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

                ))}

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
                    <h4>Live Classes</h4>
                    <p>
                      Expert teachers की live classes
                    </p>
                  </div>

                </div>


                <div className="col-md-3">

                  <div className="why-card">
                    <div>📖</div>
                    <h4>Complete Notes</h4>
                    <p>
                      Chapter-wise notes और PDFs
                    </p>
                  </div>

                </div>


                <div className="col-md-3">

                  <div className="why-card">
                    <div>📝</div>
                    <h4>Mock Tests</h4>
                    <p>
                      Real exam pattern पर आधारित tests
                    </p>
                  </div>

                </div>


                <div className="col-md-3">

                  <div className="why-card">
                    <div>🏆</div>
                    <h4>Exam Focused</h4>
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

export default home;