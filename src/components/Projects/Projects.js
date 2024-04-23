import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import moviemate from "../../Assets/Projects/moviemate.jpeg";
import flappybird from "../../Assets/Projects/flappy-bird-game.jpeg";
import VidGrab from "../../Assets/Projects/download.jpeg";
import NFL_Recommender from "../../Assets/Projects/nfl_game.jpeg";
import cafeteria from "../../Assets/Projects/caf.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moviemate}
              isBlog={false}
              title="MovieMate"
              description="A Personal Movie Recommender built using React.js, Node.js, MongoDB, Bootstrap, CSS, and HTML. This app enhances your movie-watching experience by offering features like a dynamic search tool, ability to add movies to a favorites list, and personalized film suggestions. Enjoy a tailored viewing guide with capabilities for user ratings and reviews, all within a responsive design optimized for all devices."
              ghLink="https://github.com/subratppandey/react-movie-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NFL_Recommender}
              isBlog={false}
              title="NFL+ Moments"
              description="Dive deep into personalized NFL content with NFL+ Moments, a machine learning model that utilizes TF-IDF vectorization and cosine similarity to align video recommendations with your unique preferences for teams and players. This system enhances user engagement through a sophisticated algorithm that incorporates weighted scoring and diversity tactics—ensuring a varied and relevant viewing experience. The recommendations are catered particulary to drive user engagement for NFL+ premium subscribers."
              ghLink="https://github.com/subratppandey/botb2024-Machine-Learning"           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cafeteria}
              isBlog={false}
              title="FiskServe"
              description="Developed a functional web app for Fisk University Dining Hall in which students and faculties can browse available food items according to mealtime using HTML 5, Tailwind CSS, ReactJS, NodeJS, RESTful APIs, and MongoDB. Our team incorporated a feature to display nutritional values (carbohydrate, fat, and protein content) of served food items based on portion size. FiskServe incorporates interactive chat feature through WebSocket for students to give specific feedback to the chefs and order food items based on dietary preferences."
              ghLink="https://github.com/subratppandey/fisk-serve"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={VidGrab}
              isBlog={false}
              title="VidGrab"
              description="Harness the power of Python and Flask with this simple web page designed for easy downloading of YouTube videos. VideoGrab allows users to save their favorite videos directly to their devices using a simple interface crafted with HTML and Bootstrap. Just enter the video URL, hit download, and start building your offline video collection today—perfect for uninterrupted viewing anytime, anywhere."
              ghLink="https://github.com/subratppandey/YouTubeVideoDownloader"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flappybird}
              isBlog={false}
              title="Flappy Bird"
              description="Rediscover the joy of the Flappy Bird game, reimagined and developed using Python. Navigate your bird through obstacles with simple, responsive controls. This version brings back all the addictive gameplay of the original with enhanced features such as score tracking, dynamic obstacles, and a visually appealing interface."
              ghLink="https://github.com/subratppandey/FlappyBird"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
