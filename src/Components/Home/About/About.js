import React from "react";
import { Col, Row, Image, Button } from "react-bootstrap";
import aboutcolimg from "../../../assets/images/about-us-col-img.png";

const About = () => {
    return(
        <div className="about-us position-relative">
            <div className="container-width">
                <Row className="align-items-center">
                    <Col lg="6" className="mb-lg-0 mb-4">
                        <div className="about-us-img">
                            <Image src={aboutcolimg} fluid/>
                        </div>
                    </Col>
                    <Col lg="6">
                        <div className="about-us-content text-lg-start text-center">
                            <h6>About us</h6>
                            <h3>MatchRanker App</h3>
                            <p>Vestibulum blandit viverra convallis. Pellentesque ligula urna, fermentum ut semper in, tincidunt nec dui. Morbi mauris lacus, consequat eget justo in, semper gravida enim. Donec ultrices varius ligula. Ut non pretium augue. Etiam non rutrum metus. In varius sit amet lorem tempus sagittis. </p>
                            <p className="mb-lg-5 mb-4">Cras sed maximus enim, vel ultricies tortor. Pellentesque consectetur tellus ornare felis porta dapibus. Etiam eget viverra ipsum, ac posuere massa. Nam vitae tempor metus. Donec rhoncus, metus ac convallis ultricies, turpis augue vestibulum elit, ut pharetra orci urna quis lectus.</p>
                            <Button className="btn-orange">Download App</Button>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default About;