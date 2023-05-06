import React from 'react'
import { Footer } from '../Footer/Footer';
import StaticHeader from '../STATICHeader/StacticHeader';

const Services = () => {
  return (
    <>
    <StaticHeader />
    <div className='Services'>
  <h1>SERVICES</h1>
  <div className='Services-grid'>
  <div className='grid-section'>
    <div className='grid grid-img-1'>
      <h3>HAIRCUT</h3></div>
</div>
    <div className='grid-section'>
      <div className='grid grid-img-2'><h3>SHAVE</h3></div>
      </div>
      <div className='grid-section'>
    <div className='grid grid-img-3'><h3>HAIRCUT & SHAVE</h3></div>
</div>
    <div className='grid-section'>
    <div className='grid grid-img-4'> <h3>BEARD TRIM</h3></div>
    </div>
    </div>    
    </div>
    <Footer />
    </>
  )
}

export default Services;
