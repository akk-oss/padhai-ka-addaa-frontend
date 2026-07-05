import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getQuizByCourse } from "../services/quizService";
import DashboardLayout from "../layouts/DashboardLayout";

function QuizPage() {

    const { id } = useParams();

    const [quizzes, setQuizzes] = useState([]);

    useEffect(() => {

        loadQuiz();

    }, []);

    const loadQuiz = async () => {

        try {

           const response = await getQuizByCourse(id);

console.log("Quiz Response =", response);

const quizList = Array.isArray(response) ? response : [];

setQuizzes(quizList);

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <DashboardLayout>

            <h2 className="fw-bold mb-4">
                📝 Course Quiz
            </h2>

            <div className="row">

                {

                   Array.isArray(quizzes) &&
quizzes.map(quiz => (

                        <div
                            className="col-md-4 mb-4"
                            key={quiz.id}
                        >

                            <div className="card shadow border-0 rounded-4">

                                <div className="card-body">

                                    <h4>{quiz.title}</h4>

                                    <p>

                                        Total Marks :
                                        <strong> {quiz.totalMarks}</strong>

                                    </p>

                                    <p>

                                        Passing :
                                        <strong> {quiz.passingMarks}</strong>

                                    </p>

                                   
<Link
    to={`/quiz/${quiz.id}`}
    className="btn btn-success w-100"
>
    Start Quiz
</Link>
                                </div>

                            </div>

                        </div>

                    ))

                }

            </div>

        </DashboardLayout>

    );

}

export default QuizPage;