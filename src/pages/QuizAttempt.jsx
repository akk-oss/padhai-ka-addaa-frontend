import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import { getQuestionsByQuiz } from "../services/questionService";
import "../assets/css/quizAttempt.css";
import { useNavigate } from "react-router-dom";
function QuizAttempt() {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(60 * 60);

  useEffect(() => {
    loadQuestions();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);

          alert("Time Up");

          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const loadQuestions = async () => {
    try {
      const response = await getQuestionsByQuiz(quizId);

      setQuestions(Array.isArray(response) ? response : []);
    } catch (error) {
      console.log(error);
    }
  };

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);

    const m = Math.floor((seconds % 3600) / 60);

    const s = seconds % 60;

    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  const handleAnswer = (option) => {
    setAnswers({
      ...answers,

      [questions[currentQuestion].id]: option,
    });
  };
  const handleSubmit = () => {

    let score = 0;

    questions.forEach((question) => {

        if (answers[question.id] === question.correctAnswer) {

            score++;

        }

    });

    navigate("/quiz-result", {
        state: {
            score: score,
            total: questions.length
        }
    });

};

  if (questions.length === 0) {
    return (
      <DashboardLayout>
        <h3>Loading Questions...</h3>
      </DashboardLayout>
    );
  }

  const question = questions[currentQuestion];

  return (
    <DashboardLayout>
      <div className="quiz-wrapper">
        <div className="quiz-left">
          <div className="quiz-header">
            <h3>DSA Mock Test</h3>

            <div className="timer">⏰ {formatTime(timeLeft)}</div>
          </div>

          <hr />

          <h5>
            Question {currentQuestion + 1} of {questions.length}
          </h5>

          <h4 className="question-title">{question.question}</h4>

          <div className="options">
            {[
              question.optionA,

              question.optionB,

              question.optionC,

              question.optionD,
            ].map((option, index) => (
              <label className="option-card" key={index}>
                <input
                  type="radio"
                  checked={answers[question.id] === option}
                  onChange={() => handleAnswer(option)}
                />

                {option}
              </label>
            ))}
          </div>

          <div className="quiz-buttons">
            <button
              className="btn btn-outline-primary"
              disabled={currentQuestion === 0}
              onClick={() => setCurrentQuestion(currentQuestion - 1)}
            >
              Previous
            </button>

            <button className="btn btn-outline-secondary">Clear</button>

            <button className="btn btn-warning">Mark Review</button>

            <button
              className="btn btn-primary"
              disabled={currentQuestion === questions.length - 1}
              onClick={() => setCurrentQuestion(currentQuestion + 1)}
            >
              Next
            </button>
          </div>
        </div>

        <div className="quiz-right">
          <h5>Question Palette</h5>

          <div className="palette">
            {questions.map((q, index) => (
              <button
                key={q.id}
                className={`palette-btn ${
                  currentQuestion === index ? "active" : ""
                }`}
                onClick={() => setCurrentQuestion(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <button
    className="btn btn-success submit-btn"
    onClick={handleSubmit}
>
    Submit Test
</button>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default QuizAttempt;
