import React from 'react';
import Menu from "../NavBar/Menu";
import bg from '../../Images/Rectangle 274.png';
import {Col, Container, Nav, Row} from "react-bootstrap";
const topbannerbg={
    background: `url('${bg}')`,
    backgroundSize:'cover',
   height:'100%',
    paddingBottom:'20px',
    backgroundRepeat:'no-repeat'
}
const fontstyle={
    color:'#111430',
    fontWeight:'700',
}

const TopBanner = () => {
    return (
        <div style={topbannerbg}>
            <Menu ></Menu>
          <Container>
              <Row className="mt-5">
                  <Col md={6} sm={12} className="pt-5" data-aos="fade-right"  data-aos-delay="500">
                      <h1 className="text-start " style={fontstyle}>
                          Let’s Grow Your<br/>
                          Brand To The<br/>
                          Next Level
                      </h1>
                      <h5 className="text-start mt-3">
                          Lorem ipsum dolor sit amet, consectetur<br/>
                          adipiscing elit. Purus commodo ipsum duis<br/> laoreet maecenas. Feugiat
                      </h5>
                      <div className="mt-5 pb-5 text-start">
                          <button className="btnbg" >
                              Hire us
                          </button>
                      </div>

                  </Col>
                  <Col md={6} sm={12} data-aos="fade-left"     data-aos-delay="500">
<img src="https://i.ibb.co/XYT7r32/Frame.png" alt="Top banner img" className="img-fluid"/>
                  </Col>
              </Row>
          </Container>
            
        </div>
    );
};

export default TopBanner;