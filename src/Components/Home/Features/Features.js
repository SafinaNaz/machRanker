import React from "react";
import { Image } from "react-bootstrap";
import featurestree from "../../../assets/images/features-img-tree.png";
import featuresstone from "../../../assets/images/features-stone-img.png";
import featuresmobiletree from "../../../assets/images/features-mobile-tree.png";

const Features = () => {
    return (
        <div className="features">
            <div className="container-width">
                <div className="features-heading text-center">
                    <h6>Key Features</h6>
                    <h3>Match and Rank Songs</h3>
                    <p className="mb-0">Vestibulum blandit viverra convallis. Pellentesque ligula urna, fermentum ut semper in, tincidunt nec dui. Morbi mauris lacus, consequat eget justo in, semper gravida enim. Donec ultrices varius ligula. Ut non pretium augue. Etiam non rutrum metus. In varius sit amet lorem tempus sagittis.</p>
                </div>
                <div className="features-img-wrapper text-center">
                    <div className="features-tree-img position-relative">
                        <Image src={featurestree} fluid/>
                    </div>
                    <div className="features-tree-mobile-img position-relative">
                        <Image src={featuresmobiletree} fluid/>
                    </div>
                    <div className="features-stone-img">
                        <Image src={featuresstone} fluid/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Features;