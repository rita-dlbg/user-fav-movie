import React from 'react';
import Cookies from 'universal-cookie';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { TextField, Box, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';


const SignIn = () => {

  const navigate = useNavigate();

  const cookies = new Cookies();

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   navigate('/user-profile');
  // };
     
  const [signin, setSignin] = useState({
    email:{
      value:cookies.get('email'),
      error:false,
      errorMessage:'Email is required'
    },
    password:{
      value:cookies.get('password'),
      error:false,
      errorMessage:'Enter Valid Password'
    }

  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    if(value === ''){
      setSignin({
        ...signin,
        [name]:{
          ...signin[name],
          value,
          error: true
        }
      })
    }else {
      setSignin({
        ...signin,
        [name]:{
          ...signin[name],
          value,
          error: false
        }
      })
    }
   
  } 

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/user-profile');

    const formFields = Object.keys(signin);
    let newFormValues = {...signin}

    let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    let pwdRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
    
    for (let index = 0; index < formFields.length; index++) {
      const currentField = formFields[index];
      const currentValue = signin[currentField].value;

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
      }else if(currentField == "password" && !currentValue.match(pwdRegex)){
        newFormValues = {
          ...newFormValues,
          [currentField]:{
            ...newFormValues[currentField],
            error:true,
            errorMessage: "Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter, one special character,"
          }
        }
      }
    }
    setSignin(newFormValues)
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
           method="GET"
          component="form"
          noValidate
          autoComplete="off"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          onSubmit = {handleSubmit}
        >
         <TextField
            label="Email"
            name="email"
            value={signin.email.value}
            onChange={handleChange}
            type="email"
            fullWidth
            error={signin.email.error}
            helperText={signin.email.error && signin.email.errorMessage}
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
                error={signin.password.error}
                helperText={signin.password.error && signin.password.errorMessage}
              />

              <button className="button-form btn-hover" type="submit">Sign In </button>
              <div className="tc link-to"><Link to="/">Click Here to Register</Link></div>
        </Box>
        </div>
       </div>
      );
    }
    
    export default SignIn;
