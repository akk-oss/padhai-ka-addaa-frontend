import { Link } from "react-router-dom";

const courses = [

    {
        id:1,
        title:"Data Structures",
        teacher:"Love Babbar",
        image:"/images/dsa.png",
        rating:"4.8",
        students:"12.5K"
    },

    {
        id:2,
        title:"Java Programming",
        teacher:"Code With Harry",
        image:"/images/java.png",
        rating:"4.7",
        students:"11K"
    },

    {
        id:3,
        title:"DBMS Complete Course",
        teacher:"Apna College",
        image:"/images/dbms.png",
        rating:"4.9",
        students:"8K"
    },

    {
        id:4,
        title:"Operating System",
        teacher:"Neo Academy",
        image:"/images/os.png",
        rating:"4.8",
        students:"7K"
    }

];

function PopularCourses(){

return(

<div className="mt-5">

<div className="d-flex justify-content-between mb-4">

<h3 className="fw-bold">
Popular Courses
</h3>

<Link
to="/courses"
className="text-decoration-none"
>

View All →

</Link>

</div>

<div className="row g-4">

{
courses.map(course=>(

<div
className="col-lg-3 col-md-6"
key={course.id}
>

<div
className="card border-0 shadow-sm rounded-4 h-100"
>

<img
src={course.image}
className="card-img-top"
style={{
height:"180px",
objectFit:"cover"
}}
/>

<div className="card-body">

<h5>
{course.title}
</h5>

<p className="text-muted">

By {course.teacher}

</p>

<div className="d-flex justify-content-between">

<span>
⭐ {course.rating}
</span>

<span>
👥 {course.students}
</span>

</div>

</div>

</div>

</div>

))
}

</div>

</div>

)

}

export default PopularCourses;