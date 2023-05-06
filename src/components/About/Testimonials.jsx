import React from 'react'

export const Testimonials = () => {
    const TestDataIcons=[{
        id:1,
        img:"https://store.adveits.com/project/chop/react-js/demo/assets/img/demo/21_img.png",
    },
    {
        id:2,
        img:"https://store.adveits.com/project/chop/react-js/demo/assets/img/demo/22_img.png",
    },
    {
        id:3,
        img:"https://store.adveits.com/project/chop/react-js/demo/assets/img/demo/23_img.png",
    },]
    const TestData=[{
        id:1,
        img:"https://store.adveits.com/project/chop/react-js/demo/assets/img/demo/24_img.png",
    },
    {
        id:2,
        img:"https://store.adveits.com/project/chop/react-js/demo/assets/img/demo/25_img.png",
    },
    {
        id:3,
        img:"https://store.adveits.com/project/chop/react-js/demo/assets/img/demo/26_img.png",
    },
    {
        id:4,
        img:"https://store.adveits.com/project/chop/react-js/demo/assets/img/demo/27_img.png",
    },
    {
        id:5,
        img:"https://store.adveits.com/project/chop/react-js/demo/assets/img/demo/24_img.png",
    },
    {
        id:6,
        img:"https://store.adveits.com/project/chop/react-js/demo/assets/img/demo/25_img.png",
    },
]

  return (
    <div className='Testimonial'>
    <h2>Testimonials <hr /></h2>
    <div className='Test-content'>
        <img src='https://store.adveits.com/project/chop/react-js/demo/assets/img/demo/32_img.png' />
        <h3>
BUT I MUST EXPLAIN TO YOU HOW ALL THIS MISTAKEN IDEA OF DENOUNCING PLEASURE AND PRAISING PAIN WAS BORN AND I WILL GIVE YOU A COMPLETE ACCOUNT.</h3> 
    </div>
    <div className='Test-round-icons'>
{TestDataIcons.map((icons)=>{
return(
    <div className='i'>
    <img src={icons.img} />
    </div>
)
})
}
<div className='flex-row'>
<h6>TOMMY HENDERS</h6>
<p>CEO at Company</p>
</div>
    </div>
    <div className='Test-section'>
     {TestData.map((section)=>{
        return(
            <div>
        <img src={section.img} />
           </div>
        )
     })}
    </div>
    </div>
    
  )
}
