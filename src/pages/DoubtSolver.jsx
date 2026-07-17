import { useState } from "react";
import "../assets/css/doubtSolver.css";

function DoubtSolver() {

  const [question, setQuestion] = useState("");

  const [answer, setAnswer] = useState("");

  const askAI = () => {

    if(question.trim()===""){
      alert("Please enter your question.");
      return;
    }

    // Backend API se replace karna hai
    setAnswer(
      "This is a demo AI response. Connect this page with your Spring Boot AI API to get real answers."
    );

  };

  return (

    <div className="ai-page">

      <div className="ai-box">

        <h1>🤖 AI Doubt Solver</h1>

        <p>

          Ask any programming or study related question.

        </p>

        <textarea

          placeholder="Example: Explain Java Multithreading..."

          value={question}

          onChange={(e)=>setQuestion(e.target.value)}

        />

        <button onClick={askAI}>

          Ask AI

        </button>

        {

          answer &&

          <div className="answer-box">

            <h3>AI Answer</h3>

            <p>{answer}</p>

          </div>

        }

      </div>

    </div>

  );

}

export default DoubtSolver;