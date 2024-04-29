import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function Blog() {
  const blogStyle = {
    color: "#FFFFFF",
    backgroundColor: "#0D1B2A",
    padding: "20px",
    borderRadius: "15px",
    margin: "20px 0",
    maxWidth: "800px",
  };

  const headingStyle = {
    color: "#BD93F9",
    marginTop: "20px",
  };

  const paragraphStyle = {
    fontSize: "1rem",
    lineHeight: "1.6",
    marginBottom: "1rem",
  };

  const ulStyle = {
    paddingLeft: "20px",
  };

  const blockquoteStyle = {
    borderLeft: "3px solid #BD93F9",
    paddingLeft: "20px",
    fontStyle: "italic",
    margin: "20px 0",
  };

  const teamStyle = {
    color: "#BD93F9",
    fontSize: "1rem",
    lineHeight: "1.6",
    marginBottom: "20px",
  };

  return (
    <Container fluid className="blog-section">
      <Particle />
      <Container>
        <h1 className="blog-heading">
            <br></br><br></br>
          <strong className="purple">Diving Deeper into Self-Employed OPT Checker Tool</strong>
          <br></br>
        </h1>
        <p style={{ color: "white", textAlign: "center" }}>
          Navigating U.S. immigration laws can be daunting, especially for self-employed international students. Our Self-Employed OPT Eligibility Checker Tool simplifies this complex process, providing an interactive application that assesses eligibility through a detailed questionnaire. Since its launch, it has efficiently processed over 850 assessments, offering peace of mind and clear guidance to its users.
        </p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={12} style={{ display: "flex", justifyContent: "center" }}>
            <article style={blogStyle}>

              <h2 style={headingStyle}>Problem Statement</h2>
              <p style={paragraphStyle}>
                Self-employed international students often struggle with the complexities of U.S. immigration laws, risking non-compliance and jeopardizing their visa status. Existing tools provide generic advice that fails to address their unique circumstances.
              </p>

              <h2 style={headingStyle}>Background of the Problem</h2>
              <p style={paragraphStyle}>
                Many international students opt for self-employment during their OPT period, but often lack awareness of specific compliance requirements. This can lead to severe legal consequences and visa denials.
              </p>

              <h2 style={headingStyle}>User’s Pain Points</h2>
              <ul style={ulStyle}>
                <li>Complex eligibility criteria leading to uncertainty and fear of non-compliance.</li>
                <li>Anxiety about potential severe consequences like visa denial or deportation.</li>
              </ul>

              <h2 style={headingStyle}>Solution Overview</h2>
              <ul style={ulStyle}>
                <li>Interactive, personalized eligibility assessments.</li>
                <li>Automated notifications about status and necessary actions.</li>
              </ul>

              <h2 style={headingStyle}>Development Process</h2>
              <p style={paragraphStyle}>
                We utilized a modern stack including Next.js, Express.js, TypeScript, and Tailwind CSS. The project adhered to Agile methodologies, enhancing collaboration and efficiency across a globally distributed team.
              </p>

              <h2 style={headingStyle}>Team Members</h2>
              <p style={teamStyle}>
                Mentor: <a href="https://www.linkedin.com/in/fahrenheit89/" style={{ color: "#BD93F9" }}>Tareq Mahmud</a><br />
                Developer and Designer: <a href="https://www.linkedin.com/in/subrat-pandey-65646b16b/" style={{ color: "#BD93F9" }}>Subrat Pandey</a><br />
                Technical Mentor: <a href="https://www.linkedin.com/in/eshtiyak-fahim/" style={{ color: "#BD93F9" }}>Eshtiyak Fahim</a><br />
              </p>

              <h2 style={headingStyle}>Customer Feedback</h2>
              <blockquote style={blockquoteStyle}>
                "Our tool has transformed the eligibility verification process, making complex OPT rules clear and manageable, significantly reducing application anxiety." - User Testimonial
              </blockquote>

              <h2 style={headingStyle}>Team’s Insights</h2>
              <ul style={ulStyle}>
                <li>Challenge: Integrating multiple technologies to ensure a seamless user experience.</li>
                <li>Contribution: Led backend development, enhancing the application's scalability and security.</li>
                <li>Learning: Gained advanced full-stack development skills and a deeper understanding of immigration compliance.</li>
              </ul>

              <h2 style={headingStyle}>Conclusion/Impact</h2>
              <p style={paragraphStyle}>
                The Self-Employed OPT Eligibility Checker has significantly reduced the stress associated with immigration compliance for freelancers, ensuring they can focus on their professional growth without legal uncertainties. Since its launch, the tool has processed over 850 assessments, proving its efficacy and user trust.
              </p>

            </article>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Blog;
