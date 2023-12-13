import React from "react";

import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../../../assets/logo.png";

import "./navigator-style.css";

export const Navigator = () => {
  return (
    <>
      <Navbar className="navbar-items">
        <Container>
          <Navbar.Brand href="#home">
            <p>Saugat Baral</p>
          </Navbar.Brand>
          <Nav className="nav-items">
            <Nav.Link href="#blog" style={{ color: "#brgba(51, 10, 5, 0.979)" }}>
              blog
            </Nav.Link>
            <Nav.Link href="#about-me" style={{ color: "#brgba(51, 10, 5, 0.979)" }}>
              about me
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/in/saugat-baral-3491776b/"
              style={{ color: "#brgba(51, 10, 5, 0.979)" }}
            >
              <i class="fab fa-linkedin"></i>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
