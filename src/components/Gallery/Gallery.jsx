import React from 'react'
import { Footer } from '../Footer/Footer';
import StaticHeader from '../STATICHeader/StacticHeader';
import g1 from "./Gallery-1.jpg";
import g2 from "./Gallery2.jpg";
import g3 from "./Gallery3.jpg";
import g4 from "./Gallery4.jpg";
import g5 from "./Gallery5.jpg";
import g6 from "./Gallery6.jpg";
const Gallery = () => {
  return (
    <>
    <StaticHeader />
    <div className='Gallery'>
        <div className='Gallery-container'>
    <div> <h1>Gallery</h1></div>
    <div className='Gallery-container-images'>
       <div className='img'>
        <img src={g1} />
       </div>
       <div>
       <img src={g2} />
       </div>
       <div>
       <img src={g3} />
       </div>
       <div>
       <img src={g4} />
       </div>
       <div><img src={g5} /></div>
       <div><img src={g6} /></div>
    </div>
    
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Gallery;
