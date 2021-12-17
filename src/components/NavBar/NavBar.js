//import {Navbar, Container, Nav, NavDropdown,Form,FormControl,Button} from 'react-bootstrap'
import { Link, NavLink } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "./CartWidget/CartWidget";
import logo from "../../logo.png";
import styles from "./NavBar.module.css";
// importing react-bootstrap (not bootstrap)
//https://react-bootstrap.github.io/components/navbar/

function NavBar({ contador, cartItems }) {
  return (
    <>
      <Navbar bg="light" expand="lg" className={styles.mainNavBar}>
        <Container fluid>
          <img src={logo} className={styles.App_logo} alt="logo" />
          {/* <Navbar.Brand href="/">React Ecommerce</Navbar.Brand> */}
          <Link className={styles.NavBarText} to="/">
            React Ecommerce
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/" className={styles.smallNavText}>
                Home
              </Nav.Link>
              <Nav.Link href="/category/small" className={styles.smallNavText}>
                Small
              </Nav.Link>
              <Nav.Link href="/category/medium" className={styles.smallNavText}>
                Medium
              </Nav.Link>
              <Nav.Link href="/category/big" className={styles.smallNavText}>
                Large
              </Nav.Link>
              {/* <NavDropdown title="Productos" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Tshirts</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Posters</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                        Sale
                    </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#" disabled>
                    Special Discount
                    </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
          {/* <p><Link to="/cart" className={styles.smallNavText}>Carrito</Link></p> */}
          <p className={styles.cartItems}>
            <b>
              {contador} $, {cartItems} Item(s)
            </b>
          </p>
          <div className={styles.cartNav}>
            <CartWidget />
            <Nav.Link href="/cart" className={styles.smallNavText}>
              Carrito
            </Nav.Link>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
