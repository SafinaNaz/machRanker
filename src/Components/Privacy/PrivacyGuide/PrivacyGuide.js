import React from "react";
import { Col, Row, Image } from "react-bootstrap";
import guideimgone from "../../../assets/images/guide-img-one.svg";
import guideimgtwo from "../../../assets/images/guide-img-two.svg";
import guideimgthree from "../../../assets/images/guide-img-three.svg";

const PrivacyGuide = () => {
    return(
        <div className="privacy-guide">
            <div className="container-width">
                <Row>
                    <Col lg="4" className="mb-lg-0 mb-4">
                        <div className="privacy-guide-content text-xl-start text-lg-start text-center">
                            <div className="privacy-guide-content-img mb-4">
                                <Image src={guideimgone} fluid/>
                            </div>
                            <h4>Lacinia max</h4>
                            <p className="mb-0">Sed a magna semper, porta purus eu, ullamcorper ligula. Nam sit amet consectetur sapien. Etiam dui ipsum, viverra vel turpis ut, dignissim elementum mauris.</p>
                        </div>
                    </Col>
                    <Col lg="4" className="mb-lg-0 mb-4">
                        <div className="privacy-guide-content text-xl-start text-lg-start text-center">
                            <div className="privacy-guide-content-img mb-4">
                                <Image src={guideimgtwo} fluid/>
                            </div>
                            <h4>Ultrices gravida</h4>
                            <p className="mb-0">Sed a magna semper, porta purus eu, ullamcorper ligula. Nam sit amet consectetur sapien. Etiam dui ipsum, viverra vel turpis ut, dignissim elementum mauris.</p>
                        </div>
                    </Col>
                    <Col lg="4" className="mb-lg-0 mb-4">
                        <div className="privacy-guide-content text-xl-start text-lg-start text-center">
                            <div className="privacy-guide-content-img mb-4">
                                <Image src={guideimgthree} fluid/>
                            </div>
                            <h4>Suspendisse vehi</h4>
                            <p className="mb-0">Sed a magna semper, porta purus eu, ullamcorper ligula. Nam sit amet consectetur sapien. Etiam dui ipsum, viverra vel turpis ut, dignissim elementum mauris.</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default PrivacyGuide;