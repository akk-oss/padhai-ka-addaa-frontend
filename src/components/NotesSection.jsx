function NotesSection() {

  const notes = [
    "Java Notes",
    "Spring Boot Notes",
    "DBMS Notes",
    "Operating System Notes"
  ];

  return (

    <div className="container mt-5">

      

      <div className="row">

        {
          notes.map((note,index)=>(

            <div className="col-md-3 mb-3" key={index}>

              <div className="card shadow-sm border-0 rounded-4 p-4 text-center">

                <h5>{note}</h5>

                <button className="btn btn-outline-primary mt-3">
                  Download
                </button>

              </div>

            </div>

          ))
        }

      </div>

    </div>

  );

}

export default NotesSection;