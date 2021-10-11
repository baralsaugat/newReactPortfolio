import { Row, Col } from "react-bootstrap";

import { Navigator } from "./components/home/navbar/Navigator.js";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Row>
        <Col>
          <Navigator />
        </Col>
      </Row>
    </div>
  );
}

export default App;
