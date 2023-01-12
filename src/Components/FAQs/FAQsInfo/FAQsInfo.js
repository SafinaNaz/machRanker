import React from "react";
import { Accordion, Button, Col, Form, Row, Image } from "react-bootstrap";
import usericon from "../../../assets/images/user-icon.svg";
import mailicon from "../../../assets/images/mail-icon.svg";
import callicon from "../../../assets/images/call-icon.svg";

const FAQsInfo = () => {
    const accordionfaq = [
        {
            id: '01',
            accordionHeader: "What industries benefit from using a laser cutter?",
            accordionBody: "Vestibulum blandit viverra convallis. Pellentesque ligula urna, fermentum ut semper in, tincidunt nec dui. Morbi mauris lacus, consequat eget justo in, semper gravida enim. Donec ultrices varius ligula. Ut non pretium augue.",
        },
        {
            id: '02',
            accordionHeader: "What industries benefit from using a laser cutter?",
            accordionBody: "Vestibulum blandit viverra convallis. Pellentesque ligula urna, fermentum ut semper in, tincidunt nec dui. Morbi mauris lacus, consequat eget justo in, semper gravida enim. Donec ultrices varius ligula. Ut non pretium augue.",
        },
        {
            id: '03',
            accordionHeader: "What industries benefit from using a laser cutter?",
            accordionBody: "Vestibulum blandit viverra convallis. Pellentesque ligula urna, fermentum ut semper in, tincidunt nec dui. Morbi mauris lacus, consequat eget justo in, semper gravida enim. Donec ultrices varius ligula. Ut non pretium augue.",
        },
        {
            id: '04',
            accordionHeader: "What industries benefit from using a laser cutter?",
            accordionBody: "Vestibulum blandit viverra convallis. Pellentesque ligula urna, fermentum ut semper in, tincidunt nec dui. Morbi mauris lacus, consequat eget justo in, semper gravida enim. Donec ultrices varius ligula. Ut non pretium augue.",
        },
        {
            id: '05',
            accordionHeader: "What industries benefit from using a laser cutter?",
            accordionBody: "Vestibulum blandit viverra convallis. Pellentesque ligula urna, fermentum ut semper in, tincidunt nec dui. Morbi mauris lacus, consequat eget justo in, semper gravida enim. Donec ultrices varius ligula. Ut non pretium augue.",
        },
    ]
    return (
        <div className="faqs-info">
            <div className="container-width">
                <Row>
                    <Col lg="7" className="mb-lg-0 mb-5">
                        <div className="faqs-accordion">
                            <h3>Effective FAQ's</h3>
                            <Accordion defaultActiveKey={0}>
                                {accordionfaq.map((accfaq, index) => (
                                    <Accordion.Item eventKey={index}>
                                        <Accordion.Header><span>{accfaq.id}</span>{accfaq.accordionHeader}</Accordion.Header>
                                        <Accordion.Body>{accfaq.accordionBody}</Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </div>
                    </Col>
                    <Col lg="5">
                        <div className="faqs-form">
                            <h3>Have a Question?</h3>
                            <Form>
                                <Form.Group className="input-wrapper d-flex align-items-center" controlId="formBasicEmail">
                                    <div className="user-icon-img me-3">
                                        <Image src={usericon} fluid />
                                    </div>
                                    <Form.Control type="text" placeholder="Enter your name" />
                                </Form.Group>
                                <Form.Group className="input-wrapper d-flex align-items-center" controlId="formBasicPassword">
                                    <div className="user-icon-img me-3">
                                        <Image src={mailicon} fluid />
                                    </div>
                                    <Form.Control type="email" placeholder="Enter your Email" />
                                </Form.Group>
                                <Form.Group className="input-wrapper d-flex align-items-center" controlId="formBasicPassword">
                                    <div className="user-icon-img me-3">
                                        <Image src={callicon} fluid />
                                    </div>
                                    <Form.Control type="text" placeholder="Enter your Phone Number" />
                                </Form.Group>
                                <Form.Group className="input-wrapper mb-5" controlId="formBasicPassword">
                                    <Form.Control as="textarea" rows={5} type="text" placeholder="Your Question" />
                                </Form.Group>
                                <div className="text-end">
                                    <Button className="btn-orange" type="submit">
                                        Submit
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default FAQsInfo;