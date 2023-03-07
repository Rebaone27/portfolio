import '../App.css';
import {Container, Nav, Navbar} from "react-bootstrap";

function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"></Navbar.Brand>
                    <Nav className="me-auto px-4">
                        <Nav.Link className="px-3" href="/">Home</Nav.Link>
                        <Nav.Link className="px-3" href="/about">About</Nav.Link>
                        <Nav.Link className="px-3" href="/contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;