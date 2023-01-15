import NavDropdown from "react-bootstrap/NavDropdown";

function CustomNavDropdown({ title }) {
  return (
    <NavDropdown title={title} id="navbarScrollingDropdown">
      <NavDropdown.Item href="#action1">Action</NavDropdown.Item>
      <NavDropdown.Item href="#action2">Another action</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#action3">Something else here</NavDropdown.Item>
    </NavDropdown>
  );
}

export default CustomNavDropdown;
