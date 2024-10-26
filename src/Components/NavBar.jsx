import React from "react";
import Container from "react-bootstrap/Container";
import NavButton from "./NavButton";
import { Nav, Navbar } from "react-bootstrap";

export default function NavBar({ handleSearch }) {
  return (
    <div>
      <Navbar data-bs-theme="light" className="bg-secondary">
        <Container>
          <Navbar.Brand>Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <input
                placeholder="search"
                onChange={(e) => {
                  console.log(e.target.value); // Log the value as the user types
                  handleSearch(e); // Call the handleSearch function with the event
                }}
              ></input>
            </Nav.Link>
            <Nav.Link>
              <NavButton value={"refresh"} />
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
