import React from "react";
import { Col, Row, Image } from "react-bootstrap";
import termslistone from "../../../assets/images/terms-list-one.svg";
import termslisttwo from "../../../assets/images/terms-list-two.svg";
import termslistthree from "../../../assets/images/terms-list-three.svg";
import termslistfour from "../../../assets/images/terms-list-four.svg";
import termslistfive from "../../../assets/images/terms-list-five.svg";
import termslistsix from "../../../assets/images/terms-list-six.svg";

const TermsListing = () => {
    const termslisting = [
        {
            id: 1,
            image: termslistone,
            termsListContentHeading: "Dapibus lectus",
            termsListContentPara: "Duis pretium gravida enim, vel maximus ligula fermentum a. Sed rhoncus eget ex id egestas. Nam nec nisl placerat, tempus erat a, condimentum metus. Curabitur nulla nisi, lacinia at lobortis at, suscipit at nibh. Proin quis lectus finibus,.",
        },
        {
            id: 2,
            image: termslisttwo,
            termsListContentHeading: "Arcu non",
            termsListContentPara: "Duis pretium gravida enim, vel maximus ligula fermentum a. Sed rhoncus eget ex id egestas. Nam nec nisl placerat, tempus erat a, condimentum metus. Curabitur nulla nisi, lacinia at lobortis at, suscipit at nibh. Proin quis lectus finibus,.",
        },
        {
            id: 3,
            image: termslistthree,
            termsListContentHeading: "Nulla consequat vel",
            termsListContentPara: "Duis pretium gravida enim, vel maximus ligula fermentum a. Sed rhoncus eget ex id egestas. Nam nec nisl placerat, tempus erat a, condimentum metus. Curabitur nulla nisi, lacinia at lobortis at, suscipit at nibh. Proin quis lectus finibus,.",
        },
        {
            id: 4,
            image: termslistfour,
            termsListContentHeading: "Quam etiam mauris",
            termsListContentPara: "Duis pretium gravida enim, vel maximus ligula fermentum a. Sed rhoncus eget ex id egestas. Nam nec nisl placerat, tempus erat a, condimentum metus. Curabitur nulla nisi, lacinia at lobortis at, suscipit at nibh. Proin quis lectus finibus,.",
        },
        {
            id: 5,
            image: termslistfive,
            termsListContentHeading: "Dictum tristique",
            termsListContentPara: "Duis pretium gravida enim, vel maximus ligula fermentum a. Sed rhoncus eget ex id egestas. Nam nec nisl placerat, tempus erat a, condimentum metus. Curabitur nulla nisi, lacinia at lobortis at, suscipit at nibh. Proin quis lectus finibus,.",
        },
        {
            id: 6,
            image: termslistsix,
            termsListContentHeading: "Pellentesque vivamus dictum",
            termsListContentPara: "Duis pretium gravida enim, vel maximus ligula fermentum a. Sed rhoncus eget ex id egestas. Nam nec nisl placerat, tempus erat a, condimentum metus. Curabitur nulla nisi, lacinia at lobortis at, suscipit at nibh. Proin quis lectus finibus,.",
        },
    ]
    return (
        <div className="terms-listing">
            <div className="container-width">
                <Row>
                    {termslisting.map((trmlist) => (
                        <Col lg="6" className="mb-lg-5 mb-4">
                            <div className="terms-listing-content d-flex justify-content-between flex-lg-row flex-column">
                                <div className="terms-listing-content-img d-flex align-items-center justify-content-center">
                                    <Image src={trmlist.image} fluid />
                                </div>
                                <div className="terms-listing-content-info">
                                    <h5 className="mb-xxl-4 mb-lg-3">{trmlist.termsListContentHeading}</h5>
                                    <p>{trmlist.termsListContentPara}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    )
}
export default TermsListing;