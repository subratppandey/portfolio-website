import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Subrat Pandey, age 23.</span>
            <br />
            I am a senior at the illustrious Fisk University located in Nashville, TN, USA.
            <br />
            A passionate developer, I am a 2X software engineering intern at Google.
            <br />
            <br />
          </p>

          <div className="achievements-section">
            <span className="purple">Notable Achievements</span><br /><br />
            <ul>
              <li>Undergrad GPA: 3.94/4.0</li>
              <li>U.S National Champion at HBCU Battle of the Brains 2024</li>
              <li>2nd Position at Equinix Fisk Hackathon</li>
              <li>2nd Position at Zillow HBCU Hackathon</li>
              <li>Founder at Student Coalition for Nepal</li>
              <li>Ambassador for HomefreeUSA's Center for Financial Advancement</li>
              <li>Expedition EY Scholar</li>
              <li>President of Global Peace Young Leaders</li>
              <li>IBM Z Ambassador</li>
            </ul>
          </div>
          <br></br>

          <div className="Hobbies">
            <span className="purple">Interests and Hobbies</span><br /><br />
            <ul>
              <li className="about-activity">
                <ImPointRight /> Playing Outdoor Sports
              </li>
              <li className="about-activity">
                <ImPointRight /> Writing Poetry and Non-Fiction
              </li>
              <li className="about-activity">
                <ImPointRight /> Mixed-Martial Arts
              </li>
              <li className="about-activity">
                <ImPointRight /> Travelling
              </li>
            </ul>
          </div>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
