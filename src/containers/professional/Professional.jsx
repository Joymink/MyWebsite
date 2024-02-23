import '../professional/professional.css'
import arrow from '../../assets/arrow.png'
import React from 'react'
import resume from '../../assets/Jayden_Evans_Resume_021524.pdf'

const Professional = () => {
  return (
    <div className='professional-container' id='professional'>
      <div className="professional-content">
        <div className="professional-title">
          <p>My Work Experience</p>
        </div>
        <div className='professional-experience_container'>
            <div className='professional-experience'>
              <div className='professional-experience_title'>
                <h2>Shoreline</h2>
                <h3>Billing Specialist</h3>
              </div>
               <p>2023 - Present</p>

            </div>
            <div className='professional-experience'>
              <div className='professional-experience_title'>
                <h2>Colab</h2>
                <h3>Software Developer</h3>
              </div>
               <p>2023 - Present</p>

            </div>
            <div className='professional-experience'>
              <div className='professional-experience_title'>
                <h2>Planet Bravo</h2>
                <h3>Technology Instructor</h3>
              </div>
               <p>2022 - 2023</p>

            </div>
        </div>
        <div className='download-resume'>
          <a href={resume} download>Download CV <img src={arrow} className= 'arrow-png' alt="arrow" /></a>
          
        </div>
      </div>
    </div>
  )
}

export default Professional
