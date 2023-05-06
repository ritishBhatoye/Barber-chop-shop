import React from 'react'
export const AboutOurTeam = () => {
    const AboutTeam = [
        {
          id: 1,
          service: "CEO",
          title: "RICK NORMAN",
          img: "https://store.adveits.com/project/chop/react-js/demo/assets/img/demo/20_img.jpg",
          about:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots",  
        },
        {
          id: 2,
          service: "Beard Stylist",
          title: "ANDREW NICK",
          img: "https://store.adveits.com/project/chop/react-js/demo/assets/img/demo/18_img.jpg",
          about:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots."
        },
        {
          id: 3,
          service: "Hair Stylist",
          title: "TOM HENDERS",
          img: "https://store.adveits.com/project/chop/react-js/demo/assets/img/demo/19_img.jpg",
          about:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots."
        },
      ]
    
  return (
    <div className='AboutOurTeam'>
    <h2>Our Team <hr /></h2>
    <div className='AboutOurTeam-trending'>
   {
      AboutTeam.map((show)=>{
          return(
     <div  className='AboutOurTeam-services'>
       <div className='img'>
          <img src={show.img}  width="640" height="480" alt="..."  />
          </div>
          <div className='AboutOurTeam-text'>
     <span>{show.service}</span>
     <h3>{show.title}</h3>
     <h5>{show.about}</h5>
     <div className='AboutOurTeam-icons'>
    <h6><i className="ri-facebook-fill size"></i></h6>
   <h6><i className="ri-linkedin-fill size"></i></h6>
     <h6><i className="ri-instagram-line size"></i></h6> 
     </div>
      </div>
      </div>
          )
      })
   }
    </div>
  </div>
  )
}
