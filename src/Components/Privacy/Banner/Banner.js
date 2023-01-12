import React from "react";
import { Col, Row, Image } from "react-bootstrap";
import privacybannerimg from "../../../assets/images/privacy-banner-img.svg";

const Banner = () => {
    return(
        <div className="privacy-banner second-banner">
            <div className="container-width">
                <Row>
                    <Col lg="6" className="d-flex align-items-center">
                        <div className="second-banner-content text-lg-start text-center">
                            <h1>PRIVACY POLICY</h1>
                            <p>Sed a magna semper, porta purus eu, ullamcorper ligula. Nam sit amet consectetur sapien. Etiam dui ipsum, viverra vel turpis ut, dignissim elementum mauris. Sed dapibus auctor scelerisque.</p>
                        </div>
                    </Col>
                    <Col lg="6" className="order-lg-last order-first mb-lg-0 mb-4">
                        <div className="second-banner-img d-flex justify-content-center">
                            <Image src={privacybannerimg} fluid/>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default Banner;