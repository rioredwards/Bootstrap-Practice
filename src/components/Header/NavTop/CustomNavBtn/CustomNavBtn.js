import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import "./CustomNavBtn.css";

function CustomNavBtn({ text, variant }) {
  return (
    <Nav.Item as="li">
      <Button className="CustomNavBtn" variant={variant}>
        {text}
      </Button>
    </Nav.Item>
  );
}

export default CustomNavBtn;
