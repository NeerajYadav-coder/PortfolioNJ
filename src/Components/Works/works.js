import React from 'react'
import './works.css'
import todo from'../../assets/todo.png'
import snake from'../../assets/snake.jpg'
import techy from'../../assets/techy.png'
import crypto from "../../assets/cp4.png"


function Works() {
  return (
   <section className="works">
    <h2 className='worksTitle'>My Projects</h2>
    <span className="worksDesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help business achieve their goals and create a strong online presence </span>
    <div className="worksImgs">
      <a href='https://techy-star-web-app.vercel.app/'>
        <img src={techy} alt="" className="worksImg"  title='In React' />
        </a>
      <a href='https://neerajyadav-coder.github.io/-Responsive-Consistify/'>
        <img src={todo} alt="" className="worksImg" />
        </a>
      <a href='https://neerajyadav-coder.github.io/Snakegamee/'>
        <img src={snake} alt="" className="worksImg" />
        </a>
      <a href='https://xcrypto-sand.vercel.app/'>
        <img src={crypto} alt="" className="worksImg" />
        </a>
      
    </div>
    {/* <button className="worksBtn">See More</button> */}
   </section>


  
  )
}

export default Works;
