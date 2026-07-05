import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import LessonAccordion from "../components/LessonAccordion";
import "../assets/css/courseCurriculum.css";


function CourseCurriculum() {

    return (

        <>
          <Navbar
    simple
    toggleSidebar={() => setShowSidebar(!showSidebar)}
/>

            <div className="d-flex">

                <Sidebar />

                <div className="curriculum-page">

                    <div className="curriculum-card">

                        <div className="curriculum-header">

                            <div>

                                <h3>Data Structures & Algorithms</h3>

                            </div>

                            <div>

                                <span>50 Lectures • 12+ Hours</span>

                            </div>

                        </div>

                        <LessonAccordion />

                    </div>

                </div>

            </div>

        </>

    );

}

export default CourseCurriculum;