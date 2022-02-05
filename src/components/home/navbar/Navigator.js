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
            <Nav.Link href="#blog" style={{ color: "#b3aeab" }}>
              blog
            </Nav.Link>
            <Nav.Link href="#about-me" style={{ color: "#b3aeab" }}>
              about me
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/in/saugat-baral-3491776b/"
              style={{ color: "#b3aeab" }}
            >
              <i class="fab fa-linkedin"></i>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
