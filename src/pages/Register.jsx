import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  Typography,
  Alert,
  Stack,
  Box
} from '@mui/material';

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

    setError("");

    // ✅ Save to localStorage
    localStorage.setItem('registeredUser', JSON.stringify(formData));

    alert("✅ Registration Successful!");
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleReset = () => {
    setFormData({
      username: '',
      email: '',
      phone: '',
      password: '',
      confirm: '',
      ageval: '',
      district: 'Select District'
    });
    setError('');
  };

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        textAlign="center"
      >
        <Typography variant="h4" color="primary" fontWeight="bold" gutterBottom>
          Register
        </Typography>

        <Box component="form" onSubmit={validateForm} sx={{ width: '100%', mt: 2 }}>
          <Stack spacing={2}>
            <TextField
              label="Username (8-32 chars)"
              name="username"
              value={formData.username}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Phone Number"
              name="phone"
              type="tel"
              inputProps={{ maxLength: 10 }}
              value={formData.phone}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Password (with special char)"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Confirm Password"
              name="confirm"
              type="password"
              value={formData.confirm}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Age"
              name="ageval"
              type="number"
              value={formData.ageval}
              onChange={handleChange}
              fullWidth
            />
            <FormControl fullWidth>
              <InputLabel>District</InputLabel>
              <Select
                name="district"
                value={formData.district}
                onChange={handleChange}
                label="District"
              >
                <MenuItem value="Select District">Select District</MenuItem>
                <MenuItem value="CHENNAI">CHENNAI</MenuItem>
                <MenuItem value="CHENGALPET">CHENGALPET</MenuItem>
                <MenuItem value="TIRUVANNAMALAI">TIRUVANNAMALAI</MenuItem>
              </Select>
            </FormControl>

            <Stack direction="row" spacing={2}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Register
              </Button>
              <Button type="button" variant="outlined" color="secondary" fullWidth onClick={handleReset}>
                Reset
              </Button>
            </Stack>

            {error && <Alert severity="error">{error}</Alert>}

            <Box display="flex" justifyContent="center" alignItems="center">
              <Typography variant="body2">
                Already have an account?
              </Typography>
              <Link to="/login" style={{ marginLeft: '8px', textDecoration: 'none', color: '#1976d2' }}>
                Login
              </Link>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;
