import "../assets/css/previousPapers.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function PreviousPapers() {

  const papers = [
    {
      id: 1,
      subject: "Java Programming",
      year: "2025",
      semester: "5th Semester",
      university: "AKTU",
      pdf: "#"
    },
    {
      id: 2,
      subject: "Database Management System",
      year: "2024",
      semester: "4th Semester",
      university: "AKTU",
      pdf: "#"
    },
    {
      id: 3,
      subject: "Operating System",
      year: "2023",
      semester: "5th Semester",
      university: "AKTU",
      pdf: "#"
    },
    {
      id: 4,
      subject: "Computer Network",
      year: "2025",
      semester: "6th Semester",
      university: "AKTU",
      pdf: "#"
    }
  ];

  return (
    <>
      <Navbar />

      <div className="dashboard-container">

        <Sidebar />

        <div className="dashboard-content">

          <div className="paper-page">

            <h1>Previous Year Question Papers</h1>

            <p className="paper-subtitle">
              Download previous year question papers for exam preparation.
            </p>

            <div className="paper-grid">

              {papers.map((paper) => (

                <div className="paper-card" key={paper.id}>

                  <div className="paper-icon">
                    📄
                  </div>

                  <h2>{paper.subject}</h2>

                  <p>
                    <strong>University:</strong> {paper.university}
                  </p>

                  <p>
                    <strong>Semester:</strong> {paper.semester}
                  </p>

                  <p>
                    <strong>Year:</strong> {paper.year}
                  </p>

                  <a
                    href={paper.pdf}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button>
                      Download PDF
                    </button>
                  </a>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </>
  );
}

export default PreviousPapers;