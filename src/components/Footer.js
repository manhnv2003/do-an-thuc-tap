import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../styles/Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

function footer() {
  return (
    <div className="footer">
        <Row className="footerTop">
          <Col>
            <h3>NEWSLETTER SUBSCRIPTION</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </Col>
          <Col>
            <div className="btnSubscribe">
            <Form.Control
              type="text"
              placeholder="Enter your email address"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
            />      
            <Button variant="primary">subscribe</Button>
            </div>
          </Col>
        </Row>

        <Row className="style">
            <Col>
            <h4>SHOP</h4>
            <Link to='/'>home</Link>
            <Link to='/'>Sale & Special Offers</Link>
            <Link to='/'>Women's</Link>
            <Link to='/'>Men's</Link>
            <Link to='/'>Shoes</Link>
            <Link to='/'>Bags & Accessories</Link>
            <Link to='/'>Top Brands</Link>
            </Col>
            <Col>
            <h4>INFORMATION</h4>
            <Link to='/'>About us</Link>
            <Link to='/'>Customer Service</Link>
            <Link to='/'>Blog</Link>
            <Link to='/'>Page 404</Link>
            <Link to='/'>Sizing Guide</Link>
            <Link to='/'>FAQs</Link>
            <Link to='/'>Contact Us</Link> 
            </Col>
            <Col>
            <h4>ORDER</h4>
            <Link to='/'>My Account</Link>
            <Link to='/'>View Bag</Link>
            <Link to='/'>Privacy Policy</Link>
            <Link to='/'>Cookie Policy</Link>
            </Col>
            <Col>
            <h4>HERE TO HELP</h4>
            <p>Have a question? You may find an answer in our FAQs.
            But you can also contact us:
            </p>
            <p>Customer Services</p>
            </Col>
            <Col>
            <h4>FOLLOW US</h4>
            <Link to='/'><FontAwesomeIcon icon={faFacebook} />  Facebook</Link>
            <Link to='/'><FontAwesomeIcon icon={faTwitter}/>  Twitter</Link>
            <Link to='/'><FontAwesomeIcon icon={faInstagram}/>  Instagram</Link>
            <Link to='/'><FontAwesomeIcon icon={faYoutube}/>  Youtube</Link>
            </Col>

        </Row>
    </div>
  );
}
export default footer;
