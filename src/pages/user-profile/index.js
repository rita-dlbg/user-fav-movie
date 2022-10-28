import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AccountCircle } from '@mui/icons-material';
import { TextField, Box } from '@mui/material';


const UserProfile = () => {

    const [image, setImage] = useState();
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
      setInfo({
        ...info,
        [name]:{
          ...info[name],
          value
        }
      })
    } 

  return (
    <div className="user-profile tc">
       <nav className="pointer nav-link"><Link to="/movies">List of Movies</Link></nav> 

      <div className="user-img flex items-center justify-center">
        {image?
         <img src="" />
         :
         <AccountCircle />
        }
      </div>
      <button type="button" className="upload-img mt3 pointer btn-hover">Upload Image</button>

      <div className="user-info">
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
            value={info.fname.value}
            onChange={handleChange}
            type="text"
          />
            <TextField
            label="Last Name"
            name="lname"
            value={info.lname.value}
            onChange={handleChange}
            type="text"
          />

          <TextField
            label="User Name"
            name="username"
            value={info.username.value}
            onChange={handleChange}
            type="text"
            fullWidth
          />

         <TextField
            label="Email"
            name="email"
            value={info.email.value}
            onChange={handleChange}
            type="email"
            fullWidth
          />

          <TextField
            label="Contact"
            name="contact"
            value={info.contact.value}
            onChange={handleChange}
            type="number"
          />
           <TextField
            label="Pin Code"
            name="pin"
            value={info.pin.value}
            onChange={handleChange}
            type="number"
          />

          <TextField
            label="City"
            name="city"
            value={info.city.value}
            onChange={handleChange}
            type="text"
            fullWidth
          />

          <TextField
            label="State"
            name="state"
            value={info.state.value}
            onChange={handleChange}
            type="text"
            fullWidth
          />
            

              <button type="button" className="button-form btn-hover">Save </button>
             
            
        </Box>
      </div> 

      
    </div>
  )
}

export default UserProfile