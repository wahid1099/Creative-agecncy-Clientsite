import React from 'react';
import Slider from "react-slick";
import {Container} from "react-bootstrap";

const ourworksbg={
    background:'#111430',
    color:'#fff',
    paddingTop:'90px',
    paddingBottom:'50px'

}

const OurWorks = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div style={ourworksbg}>

            <h2>Here are some of <span className="text-success">our works</span></h2>
            <Container>
            <Slider {...settings} className="pt-5 pb-5">
                <div>
                   <img src="https://i.ibb.co/b1SghBd/carousel-1.png" className="pe-4 w-100 img-fluid"/>
                </div>
                <div>
                    <img src="https://i.ibb.co/18PHH8H/carousel-2.png" className="pe-4  img-fluid w-100"/>
                </div>

                <div>
                    <img src="https://i.ibb.co/Yb0tYHj/carousel-4.png" className="img-fluid w-100 pe-4 "/>
                </div>
                <div>
                    <img src="https://i.ibb.co/9T3XbpQ/carousel-5.png" className="img-fluid w-100 pe-4 "/>
                </div>
                <div>
                    <img src="https://i.ibb.co/b1SghBd/carousel-1.png" className="img-fluid w-100 pe-4 "/>
                </div>
                <div>
                    <img src="https://i.ibb.co/GT3mzSb/carousel-3.png" className="img-fluid pe-4 " style={{height:'295px',width:'420px'}}/>
                </div>
            </Slider>
            </Container>
        </div>
    );
};

export default OurWorks;