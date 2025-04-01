import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const checkEmail = (e) => {
    e.preventDefault();
    const emailRegex = /^[A-Za-z][A-Za-z0-9._%+-]*@[A-Za-z]+\.[a-z]{2,4}$/;

    if (!emailRegex.test(email)) {
      setError("❌ Email must start with a letter and be valid.");
      return false;
    }

    if (password.length < 6) {
      setError("❌ Password must be at least 6 characters long.");
      return false;
    }

    setError("");
    alert("✅ Login Successful!");
    return true;
  };

  return (
    <div className="content">
      <section className="container text-center py-5 mt-5">
        <h2 className="mb-4 teal-text fw-bold">Login</h2>
        <form className="w-50 mx-auto" onSubmit={checkEmail}>
          <div className="mb-3">
            <input 
              type="email" 
              className="form-control" 
              id="emailfield" 
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input 
              type="password" 
              className="form-control" 
              id="password" 
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn custom-btn">Login</button><br /><br />
          <div className="d-flex justify-content-center align-items-center mt-3">
            <h6 className="mb-0">Don't have an account?</h6>
            <Link to="/register" className="ms-2 link-secondary text-decoration-none">Register</Link>
          </div>
          {error && <div className="text-danger mt-2">{error}</div>}
        </form>
      </section>
    </div>
  );
};

export default Login;