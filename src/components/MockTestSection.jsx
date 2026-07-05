function MockTestSection() {

  const tests=[

    "Java Test",

    "Spring Boot Test",

    "React Test"

  ];

  return(

    <div className="container mt-5">

      

      <div className="row">

        {

          tests.map((test,index)=>(

            <div className="col-md-4 mb-3" key={index}>

              <div className="card shadow border-0 rounded-4">

                <div className="card-body">

                  <h5>{test}</h5>

                  <p className="text-muted">
                    20 Questions
                  </p>

                  <button className="btn btn-primary">
                    Start Test
                  </button>

                </div>

              </div>

            </div>

          ))

        }

      </div>

    </div>

  );

}

export default MockTestSection;