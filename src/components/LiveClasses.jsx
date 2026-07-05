function LiveClasses() {

  const classes = [
    {
      title: "Java Live Class",
      time: "Today 7:00 PM"
    },
    {
      title: "Spring Boot",
      time: "Tomorrow 8:00 PM"
    },
    {
      title: "React Masterclass",
      time: "Sunday 6:00 PM"
    }
  ];

  return (
    <div className="container mt-5">

      

      <div className="row">

        {classes.map((item, index) => (

          <div className="col-md-4 mb-3" key={index}>

            <div className="card shadow-sm border-0 rounded-4">

              <div className="card-body">

                <h5>{item.title}</h5>

                <p className="text-muted">
                  {item.time}
                </p>

                <button className="btn btn-danger">
                  Join Live
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );

}

export default LiveClasses;