function Categories() {

    const categories = [
        "Java",
        "Spring Boot",
        "React",
        "Python",
        "Web Development",
        "Data Structures",
        "SQL",
        "JavaScript"
    ];

    return (

        <div className="container mt-5">

            

            <div className="row">

                {
                    categories.map((category, index) => (

                        <div className="col-md-3 mb-3" key={index}>

                            <div className="card shadow-sm border-0 text-center p-4 rounded-4">

                                <h5>{category}</h5>

                            </div>

                        </div>

                    ))
                }

            </div>

        </div>

    );

}

export default Categories;