import React from "react";
import { Image } from "react-bootstrap";
import footerlogo from "../../../assets/images/footer-logo.png";
import facebook from "../../../assets/images/facebook.svg";
import twitter from "../../../assets/images/twitter.svg";
import linkdin from "../../../assets/images/linkdin.svg";
import pinterest from "../../../assets/images/pinterest.svg";
import youtube from "../../../assets/images/youtube.svg";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container-width">
                <div className="footer-content text-center">
                    <Link to="/">
                        <div className="logo mb-2">
                            <Image src={footerlogo} fluid />
                        </div>
                    </Link>
                    <p>Vestibulum blandit viverra convallis. Pellentesque ligula urna</p>
                    <div className="footer-social mb-lg-5 mb-md-5 mb-sm-5 mb-4 d-flex align-items-center justify-content-center">
                        <a href="/">
                            <div className="social-icons d-flex align-items-center justify-content-center">
                                <Image src={facebook} fluid />
                            </div>
                        </a>
                        <a href="/">
                            <div className="social-icons d-flex align-items-center justify-content-center">
                                <Image src={twitter} fluid />
                            </div>
                        </a>
                        <a href="/">
                            <div className="social-icons d-flex align-items-center justify-content-center">
                                <Image src={linkdin} fluid />
                            </div>
                        </a>
                        <a href="/">
                            <div className="social-icons d-flex align-items-center justify-content-center">
                                <Image src={pinterest} fluid />
                            </div>
                        </a>
                        <a href="/" className="me-0">
                            <div className="social-icons d-flex align-items-center justify-content-center">
                                <Image src={youtube} fluid />
                            </div>
                        </a>
                    </div>
                    <div className="footer-links mb-lg-5 mb-md-5 mb-sm-5 mb-4 d-lg-flex d-md-flex d-sm-flex align-items-center justify-content-center">
                        <Link to="/terms">
                            <h6>Terms & Conditions</h6>
                        </Link>
                        <Link to="/privacy">
                            <h6 className="content-border">Privacy Policy</h6>
                        </Link>
                        <Link to="/faqs">
                            <h6 className="content-border m-0">FAQ's</h6>
                        </Link>
                    </div>
                </div>
                <div className="footer-copyright text-center">
                    <p className="mb-0">© 2022 MatchRanker. All rights reserved</p>
                </div>
            </div>
        </div>
    )
}
export default Footer;