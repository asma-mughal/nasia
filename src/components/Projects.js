import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="demo">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>DEMO</h2>
                <p>Frequently Asked Questions</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 
                  justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      
                    </Nav.Item>
                    
                    
                  </Nav>
                  <Tab.Content id="slideInUp" 
                  className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <h1>How far along is this project?</h1>
                      <p>
                      We are in the productive stages of development, working from established
research in applying RLHF to large AI models.</p>
<h1>Will the training data also be released?</h1>
                      <p>
                      Yes, under CC BY 4.0.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <h1>Who is behind NASIA?</h1>
                      <p>
NASIA is a project organized by ROBOTICS group and individuals around the world
interested in bringing this technology to everyone.</p>
<h1>Will NASIA be free?</h1>
                      <p>
                      Yes, NASIA will be free to use and modify for R&D only. We also provide annual
subscription model for enterprise commercial use.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <h1>What license does NASIA use?</h1>
                      <p>The code and models are licensed under the Apache 2.0 license, and we develop
unique technologies to be patent filed soon. </p>
<h1>What hardware will be required to run the models?
</h1>
                      <p>There will be versions which will be runnable on consumer hardware </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
