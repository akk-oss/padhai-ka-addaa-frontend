import { useState } from "react";
import "../assets/css/community.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Community() {

  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const posts = [
    {
      id: 1,
      name: "Rahul Kumar",
      course: "Java Programming",
      question: "Can anyone explain Java Multithreading with an example?",
      time: "2 hours ago",
    },
    {
      id: 2,
      name: "Priya Sharma",
      course: "React JS",
      question: "How do I use useEffect() properly?",
      time: "5 hours ago",
    },
    {
      id: 3,
      name: "Amit Singh",
      course: "Spring Boot",
      question: "How can I connect Spring Boot with MySQL?",
      time: "Yesterday",
    },
  ];

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />

      <div className="dashboard-container">

        <Sidebar show={showSidebar} />

        <div className="dashboard-content">

          <div className="community-page">

            <div className="community-header">
              <h1>Student Community</h1>

              <p>
                Ask questions, share knowledge and connect with other learners.
              </p>
            </div>

            <div className="community-posts">

              {posts.map((post) => (

                <div className="community-card" key={post.id}>

                  <div className="community-top">

                    <div className="avatar">
                      {post.name.charAt(0)}
                    </div>

                    <div>
                      <h3>{post.name}</h3>
                      <span>{post.course}</span>
                    </div>

                  </div>

                  <p className="question">
                    {post.question}
                  </p>

                  <div className="community-footer">

                    <span>{post.time}</span>

                    <button>
                      Reply
                    </button>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default Community;