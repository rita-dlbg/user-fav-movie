import React from 'react';
import { useState } from 'react';
import { TextField, Box, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from "react-router-dom";

const SignIn = () => {
     
  const [signin, setSignin] = useState({
    email:{
      value:'',
      error:false,
      errorMessage:'Email is required'
    },
    password:{
      value:'',
      error:false,
      errorMessage:'Enter Valid Password'
    }

  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    setSignin({
      ...signin,
      [name]:{
        ...signin[name],
        value
      }
    })
  } 

  const handleClickShowPassword = () => {
    setSignin({
      ...signin,
      showPassword: !signin.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
      <div className="flex items-center user-form">
        <div className="form-box tc">
          <h1>Sign In</h1>
           <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
        >
         <TextField
            label="Email"
            name="email"
            value={signin.email.value}
            onChange={handleChange}
            type="email"
            fullWidth
          />

          <TextField
                label="Password"
                value={signin.password.value}
                name="password"
                type={signin.showPassword ? 'text' : 'password'}
                onChange={handleChange}
                InputProps={{
                endAdornment:  <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {signin.showPassword ? <Visibility /> : <VisibilityOff /> }
                </IconButton>
              </InputAdornment>
                }}
                fullWidth
              />

              <button className="button-form btn-hover" type="submit">Sign In </button>
              <div className="tc link-to"><Link to="/">Click Here to Register</Link></div>
        </Box>
        </div>
       </div>
      );
    }
    
    export default SignIn;
