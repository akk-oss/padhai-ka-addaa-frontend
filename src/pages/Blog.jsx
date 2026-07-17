import "../assets/css/blog.css";

function Blog() {

  const blogs = [

    {
      id:1,
      image:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      title:"Top 10 Java Interview Questions",
      date:"15 July 2026",
      author:"PadhAI Team",
      description:"Prepare yourself with the most frequently asked Java interview questions and answers."
    },

    {
      id:2,
      image:"https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
      title:"Complete React Roadmap",
      date:"12 July 2026",
      author:"PadhAI Team",
      description:"Learn React from beginner to advanced with this complete roadmap."
    },

    {
      id:3,
      image:"https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      title:"Spring Boot Complete Guide",
      date:"10 July 2026",
      author:"PadhAI Team",
      description:"Everything you need to know to build REST APIs using Spring Boot."
    }

  ];

  return (

    <div className="blog-page">

      <h1>Latest Blogs</h1>

      <p className="blog-subtitle">

        Read programming tutorials, interview tips and career guidance.

      </p>

      <div className="blog-grid">

        {

          blogs.map((blog)=>(

            <div className="blog-card" key={blog.id}>

              <img src={blog.image} alt={blog.title} />

              <div className="blog-content">

                <span>

                  {blog.date} • {blog.author}

                </span>

                <h2>{blog.title}</h2>

                <p>{blog.description}</p>

                <button>

                  Read More

                </button>

              </div>

            </div>

          ))

        }

      </div>

    </div>

  );

}

export default Blog;