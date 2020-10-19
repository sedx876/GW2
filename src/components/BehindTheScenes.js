import React from 'react'
import '../styles/BehindTheScenes.css'
import TheKiss from '../assets/TheKiss.webp'
import TwilightBTS from '../assets/TwilightBTS.webp'
import Soldier from '../assets/Soldier.webp'
import Gypsy from '../assets/Gypsy.webp'
import Dance from '../assets/Dance.webp'
import Jail from '../assets/Jail.webp'
import Burn from '../assets/Burn.webp'
import Friends from '../assets/Friends.webp'
import Edit from '../assets/Edit.webp'

const BehindTheScenes = () => {

  return (
    <>
    <h2>Behind The Scenes</h2>
        <img className="TheKiss" 
        alt="The Kiss" 
        src={TheKiss}/>

        <img className="TwilightBTS" 
        alt="Twilight" 
        src={TwilightBTS}/>

        <img className="Soldier" 
        alt="Soldier" 
        src={Soldier}/>

        <img className="Gypsy" 
        alt="Gypsy" 
        src={Gypsy}/>

        <img className="Dance" 
        alt="Dance" 
        src={Dance}/>

        <img className="Jail" 
        alt="Jail" 
        src={Jail}/>

        <img className="Burn" 
        alt="Burn" 
        src={Burn}/>

        <img className="Friends" 
        alt="Friends" 
        src={Friends}/>

        <img className="Edit" 
        alt="Edit" 
        src={Edit}/>
      
    </>
  )
}

export default BehindTheScenes