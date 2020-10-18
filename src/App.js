import React from 'react';
//import Enter from './components/Enter'
import "bootswatch/dist/cyborg/bootstrap.min.css"
import Home from './components/Home'
import Navbar from './components/Navbar'

import './styles/App.css';

function App() {
  return (
    <div className="App">
      {/* <Enter /> */}
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
