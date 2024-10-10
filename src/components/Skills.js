import React, { useRef, useState } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomHook from './CustomHook';



function Skills() {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
const [listSkills] = useState([
  {
    name: 'HTML',
    des: 'HTML is the backbone of my web development projects. I use it to structure web pages and create content, ensuring that everything is organized and easy to understand.',
    icon: ""
  },
  {
    name: 'CSS',
    des: 'CSS is my go-to for styling web applications. I leverage it to design visually appealing layouts, control typography, and create responsive designs that work on any device',
    icon: ""
  },
  {
    name: 'Javascript / Typescript',
    des: 'JavaScript is essential for adding interactivity to my websites. I use it to manipulate the DOM, handle events, and create dynamic content that enhances user experiences.',
    icon: ""},
  {
    name: 'ReactJs',
    des: 'ReactJS is my framework of choice for building user interfaces. I use it to create reusable components that make my applications more efficient and maintainable.',
    icon: ""
  },
  {
    name: 'Express JS',
    des: 'Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications. I use it to develop APIs and handle server-side logic efficiently, enabling seamless communication between the front end and back end.',
    icon: ""
  },
  {
    name: 'Spring Boot',
    des: 'Spring Boot is my go-to framework for building Java-based enterprise applications. It simplifies the setup and development of new applications by providing built-in features like dependency injection, data access, and security, allowing me to focus on writing business logic and delivering high-quality software quickly.',
    icon: ""
  },

]);
  return (
    <section className='skills' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
        This is my Skills
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        I am a dedicated web developer with a strong passion for creating innovative solutions that elevate user experiences. With a robust skill set in front-end and back-end technologies, I thrive on transforming complex challenges into elegant, efficient applications. I constantly seek opportunities to learn and grow, ensuring that I stay at the forefront of industry trends and best 
        practices. My commitment to quality and attention to detail make me a valuable asset to any team.</div>
       <div className="list">
        {
          listSkills.map((value, key) => (
            <div className={'item '} key={key} ref={(el) => el && divs.current.push(el)}>
            
              <h3>{ value.name }</h3>
              <div className="des">{value.des}</div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Skills

