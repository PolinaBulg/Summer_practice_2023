import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  return (
    <>
      <div className='White_block'>
        <nav className='menu'>
          <ul className='list'>
            <li> <a className='active'>Home</a> </li>
            <li> <a className='not_active'>About me</a> </li>
            <li> <a className='not_active'>Skills</a> </li>
            <li> <a className='not_active'>Portfolio</a> </li>
            <li> <a className='not_active'>Contacts</a> </li>
          </ul>
        </nav>
        <div className='block'>
          <div className='info'>
            <div className='name'>Denis Novik</div>
            <div className='details'> 
              UX | UI designer
              24 years old, Minsk
            </div>
            <div className='language'>
              <p className='not_active'>RU</p>
              <p className='active'>| ENG</p>
            </div>
          </div>
        </div>
        <img className='photo1' src="web1.jpg"/>
      </div>
      <div className='Gray_block'>
        <div className='block2'>
          <p className='title'>About me</p>
          <p className='text'>
            Hi, I'm Denis - UX/UI designer from Minsk.<br></br>
            I'm interested in design and everything connected with it.
          </p>
          <p className='text'>
            I'm studying at courses "Web and mobile design<br></br>
            intefaces" in IT-Academy.
          </p>
          <p className='text'>
            Ready to implement excellent projects<br></br>
            with wounderful people.
          </p>
        </div>   
      </div>
      <div className='White_block'>
        <div className='block3'>
          <p className='title'>Skills</p>
          <p className='text'>I work in such programs as</p>
          <div className='list_of_stack'>
            <div className='item'>
              <img className='stack_photo' src="PS.jpg" />
              <p className='stack'>
                Adobe
                Photoshop
              </p>
              <div className='stars'>
                <img className='star_photo' src='star_black.jpg'/>
                <img className='star_photo' src='star_black.jpg'/>
                <img className='star_photo' src='star_black.jpg'/>
                <img className='star_photo' src='star_black.jpg'/>
                <img className='star_photo' src='star_gray.jpg'/>
              </div>
            </div>
            <div className='item'>
              <img className='stack_photo' src="AI.jpg" />
              <p className='stack'>
                Adobe
                Illustrator
              </p>
              <div className='stars'>
                <img className='star_photo' src='star_black.jpg'/>
                <img className='star_photo' src='star_black.jpg'/>
                <img className='star_photo' src='star_black.jpg'/>
                <img className='star_photo' src='star_gray.jpg'/>
                <img className='star_photo' src='star_gray.jpg'/>
              </div>
            </div>
            <div className='item'>
              <img className='stack_photo' src="AE.jpg" />
              <p className='stack'>
                Adobe<br></br>
                After Effects
              </p>
              <div className='stars'>
                <img className='star_photo' src='star_black.jpg'/>
                <img className='star_photo' src='star_black.jpg'/>
                <img className='star_photo' src='star_black.jpg'/>
                <img className='star_photo' src='star_black.jpg'/>
                <img className='star_photo' src='star_gray.jpg'/>
              </div>
            </div>
            <div className='item'>
              <img className='stack_photo' src="Figma.jpg" />
              <p className='stack'>
                Figma
              </p>
              <div className='stars'>
                <img className='star_photo' src='star_black.jpg'/>
                <img className='star_photo' src='star_black.jpg'/>
                <img className='star_photo' src='star_black.jpg'/>
                <img className='star_photo' src='star_black.jpg'/>
                <img className='star_photo' src='star_gray.jpg'/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='Gray_block'>
          <p className='title'>Portfolio</p>
          <figure className='project'>  
            <img className='project_photo' src="web2.jpg" />  
            <figcaption className='line'>Online fashion store - Homepege</figcaption>
          </figure>
          <figure className='project'>  
            <img className='project_photo' src="web3.jpg" />
            <figcaption className='line'>Reebok Store - Concept</figcaption>
          </figure>
          <figure className='project'> 
            <img className='project_photo' src="web4.jpg" />
            <figcaption className='line'>Braun Landing Page - Concept</figcaption>
          </figure>
      </div>
      <div className='White_block'>
        <p className='title'>Contacts</p>
        <p className='text'>
          Want to know more or just chat?<br></br>
          You are welcome!
        </p>
        <button className='btn'>Send message</button>
        <div className='contacts'>
          <img className='contact_photo' src="in.jpg" />
          <img className='contact_photo' src="cam.jpg" />
          <img className='contact_photo' src="be.jpg" />
          <img className='contact_photo' src="ball.jpg" />
        </div>
        <div className='not_active'>
          <p className='not_active'>
            Like me on<br></br>
            Linkedln, Instagram, Behance, Dribble
          </p>  
          </div>
      </div>
    </>
  )
}

export default App
