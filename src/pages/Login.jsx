import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            const response = await loginUser({
                email,
                password
            });

            console.log("Login Response:", response);

            // Save Token
            localStorage.setItem("token", response.token);

            // Save Role
            localStorage.setItem("role", response.role);

            alert("Login Successful");

            // Redirect According to Role

            if (response.role === "ADMIN") {

                navigate("/admin/dashboard");

            } else if (response.role === "TEACHER") {

                navigate("/teacher/dashboard");

            } else {

                navigate("/student/dashboard");

            }

        } catch (error) {

            console.log(error);

            alert("Invalid Email or Password");

        }

    };

    return (

        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-md-5">

                    <div className="card shadow p-4">

                        <h2 className="text-center mb-4">
                            Login
                        </h2>

                        <form onSubmit={handleLogin}>

                            <div className="mb-3">

                                <label>Email</label>

                                <input
                                    type="email"
                                    className="form-control"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />

                            </div>

                            <div className="mb-3">

                                <label>Password</label>

                                <input
                                    type="password"
                                    className="form-control"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />

                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary w-100"
                            >
                                Login
                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Login;