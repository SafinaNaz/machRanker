import React from "react";
import { Col, Row, Image } from "react-bootstrap";
import helpcenterimg from "../../../assets/images/help-center-img.png";

const HelpCenter = () => {
    return(
        <div className="help-center">
            <div className="container-width">
                <Row>
                    <Col lg="6">
                        <div className="help-center-img position-relative">
                            <Image src={helpcenterimg} fluid/>
                        </div>
                    </Col>
                    <Col lg="6" className="d-flex align-items-center">
                        <div className="help-center-content">
                            <h6>Help Center</h6>
                            <h3>24/7 Help Desk</h3>
                            <p>Vestibulum blandit viverra convallis. Pellentesque ligula urna, fermentum ut semper in, tincidunt nec dui. Morbi mauris lacus, consequat eget justo in, semper gravida enim. Donec ultrices varius ligula. Ut non pretium augue.</p>
                            <ul className="m-0 p-0 help-center-list">
                                <li>Vestibulum blandit viverra convallis. Pellentesque ligula urna,</li>
                                <li>Niverra convallis. Pellentesque ligula urna,</li>
                                <li>Morbi mauris lacus, consequat eget</li>
                                <li>Pellen mauris lacus, consequat eget</li>
                                <li>Niverra convallis. Pellentesque ligula urna,</li>
                                <li>Morbi mauris lacus, consequat eget</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default HelpCenter;