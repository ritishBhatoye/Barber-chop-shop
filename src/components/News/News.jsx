import React from 'react'
import { Footer } from '../Footer/Footer'
import StaticHeader from '../STATICHeader/StacticHeader'

const News = () => {
    const RecentComment=[
        {
            id: 1,
            person: "TOMMY ANDERSEN ON",
            about:"./Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          },
          {
            id: 2,
            person: "ROSIE FORD ON",
            about:"./Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          },
          {
            id: 3,
            person: "ARTHUR HOPIN ON",
            about:"./Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          },

    ]
const RecentPost=[
    {
        id: 1,
        service: ". HAIRSTYLE",
        title: "5 BENIFITS OF GOING TO A BARBER",
        img: "./Images-News/10News-image2.webp",
        about:"Lorrem Ipsum is simply dummy text of printing and typesetting industry"
      },
      {
        id: 2,
        service: ". BEARD",
        title: "WHICH TRIM SHOULD I CHOOSE",
        img: "./Images-News/2beard.webp",
        about:"Lorrem Ipsum is simply dummy text of printing and typesetting industry"
      },
      {
        id: 3,
        service: ". COSMETIC",
        title: "BEST COSMETICS FOR YOUR HAIR",
        img: "./Images-News/3cosmetic-news.jpg",
        about:"Lorrem Ipsum is simply dummy text of printing and typesetting industry"
      },
      {
        id: 4,
        service: ". COSMETIC",
        title: "BEST COSMETICS FOR YOUR HAIR",
        img: "./Images-News/10News-image2.webp",
        about:"Lorrem Ipsum is simply dummy text of printing and typesetting industry"
      },
]
const NewsData=[
    {
        id: 1,
        service: ". HAIRSTYLE",
        title: "5 BENIFITS OF GOING TO A BARBER",
        img: "https://images.unsplash.com/photo-1593702295094-aea22597af65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        about:"Lorrem Ipsum is simply dummy text of printing and typesetting industry"
      },
      {
        id: 2,
        service: ". BEARD",
        title: "WHICH TRIM SHOULD I CHOOSE",
        img: "./Images-News/2beard.webp",
        about:"Lorrem Ipsum is simply dummy text of printing and typesetting industry"
      },
      {
        id: 3,
        service: ". COSMETIC",
        title: "BEST COSMETICS FOR YOUR HAIR",
        img: "./Images-News/3cosmetic-news.jpg",
        about:"Lorrem Ipsum is simply dummy text of printing and typesetting industry"
      },
      {
        id: 4,
        service: ". COSMETIC",
        title: "BEST COSMETICS FOR YOUR HAIR",
        img: "./Images-News/10News-image2.webp",
        about:"Lorrem Ipsum is simply dummy text of printing and typesetting industry"
      },
      {
        id: 5,
        service: ". COSMETIC",
        title: "BEST COSMETICS FOR YOUR HAIR",
        img: "./Images-News/1HairStyle.jpg",
        about:"Lorrem Ipsum is simply dummy text of printing and typesetting industry"
      },
      {
        id: 6,
        service: ". COSMETIC",
        title: "BEST COSMETICS FOR YOUR HAIR",
        img: "./Images-News/8News-image1.webp",
        about:"Lorrem Ipsum is simply dummy text of printing and typesetting industry"
      },
      {
        id: 7,
        service: ". COSMETIC",
        title: "BEST COSMETICS FOR YOUR HAIR",
        img: "./Images-News/11News-image3.webp",
        about:"Lorrem Ipsum is simply dummy text of printing and typesetting industry"
      },
      {
        id: 8,
        service: ". COSMETIC",
        title: "BEST COSMETICS FOR YOUR HAIR",
        img: "./Images-News/1HairStyle.jpg",
        about:"Lorrem Ipsum is simply dummy text of printing and typesetting industry"
      },
]
    return (
      <>
      <StaticHeader />
    <div className='News'>
      <h1>  NEWS</h1>
    <div className='News-flex-wrapper'>
      <div className='News-flex'>
   {NewsData.map((val)=>{
    const {id,service,title,img,about}=val;
    return(
        <div  className='News-container'>
        <div className='img'>
           <img src={img}   alt="..."  />
           </div>
           <div className='News-text'>
      <span>{service}</span>
      <h3>{title}</h3>
      <h5>{about}</h5>
       </div>
       </div>
    )
   })} <form>
   <button className='News-load-button'> 
         LOAD MORE   
   </button>
  </form>
       </div>
       <div className='News-Data'>
    <div className='News-input'>
        <form><input type="text" placeholder='Type here to search'/>
    <button>Search</button>
    </form>
    </div>
    <div className='News-categories'>
        <ul>
        <h4>CATEGORIES</h4>
        <li><a href="#">Hairstyle</a></li>
       <li><a href="#">Beard</a></li>
       <li><a href="#">Cosmetic</a></li>
       <li><a href="#">Shave</a></li> 
        </ul>
        </div>
    <div className='News-recentposts'>
        <h4>RECENT POSTS</h4>
        <div className='News-recentposts-section'>
{RecentPost.map((post)=>{
const {img,title}=post;
return(
    <div className='News-Recentpost-flex'>
    <div className='News-img'>
        <img src={img}  alt="..." />
        </div>
        <div><h6>{title}</h6></div>
    </div>
)
}
)}
 
        </div>
    </div>
    <div className='News-recent-comments'>
        <div className='News-recent-comments-section'>
            <h4>RECENT COMMENTS</h4>
        {RecentComment.map((comment)=>{
            const {id,person,about}=comment;
            return(
                <div>
                <span>{person}<hr /></span>
                <h5>{about}</h5>
                </div>
            )
        }
    )}

        </div>
    </div>
    <div className='News-tag'>
        <h4>TAGS</h4>
        <div className='News-tag-button'>
     <button>HAIRSTYLE</button>
     <button>BEARD</button>
     <button>COSMETIC</button>
     <button>SHAVE</button>
        </div>
    </div>
   </div>
   
    
     </div>
   
    </div>
    <Footer />
    </>
  )
}
export default News;
