import React from 'react'
import '../styles/News.css'
import TheFarmOP from '../assets/TheFarmOP.webp'
import VV from '../assets/VV.webp'
import DSconcept from '../assets/DSconcept.webp'

const News = () => {

  return (
    <>
      <h2>In The News...</h2>
      <div class="card border-secondary mb-3">
        <div class="card-header">
          THE FARM - BUY OR RENT ON VOD</div>
        <div class="card-body">
          <h4 class="card-title">October 27, 2018</h4>
            <img className="gothDoor" 
            alt="gothDoor" 
            src={TheFarmOP}/>
            <p class="card-text">You haven't seen 
            #GhostWalkTheFarm; winner of Best Horror 
            Short Trophy (Cleveland Indie Gathering) 
            and Best Suspense Feature Trophy (Sicily 
            International Film Festival), as well as 
            countless festival screenings? Well, we 
            have a solution for you. You can view it 
            on #VOD from Continuum Motion Pictures or 
            find it on your Roku TV channel. Starring 
            John Chiara & Leya Siri. #Horror 
            #Paranormal #TrueStory #Halloween
            Rent or buy the Farm (click here)</p>
      </div>
      </div>
      <br/>
      <div class="card border-secondary mb-3">
        <div class="card-header">
        GHOST WALK STUDIOS ATTENDS CLEVELAND COMIC CON</div>
        <div class="card-body">
          <h4 class="card-title">October 4, 2018</h4>
            <img className="gothDoor" 
            alt="gothDoor" 
            src={VV}/>
            <p class="card-text">Ghost Walk Studios 
            attended Cleveland Comic Con to promote 
            films Estella's Revenge, Maggie Shayne's 
            Embrace the Twilight and The Farm (also 
            other films in development). Victoria 
            Vardon of Ghost Walk Studios was an 
            official judge at the Cleveland Comic Con 
            Film Showcase and attending for the film 
            showcase and presentation of awards. </p>
      </div>
      </div>
      <br />
      <div class="card border-secondary mb-3">
        <div class="card-header">
        Dread Central’s Own Staci Layne Wilson to 
        Direct Slasher Film DEAD SLATE</div>
        <div class="card-body">
          <h4 class="card-title"></h4>
            <img className="gothDoor" 
            alt="gothDoor" 
            src={DSconcept}/>
            <p class="card-text">We're incredibly proud 
            and excited to hear that our own Staci Layne 
            Wilson has been locked down as the director 
            of the upcoming slasher Dead Slate, from 
            Ghost Walk Studios & 333 Productions! The 
            film, which is produced and written by Kerry 
            Fleming (Rock Paper Dead), will be entering 
            production in Spring of 2019 and will be 
            represented at this year’s AFM.</p> 
            
            <p class="card-text">Fleming states, “We’re thrilled to have 
            such a gifted talent as Staci come on board. 
            There has been so much talk recently to 
            the perceived scarcity of female directors 
            out there, which we do not agree with, so 
            we feel extremely fortunate to have 
            someone of Staci’s caliber agree to take 
            the helm for Dead Slate.”</p>

​            <p class="card-text">The current cast includes Max Wasa 
            (Death House), Brooke Lewis (iMurders), 
            John Dugan (The Texas Chainsaw Massacre), 
            and Anna Margaret (Rock Paper Dead), as 
            well as Shanda Renee, Raelynn Harper, and 
            Luke Gregory Crosby.</p>

​           <p class="card-text">“Dead Slate takes you behind the scenes 
           of a slasher film production and follows 
           the stereotypical cast as they are stalked 
           by a masked psychopath who slays in homage 
           to classic cinematic murder set pieces.“</p>
      </div>
      </div>
    </>
  )
}

export default News