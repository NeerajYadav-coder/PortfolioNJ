import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";
import btnImg from "../../assets/hireme.png";

function Intro() {
  return (
    <div>
      <section id="intro">
        <div className="introContent">
          <span className="hello">Hello</span>
          <span className="introText">
            I'm <span className="introName">Neeraj.</span> <br /> Fullstack
            Developer
          </span>
          <p className="introPara">
            Greetings! I'm a dynamic full-stack developer passionate about
            turning concepts into reality
            <br /> through clean and efficient code.
          </p>

          {/* Download Resume Button */}
          <a
  href="https://NeerajYadav-coder.github.io/PortfolioNJ/NeerajYadav-Resume.pdf"
  download="NeerajYadav-Resume.pdf"
>
  <button className="btn">
    <img src={btnImg} alt="Hire" className="btnImg" />
    Hire me
  </button>
</a>


        </div>
        <img src={bg} alt="Profile" className="bg" />
      </section>
    </div>
  );
}

export default Intro;
