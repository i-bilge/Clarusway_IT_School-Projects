import React from 'react'
import './About.scss';
import homePhoto from '../../assets/coding.svg'

function About() {
  return (
    <div className='aboutArea'>
      <img src={homePhoto} alt='pic'/>
      <h1 className='aboutEntry'>About The Developer <span className='entrySpan'>Ismail</span></h1>
      <div className='aboutText'>
        <p>Hi, I am Ismail</p>
        <p>I am a Full-Stack Developer who have especially fun to create user interfaces. In this app i did use React and Sass.</p>
        <p>Here you can enjoy the Recipe App. Have fun!</p>
        <a href="iismailbilge@gmail.com" style={{textDecoration:"none"}}>SEND ME E-MAIL(iismailbilge@gmail)</a>
      </div>
    </div>
  )
}
export default About