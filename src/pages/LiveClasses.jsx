import { useState } from "react";
import "../assets/css/liveClasses.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function LiveClasses() {

  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const classes = [
    {
      id: 1,
      title: "Java Spring Boot",
      teacher: "Alok Kushwaha",
      date: "20 July 2026",
      time: "7:00 PM",
      live: true,
      link: "https://meet.google.com/",
    },
    {
      id: 2,
      title: "React JS Complete Course",
      teacher: "PadhAI Team",
      date: "21 July 2026",
      time: "8:00 PM",
      live: false,
      link: "https://meet.google.com/",
    },
  ];

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />

      <div className="dashboard-container">

        <Sidebar show={showSidebar} />

        <div className="dashboard-content">

          <div className="live-page">

            <h1>Live Classes</h1>

            <div className="live-grid">

              {classes.map((item) => (

                <div className="live-card" key={item.id}>

                  {item.live ? (
                    <span className="live-badge">🔴 LIVE</span>
                  ) : (
                    <span className="upcoming">Upcoming</span>
                  )}

                  <h2>{item.title}</h2>

                  <p>
                    <strong>Teacher:</strong> {item.teacher}
                  </p>

                  <p>
                    <strong>Date:</strong> {item.date}
                  </p>

                  <p>
                    <strong>Time:</strong> {item.time}
                  </p>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button>Join Class</button>
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

export default LiveClasses;