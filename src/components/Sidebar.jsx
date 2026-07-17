import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaBook,
  FaVideo,
  FaStickyNote,
  FaClipboardList,
  FaFileAlt,
  FaCode,
  FaBriefcase,
  FaFileInvoice,
  FaRobot,
  FaUsers,
  FaTachometerAlt,
  FaSignOutAlt
} from "react-icons/fa";

import "../assets/css/sidebar.css";
import { FaUpload } from "react-icons/fa";


function Sidebar({ show }) {

  const location = useLocation();
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  const isActive = (path) =>
    location.pathname === path ? "menu-item active" : "menu-item";

  const handleLogout = () => {
localStorage.removeItem("token");
localStorage.removeItem("role");
localStorage.removeItem("user");
localStorage.removeItem("fullName");
localStorage.removeItem("email");
   

    // Login Page Redirect
    navigate("/login");

  };

  return (

    <aside className={`sidebar ${show ? "show" : ""}`}>

      <nav>

        <Link to="/" className={isActive("/")}>
          <FaHome />
          <span>Home</span>
        </Link>

        <Link to="/courses" className={isActive("/courses")}>
          <FaBook />
          <span>Courses</span>
        </Link>

        <Link to="/live-classes" className={isActive("/live-classes")}>
          <FaVideo />
          <span>Live Classes</span>
          <span className="badge-live">LIVE</span>
        </Link>
{(role === "ADMIN" || role === "TEACHER") && (
        
<Link
    to="/upload-notes"
    className={isActive("/upload-notes")}
>
    <FaUpload />
    <span>Upload Notes</span>
</Link>)}
        <Link to="/notes" className={isActive("/notes")}>
    <FaStickyNote />
    <span>Notes</span>
</Link>
       <Link
    to="/mock-tests"
    className={isActive("/mock-tests")}
>
    <FaClipboardList />
    <span>Mock Tests</span>
</Link>

        <Link to="/previous-papers" className={isActive("/previous-papers")}>
          <FaFileAlt />
          <span>Previous Papers</span>
        </Link>

        <Link to="/practice" className={isActive("/practice")}>
          <FaCode />
          <span>Practice</span>
        </Link>

        <Link to="/placement-preparation" className={isActive("/placement-preparation")}>
          <FaBriefcase />
          <span>Placement Prep</span>
        </Link>

        <Link to="/resume-builder" className={isActive("/resume-builder")}>
          <FaFileInvoice />
          <span>Resume Builder</span>
        </Link>

        <Link to="/doubt-solver" className={isActive("/doubt-solver")}>
          <FaRobot />
          <span>Doubt Solver</span>
          <span className="badge-ai">AI</span>
        </Link>

        <Link to="/community" className={isActive("/community")}>
          <FaUsers />
          <span>Community</span>
        </Link>

       <Link
  to={
    role === "ADMIN"
      ? "/admin/dashboard"
      : role === "TEACHER"
      ? "/teacher/dashboard"
      : "/student/dashboard"
  }
  className={
    role === "ADMIN"
      ? isActive("/admin/dashboard")
      : role === "TEACHER"
      ? isActive("/teacher/dashboard")
      : isActive("/student/dashboard")
  }
>
  <FaTachometerAlt />
  <span>Dashboard</span>
</Link>

        {/* Logout */}

        <button
          className="menu-item logout-btn"
          onClick={handleLogout}
        >
          <FaSignOutAlt />
          <span>Logout</span>
        </button>

      </nav>

    </aside>

  );

}

export default Sidebar;