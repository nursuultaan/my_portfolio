import React, { useRef, useState } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faJs, faVuejs, faLaravel } from '@fortawesome/free-brands-svg-icons';
import CustomHook from './CustomHook';

function Skills() {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
const [listSkills] = useState([
  {
    name: 'HTML',
    des: 'HTML is the backbone of my web development projects. I use it to structure web pages and create content, ensuring that everything is organized and easy to understand.',
    icon: faHtml5
  },
  {
    name: 'CSS',
    des: 'CSS is my go-to for styling web applications. I leverage it to design visually appealing layouts, control typography, and create responsive designs that work on any device',
    icon: faCss3
  },
  {
    name: 'Javascript',
    des: 'JavaScript is essential for adding interactivity to my websites. I use it to manipulate the DOM, handle events, and create dynamic content that enhances user experiences.',
    icon: faJs},
  {
    name: 'ReactJs',
    des: 'ReactJS is my framework of choice for building user interfaces. I use it to create reusable components that make my applications more efficient and maintainable.',
    icon: faReact
  },
  {
    name: 'VueJs',
    des: 'I utilize VueJS for its simplicity and flexibility. It allows me to build interactive web applications and easily integrate it into existing projects.',
    icon: faVuejs
  },
  {
    name: 'Laravel',
    des: 'Laravel is my preferred PHP framework for backend development. I use it to create robust web applications, handle routing, and manage databases efficiently.',
    icon: faLaravel
  }

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
              <FontAwesomeIcon icon={value.icon} />
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

