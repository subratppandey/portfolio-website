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
            Besides coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Outdoor Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Poetry and Non-Fiction
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
