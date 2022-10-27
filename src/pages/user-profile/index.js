import React, { useState } from 'react';
import { AccountCircle } from '@mui/icons-material';

const UserProfile = () => {

    const [image, setImage] = useState();

  return (
    <div className="user-profile tc pa4">
      <div className="user-img flex items-center justify-center">
        {image?
         <img src="" />
         :
         <AccountCircle />
        }
      </div>
      <button type="button" className="upload-img mt3 pointer btn-hover">Upload Image</button>

      <div>
        
      </div>

      
    </div>
  )
}

export default UserProfile