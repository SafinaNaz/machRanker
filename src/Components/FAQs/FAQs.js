import React from "react";
import DownloadStore from "../Home/DownloadStore/DownloadStore";
import Footer from "../Home/Footer/Footer";
import Banner from "./Banner.js/Banner";
import FAQsInfo from "./FAQsInfo/FAQsInfo";
import HelpCenter from "./HelpCenter/HelpCenter";

const FAQs = () => {
    return(
        <div className="wrapper">
            <Banner/>
            <HelpCenter/>
            <FAQsInfo/>
            <DownloadStore/>
            <Footer/>
        </div>
    )
}
export default FAQs;