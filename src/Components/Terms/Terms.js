import React from "react";
import DownloadStore from "../Home/DownloadStore/DownloadStore";
import Footer from "../Home/Footer/Footer";
import Banner from "./Banner/Banner";
import MatchRankerApp from "./MatchRankerApp/MatchRankerApp";
import TermsInfo from "./TermsInfo/TermsInfo";
import TermsListing from "./TermsListing/TermsListing";
import TermsRules from "./TermsRules/TermsRules";

const Terms = () => {
    return(
        <div className="wrapper">
            <Banner/>
            <TermsInfo/>
            <MatchRankerApp/>
            <TermsListing/>
            <TermsRules/>
            <DownloadStore/>
            <Footer/>
        </div>
    )
}
export default Terms;