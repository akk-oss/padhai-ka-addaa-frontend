import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuizPage from "./pages/QuizPage";
import Navbar from "./components/Navbar";
import CourseCurriculum from "./pages/CourseCurriculum";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import NotFound from "./pages/NotFound";
import LessonPlayer from "./pages/LessonPlayer";
import Notes from "./pages/Notes";
import QuizAttempt from "./pages/QuizAttempt";
import QuizResult from "./pages/QuizResult";
import MockTests from "./pages/MockTests";
import StudentDashboard from "./dashboard/StudentDashboard";
import TeacherDashboard from "./dashboard/TeacherDashboard";
import AdminDashboard from "./dashboard/AdminDashboard";
import UploadNotes from "./pages/UploadNotes";
import AdminUsers from "./pages/AdminUsers";
import Profile from "./pages/Profile";
import ResumeBuilder from "./pages/ResumeBuilder";
import AboutUs from "./pages/AboutUs";
import LiveClasses from "./pages/LiveClasses";
import Blog from "./pages/Blog";
import PreviousPapers from "./pages/PreviousPapers";
import Community from "./pages/Community";
import Practice from "./pages/Practice";
import PlacementPreparation from "./pages/PlacementPreparation";
function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/courses" element={<Courses />} />

        <Route path="/course/:id" element={<CourseDetails />} />

        <Route
          path="/student/dashboard"
          element={<StudentDashboard />}
        />

        <Route
          path="/teacher/dashboard"
          element={<TeacherDashboard />}
        />

        <Route
          path="/admin/dashboard"
          element={<AdminDashboard />}
        />

        <Route path="*" element={<NotFound />} />
         <Route
    path="/course/:id/curriculum"
    element={<CourseCurriculum />}
/>

<Route
    path="/course/:id/lessons"
    element={<LessonPlayer />}
/>

<Route
    path="/course/:id/quiz"
    element={<QuizPage />}
/> 
<Route
    path="/notes"
    element={<Notes />}
/>
<Route
    path="/upload-notes"
    element={<UploadNotes />}
/>
<Route
    path="/admin/users"
    element={<AdminUsers />}
/>
<Route
    path="/quiz/:quizId"
    element={<QuizAttempt />}
/>

<Route
    path="/quiz-result"
    element={<QuizResult />}
/>
<Route
    path="/mock-tests"
    element={<MockTests />}
/>
<Route
  path="/resume-builder"
  element={<ResumeBuilder />}
/>
<Route
    path="/profile"
    element={<Profile />}
/>
<Route path="/about" element={<AboutUs />} />
<Route path="/live-classes" element={<LiveClasses />} />
<Route path="/blog" element={<Blog />} />
<Route path="/previous-papers" element={<PreviousPapers />} />
<Route path="/community" element={<Community />} />
<Route path="/practice" element={<Practice />} />
<Route
  path="/placement-preparation"
  element={<PlacementPreparation />}
/>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;