import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import exclam from "../assets/exclaim.png"


function Home() {
    return ( 
        <Container className="home-con">
            <Row className="align-items-center">
                <Col md={6} sm={12} className="mb-3">
              <div className="fraud">
                <div className="exclam">
            <img src={exclam} alt="" className="exclam-img"/>
                </div>
                <div className="text">
              <p className="know">Know fraud when you see it</p>
              <p className="forward"> You can also forward any suspicious text message to your cell phone provider at 7726("SPAM") and follow their instructions or report any concerns to <Link className="abuse">abuse@bankofamerica.com</Link></p>
                </div>
              </div>

          
                </Col>

                <Col md={6} sm={12} className="mb-3">
                  <div className="note">
                    <div className="head-text">Please note your website username and password may be different than what you use for the Mobile app.</div>

         <div className="body-text">
          <p>Your Employment Development Department Debit Card from Bank of America</p>
            <ul>
                <li>Faster, easier and more secure benifit payments</li>
                <li>Just received a card? Activate it now and get started!</li>
                
            </ul>
            <Button className="act-btn">Activate my cart</Button>
                <p>Visit the EDD website at <span className="edd-link">www.edd.ca.gov</span> for more information</p>
                </div>
            
                  </div>
           
          
             
                </Col>

                <Col md={6} sm={12} className="mb-3">
            <div className="question">
               <p>Answers to your questions</p>
           <Button className="learn-btn">Learn more</Button></div>
          
               
                </Col>
            </Row>
           
        </Container>
        

     );
}

export default Home;