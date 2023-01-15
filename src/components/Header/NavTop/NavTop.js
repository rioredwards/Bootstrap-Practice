import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import CustomNavDropdown from "./CustomNavDropdown/CustomNavDropdown.js";
import NavDropdown from "react-bootstrap/NavDropdown";
import CustomNavBtn from "./CustomNavBtn/CustomNavBtn.js";

function NavTop() {
  return (
    <Navbar bg="light" expand="sm">
      <Container fluid>
        <Navbar.Brand href="#">
          <Image src="W3Schools_logo.png" style={{ height: "2.8rem" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll>
            <CustomNavDropdown title={"Tutorials"}></CustomNavDropdown>
            <CustomNavDropdown title={"References"}></CustomNavDropdown>
            <CustomNavDropdown title={"Exercises"}></CustomNavDropdown>
            <Nav.Link href="#">Videos</Nav.Link>
          </Nav>
          <Nav
            className="justify-content-end"
            style={{ maxHeight: "100px", gap: "1rem" }}>
            <CustomNavBtn text={"Upgrade"} variant={"dark"} />
            <CustomNavBtn text={"Get Certified"} variant={"warning"} />
            <CustomNavBtn text={"Create Website"} variant={"danger"} />
            <CustomNavBtn text={"Login"} variant={"success"} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavTop;
