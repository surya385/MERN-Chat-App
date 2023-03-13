import { TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react'
import "./Login.css"
const Login = () => {
  const onIdChange = (event) => {};
  const handleLogIn = () => {};
  const handleCreateNew = () => {};
  return (
    <div className='login'>
      <Typography variant='h4'>Login</Typography>
      <TextField
        className='input'
        id="outlined-basic"
        label="Enter Your Number"
        onChange={onIdChange}
        variant="outlined"
      />
      <div className='buttons'> 
        <Button variant="contained" className='loginButton' onClick={handleLogIn}>
          Login
        </Button>
        <Button variant="outlined" onClick={handleCreateNew}>
          Create New Account
        </Button>
      </div>
    </div>
  );
}

export default Login