import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import { getAllQuizzes } from "../services/quizService";
import "../assets/css/mockTests.css";

function MockTests() {

    const [tests, setTests] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        loadTests();
    }, []);

    const loadTests = async () => {

        try {

            const response = await getAllQuizzes();

            setTests(Array.isArray(response) ? response : []);

        } catch (error) {

            console.log(error);

        }

    };

    const filteredTests = tests.filter(test =>
        test.title.toLowerCase().includes(search.toLowerCase())
    );

    return (

        <DashboardLayout>

            <div className="mock-container">

                <div className="mock-header">

                    <h2>Mock Tests</h2>

                    <div className="header-right">

                        <input
                            type="text"
                            placeholder="Search tests..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />

                        <select>

                            <option>All Tests</option>

                        </select>

                    </div>

                </div>

                {

                    filteredTests.map((test, index) => (

                        <div className="mock-card" key={test.id}>

                            <div className={`icon icon-${index % 4}`}>

                                📘

                            </div>

                            <div className="test-info">

                                <h4>{test.title}</h4>

                                <p>

                                    {test.createdAt || "03 Jul 2026, 10:00 AM"}

                                </p>

                            </div>

                            <div className="test-meta">

                                <div>

                                    {test.totalQuestions || 50} Questions

                                </div>

                                <div>

                                    {test.duration || 60} Min

                                </div>

                            </div>

                            <Link
                                to={`/quiz/${test.id}`}
                                className="start-btn"
                            >

                                Start Test

                            </Link>

                        </div>

                    ))

                }

            </div>

        </DashboardLayout>

    );

}

export default MockTests;