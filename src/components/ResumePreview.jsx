import "../assets/css/resumePreview.css";

function ResumePreview({ form, photo }) {

  return (

    <div id="resume-preview" className="resume-paper">

      {/* Header */}

      <div className="resume-header">

        <div className="header-left">

          <h1>{form.fullName || "Your Name"}</h1>

          <p>{form.profession || "Software Developer"}</p>

          <p>📧 {form.email}</p>

          <p>📞 {form.phone}</p>

          <p>📍 {form.address}</p>

          <p>{form.linkedin}</p>

          <p>{form.github}</p>

        </div>

        <div className="header-right">

          {photo ? (

            <img
              src={photo}
              alt="profile"
              className="profile-photo"
            />

          ) : (

            <div className="photo-placeholder">

              Photo

            </div>

          )}

        </div>

      </div>

      {/* About */}

      <div className="resume-section">

        <h2>Career Objective</h2>

        <p>{form.about}</p>

      </div>

      {/* Education */}

      <div className="resume-section">

        <h2>Education</h2>

        {

          form.educations.map((edu,index)=>(

            <div key={index} className="resume-card">

              <p>{edu.degree}</p>

              <p>{edu.college}</p>

              <span>{edu.year}</span>

            </div>

          ))

        }

      </div>

      {/* Experience */}

      <div className="resume-section">

        <h2>Experience</h2>

        {

          form.experiences.map((exp,index)=>(

            <div key={index} className="resume-card">

              <p>{exp.position}</p>

              <p>{exp.company}</p>



              <p>{exp.description}</p>

            </div>

          ))

        }

      </div>

      {/* Projects */}

      <div className="resume-section">

        <h2>Projects</h2>

        {

          form.projects.map((project,index)=>(

            <div key={index} className="resume-card">

              <p>{project.title}</p>

              <p>{project.technology}</p>

              <p>{project.description}</p>

            </div>

          ))

        }

      </div>

      {/* Skills */}

      <div className="resume-section">

        <h2>Skills</h2>

        <div className="skill-box">

          {

            form.skills.map((skill,index)=>(

              <span key={index} className="skill">

                {skill}

              </span>

            ))

          }

        </div>

      </div>

      {/* Languages */}

      <div className="resume-section">

        <h2>Languages</h2>

        <ul>

          {

            form.languages.map((language,index)=>(

              <li key={index}>

                {language}

              </li>

            ))

          }

        </ul>

      </div>

      {/* Hobbies */}

      <div className="resume-section">

        <h2>Hobbies</h2>

        <ul>

          {

            form.hobbies.map((hobby,index)=>(

              <li key={index}>

                {hobby}

              </li>

            ))

          }

        </ul>

      </div>

    </div>

  );

}

export default ResumePreview;