import "../assets/css/practice.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Practice() {

  const practiceSets = [
    {
      id: 1,
      title: "Java Programming",
      questions: 50,
      level: "Beginner",
      duration: "30 Minutes"
    },
    {
      id: 2,
      title: "React JS",
      questions: 40,
      level: "Intermediate",
      duration: "25 Minutes"
    },
    {
      id: 3,
      title: "Spring Boot",
      questions: 35,
      level: "Advanced",
      duration: "30 Minutes"
    },
    {
      id: 4,
      title: "DBMS",
      questions: 60,
      level: "Beginner",
      duration: "40 Minutes"
    },
    {
      id: 5,
      title: "Operating System",
      questions: 45,
      level: "Intermediate",
      duration: "30 Minutes"
    },
    {
      id: 6,
      title: "Computer Network",
      questions: 50,
      level: "Advanced",
      duration: "35 Minutes"
    }
  ];

  return (
    <>
      <Navbar />

      <div className="dashboard-container">

        <Sidebar />

        <div className="dashboard-content">

          <div className="practice-page">

            <div className="practice-header">
              <h1>Practice Questions</h1>

              <p>
                Improve your skills by solving practice questions.
              </p>
            </div>

            <div className="practice-grid">

              {practiceSets.map((item) => (

                <div className="practice-card" key={item.id}>

                  <div className="practice-icon">
                    📝
                  </div>

                  <h2>{item.title}</h2>

                  <p>
                    <strong>Questions:</strong> {item.questions}
                  </p>

                  <p>
                    <strong>Level:</strong> {item.level}
                  </p>

                  <p>
                    <strong>Duration:</strong> {item.duration}
                  </p>

                  <button>
                    Start Practice
                  </button>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </>
  );
}

export default Practice;