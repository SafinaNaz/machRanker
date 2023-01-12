import React from "react";
import { Col, Row, Image } from "react-bootstrap";
import analyticscolimg from "../../../assets/images/analytics-col-img.png";

const Analytics = () => {
    return(
        <div className="analytics">
            <div className="container-width">
                <Row>
                    <Col lg="6" className="d-flex align-items-center order-lg-first order-last">
                        <div className="analytics-content">
                            <h6>Analytics</h6>
                            <h3>Song Analytics as Per Rank</h3>
                            <p>Vestibulum blandit viverra convallis. Pellentesque ligula urna, fermentum ut semper in, tincidunt nec dui. Morbi mauris lacus, consequat eget justo in, semper gravida enim. Donec ultrices varius ligula. Ut non pretium augue.</p>
                            <ul className="m-0 p-0 analytics-list">
                                <li>Vestibulum blandit viverra convallis. Pellentesque ligula urna,</li>
                                <li>Niverra convallis. Pellentesque ligula urna,</li>
                                <li>Morbi mauris lacus, consequat eget</li>
                                <li>Pellen mauris lacus, consequat eget</li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg="6" className="order-lg-last order-first mb-lg-0 mb-4">
                        <div className="analytics-col-img">
                            <Image src={analyticscolimg} fluid/>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default Analytics;