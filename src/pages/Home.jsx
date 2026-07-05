import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import FeaturedCourses from "../components/FeaturedCourses";
import LiveClasses from "../components/LiveClasses";
import NotesSection from "../components/NotesSection";
import MockTestSection from "../components/MockTestSection";
import Footer from "../components/Footer";
import PopularCourses from "../components/PopularCourses";
import Navbar from "../components/Navbar";

function Home() {

  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>

      <Navbar
        toggleSidebar={() => setShowSidebar(!showSidebar)}
      />

      <div className="d-flex">

        <Sidebar show={showSidebar} />

        <main
          className="flex-grow-1"
          style={{
            background: "#f7f9fc",
            minHeight: "100vh"
          }}
        >

          {/* Hero */}
          <Hero />

          {/* Popular Courses */}
          <div className="container-fluid px-4 py-5">

            <PopularCourses />

          </div>

          {/* Categories */}
          <div className="container-fluid px-4">

            <section className="mb-5">

              <h2 className="fw-bold mb-4">
                Browse Categories
              </h2>

              <Categories />

            </section>

            {/* Featured Courses */}

            <section className="mb-5">

              <h2 className="fw-bold mb-4">
                Featured Courses
              </h2>

              <FeaturedCourses />

            </section>

            {/* Live Classes */}

            <section className="mb-5">

              <h2 className="fw-bold mb-4">
                Live Classes
              </h2>

              <LiveClasses />

            </section>

            {/* Notes */}

            <section className="mb-5">

              <h2 className="fw-bold mb-4">
                Latest Notes
              </h2>

              <NotesSection />

            </section>

            {/* Mock Tests */}

            <section className="mb-5">

              <h2 className="fw-bold mb-4">
                Mock Tests
              </h2>

              <MockTestSection />

            </section>

          </div>

          <Footer />

        </main>

      </div>

    </>
  );
}

export default Home;