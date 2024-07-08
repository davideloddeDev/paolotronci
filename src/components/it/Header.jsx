import "./css/header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { HashLink } from 'react-router-hash-link';

export function Header() {
  return (
    <div className="header">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="logo">
          <Navbar.Brand href="#">
            <img src="logo.svg" alt="logo" />
          </Navbar.Brand>
        </Container>
        <Container className="menu">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                  <HashLink to="#">Home</HashLink>
              </Nav.Link>
              <Nav.Link>
                <HashLink to="/italian/#description">Chi Siamo</HashLink>
              </Nav.Link>
              <Nav.Link>
                <HashLink to="/italian/#contact">Contatti</HashLink>
              </Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Container className="button">
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="language">
              <Nav.Link href="/english">
                <img src="ic_en.svg" alt="Inglese" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}