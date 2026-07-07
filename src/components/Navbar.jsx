import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaCog, FaBars } from "react-icons/fa";
import "../assets/css/navbar.css";


function Navbar({ simple = false, toggleSidebar }) {
const token = localStorage.getItem("token");
const fullName = localStorage.getItem("fullName");
  const navigate = useNavigate();
  if (simple) {
  return (
    <nav className="navbar bg-white shadow-sm px-4 py-3">

      <div className="container-fluid d-flex align-items-center justify-content-between">

        {/* Left Side */}

        <div className="d-flex align-items-center">

          <Link
            to="/"
            className="d-flex align-items-center text-decoration-none"
          >
            {/* Mobile Right */}

<div className="mobile-right d-flex d-lg-none">

  {!token ? (
    <>
      <Link
        to="/login"
        className="btn btn-sm btn-outline-primary me-2"
      >
        Login
      </Link>

      <Link
        to="/register"
        className="btn btn-sm btn-primary"
      >
        Register
      </Link>
    </>
  ) : (

    <div className="dropdown">

      <img
        src="/images/user.png"
        alt="Profile"
        className="mobile-profile"
        data-bs-toggle="dropdown"
      />

      <ul className="dropdown-menu dropdown-menu-end">

        <li>
          <h6 className="dropdown-header">
            {fullName}
          </h6>
        </li>

        <li>
          <Link
            className="dropdown-item"
            to="/student/dashboard"
          >
            Dashboard
          </Link>
        </li>

        <li>
          <Link
            className="dropdown-item"
            to="/profile"
          >
            Profile
          </Link>
        </li>

        <li>
          <Link
            className="dropdown-item"
            to="/my-courses"
          >
            My Courses
          </Link>
        </li>

        <li>
          <Link
            className="dropdown-item"
            to="/payments"
          >
            Payments
          </Link>
        </li>

        <li>
          <hr className="dropdown-divider"/>
        </li>

        <li>
          <button
            className="dropdown-item text-danger"
            onClick={()=>{
              localStorage.clear();
              navigate("/login");
            }}
          >
            Logout
          </button>
        </li>

      </ul>

    </div>

  )}

</div>
            <img
              src="/images/logo.png"
              alt="Logo"
              width="42"
            />

            <div className="ms-2">
              <h6 className="mb-0 fw-bold text-primary">
                PadhAI Ka Adda
              </h6>

              <small className="text-muted">
                Learn. Practice. Succeed.
              </small>
            </div>
          </Link>

        </div>

        {/* Back Button */}

        <button
          className="btn btn-outline-primary"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>

      </div>

    </nav>
  );
}

  return (

    <nav className="navbar navbar-expand-lg custom-navbar">

      <div className="container-fluid">

        {/* Mobile Menu */}

        <button
          className="menu-btn d-lg-none"
          onClick={toggleSidebar}
        >
          <FaBars />
        </button>

        {/* Logo */}

        <Link
          className="navbar-brand logo-area mx-auto mx-lg-0"
          to="/"
        >
          <img
            src="/images/logo.png"
            alt="Logo"
            className="logo-img"
          />

          <div>

            <h5>PadhAI Ka Adda</h5>

            <small>Learn. Practice. Succeed.</small>

          </div>

        </Link>

        {/* Desktop Menu */}

        <div className="collapse navbar-collapse d-none d-lg-flex">

          <ul className="navbar-nav mx-auto">

            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/courses">
                Courses
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/mock-tests">
                Mock Tests
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/notes">
                Notes
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/blogs">
                Blogs
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>

          </ul>

          <div className="d-flex align-items-center">

            <div className="search-box">

              <FaSearch className="search-icon"/>

              <input
                type="text"
                placeholder="Search for courses..."
              />

            </div>

            <button className="icon-btn">

              <FaCog />

            </button>

            <Link
              to="/login"
              className="btn btn-outline-primary ms-3"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="btn btn-primary ms-2"
            >
              Register
            </Link>

          </div>

        </div>

      </div>

    </nav>

  );
}

export default Navbar;