import React from 'react';
//import Enter from './components/Enter'
import "bootswatch/dist/cyborg/bootstrap.min.css"
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './components/About'
import News from './components/News'
import BehindTheScenes from './components/BehindTheScenes'

import './styles/App.css';

function App() {
  return (
    <div className="App">
      {/* <Enter /> */}
      <Navbar />
      {/* <Home /> */}
      {/* <About /> */}
      {/* <News /> */}
      <BehindTheScenes/>
      <Footer />
    </div>
  );
}

export default App;
