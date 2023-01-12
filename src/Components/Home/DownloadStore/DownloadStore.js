import React from "react";
import { Image } from "react-bootstrap";
import appstorelogo from "../../../assets/images/app-store-img.png"

const DownloadStore = () => {
    return (
        <div className="downloads-store-box-area">
            <div className="downloads-store-box container-width">
                <div className="downloads-store-box-content d-lg-flex d-md-flex  align-items-center justify-content-between">
                    <h3 className="mb-lg-0 mb-md-0 mb-sm-3 mb-2">Get and Install Now</h3>
                    <a href="/">
                        <div className="app-store-logo d-flex align-items-center justify-content-center">
                            <Image src={appstorelogo} fluid />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default DownloadStore;