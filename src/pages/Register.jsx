import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../services/authService";


function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "STUDENT"
});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await registerUser(formData);

      alert("Registration Successful");

      navigate("/login");

    } catch (error) {

      console.log(error);

      alert("Registration Failed");

    }

  };

  return (

    <div className="container mt-5">

      <div className="row justify-content-center">

        <div className="col-lg-5">

          <div className="card shadow p-4">

            <h2 className="text-center mb-4">
              Create Account
            </h2>

            <form onSubmit={handleSubmit}>

              <div className="mb-3">
    <label className="form-label">Full Name</label>

    <input
        type="text"
        className="form-control"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        required
    />
</div>

             <div className="mb-3">
    <label className="form-label">Email</label>

    <input
        type="email"
        className="form-control"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
    />
</div>

              <div className="mb-3">
    <label className="form-label">Password</label>

    <input
        type="password"
        className="form-control"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
    />
</div>
<div className="mb-3">

    <label className="form-label">
        Register As
    </label>

    <select
        className="form-select"
        name="role"
        value={formData.role}
        onChange={handleChange}
    >
        <option value="STUDENT">Student</option>
        <option value="TEACHER">Teacher</option>
    </select>

</div>

              <button
                className="btn btn-primary w-100"
                type="submit"
              >
                Register
              </button>

            </form>

            <p className="text-center mt-3">

              Already have an account?

              <Link to="/login"> Login</Link>

            </p>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Register;