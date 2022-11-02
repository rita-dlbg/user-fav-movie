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
      errorMessage:'Enter Valid Password'
    },

  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    if(value === ''){
      setValidation({
        ...validation,
        [name]:{
          ...validation[name],
          value,
          error: true
        }
      })
    }else {
      setValidation({
        ...validation,
        [name]:{
          ...validation[name],
          value,
          error: false
        }
      })
    }
   
  } 

  const handleSubmit = (e) => {
    e.preventDefault();

    const formFields = Object.keys(validation);
    let newFormValues = {...validation}

    let regex = /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/;

    for (let index = 0; index < formFields.length; index++) {
      const currentField = formFields[index];
      const currentValue = validation[currentField].value;

      if(currentValue === ''){
        newFormValues = {
          ...newFormValues,
          [currentField]:{
            ...newFormValues[currentField],
            error:true
          }
        }
      }else if(currentField == "email" && !currentValue.match(regex)){
        newFormValues = {
          ...newFormValues,
          [currentField]:{
            ...newFormValues[currentField],
            error:true,
            errorMessage: "Invalid Email Format"
          }
        }
      }
    }

    console.log(validation.number);
    setValidation(newFormValues)
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
          onSubmit={handleSubmit} 
          autoComplete="off"
        >
          <TextField
            label="First Name"
            name="fname"
            value={validation.fname.value}
            onChange={handleChange}
            type="text"
            error={validation.fname.error}
            helperText={validation.fname.error && validation.fname.errorMessage}
          />
            <TextField
            label="Last Name"
            name="lname"
            value={validation.lname.value}
            onChange={handleChange}
            type="text"
            error={validation.lname.error}
            helperText={validation.lname.error && validation.lname.errorMessage}
          />

          <TextField
            label="User Name"
            name="username"
            value={validation.username.value}
            onChange={handleChange}
            type="text"
            fullWidth
            error={validation.username.error}
            helperText={validation.username.error && validation.username.errorMessage}
          />

         <TextField
            label="Email"
            name="email"
            value={validation.email.value}
            onChange={handleChange}
            fullWidth
            error={validation.email.error}
            helperText={validation.email.error && validation.email.errorMessage}
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
                error={validation.password.error}
                helperText={validation.password.error && validation.password.errorMessage}
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
                error={validation.repassword.error}
                helperText={validation.repassword.error && validation.repassword.errorMessage}
              />

              <button className="button-form btn-hover" type="submit">Click to Register </button>
             
             <div className="tc link-to"><Link to="/sign-in">Click Here to Sign In</Link></div> 
        </Box>
        </div>
       </div>
      );
    }
    
    export default RegisterForm;
