import React, { useState, useRef } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCircleQuestion, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import CustomHook from './CustomHook';

function Projects() {
const [listProjects] = useState([
  {
    name: 'PokéDex Pro: A Modern App with React, Redux, and Firebase',
    des: 'This title highlights the use of modern web technologies like React and Firebase, along with the idea of creating a professional and interactive Pokémon app is created using React, Redux Toolkit, Typescript, Firebase and SCSS.',
    mission: ' Aim to deliver a user-friendly and responsive PokéDex that allows users to search, browse, and explore the Pokémon universe in real-time, ensuring a smooth experience across all devices.',
    language: 'React Hooks    React RouterCSS3 & SCSSTypescriptRedux and Redux ToolkitFirebaseFirestoreAxios for APIBest Practises for Components and File StructureHosting the app on Netlify',
    images: '/project1.png'
  },
  {
    name: 'Spotify is a music service',
    des: 'Experience the ultimate music streaming interface with our fully functional Spotify Clone. This app seamlessly integrates the Spotify API to deliver real-time access to your favorite tracks, playlists, and artists, all within a sleek, modern design. With the power of Context API. Dive into a feature-rich clone that captures the essence of Spotify while showcasing the capabilities of cutting-edge web development technologies.',
    mission: 'Mission is to create a seamless and visually stunning music streaming experience by leveraging React JS, Styled Components, and the Spotify API, providing users with real-time access to their favorite music while showcasing the potential of modern web technologies.',
    language: 'HTML5, CSS3, React JS, SockerIO,...',
    images: '/project2.PNG'
  },
  {
    name: 'Full-Stack E-Commerce App with Next.js ',
    des: 'Explore a fully functional e-commerce web application built with a modern full-stack approach. This platform integrates a dynamic front-end powered by React and Styled Components, a robust backend using Node.js and Express, and secure database management with MongoDB. The application offers a smooth user experience, including product browsing, a shopping cart, user authentication, and seamless payment integration',
    mission: 'Our mission is to deliver a seamless, secure, and user-friendly online shopping experience by utilizing cutting-edge full-stack technologies, creating a platform that balances functionality with modern design while ensuring scalability and performance.',
    language: 'Next.js 14, ShadCN, Tailwind CSS, Framer Motion, OneEntry, Next.js Server Actions, Zustand, Stripe, Vercel, TypeScript.',
    images: '/project3.png'
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
                <img src={value.images} alt="" />
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
