import CourseCard from "./CourseCard";

function FeaturedCourses() {

    return (

        <div className="container mt-5">

            

            <div className="row">

                <div className="col-md-4 mb-4">

                    <CourseCard
                        title="Java Masterclass"
                        teacher="Alok Academy"
                        image="https://picsum.photos/500/300?11"
                    />

                </div>

                <div className="col-md-4 mb-4">

                    <CourseCard
                        title="Spring Boot"
                        teacher="PadhAI LMS"
                        image="https://picsum.photos/500/300?12"
                    />

                </div>

                <div className="col-md-4 mb-4">

                    <CourseCard
                        title="React Development"
                        teacher="Programming Hub"
                        image="https://picsum.photos/500/300?13"
                    />

                </div>

            </div>

        </div>

    );

}

export default FeaturedCourses;