import React from "react";
import DownloadStore from "../Home/DownloadStore/DownloadStore";
import Footer from "../Home/Footer/Footer";
import Banner from "./Banner/Banner";
import PrivacyContentBoxes from "./PrivacyContentBoxes/PrivacyContentBoxes";
import PrivacyGuide from "./PrivacyGuide/PrivacyGuide";
import PrivacyInfo from "./PrivacyInfo/PrivacyInfo";
import PrivacyRules from "./PrivacyRules/PrivacyRules";

const Privacy = () => {
    return(
        <div className="wrapper">
            <Banner/>
            <PrivacyInfo/>
            <PrivacyGuide/>
            <PrivacyContentBoxes/>
            <PrivacyRules/>
            <DownloadStore/>
            <Footer/>
        </div>
    )
}
export default Privacy;