import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" style={{backgroundColor:'#2b2d42',color:"#d9d9d9"}}>
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Basavakiran Mathpati</p>
        <p>Email: kiranmathpatiofficial@gmail.com</p>
        <a href="https://kiranmathpati.github.io/Basavakiran-Portfolio/" target="_blank" rel="noopener noreferrer" style={{border:'1px dotted red', marginRight:'10px' , color:'#f28482'}}>
          Visit My Portfolio
        </a>
        <button className="resume-btn" style={{backgroundColor:'#ffc2d1' , color:'#fec5bb'}}>
          <a href="../MyResume.pdf" download="Basavakiran_SDE1_Resume.pdf" style={{color:'#2b2d42'}}  >
            Download My Resume
          </a>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
