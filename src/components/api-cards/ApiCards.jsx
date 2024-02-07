import React from 'react'
import '../api-cards/apiCards.css'
const ApiCards = (props) => {
  return (
    <div className='apiCard-container'>
        <div className='apiCard-Number'>
            <h1>{props.number}</h1>
        </div>
        <div className='apiCard-content'>
            <div className='api-activity'>
                <h3>{props.activity}</h3>
            </div>
            <div className='api-stats'>
                <div className='api-stats-p'>
                    <div className='api-participants'>
                        <p>People: {props.participants}</p>
                    </div>
                    <div className='api-price' >      
                           <p>Price: {props.price}</p>
                    </div>
                </div>
                
                <div className='api-accessibility' title='From 0-1, 0 means Easily Accessible. 1 equals not Very Accessibile'>
                    <p>Accessibility Score: {props.accessibility}</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default ApiCards
