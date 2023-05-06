import React from 'react'
import Des from './Des-img.jpg'
const Description = () => {
  return (<div>
    <div className='Des'>
     
      <div className='left'>
        <h2>WE ARE BORN IN UNITED STATES, AND WE WORK IN A WAY THAT YOU WOULD LIKE TO ENTRUST THE CARE OF YOUR HAIR AND BEARD TO US.</h2>
      </div>
      <div className='right'>
        <p>
It is saying that it is better to see once than to hear a thousand times. We are a professional team of hairdressers and bearders who adore their work and lack ambition. We are proud that the majority of men who have visited us once usually decide to return.
</p>
</div>
      
    </div>
    <div className='des-img'>
      <img src={Des} alt="Description" style={{width:"100%", filter:" grayscale(100%)"}} />
      </div>
    </div>
  )
}

export default Description;
