import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
 AiFillGithub,
 AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


function Home2() {
 return (
   <Container fluid className="home-about-section" id="about">
     <Container>
       <Row>
         <Col md={8} className="home-about-description">
           <h1 style={{ fontSize: "2.6em" }}>
             <span className="purple"> INTRODUCTION </span>
           </h1>
           <p className="home-about-body">
             I am an aspiring software engineer with a keen passion for science and technology. I am fluent in classics like
             <i>
               <b className="purple"> Python, Java, Javascript, Django, & Flask. </b>
             </i>
             I have a good command over Angular and TypeScript.
             <br />
             <br />
             I am passionate in&nbsp;
             <i>
               <b className="purple">developing cool projects </b>
               in areas related to{" "}
               <b className="purple">
                 Full-Stack Web Development, Machine Learning, and AI.
               </b>
             </i>
             <br />
             <br />
             Whenever possible, I also apply my passion for developing products
             with <b className="purple">Node.js</b> and
             <i>
               <b className="purple">
                 {" "}
                 Modern Javascript Library and Frameworks
               </b>
             </i>
             &nbsp; like
             <i>
               <b className="purple"> React.js and Next.js</b>
             </i>
           </p>
         </Col>
         <Col md={4} className="myAvtar">
           <Tilt>
             <img src={myImg} className="img-fluid" alt="avatar" />
           </Tilt>
         </Col>
       </Row>
       <Row>
         <Col md={12} className="home-about-social">
           <h1>CONNECT ME ON</h1>
           <ul className="home-about-social-links">
             <li className="social-icons">
               <a
                 href="https://github.com/subratppandey"
                 target="_blank"
                 rel="noreferrer"
                 className="icon-colour  home-social-icons"
               >
                 <AiFillGithub />
               </a>
             </li>
             <li className="social-icons">
               <a
                 href="https://www.linkedin.com/in/subrat-pandey-bb3758279/"
                 target="_blank"
                 rel="noreferrer"
                 className="icon-colour  home-social-icons"
               >
                 <FaLinkedinIn />
               </a>
             </li>
             <li className="social-icons">
               <a
                 href="https://www.instagram.com/subratp10/"
                 target="_blank"
                 rel="noreferrer"
                 className="icon-colour home-social-icons"
               >
                 <AiFillInstagram />
               </a>
             </li>
           </ul>
         </Col>
       </Row>
     </Container>
   </Container>
 );
}
export default Home2;
