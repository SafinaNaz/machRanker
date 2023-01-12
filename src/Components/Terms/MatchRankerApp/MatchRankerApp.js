import React from "react";
import { Col, Row } from "react-bootstrap";

const MatchRankerApp = () => {
    return (
        <div className="match-ranker-app text-lg-start text-center">
            <div className="container-width">
                <Row className="align-items-center">
                    <Col lg="4">
                        <div className="match-ranker-app-content">
                            <h3>Thanks For Using <span>MatchRanker App</span></h3>
                        </div>
                    </Col>
                    <Col lg="8">
                        <div className="match-ranker-app-content">
                            <p className="mb-3">Sed a magna semper, porta purus eu, ullamcorper ligula. Nam sit amet consectetur sapien. Etiam dui ipsum, viverra vel turpis ut, dignissim elementum mauris. Sed dapibus auctor scelerisque. Aenean at leo tellus. Morbi eu leo sapien. Fusce libero dolor, venenatis eget enim sed, commodo efficitur arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                            <p>Sed dapibus auctor scelerisque. Aenean at leo tellus. Morbi eu leo sapien. Fusce libero dolor, venenatis eget enim sed.</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default MatchRankerApp;