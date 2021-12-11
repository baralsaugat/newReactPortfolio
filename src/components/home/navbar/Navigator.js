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
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Nav className="nav-items">
            <Nav.Link href="#blog" style={{ color: "#F9BA60" }}>
              blog
            </Nav.Link>
            <Nav.Link href="#about-me" style={{ color: "#F9BA60" }}>
              about me
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/in/saugat-baral-3491776b/"
              style={{ color: "#2867B2" }}
            >
              <i class="fab fa-linkedin"></i>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
