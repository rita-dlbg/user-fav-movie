import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterForm from './pages/register';
import SignIn from './pages/sign-in';
import UserProfile from './pages/user-profile';
import Movies from './pages/movies';

const Main = (props) => {

  return (
    <div>
      <Router history={props.history}>
        <div>
          <Routes>
            <Route exact path="/" element={<RegisterForm />} />
            <Route exact path="/sign-in" element={<SignIn />} />
            <Route path="/user-profile" element={<UserProfile />} /> 
            <Route path="/movies" element={<Movies />} /> 
          
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default Main;
