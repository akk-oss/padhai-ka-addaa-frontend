import { useState } from "react";
import ResumePreview from "../components/ResumePreview";
import "../assets/css/resumeBuilder.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function ResumeBuilder() {

  const [showSidebar, setShowSidebar] = useState(false);

const toggleSidebar = () => {
  setShowSidebar(!showSidebar);
};
  const [photo, setPhoto] = useState(null);

  const [form, setForm] = useState({

    fullName: "",
    profession: "",
    email: "",
    phone: "",
    address: "",
    linkedin: "",
    github: "",
    about: "",

    educations: [
      {
        college: "",
        degree: "",
        year: ""
      }
    ],

    experiences: [
      {
        company: "",
        position: "",
        description: ""
      }
    ],

    projects: [
      {
        title: "",
        technology: "",
        description: ""
      }
    ],

    skills: [""],

    languages: [""],

    hobbies: [""]

  });

  //=====================
  // Normal Input
  //=====================

  const handleChange = (e) => {

    setForm({

      ...form,

      [e.target.name]: e.target.value

    });

  };

  //=====================
  // Photo Upload
  //=====================

  const handlePhoto = (e) => {

    const file = e.target.files[0];

    if (file) {

      setPhoto(URL.createObjectURL(file));

    }

  };

  //=====================
  // Education
  //=====================

  const addEducation = () => {

    setForm({

      ...form,

      educations: [

        ...form.educations,

        {

          college: "",

          degree: "",

          year: ""

        }

      ]

    });

  };

  const handleEducation = (index, e) => {

    const data = [...form.educations];

    data[index][e.target.name] = e.target.value;

    setForm({

      ...form,

      educations: data

    });

  };
  // Remove Education
const removeEducation = (index) => {

  const list = [...form.educations];

  list.splice(index, 1);

  setForm({
    ...form,
    educations: list,
  });

};

// Remove Experience
const removeExperience = (index) => {

  const list = [...form.experiences];

  list.splice(index, 1);

  setForm({
    ...form,
    experiences: list,
  });

};

// Remove Project
const removeProject = (index) => {

  const list = [...form.projects];

  list.splice(index, 1);

  setForm({
    ...form,
    projects: list,
  });

};

// Remove Skill
const removeSkill = (index) => {

  const list = [...form.skills];

  list.splice(index, 1);

  setForm({
    ...form,
    skills: list,
  });

};

  //=====================
  // Experience
  //=====================

  const addExperience = () => {

    setForm({

      ...form,

      experiences: [

        ...form.experiences,

        {

          company: "",

          position: "",

          description: ""

        }

      ]

    });

  };

  const handleExperience = (index, e) => {

    const data = [...form.experiences];

    data[index][e.target.name] = e.target.value;

    setForm({

      ...form,

      experiences: data

    });

  };

  //=====================
  // Projects
  //=====================

  const addProject = () => {

    setForm({

      ...form,

      projects: [

        ...form.projects,

        {

          title: "",

          technology: "",

          description: ""

        }

      ]

    });

  };

  const handleProject = (index, e) => {

    const data = [...form.projects];

    data[index][e.target.name] = e.target.value;

    setForm({

      ...form,

      projects: data

    });

  };
    //=====================
  // Skills
  //=====================

  const addSkill = () => {

    setForm({

      ...form,

      skills: [

        ...form.skills,

        ""

      ]

    });

  };

  const handleSkill = (index, e) => {

    const data = [...form.skills];

    data[index] = e.target.value;

    setForm({

      ...form,

      skills: data

    });

  };

  //=====================
  // Languages
  //=====================

  const addLanguage = () => {

    setForm({

      ...form,

      languages: [

        ...form.languages,

        ""

      ]

    });

  };

  const handleLanguage = (index, e) => {

    const data = [...form.languages];

    data[index] = e.target.value;

    setForm({

      ...form,

      languages: data

    });

  };

  //=====================
  // Hobbies
  //=====================

  const addHobby = () => {

    setForm({

      ...form,

      hobbies: [

        ...form.hobbies,

        ""

      ]

    });

  };

  const handleHobby = (index, e) => {

    const data = [...form.hobbies];

    data[index] = e.target.value;

    setForm({

      ...form,

      hobbies: data

    });

  };
  const downloadPDF = async () => {

  const resume = document.getElementById("resume-preview");

  const canvas = await html2canvas(resume, {

    scale: 2,

    useCORS: true

  });

  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF("p","mm","a4");

  const pdfWidth = 210;

  const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

  pdf.addImage(
    imgData,
    "PNG",
    0,
    0,
    pdfWidth,
    pdfHeight
  );

  pdf.save("Resume.pdf");

};
const printResume = () => {

  window.print();

};
const saveResume = () => {

  localStorage.setItem(

    "resume",

    JSON.stringify(form)

  );

  alert("Resume Saved Successfully");

};
return (
  <>
    <Navbar toggleSidebar={toggleSidebar} />

    <div className="dashboard-container">

      <Sidebar show={showSidebar} />

      <div className="dashboard-content">

        <div className="resume-page">
      {/* ========================= */}
      {/* LEFT SIDE */}
      {/* ========================= */}

      <div className="resume-form">

        <h2>Professional Resume Builder</h2>

        {/* Personal Information */}

        <div className="section">

          <h3>Personal Information</h3>

          <input
            type="file"
            accept="image/*"
            onChange={handlePhoto}
          />

          <input
            type="text"
            placeholder="Full Name"
            name="fullName"
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="Profession"
            name="profession"
            onChange={handleChange}
          />

          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="Phone"
            name="phone"
            onChange={handleChange}
          />

          <textarea
            placeholder="Address"
            name="address"
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="LinkedIn"
            name="linkedin"
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="GitHub"
            name="github"
            onChange={handleChange}
          />

        </div>

        {/* About */}

        <div className="section">

          <h3>Career Objective</h3>

          <textarea
            rows="5"
            placeholder="Write your objective..."
            name="about"
            onChange={handleChange}
          />

        </div>

        {/* Education */}

        <div className="section">

          <div className="title">
  <h3>Education</h3>

  <button
    type="button"
    className="add-btn"
    onClick={addEducation}
  >
    + Add
  </button>
</div>

{form.educations.map((edu, index) => (

  <div className="card-box" key={index}>

    <input
      placeholder="College"
      name="college"
      value={edu.college}
      onChange={(e)=>handleEducation(index,e)}
    />

    <input
      placeholder="Degree"
      name="degree"
      value={edu.degree}
      onChange={(e)=>handleEducation(index,e)}
    />

    <input
      placeholder="Year"
      name="year"
      value={edu.year}
      onChange={(e)=>handleEducation(index,e)}
    />

    <button
      type="button"
      className="delete-btn"
      onClick={()=>removeEducation(index)}
    >
      Remove
    </button>

  </div>

))}

          {form.educations.map((edu, index) => (

            <div className="card-box" key={index}>

              <input
                placeholder="College"
                name="college"
                value={edu.college}
                onChange={(e) =>
                  handleEducation(index, e)
                }
              />

              <input
                placeholder="Degree"
                name="degree"
                value={edu.degree}
                onChange={(e) =>
                  handleEducation(index, e)
                }
              />

              <input
                placeholder="Passing Year"
                name="year"
                value={edu.year}
                onChange={(e) =>
                  handleEducation(index, e)
                }
              />

            </div>

          ))}

        </div>

        {/* Experience */}

        <div className="section">

          <div className="section">

  <div className="title">

    <h3>Experience</h3>

    <button
      type="button"
      className="add-btn"
      onClick={addExperience}
    >
      + Add
    </button>

  </div>

  {form.experiences.map((exp, index) => (

    <div className="card-box" key={index}>

      <input
        placeholder="Company"
        name="company"
        value={exp.company}
        onChange={(e)=>handleExperience(index,e)}
      />

      <input
        placeholder="Position"
        name="position"
        value={exp.position}
        onChange={(e)=>handleExperience(index,e)}
      />

      <textarea
        rows="3"
        placeholder="Description"
        name="description"
        value={exp.description}
        onChange={(e)=>handleExperience(index,e)}
      />

      <button
        type="button"
        className="delete-btn"
        onClick={()=>removeExperience(index)}
      >
        Remove
      </button>

    </div>

  ))}

</div>

          {form.experiences.map((exp, index) => (

            <div className="card-box" key={index}>

              <input
                placeholder="Company"
                name="company"
                value={exp.company}
                onChange={(e) =>
                  handleExperience(index, e)
                }
              />

              <input
                placeholder="Position"
                name="position"
                value={exp.position}
                onChange={(e) =>
                  handleExperience(index, e)
                }
              />

              <textarea
                rows="3"
                placeholder="Description"
                name="description"
                value={exp.description}
                onChange={(e) =>
                  handleExperience(index, e)
                }
              />

            </div>

          ))}

        </div>
                {/* ========================= */}
        {/* Projects */}
        {/* ========================= */}

        <div className="section">

          <div className="section">

  <div className="title">

    <h3>Projects</h3>

    <button
      type="button"
      className="add-btn"
      onClick={addProject}
    >
      + Add
    </button>

  </div>

  {form.projects.map((project,index)=>(

    <div className="card-box" key={index}>

      <input
        placeholder="Project Name"
        name="title"
        value={project.title}
        onChange={(e)=>handleProject(index,e)}
      />

      <input
        placeholder="Technology"
        name="technology"
        value={project.technology}
        onChange={(e)=>handleProject(index,e)}
      />

      <textarea
        rows="3"
        placeholder="Description"
        name="description"
        value={project.description}
        onChange={(e)=>handleProject(index,e)}
      />

      <button
        type="button"
        className="delete-btn"
        onClick={()=>removeProject(index)}
      >
        Remove
      </button>

    </div>

  ))}

</div>

          {form.projects.map((project, index) => (

            <div className="card-box" key={index}>

              <input
                type="text"
                placeholder="Project Title"
                name="title"
                value={project.title}
                onChange={(e) => handleProject(index, e)}
              />

              <input
                type="text"
                placeholder="Technology Used"
                name="technology"
                value={project.technology}
                onChange={(e) => handleProject(index, e)}
              />

              <textarea
                rows="3"
                placeholder="Project Description"
                name="description"
                value={project.description}
                onChange={(e) => handleProject(index, e)}
              />

            </div>

          ))}

        </div>

        {/* ========================= */}
        {/* Skills */}
        {/* ========================= */}

        <div className="section">

          <div className="section">

  <div className="title">

    <h3>Skills</h3>

    <button
      type="button"
      className="add-btn"
      onClick={addSkill}
    >
      + Add
    </button>

  </div>

  {form.skills.map((skill,index)=>(

    <div className="skill-row" key={index}>

      <input
        type="text"
        placeholder="Skill"
        value={skill}
        onChange={(e)=>handleSkill(index,e)}
      />

      <button
        type="button"
        className="delete-skill"
        onClick={()=>removeSkill(index)}
      >
        ✖
      </button>

    </div>

  ))}

</div>

          {form.skills.map((skill, index) => (

            <input
              key={index}
              type="text"
              placeholder="Skill"
              value={skill}
              onChange={(e) => handleSkill(index, e)}
            />

          ))}

        </div>

        {/* ========================= */}
        {/* Languages */}
        {/* ========================= */}

        <div className="section">

          <div className="title">

            <h3>Languages</h3>

            <button
              type="button"
              className="add-btn"
              onClick={addLanguage}
            >
              + Add
            </button>

          </div>

          {form.languages.map((language, index) => (

            <input
              key={index}
              type="text"
              placeholder="Language"
              value={language}
              onChange={(e) => handleLanguage(index, e)}
            />

          ))}

        </div>

        {/* ========================= */}
        {/* Hobbies */}
        {/* ========================= */}

        <div className="section">

          <div className="title">

            <h3>Hobbies</h3>

            <button
              type="button"
              className="add-btn"
              onClick={addHobby}
            >
              + Add
            </button>

          </div>

          {form.hobbies.map((hobby, index) => (

            <input
              key={index}
              type="text"
              placeholder="Hobby"
              value={hobby}
              onChange={(e) => handleHobby(index, e)}
            />

          ))}

        </div>

      </div>

      {/* ========================= */}
      {/* Resume Preview */}
      {/* ========================= */}

      <div className="resume-preview-container">

        <ResumePreview
          form={form}
          photo={photo}
        />

      </div>
      <div className="resume-buttons">

<button
type="button"
className="download-btn"
onClick={downloadPDF}
>

📄 Download PDF

</button>

<button
type="button"
className="print-btn"
onClick={printResume}
>

🖨 Print

</button>

<button
type="button"
className="save-btn"
onClick={saveResume}
>

💾 Save Resume

</button>

        </div>

      </div>

    </div>
</div>
  </>
);

}

export default ResumeBuilder;