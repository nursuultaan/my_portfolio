import React, { useState, useRef } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCircleQuestion, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import CustomHook from './CustomHook';
import ReactPlayer from 'react-player'
import iphoneWebsite from "../media/iphone_landing.mp4"
import karavanWebsite from "../media/karavan.mp4"
import pizzaWebsite from "../media/pizza_store.mp4"

function Projects() {
    const [listProjects] = useState([
        {
          name: 'Karvan Store',
          des: 'An e-commerce platform built with C#/.NET (backend) and React.js (frontend). It integrates AWS S3 for image storage and MySQL for database management, offering a seamless shopping experience.',
          mission: 'E-Commerce website',
          language: 'Typesctipt ,React, Redux Toolkit,  .Net, CSS3, SCSS, ,AWS S3 , MySql, and Netlify for deployment.',
          images: karavanWebsite,
          links:["https://github.com/nursuultaan/karavan01"]
        },
        {
          name: 'iPhone Landing Page',
          des: 'This landing page is a modern, interactive showcase of the latest iPhone models. Using Three.js for dynamic 3D elements and React for responsive interactions, the page highlights the iPhone’s features with smooth animations and stunning visuals.',
          mission: 'To provide an engaging and visually appealing landing page that showcases the iPhone’s key features, aiming to maximize user interaction and drive engagement through immersive web design.',
          language: 'Typescript ,React, Three.js, Redux Toolkit, CSS3, and Vercel for hosting.',
          images: iphoneWebsite,
          links:['https://github.com/nursuultaan/iphoneCLoneApp','https://myphone1234.netlify.app/']
        },
        {
          name: 'Pizza Store E-Commerce',
          des: 'A full-stack e-commerce platform for a local pizza store, offering an intuitive online ordering experience. Customers can browse the menu, customize their orders, and pay securely through an integrated payment gateway. The admin panel supports inventory management, order tracking, and sales analytics.',
          mission: 'To deliver a seamless online shopping experience for pizza enthusiasts by providing a robust, feature-rich platform that combines front-end interactivity and backend reliability.',
          language: 'Typescript ,React ,Next.js, Node.js, Express, and Tailwind CSS.',
          images: pizzaWebsite,
          links:['https://github.com/nursuultaan/Pizza-React-Project',"https://heroic-pie-1edb6b.netlify.app/"]
        },
      ]);
const divs = useRef([]);
const scrollTab = useRef();
CustomHook(scrollTab, divs);
  return (
    <section className='projects' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
        This is my Projects
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        
       </div>
       <div className="list">
        {
          listProjects.map((value, key) => (
            <div className='item' key={key} ref={(el) => el && divs.current.push(el)}>
              <div className="images">
                <ReactPlayer url={value.images} alt="video" loop controls />
              </div>
              <div className="content">
                <h3>{value.name}</h3>
                <div className="des">{value.des}</div>
                <div className="mission">
                    <div><FontAwesomeIcon icon={faPersonCircleQuestion} /></div>
                    <div>
                        <h4>Mission</h4>
                        <div className="des">{value.mission}</div>
                    </div>
                </div>
                <div className="mission">
                    <div><FontAwesomeIcon icon={faEarthAmericas} /></div>
                    <div>
                        <h4>Languages</h4>
                        <div className="des">{value.language}</div>
                        {
                            value.links.map((link,index)=>{
                                if(index == 1 ){
                                   return <a href={link}>website </a>
                                }
                                return <a href={link}>github </a>
                            })
                        }
                    </div>
                </div>
              
              </div>
            </div>
          ))
        }
       </div>
    </section>
  )
}
export default Projects
