import '../project-cards/projectCard.css'

import React from 'react'
// photo, title, url, description
const ProjectCard = (props) => {
  return (
    <div className='project-card_container'>
      <div className="card-content_container">
        <div className='card-title'>
            {props.title}
           
        </div>
        <div className="photo_container">
            <img src={props.photo} className='card-photo' alt={props.title} />
        </div>

        <div className="description-container">
          <p>
              
              {props.description}
              
          </p>
        </div>
        <div className="url-button_container">
          {
            props.active?
              (<button  onClick={()=>window.open(props.url)} className='url-button'>Go to Project &ensp;  &gt;</button>)
              :
              (<button className='url-button'>Project is inactive. </button>)
            
          }
          
        </div>

       
      </div>
      
    </div>
  )
}

export default ProjectCard
