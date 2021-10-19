import { Row, Col } from "react-bootstrap";

import { Navigator } from "./components/home/navbar/Navigator";
import { HeroText } from "./components/home/herotext/HeroText";

import { AboutMe } from "./components/about-me/AboutMe";

import { Projects } from "./components/projectwall/Projects";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Row>
        <Col>
          <Navigator />
        </Col>
      </Row>

      <Row>
        <Col>
          <HeroText />
        </Col>
      </Row>

      <Row>
        <Col>
          <AboutMe />
        </Col>
      </Row>

      <Row>
        <Col>
          <Projects />
        </Col>
      </Row>
    </div>
  );
}

export default App;
