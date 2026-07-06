import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import "../assets/css/login.css";

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

            localStorage.setItem("token", response.token);
            localStorage.setItem("role", response.role);

            alert("Login Successful");

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

        <div className="login_form_container">

            <div className="login_form">

                <form onSubmit={handleLogin}>

                    <h2>Login</h2>

                    <div className="input_group">

                        <i className="fa fa-user"></i>

                        <input
                            type="email"
                            placeholder="Username"
                            className="input_text"
                            autoComplete="off"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                    </div>

                    <div className="input_group">

                        <i className="fa fa-unlock-alt"></i>

                        <input
                            type="password"
                            placeholder="Password"
                            className="input_text"
                            autoComplete="off"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                    </div>

                    <div className="button_group" id="login_button">

                        <input
                            type="submit"
                            value="Submit"
                            className="btn btn-success"
                            style={{
                                width: "300px",
                                height: "40px",
                                borderRadius: "50px",
                                fontSize: "20px",
                                color: "#00ccff52",
                                background: "none"
                            }}
                        />

                    </div>

                    <div className="fotter">

                        <a href="/forgot-password">
                            Forgot Password ?
                        </a>

                        <a href="/Register">
                            SignUp
                        </a>

                    </div>

                </form>

            </div>

        </div>

    );

}

export default Login;