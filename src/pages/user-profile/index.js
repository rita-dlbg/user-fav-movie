import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { TextField, Box } from '@mui/material';


const UserProfile = () => {

    const [info, setInfo] = useState({
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
      contact:{
        value:'',
        error:false,
        errorMessage:'Enter contact no.'
      },
      pin:{
        value:'',
        error:false,
        errorMessage:'Enter Pin Code'
      },
      city:{
        value:'',
        error:false,
        errorMessage:'Enter City Name'
      },
      state:{
        value:'',
        error:false,
        errorMessage:'Enter State Name'
      },
    });


    const handleChange = (e) => {
      const {name, value} = e.target;
      if(value === ''){
        setInfo({
          ...info,
          [name]:{
            ...info[name],
            value,
            error: true
          }
        })
      }else {
        setInfo({
          ...info,
          [name]:{
            ...info[name],
            value,
            error: false
          }
        })
      }
     
    } 

    const handleSubmit = (e) => {
      e.preventDefault();
  
      const formFields = Object.keys(info);
      let newFormValues = {...info}
  
      let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

      let pinval = info.pin.value;

      let cont = info.contact.value;

      for (let index = 0; index < formFields.length; index++) {
        const currentField = formFields[index];
        const currentValue = info[currentField].value;
  
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
      else if(currentField == "pin" && (pinval.length<6 || pinval.length>6)){
        newFormValues = {
          ...newFormValues,
          [currentField]:{
            ...newFormValues[currentField],
            error:true,
            errorMessage: "Enter 6 digit valid pin"
          }
      }
    }else if(currentField == "contact" && (cont.length<10 || cont.length>10)){
      newFormValues = {
        ...newFormValues,
        [currentField]:{
          ...newFormValues[currentField],
          error:true,
          errorMessage: "Enter 10 digit valid Mobile number"
        }
    }
    }
  }
  
      console.log(info.number);
      setInfo(newFormValues)
    }

  return (
    <div className="user-profile tc">
       <nav className="pointer nav-link"><Link to="/movies">List of Movies</Link></nav> 

      <div className="user-info">
       
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
            value={info.fname.value}
            onChange={handleChange}
            type="text"
            error={info.fname.error}
            helperText={info.fname.error && info.fname.errorMessage}
          />
            <TextField
            label="Last Name"
            name="lname"
            value={info.lname.value}
            onChange={handleChange}
            type="text"
            error={info.lname.error}
            helperText={info.lname.error && info.lname.errorMessage}
          />

          <TextField
            label="User Name"
            name="username"
            value={info.username.value}
            onChange={handleChange}
            type="text"
            fullWidth
            error={info.username.error}
            helperText={info.username.error && info.username.errorMessage}
          />

         <TextField
            label="Email"
            name="email"
            value={info.email.value}
            onChange={handleChange}
            fullWidth
            error={info.email.error}
            helperText={info.email.error && info.email.errorMessage}
          />

          <TextField
            label="Contact"
            name="contact"
            value={info.contact.value}
            onChange={handleChange}
            InputProps={{ inputProps: { min: 0, max: 10 } }}
            error={info.contact.error}
            helperText={info.contact.error && info.contact.errorMessage}
          />
           <TextField
            label="Pin Code"
            name="pin"
            value={info.pin.value}
            onChange={handleChange}
            error={info.pin.error}
            InputProps={{ inputProps: { min: 0, max: 6 } }}
            helperText={info.pin.error && info.pin.errorMessage}
          />

          <TextField
            label="City"
            name="city"
            value={info.city.value}
            onChange={handleChange}
            type="text"
            fullWidth
            error={info.city.error}
            helperText={info.city.error && info.city.errorMessage}
          />

          <TextField
            label="State"
            name="state"
            value={info.state.value}
            onChange={handleChange}
            type="text"
            fullWidth
            error={info.state.error}
            helperText={info.state.error && info.state.errorMessage}
          />
            
              <button type="submit" className="button-form btn-hover">Save </button>
            
        </Box>
       
      </div> 

      
    </div>
  )
}

export default UserProfile