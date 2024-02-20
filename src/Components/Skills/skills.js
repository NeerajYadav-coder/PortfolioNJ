import React from 'react'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'
import './skills.css'

function Skills() {
  return (
    <section className="skills">
<span className="skillTitle">My Tech Stack</span>
<span className="skillDesc"> I'm a dynamic full-stack developer fueled by a passion for transforming ideas into cutting-edge digital experiences. With a commitment to crafting seamless and visually appealing solutions, I navigate both the front-end and back-end realms of web development. Let's collaborate to bring innovation and functionality together in the digital landscape!</span>
<div className="skillBars">
<div className="skillBar">
    <img src= {WebDesign} alt='UIDesign 'className='skillBarImg'></img>
    <div className="skillbarText">
        <h2> FrontEnd  </h2>
        <p>Utilized <strong> React.js and Tailwind Css </strong> for building dynamic and responsive user interfaces.</p>
    </div>
</div>
<div className="skillBar">
    <img src= { UIDesign} alt='WebDesign' className='skillBarImg'></img>
    <div className="skillbarText">
        <h2>BackEnd</h2>
        <p> Leveraged <strong>Express.js and Node.js</strong> to design robust server-side logic and APIs.</p>
    </div>
</div>
<div className="skillBar">
    <img src= {AppDesign} alt='AppDesign' className='skillBarImg'></img>
    <div className="skillbarText">
        <h2>Learning DevOps</h2>
        <p>Started to learning with Git, now mastering CI/CD with Jenkins .</p>
    </div>
</div>
</div>
    </section>
  )
}

export default Skills;
