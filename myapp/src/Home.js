import './Home.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Row, Col, Carousel, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { AiTwotoneStar } from 'react-icons/ai';
import Header from './Header';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import { GrFacebookOption } from 'react-icons/gr';
import { FaTwitter, FaPinterestP } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import 'antd/dist/antd.css';
import { UpOutlined } from '@ant-design/icons';
import { BackTop } from 'antd';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const axios = require('axios')

const style1 = {
  height: 50,
  width: 50,
  lineHeight: '40px',
  borderRadius: '50%',
  backgroundColor: '#000',
  color: 'white',
  textAlign: 'center',
  fontSize: 16,
};

function Home() {

  const [view, setView] = useState([]);

  const [isHovering1, setIsHovering1] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const [isHovering3, setIsHovering3] = useState(false);
  const [isHovering4, setIsHovering4] = useState(false);

  const handleMouseover1 = () => {
    setIsHovering1(true);
  };
  const handleMouseover2 = () => {
    setIsHovering2(true);
  };
  const handleMouseover3 = () => {
    setIsHovering3(true);
  };
  const handleMouseover4 = () => {
    setIsHovering4(true);
  };

  const handleMouseOut1 = () => {
    setIsHovering1(false);
  };
  const handleMouseOut2 = () => {
    setIsHovering2(false);
  };
  const handleMouseOut3 = () => {
    setIsHovering3(false);
  };
  const handleMouseOut4 = () => {
    setIsHovering4(false);
  };

  useEffect(() => {
    axios.get('http://localhost:5000/getallproduct')

      .then(function (response) {
        // console.log(response.data);
        setView(response.data);

      })
      .catch(function (error) {
        console.log(error);
      })
  }, [])

  return (
    <>
      <div className="modal" tabindex="-1" role="dialog" id="myModal">
        <div className="modal-dialog  modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-body d-flex">
              <div className='modal_img'>
                <img src={require('./images/newsletter-popup-fashion_1556534182.png')} />
              </div>
              <div className='modal_text'>

                <img src={require('./images/watch-logo.png')} />
                <h3>
                  SIGN UP OUR NEWSLETTER
                </h3>
                <p>Enter Your email address to sign up to receive our latest news and offers</p>
                <input type="email" placeholder='email address' />
                <button>Subscribe</button>
                <div className='d-flex'>
                  <GrFacebookOption style={{ margin: '0 10px', color: isHovering1 ? '#27c7d8' : '#b4b4b4' }} onMouseOver={handleMouseover1} onMouseOut={handleMouseOut1} />
                  <FaTwitter style={{ margin: '0 10px', color: isHovering2 ? '#27c7d8' : '#b4b4b4' }} onMouseOver={handleMouseover2} onMouseOut={handleMouseOut2} />
                  <BsInstagram style={{ margin: '0 10px', color: isHovering3 ? '#27c7d8' : '#b4b4b4' }} onMouseOver={handleMouseover3} onMouseOut={handleMouseOut3} />
                  <FaPinterestP style={{ margin: '0 10px', color: isHovering4 ? '#27c7d8' : '#b4b4b4' }} onMouseOver={handleMouseover4} onMouseOut={handleMouseOut4} />
                </div>
              </div>
              <div>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Header />
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block  img_h"
            src={require('./images/dm13-bnr2_2000x.png')}
            alt="First slide"
          />
          <div className='slider_img1 d-none d-lg-block'>
            <h3>WATCHES OF <br></br> EXCELLENCE</h3>
            <p>Set the tone with our range of handcrafted yet <br></br> affordably luxurious timepieces.</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block  img_h" id="img_w"
            src={require('./images/dm13-bnr1_2000x.png')}
            alt="Second slide"
          />

          <div className='slider_img2 d-none d-lg-block'>
            <h3 className="fs-1">EXPLORE </h3>
            <h3 className="fs-1"> NEW ARRIVALS</h3>
            <p>I am Optimal, An Intelligent and beautiful shopify themes</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block  img_h"
            src={require('./images/banner2.png')}
            alt="Third slide"
          />

          <div className='slider_img1 d-none d-lg-block'>
            <h3 className='fs-1'>FINAL 24 HOURS  <br></br>  TO GET 50% OFF</h3>
            <button>SHOP TIMEX NOW</button>
          </div>
        </Carousel.Item>
      </Carousel>


      <div className="info_store">

        <Row className='g-0' align="center" >
          <Col sm={12}><h5>OPTIMAL WATHCES STORE</h5></Col>
          <Col sm={12}><p>Elegant and convenient solutions for your luxury watches and wrist accessories. Handcrafted in Europe with the finest materials, our products are designed from the ground up to keep your timepieces in as luxurious conditions as possible,</p></Col>
          <Col sm={12}><a href="#"><button>READ MORE</button></a></Col>
        </Row>

      </div>


      <Row className='g-0 mx-0'>
        <Col className='men' lg={6} md={6} sm={12}>
          <Link to='/men'><img src={require('./images/roy-javier-j1-onqH312Q-unsplash.jpg')} alt="images" /></Link>
          <div className='men_text'>
            <h1>MEN’S</h1>
            <Link to='/men'><h5 id='link'>SHOP NOW</h5></Link>
          </div>
        </Col>
        <Col className='men' lg={6} md={6} sm={12}>
          <Link to='/women'><img src={require('./images/istockphoto-1338040154-170667a.jpg')} alt="images" /></Link>
          <div className='men_text'>
            <h1>WOMEN’S</h1>
            <Link to='/women'><h5 id='link'>SHOP NOW</h5></Link>

          </div>
        </Col>
      </Row>


      <Container>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12} className='py-5 text-center'>
            <h6 className='fs-5'>BEST SELLER</h6>
            <p className='fs-6'>TOP SALE IN THIS WEEK</p>
          </Col>
        </Row>
      </Container>

      <div className="product container">
        {
          view.map((val, i) => {
            return (
              <div className="product_box" key={i} >
                <img src={val.product_image} />
                <p>{val.product_name}</p>
                <p>₹{val.product_price}</p>
                <AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar />
                <br></br>
                <Link to={`/buynow/${val._id}`}>
                  <button className='mt-3'>Buy Now</button>
                </Link>
              </div>
            )
          })
        }
      </div>

      <div className='customer'>
        <div className='container'>
        <h3>FREQUENTLY ASK QUESTIONS</h3>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>How are your straps made?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Every strap is individually handcrafted by our team of skilled leathercrafters, using traditional techniques employed by the best leathercrafters in the world. There are over 50 steps involved, using a wide range of tools and machines.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Does your strap fit my watch?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Authorized Dealer of ALL the brands/watches we carry and they all come with full manufacturer warranties that are honored internationally. All of our watches sold are 100% Authentic Guaranteed, brand new, unworn and come in the original manufacturer packaging.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Are the watches you sell 100% authentic?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, our theme is fully compatible and supports Sections on every page.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>How do I know if the watch I want to purchase is battery-operated versus mechanical?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The movement type used in the watch is listed in the "Specs" section of every product page. All quartz watches require a battery, automatic watches are powered through hand-winding or wrist movement.
            </Typography>
          </AccordionDetails>
        </Accordion>
        </div>
      </div>


      <BackTop>
        <div style={style1}><UpOutlined /></div>
      </BackTop>

      <Footer />
    </>
  )
}
export default Home;