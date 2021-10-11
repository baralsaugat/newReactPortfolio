import { Row, Col } from "react-bootstrap";

import { Navigator } from "./components/home/navbar/Navigator";
import { HeroText } from "./components/home/herotext/HeroText";

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
    </div>
  );
}

export default App;
