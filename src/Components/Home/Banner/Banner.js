import React from "react";
import { Button, Col, Row, Image } from "react-bootstrap";
import appleimg from "../../../assets/images/apple-img.svg";
import bannerimg from "../../../assets/images/banner-col-img.png";

const Banner = () => {
    return(
        <div className="banner position-relative">
            <div className="container-width">
                <Row>
                    <Col lg="5" className="d-flex align-items-center order-lg-first order-last text-lg-start text-center">
                        <div className="banner-content">
                            <h2>An ultimate</h2>
                            <h1>GATEWAY TO</h1>
                            <h6 className="text-lg-end text-center">your Songs Universe!</h6>
                            <p>Sed a magna semper, porta purus eu, ullamcorper ligula. Nam sit amet consectetur sapien. Etiam dui ipsum, viverra vel turpis ut, dignissim elementum mauris. Sed dapibus auctor scelerisque.</p>
                            <Button className="btn-transparent d-flex align-items-center">
                            <div className="apple-img me-3">
                                <Image src={appleimg} fluid/>
                            </div>
                            Get the App now
                            </Button>
                        </div>
                    </Col>
                    <Col lg="7" className="order-lg-last order-first mb-lg-0 mb-4">
                        <div className="banner-col-img">
                            <Image src={bannerimg} fluid/>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default Banner;