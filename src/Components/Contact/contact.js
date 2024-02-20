import React, { useRef }  from "react";
import "./contact.css";
import Digrows from "../../assets/digrows.jpg";
import LinkedinIcon from "../../assets/th6.png";
import InstagramIcon from "../../assets/instagram.png";
import TwitterIcon from "../../assets/twitter.png";
import GithubIcon from "../../assets/th5.png";
import emailjs from '@emailjs/browser';



function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_sb0h388', 'template_ii2puzw', form.current, 'XrdlzFhyNEsPCumja')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert("Email Sent!")
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <section className="contactPage">
      <div id="clients">
        <h1 className="clientPageTitle">My Clients</h1>
        <p className="clientDesc">
          I have had the opportunity to work with a diverse group of companies
          and individuals. I have worked with includes
        </p>
        <div className="clientImgs">
         <a href=" https://www.digrows.com/">
         <img src={Digrows} alt="Client" className="clientImg"></img>
         </a>
        </div>
      </div>
      <div id="contact">
      <h1 className="contactPageTitle">Contact Me</h1>
      <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
<input type="text" className="name" placeholder="Your Name" name="from_name"></input>
<input type="email" className="email" placeholder="Your Email" name="from_email"></input>
<textarea className="msg" name="message" rows="8" placeholder="Your Message"></textarea>
<button className="submitBtn" type="submit" value="Send">Submit</button>

<div className="links">
  <a href="https://github.com/NeerajYadav-coder">
    <img src={GithubIcon} alt="Github" className="link"  />
  </a>
  <a href="https://www.linkedin.com/in/neeraj-yadav-13742a257/">
    <img src={LinkedinIcon} alt="Linkedin" className="link" />
  </a>
  <a href="https://www.instagram.com/neerajjj_yydv/">
    <img src={InstagramIcon} alt="Instagram" className="link" />
  </a>
  <a href="https://twitter.com/neeraj_ydvv01">
    <img src={TwitterIcon} alt="Twitter" className="link" />
  </a>
</div>

      </form>
      </div>
      
    </section>
  );
}

export default Contact;
