import {Navbar,Nav} from 'react-bootstrap'
import './visualComponents.css';

export default function Navigation() {
    return <Navbar bg="dark" fixed="top" className="justify-content-end">
        <Navbar.Brand href="http://localhost:3000">Oko Press</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav >
            <Nav.Link href="http://localhost:3000">Home</Nav.Link>
            <Nav.Link href="#">Link</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
}