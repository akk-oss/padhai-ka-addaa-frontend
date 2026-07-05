import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { getLessonsByCourse } from "../services/lessonService";
import { getProgress, completeLesson } from "../services/progressService";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import "../assets/css/videoPlayer.css";

function LessonPlayer() {

    const { id } = useParams();

    const [showSidebar, setShowSidebar] = useState(false);

    const [lessons, setLessons] = useState([]);
    const [selectedLesson, setSelectedLesson] = useState(null);
    const [progress, setProgress] = useState(null);
    const [courseCompleted, setCourseCompleted] = useState(false);

    useEffect(() => {
        loadLessons();
        loadProgress();
    }, []);

    const loadLessons = async () => {

        try {

            const response = await getLessonsByCourse(id);

            setLessons(response);

            if (response.length > 0) {
                setSelectedLesson(response[0]);
            }

        } catch (error) {
            console.log(error);
        }

    };

    const loadProgress = async () => {

        try {

            const userId = 1;

            const response = await getProgress(userId, id);

            setProgress(response);

        } catch (error) {
            console.log(error);
        }

    };

    const handleCompleteLesson = async () => {

        try {

            await completeLesson(progress.id);

            alert("Lesson Completed Successfully");

            loadProgress();

        } catch (error) {

            console.log(error);

            alert("Failed to Update Progress");

        }

    };

    const handleNextLesson = () => {

        const currentIndex = lessons.findIndex(
            lesson => lesson.id === selectedLesson.id
        );

        if (currentIndex < lessons.length - 1) {

            setSelectedLesson(lessons[currentIndex + 1]);

        } else {

            alert("🎉 Congratulations! Course Completed.");

            setCourseCompleted(true);

        }

    };

    return (

        <>

            <Navbar
                toggleSidebar={() => setShowSidebar(!showSidebar)}
            />

            <div className="d-flex">

                <Sidebar show={showSidebar} />

                <main
                    className="flex-grow-1 p-4"
                    style={{
                        background: "#f7f9fc",
                        minHeight: "100vh"
                    }}
                >

                    <div className="container-fluid">

                        <div className="row">

                            <div className="col-lg-8">

                                <div className="mb-4">

                                    <label className="fw-bold mb-2">
                                        Course Progress
                                    </label>

                                    <div className="progress">

                                        <div
                                            className="progress-bar bg-success"
                                            style={{
                                                width: `${progress?.progressPercentage || 0}%`
                                            }}
                                        >
                                            {progress?.progressPercentage || 0}%
                                        </div>

                                    </div>

                                </div>

                                {selectedLesson && (

                                    <>

                                        <video
                                            controls
                                            width="100%"
                                            height="450"
                                            className="rounded shadow"
                                        >
                                            <source
                                                src={selectedLesson.videoUrl}
                                                type="video/mp4"
                                            />
                                        </video>

                                        <h3 className="mt-4">
                                            {selectedLesson.title}
                                        </h3>

                                        <p className="text-muted">
                                            {selectedLesson.description}
                                        </p>

                                        <div className="mt-4">
                                                                                        <button
                                                className="btn btn-success"
                                                onClick={handleCompleteLesson}
                                            >
                                                ✔ Mark as Completed
                                            </button>

                                            <button
                                                className="btn btn-primary ms-2"
                                                onClick={handleNextLesson}
                                            >
                                                Next Lesson →
                                            </button>

                                            {courseCompleted && (

                                                <Link
                                                    to={`/course/${id}/quiz`}
                                                    className="btn btn-warning ms-2"
                                                >
                                                    📝 Start Quiz
                                                </Link>

                                            )}

                                        </div>

                                    </>

                                )}

                            </div>

                            {/* Right Sidebar */}

                            <div className="col-lg-4 mt-4 mt-lg-0">

                                <div className="card shadow border-0 rounded-4">

                                    <div className="card-header bg-primary text-white">

                                        <h5 className="mb-0">
                                            Course Curriculum
                                        </h5>

                                    </div>

                                    <div
                                        className="list-group list-group-flush"
                                        style={{
                                            maxHeight: "600px",
                                            overflowY: "auto"
                                        }}
                                    >

                                        {Array.isArray(lessons) &&
                                            lessons.map((lesson) => (

                                                <button
                                                    key={lesson.id}
                                                    className={`list-group-item list-group-item-action ${
                                                        selectedLesson?.id === lesson.id
                                                            ? "active"
                                                            : ""
                                                    }`}
                                                    onClick={() =>
                                                        setSelectedLesson(lesson)
                                                    }
                                                >
                                                    <div className="fw-bold">
                                                        {lesson.title}
                                                    </div>

                                                    <small className="text-muted">
                                                        {lesson.duration} Minutes
                                                    </small>

                                                </button>

                                            ))}

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </main>

            </div>

        </>

    );

}

export default LessonPlayer;