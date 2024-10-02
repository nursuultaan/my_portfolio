import React, { useRef } from 'react' 
import CustomHook from './CustomHook';
function Home() {
const scrollTab = useRef();
CustomHook(scrollTab);

return (
    <section ref={scrollTab} className='home'>
        <div className="content">
            <div className="name">
                MY NAME IS <span>AIAN</span>
            </div>
            <div className="des">
                {/* 30 */}
                "Hi, I'm Aian! I’m a code enthusiast with a passion for turning caffeine into lines of JavaScript (and occasionally bugs). I love creating things, whether it's a slick web app or just the perfect excuse to avoid cleaning my desk. If you know me,
                 you know I’m always up for a coding challenge, a good laugh, and maybe even a spontaneous dance break when the code finally runs without errors. Let’s create something awesome together—just don’t ask me to debug it before I’ve had my coffee!"            </div>
            
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className='animation active '>
                Download My CV
            </a>
        </div>
        <div className="avatar">
            <div className="card">
                <img src="/avatar.jpeg" alt="" />
                <div className="info">
                    <div>Frond-end Developer</div>
                    <div>K???</div>
                    <div>02/17</div>
                    <div>Famale</div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Home
