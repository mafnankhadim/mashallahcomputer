import React, { useState } from "react";
import "./adminlogin.css";
import AdminTopbar from "./AdminTopbar";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Minimal placeholder authentication
    if (email === "admin@gmail.com" && password === "123") {
      navigate("/admin/dashboard");
    } else {
      alert("Invalid credentials. Use admin@gmail.com / 123");
    }
  };

  return (
    <>
      <AdminTopbar />
      <div className="admin-login-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="contact-form">
              <h3 className="mb-4">Admin Login</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className="default-btn">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AdminLogin;
