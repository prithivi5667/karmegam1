import React from 'react';
import "../index.css";
import shop from '../images/shop1.jpg';
import shop1 from '../images/shop2.jpg';
import shop2 from '../images/shop3.jpg';
import shop3 from '../images/shop4.jpg';
import rice from '../images/rice.jpeg';
import coco from '../images/coco.jpeg';
import {Container,Col,Row,Carousel} from 'react-bootstrap';
const Home  = () => {
    return (
        <div>
          <Container fluid="lg">
  <Row className="secondhalf">
    <Col sm={12}> 
      <header className="masthead text-center text-white">
            <div className="masthead-content">
                <div className="container px-5">
                    <h1 className="masthead-heading mb-0">KARMEGAM COLLECTIVE FARMERS PRODUCER</h1>
                    <h1 className="masthead-subheading mb-0">COMPANY LIMITED</h1>
                    <a className="btn btn-primary btn-xl rounded-pill mt-5" href="#scroll">Learn More</a>
                </div>
            </div>
            <div className="bg-circle-1 bg-circle"></div>
            <div className="bg-circle-2 bg-circle"></div>
            <div className="bg-circle-3 bg-circle"></div>
            <div className="bg-circle-4 bg-circle"></div>
        </header>
       </Col>
       </Row>
       <Row>
           <Col>
        <section id="scroll">
            <div className="container px-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-6 order-lg-2">
                        <div className="p-5"><img src={rice} className="imgrounded" alt=''/> </div>
                    </div>
                    <div className="col-lg-6 order-lg-1">
                        <div className="p-5">
                            <h2 className="display-4">Pesticides...</h2>
                            <p>mixture of substances intended for preventing, destroying, repelling, or mitigating any pest.Any substance or mixture of substances intended for use as a plant regulator, defoliant, or desiccant.
Any nitrogen stabilizer</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section>
            <div className="container px-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="p-5"><img src={coco} className="imgrounde" alt=''/></div>
                    </div>
                    <div className="col-lg-6">
                        <div className="p-5">
                            <h2 className="display-4">Seed Paddy</h2>
                            <p>IR-20</p>
                            <p>Parentage – IR 262 X TKM 6
Duration (Days) – 130 - 135
Average yield (Kg/ha) – 5000
1000 grain weight (g) – 19
Grain type – Medium slender
Habit – Semi-dwarf
Rice color – White
Special features – Resistant to stem borer</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="fluid lg">
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={shop}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={shop1}
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={shop2}
      alt="Third slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={shop3}
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>
        </section>
                    </Col>
    
  </Row>
  
  
</Container> 
      </div>
    );
}
export default Home;