import React from "react";
import Container from "react-bootstrap/Container";
import NavButton from "./NavButton";
import { Nav, Navbar } from "react-bootstrap";

export default function NavBar({ handleSearch, handleNavHome }) {
  return (
    <div>
      <Navbar data-bs-theme="light" className="bg-secondary">
        <Container>
          <button onClick={() => handleNavHome()}>Navbar</button>
          <Nav className="me-auto">
            <Nav.Link>
              <input
                placeholder="search"
                onChange={(e) => {
                  handleSearch(e); // Call the handleSearch function with the event
                }}
              ></input>
            </Nav.Link>
            <Nav.Link>
              <button value="refresh" onClick={() => window.location.reload()}>
                refresh
              </button>
            </Nav.Link>
            <Nav.Link>
              <NavButton value={"addist"} />
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
              <NavButton value={"colview"} />
            </Nav.Link>
            <Nav.Link>
              <NavButton value={"listview"} />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
