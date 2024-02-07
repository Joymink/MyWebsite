import '../personal/personal.css'
import Photo from '../../assets/Jayden.jpeg'
import React from 'react'


const Personal = () => {
  

  return (
    <div className='personal-container' id='personal'>
      
      <div className="personal-content scale-in-hor-left">
        <div className="personal-picture">
          <img src={Photo} className='tanzi-photo' alt="Just me" />
        </div>
        
        <div className='personal-info'>
          <div className='personal-info_container'>
            <div className='personal-info_title'>
              <h3>Aspiring Entrepreneur | Front End Developer | Mobile and Web Developer</h3>
            </div>
            <div className='personal-info_content'>
              <h4>Hi Everyone!</h4>
          
              <p> &emsp; My Name is Jayden Evans. I am originally from Ramsey, Minnesota. Now I stay in the Inland Empire
                of California. I love to meet new people and create new experiences. I am a software developer and an
                entrepreneur. If I am not working on my brand or building projects. You can find me gaming/streaming, spending
                time with my friends, girlfriend and of course my dog. If you got to the end of this... <br />
              </p>
              
              <i>"You Can Fail at What You Don't Want, So You Might as Well Take a Chance on Doing What You Love" &emsp; -Jim Carrey</i>
            </div>
            
            
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Personal
