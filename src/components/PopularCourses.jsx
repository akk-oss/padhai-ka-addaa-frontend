import React from "react";

function PopularCourses({ courses = [] }) {

  const handleBuyCourse = (course) => {

    // Abhi demo ke liye course details page
    window.location.href = `/course/${course.id}`;
  };

  return (
    <section>

      <div className="d-flex justify-content-between align-items-center mb-4">

        <div>
          <h2 className="fw-bold mb-1">
            Popular Courses
          </h2>

          <p className="text-muted mb-0">
            सबसे लोकप्रिय courses में अभी enroll करें
          </p>
        </div>

      </div>

      <div className="row g-4">

        {courses.map((course) => (

          <div
            className="col-xl-4 col-lg-4 col-md-6 col-sm-12"
            key={course.id}
          >

            <div
              className="card border-0 shadow-sm h-100"
              style={{
                borderRadius: "18px",
                overflow: "hidden"
              }}
            >

              {/* COURSE IMAGE */}

              <img
                src={course.image}
                alt={course.title}
                className="w-100"
                style={{
                  height: "210px",
                  objectFit: "cover"
                }}
              />

              <div className="card-body p-4">

                {/* BADGES */}

                <div className="mb-2">

                  <span className="badge bg-primary me-2">
                    {course.board}
                  </span>

                  <span className="badge bg-warning text-dark">
                    {course.className}
                  </span>

                </div>

                {/* TITLE */}

                <h4 className="fw-bold">
                  {course.title}
                </h4>

                <p className="text-muted">
                  {course.subtitle}
                </p>

                {/* SUBJECTS */}

                <p className="small">
                  <strong>Subjects:</strong>{" "}
                  {course.subjects}
                </p>

                {/* FEATURES */}

                <div className="mb-3">

                  {course.features.map((feature, index) => (

                    <div
                      key={index}
                      className="small mb-1"
                    >
                      <span className="text-success me-2">
                        ✓
                      </span>

                      {feature}

                    </div>

                  ))}

                </div>

                <hr />

                {/* PRICE */}

                <div className="d-flex align-items-center mb-3">

                  <h3 className="fw-bold text-success mb-0">
                    ₹{course.price}
                  </h3>

                  <del className="text-muted ms-2">
                    ₹{course.oldPrice}
                  </del>

                  <span className="badge bg-danger ms-auto">
                    LIMITED OFFER
                  </span>

                </div>

                {/* BUTTON */}

                <button
                  className="btn btn-primary w-100 fw-bold"
                  style={{
                    borderRadius: "10px",
                    padding: "12px"
                  }}
                  onClick={() =>
                    handleBuyCourse(course)
                  }
                >
                  Buy Course →
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default PopularCourses;