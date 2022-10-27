import React from 'react';
import { createBrowserHistory } from 'history';
import Routes from './Routes';
import './App.css';

const history = createBrowserHistory();

function App() {
  return (
        <Routes history={history} />
  );
}

export default App;
