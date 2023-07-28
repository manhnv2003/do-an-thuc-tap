import React, { useState, useEffect, useRef } from "react";
import cancel from '../assets/cancel.png';
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import {
  faCartShopping,
  faUser,
  faCircleInfo,
  faHeart,
  faSearch,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import {PRODUCT} from '../components/products';
// 
import { ShoppingCart } from "phosphor-react";
// 
import { SearchLayout } from "../context/searchLayout";
// 
import { CardProduct } from "./cardproduct";

function Navbartop() {
  const [fixed, setFixed] = useState(false);
  const [navbarhidden, setNavbarhidden] = useState(false);
// 
  const [inputValue, setInputValue] = useState('');

  // Handler function to update the state when the input changes
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Handler function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
 
  };

// 
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 0) {
        setFixed(true);
        setNavbarhidden(true);
      } else {
        setFixed(false);
        setNavbarhidden(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // toggle
  const [open, setOpen] = useState(false);

  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(true);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  // display product search
  const [looking, setLooking] = useState(false); // Fix the useState syntax
  
    const handleClick = (e) =>{
      if (inputValue !== null){
              setLooking(true);
              console.log("click roi")
             }
    }
    const clickCancel = () => {
        if(looking===true){
        setLooking(false);
        }
      };
  return (
    <section className={fixed ? "slide fixed" : "slide"}>
      <Navbar className="bg-body-tertiary">
        <Container className="topnavbar">
          <Navbar.Brand href="/">
            <h2 className="tieude">sellclothes</h2>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="first">
              <Link to='/cart'>
              <FontAwesomeIcon
                className="iconstyle"
                icon={faCartShopping}
              ></FontAwesomeIcon>
              </Link>
              {/* <Link to="/cart">
                        <ShoppingCart size={32} />
                      </Link> */}

              <FontAwesomeIcon
                className="iconstyle"
                icon={faHeart}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="iconstyle"
                icon={faCircleInfo}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="iconstyle"
                icon={faUser}
              ></FontAwesomeIcon>
            </Navbar.Text>
            <Navbar.Text>
              <div className="toggle" ref={menuRef}>
                <div
                  className="box-togle"
                  onClick={() => {
                    setOpen(!open);
                  }}
                >
                  <div className="line1"></div>
                  <div className="line2"></div>
                  <div className="line3"></div>
                </div>
                <div className={`test ${open ? `active` : `inactive`}`}>
                  <Link to="/">
                    {" "}
                    <FontAwesomeIcon
                      className="iconstyle"
                      icon={faUser}
                    ></FontAwesomeIcon>
                    Profile
                  </Link>
                  <Link to="/">
                    <FontAwesomeIcon
                      className="iconstyle"
                      icon={faCartShopping}
                    ></FontAwesomeIcon>
                    Cart
                  </Link>

                  <Link to="/"><FontAwesomeIcon
                    className="iconstyle"
                    icon={faHeart}
                  ></FontAwesomeIcon>Hearts</Link>
                  <Link to="/"><FontAwesomeIcon
                    className="iconstyle"
                    icon={faCircleInfo}
                  ></FontAwesomeIcon>Help</Link>
                  <Link to="/"><FontAwesomeIcon className="iconstyle" icon={faRightFromBracket}></FontAwesomeIcon>  Log-out</Link>

                </div>
              </div>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className={navbarhidden?"navbar hidden":"navbar"}>
        <Nav>
          <Nav.Item>
            <Nav.Link href="/" style={{ color: "#4e4e4e" }}>
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link  href="/search" style={{ color: "#4e4e4e" }}>
              All products
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link  href="/blog" style={{ color: "#4e4e4e" }}>
              Blog
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/contact" style={{ color: "#4e4e4e" }}>
              Contact
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Nav className="justify-content-end" style={{ display: "flex" }}>
           <Nav.Item>
            <Form className="layoutsearch" onSubmit={handleSubmit}>
              <Form.Group md="4" controlId="validationCustom01">
                <Form.Control
                  required
                  type="text"
                  placeholder="First name"
                  className="formsearch"
                  name="inputValue"
                  value={inputValue}
                  onChange={handleInputChange}
                />
                {/* <button type="submit">Submit</button> */}
                {/* <FontAwesomeIcon className="iconstyle" icon={faSearch} type="submit"/> */}
              </Form.Group>
              <FontAwesomeIcon className="iconstyle" icon={faSearch} onClick={handleClick} />
            </Form>
          </Nav.Item>
        </Nav>
      </Container>
      <div className={looking?"displayProduct":"hiddenSearchProduct"}>
        <div className="bright-bg"></div>
      <div className="productSearch">
        <div className="btn-cancel" onClick={clickCancel}>
          <img src={cancel} />
        </div>
     <div className="products">
     {PRODUCT.map((product, KEY) => (
        product.productName === inputValue ?
        (<CardProduct data={product} key={KEY} />) // Adding a unique key for each element in the map
        : ('')
      ))}
     </div>
      </div>
      </div>
    </section>
  );
}
export default Navbartop;
