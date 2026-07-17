import "../assets/css/placementPreparation.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function PlacementPreparation() {

  const sections = [
    {
      id: 1,
      title: "Aptitude",
      icon: "📊",
      description: "Practice Quantitative Aptitude questions for campus placements."
    },
    {
      id: 2,
      title: "Reasoning",
      icon: "🧩",
      description: "Improve logical and analytical reasoning skills."
    },
    {
      id: 3,
      title: "Technical MCQs",
      icon: "💻",
      description: "Java, DBMS, OS, CN, SQL and Web Development questions."
    },
    {
      id: 4,
      title: "DSA",
      icon: "⚙️",
      description: "Learn Data Structures & Algorithms with coding problems."
    },
    {
      id: 5,
      title: "HR Interview",
      icon: "🎤",
      description: "Prepare common HR interview questions and answers."
    },
    {
      id: 6,
      title: "Resume Preparation",
      icon: "📄",
      description: "Build an ATS-friendly resume and improve your profile."
    }
  ];

  return (
    <>
      <Navbar />

      <div className="dashboard-container">

        <Sidebar />

        <div className="dashboard-content">

          <div className="placement-page">

            <div className="placement-header">
              <h1>Placement Preparation</h1>

              <p>
                Everything you need to crack campus placements and interviews.
              </p>
            </div>

            <div className="placement-grid">

              {sections.map((item) => (

                <div className="placement-card" key={item.id}>

                  <div className="placement-icon">
                    {item.icon}
                  </div>

                  <h2>{item.title}</h2>

                  <p>{item.description}</p>

                  <button>
                    Start Learning
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

export default PlacementPreparation;