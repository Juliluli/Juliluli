//import {Navbar, Container, Nav, NavDropdown,Form,FormControl,Button} from 'react-bootstrap'

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import CartWidget from './CartWidget/CartWidget'
import logo from '../../logo.png';
import styles from "./NavBar.module.css"
// importing react-bootstrap (not bootstrap)
//https://react-bootstrap.github.io/components/navbar/

function NavBar({contador, cartItems}) {

    return (
        <>
        
            <Navbar bg="light" expand="lg">
            <Container fluid>
                <img src={logo} className={styles.App_logo} alt="logo" />
                <Navbar.Brand href="#">React Ecommerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">Events</Nav.Link>
                    <NavDropdown title="Productos" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Tshirts</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Posters</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                        Sale
                    </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#" disabled>
                    Special Discount
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
                <p className={styles.cartItems}><b>{contador} $, {cartItems} Item(s)</b></p><CartWidget/>
            </Container>
            </Navbar>
        </>
    )
}

export default NavBar
