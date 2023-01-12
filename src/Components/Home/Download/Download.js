import React from "react";
import { Image } from "react-bootstrap";
import downloadsmobiles from "../../../assets/images/download-img.png";

const Download = () => {
    return (
        <div className="downloads">
            <div className="container-width">
                <div className="downloads-content text-center">
                    <h6>Download</h6>
                    <h3>Match and Rank Songs</h3>
                    <div className="downloads-image">
                        <Image src={downloadsmobiles} fluid />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Download;