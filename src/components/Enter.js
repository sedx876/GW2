import React, { Component } from 'react'
import '../styles/Enter.css'
import gothDoor from '../assets/gothDoor.png'


class Enter extends Component {
  render() {
    return (
      <div>
        <span id="L">G</span>
        <span id="I">H</span>
        <span id="G">O</span>
        <span id="H">S</span>
        <span id="T">T</span>
        <span id="H">W</span>
        <span id="G">A</span>
        <span id="H">L</span>
        <span id="T">K</span>

        <img className="gothDoor" 
        alt="gothDoor" 
        src={gothDoor}/>
     </div>
    )
  }
}


export default Enter
