import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.scss';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirm: '',
    ageval: '',
    district: 'Select District'
  });
  const [error, setError] = useState('');

  const validateForm = (e) => {
    e.preventDefault();
    const { username, password, confirm, ageval, email, phone } = formData;

    // Username validation
    if (username.length < 8 || username.length > 32) {
      setError("❌ Username must be 8-32 characters.");
      return;
    }

    // Phone number validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      setError("❌ Enter a valid 10-digit phone number.");
      return;
    }

    // Password validation
    const specialCharacterRegex = /[!@#$%^&*(),.?":{}|<>]/;
    if (!specialCharacterRegex.test(password)) {
      setError("❌ Password must contain at least one special character.");
      return;
    }

    if (password !== confirm) {
      setError("❌ Passwords do not match.");
      return;
    }

    // Email validation
    const emailRegex = /^[A-Za-z][A-Za-z0-9._%+-]*@[A-Za-z]+\.[a-z]{2,4}$/;
    if (!emailRegex.test(email)) {
      setError("❌ Email must start with a letter and be valid.");
      return;
    }

    // Age validation
    if (ageval < 18) {
      setError("❌ Age must be at least 18.");
      return;
    }

    // If everything is fine
    setError("");
    alert("✅ Registration Successful!");
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="content">
      <section className="container text-center py-5 mt-5">
        <h2 className="mb-4 teal-text fw-bold">Register</h2>
        <form className="w-50 mx-auto" id="registrationForm" onSubmit={validateForm}>
          <div className="mb-3">
            <input 
              type="text" 
              className="form-control" 
              id="username" 
              name="username"
              placeholder="Username (8-32 chars)"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input 
              type="email" 
              className="form-control" 
              id="email" 
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input 
              type="tel" 
              className="form-control" 
              id="phone" 
              name="phone"
              placeholder="Phone Number (10 digits)" 
              maxLength="10"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input 
              type="password" 
              className="form-control" 
              id="password" 
              name="password"
              placeholder="Password (with special char)"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input 
              type="password" 
              className="form-control" 
              id="confirm" 
              name="confirm"
              placeholder="Confirm Password"
              value={formData.confirm}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input 
              type="number" 
              className="form-control" 
              id="ageval" 
              name="ageval"
              placeholder="Age"
              value={formData.ageval}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <select className="form-select" name="district" value={formData.district} onChange={handleChange}>
              <option value="Select District">Select District</option>
              <option value="CHENNAI">CHENNAI</option>
              <option value="CHENGALPET">CHENGALPET</option>
              <option value="TIRUVANNAMALAI">TIRUVANNAMALAI</option>
            </select>
          </div>
          <div className="d-flex justify-content-center gap-3">
            <button type="submit" className="btn btn-teal w-50">Register</button>
            <button type="reset" className="btn btn-secondary w-50">Reset</button>
          </div>
          <div className="d-flex justify-content-center align-items-center mt-3">
            <h6 className="mb-0">Already have an account?</h6>
            <Link to="/login" className="ms-2 link-secondary text-decoration-none">Login</Link>
          </div>
          {error && <div id="errormess" className="text-danger mt-2">{error}</div>}
        </form>
      </section>
    </div>
  );
};

export default Register;