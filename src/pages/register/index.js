import React from 'react';
import { useState } from 'react';
import { TextField, Box, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from "react-router-dom";

const RegisterForm = () => {
     
  const [validation, setValidation] = useState({

    fname:{
      value:'',
      error:false,
      errorMessage:'First Name is required'
    },
    lname:{
      value:'',
      error:false,
      errorMessage:'Last Name is required'
    },
    username:{
      value:'',
      error:false,
      errorMessage:'User Name is required'
    },
    email:{
      value:'',
      error:false,
      errorMessage:'Email is required'
    },
    password:{
      value:'',
      error:false,
      errorMessage:'Enter Valid Password'
    },
    repassword:{
      value:'',
      error:false,
      errorMessage:'Password does not matched'
    },

  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    setValidation({
      ...validation,
      [name]:{
        ...validation[name],
        value
      }
    })
  } 

  const handleClickShowPassword = () => {
    setValidation({
      ...validation,
      showPassword: !validation.showPassword,
    });
  };

  const handleClickreShowPassword = () => {
    setValidation({
      ...validation,
      reShowPassword: !validation.reShowPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseReDownPassword = (event) => {
    event.preventDefault();
  };
  return (
      <div className="flex items-center user-form">
        <div className="form-box tc">
          <h1>Register</h1>
          <p>Fill Out This Form</p> 
           <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="First Name"
            name="fname"
            value={validation.fname.value}
            onChange={handleChange}
            type="text"
          />
            <TextField
            label="Last Name"
            name="lname"
            value={validation.lname.value}
            onChange={handleChange}
            type="text"
          />

          <TextField
            label="User Name"
            name="username"
            value={validation.username.value}
            onChange={handleChange}
            type="text"
            fullWidth
          />

         <TextField
            label="Email"
            name="email"
            value={validation.email.value}
            onChange={handleChange}
            type="email"
            fullWidth
          />

          <TextField
                label="Password"
                value={validation.password.value}
                name="password"
                type={validation.showPassword ? 'text' : 'password'}
                onChange={handleChange}
                InputProps={{
                endAdornment:  <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {validation.showPassword ? <Visibility /> : <VisibilityOff /> }
                </IconButton>
              </InputAdornment>
                }}
                fullWidth
              />

             <TextField
                label="Repeat Password"
                value={validation.repassword.value}
                name="repassword"
                type={validation.reShowPassword ? 'text' : 'password'}
                onChange={handleChange}
                InputProps={{
                endAdornment:  <InputAdornment position="end">
                <IconButton
                  onClick={handleClickreShowPassword}
                  onMouseDown={handleMouseReDownPassword}
                  edge="end"
                >
                  {validation.reShowPassword ? <Visibility /> : <VisibilityOff /> }
                </IconButton>
              </InputAdornment>
                }}
                fullWidth
              />

              <button className="button-form btn-hover" type="submit">Click to Register </button>
             
             <div className="tc link-to"><Link to="/sign-in">Click Here to Sign In</Link></div> 
        </Box>
        </div>
       </div>
      );
    }
    
    export default RegisterForm;
