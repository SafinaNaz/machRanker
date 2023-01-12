import React from "react";
import { Col, Row, Image } from "react-bootstrap";
import termsbannerimg from "../../../assets/images/terms-banner-img.svg";

const Banner = () => {
    return(
        <div className="terms-banner second-banner">
            <div className="container-width">
                <Row>
                    <Col lg="6" className="d-flex align-items-center text-lg-start text-center">
                        <div className="second-banner-content">
                            <h1>TERMS</h1>
                            <p>Sed a magna semper, porta purus eu, ullamcorper ligula. Nam sit amet consectetur sapien. Etiam dui ipsum, viverra vel turpis ut, dignissim elementum mauris. Sed dapibus auctor scelerisque.</p>
                        </div>
                    </Col>
                    <Col lg="6" className="order-lg-last order-first mb-lg-0 mb-4">
                        <div className="second-banner-img d-flex justify-content-center">
                            <Image src={termsbannerimg} fluid/>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default Banner;