import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget/CartWidget";
import logo from "../../logo.png";
import styles from "./NavBar.module.css";

function NavBar({ contador, cartItems }) {
  return (
    <>
      <Navbar bg="light" expand="lg" className={styles.mainNavBar}>
        <Container fluid>
          <img src={logo} className={styles.App_logo} alt="logo" />
          <Link to="/" className={styles.NavBarText} >
            React Ecommerce
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/" className={styles.smallNavText}>
                Home
              </Link>
              <Link to="/category/small" className={styles.smallNavText}>
                 Small 
              </Link>
              <Link to="/category/medium" className={styles.smallNavText}>
                 Medium 
              </Link>
              <Link to="/category/big" className={styles.smallNavText}>
                 Large 
              </Link>
            </Nav>
          </Navbar.Collapse>
          <div >
            <Link to="/cart" className={styles.smallNavText}>
              <CartWidget/>
            </Link>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
