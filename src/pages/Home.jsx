import React, { Fragment } from "react";
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
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUser,
  faCircleInfo,
  faHeart,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import banner from "../assets/banner.jpg";
import { PRODUCT } from "../components/products";
import { Product } from "../components/card";
import { CardProduct } from "../components/cardproduct";
//
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
// img
import hat from '../assets/category/hat2.webp';
import bag from '../assets/category/bag2.jpg';
import footwear from '../assets/category/footwear.jpg';
import glasses from '../assets/category/glasses.jpg';

function Home() {
  return (
    <Fragment>
      {/* banner */}
      <Container>
        <Row>
          <Col>
            <div className="banner">
              <div className="textbox">
                <h2>finalclearance</h2>
                <p>Take 20% Off 'Sale Must-haves'</p>
                <p className="buttonshopnow">Shop now</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/*  */}
      <Container className="category">
        <h3>--category--</h3>
        <div className="productCategory">
          {PRODUCT.slice(0, 3).map((product, KEY) => (
            <Product data={product} />
          ))}
        </div>
      </Container>
      <Container className="bestSellers">
        <div className="title">
          <h2>--bestSellers--</h2>
        </div>
        <div className="product">
          <Swiper
            slidesPerView={1}
            centeredSlides={false}
            slidesPerGroupSkip={1}
            grabCursor={true}
            keyboard={{
              enabled: true,
            }}
            breakpoints={{
              769: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
            }}
            scrollbar={true}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[Keyboard, Scrollbar, Navigation, Pagination]}
            className="mySwiper"
          >
            {PRODUCT.map((product, KEY) => (
              <SwiperSlide>
                <CardProduct data={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
      <Container className="container-endbody">
        <div className="layout-viewproduct">
          <p className="viewProduct">View products</p>
        </div>
        <div>
          <Row className="product-row">
            <Col className="product-col">
              <Link to="/search">
                <img src={hat} />   
              <div className="overlay">
                <h1>hans</h1>
              </div>
              </Link>
            </Col>
            <Col className="product-col">
              <Link to="/search">
                <img src={footwear} />            
              <div className="overlay">
                <h1>sneakers</h1>
              </div>        
              </Link>
            </Col>
          </Row>
          <Row className="product-row">
            <Col className="product-col">
              <Link to="/search">
                <img src={bag} />           
              <div className="overlay">
                <h1>bags</h1>
              </div>
              </Link>
            </Col>
            <Col className="product-col">
              <Link to="/search">
                <img src={glasses} />
             
              <div className="overlay">
                <h1>glasses</h1>
              </div>
               </Link>
            </Col>
          </Row>
        </div>
        <div className="end">
          <h2><strong>---</strong>FOLLOW ADALENE ON INSTAGRAM<strong>---</strong></h2>
        </div>
      </Container>
      {/*  */}
    </Fragment>
  );
}
export default Home;
