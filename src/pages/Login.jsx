import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Alert,
  Stack
} from '@mui/material';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  
  useEffect(() => {
    const savedEmail = localStorage.getItem('savedEmail');
    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

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
    localStorage.setItem('savedEmail', email);
    localStorage.setItem('isLoggedIn', 'true');
    alert("✅ Login Successful!");
    return true;
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
          Login
        </Typography>

        <Box component="form" onSubmit={checkEmail} sx={{ width: '100%', mt: 2 }}>
          <Stack spacing={2}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Login
            </Button>

            {error && <Alert severity="error">{error}</Alert>}

            <Box display="flex" justifyContent="center" alignItems="center">
              <Typography variant="body2">
                Don't have an account?
              </Typography>
              <Link to="/register" style={{ marginLeft: '8px', textDecoration: 'none', color: '#1976d2' }}>
                Register
              </Link>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
