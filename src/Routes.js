import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterForm from './pages/register';
import SignIn from './pages/sign-in';
import UserProfile from './pages/user-profile';

const Main = (props) => {

  return (
    <div>
      <Router history={props.history}>
        <div>
          <Routes>
            <Route exact path="/" element={<RegisterForm />} />
            <Route exact path="/sign-in" element={<SignIn />} />
            <Route path="/user-profile" element={<UserProfile />} /> 
           
          
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default Main;
