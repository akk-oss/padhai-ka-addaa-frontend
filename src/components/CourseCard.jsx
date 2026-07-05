function CourseCard({ title, teacher, image }) {
  return (
    <div className="card shadow-sm border-0 rounded-4">

      <img
        src={image}
        className="card-img-top"
        alt={title}
        style={{ height: "180px", objectFit: "cover" }}
      />

      <div className="card-body">

        <h5>{title}</h5>

        <p className="text-muted">
          {teacher}
        </p>

        <button className="btn btn-primary w-100">
          Enroll Now
        </button>

      </div>

    </div>
  );
}

export default CourseCard;