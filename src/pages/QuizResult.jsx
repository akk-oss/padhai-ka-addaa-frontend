import { Link, useLocation } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import "../assets/css/quizResult.css";

function QuizResult() {

    const { state } = useLocation();

    if (!state) {

        return (
            <DashboardLayout>

                <h3>No Result Found</h3>

            </DashboardLayout>
        );

    }

    const percentage = Math.round(
        (state.score / state.total) * 100
    );

    const incorrect = state.total - state.score;

    return (

        <DashboardLayout>

            <div className="result-wrapper">

                <div className="result-card">

                    <h2>

                        DSA Mock Test

                    </h2>

                    <p className="result-date">

                        Completed on 03 July 2026, 10:00 AM

                    </p>

                    <div className="score-card">

                        <div>

                            <small>Your Score</small>

                            <h1>

                                {percentage}%

                            </h1>

                            <span>

                                Great Performance!

                            </span>

                        </div>

                        <div className="trophy">

                            🏆

                        </div>

                    </div>

                    <div className="stats">

                        <div>

                            <h3>{state.score}</h3>

                            <p>Correct</p>

                        </div>

                        <div>

                            <h3>{incorrect}</h3>

                            <p>Incorrect</p>

                        </div>

                        <div>

                            <h3>0</h3>

                            <p>Unattempted</p>

                        </div>

                        <div>

                            <h3>{state.total}</h3>

                            <p>Total Questions</p>

                        </div>

                    </div>

                    <div className="result-buttons">

                        <Link
                            to="/student/dashboard"
                            className="btn-review"
                        >

                            Review Solution

                        </Link>

                        <button
                            className="btn-analysis"
                        >

                            View Analytics

                        </button>

                    </div>

                </div>

            </div>

        </DashboardLayout>

    );

}

export default QuizResult;