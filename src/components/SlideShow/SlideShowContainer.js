import React from 'react';
import SlideShow from './SlideShow';
import ImageBannerOffer1 from '../../assets/slide-show-banner/Offer1.jpg';
import ImageBannerOffer2 from '../../assets/slide-show-banner/Offer2.jpg';
import ImageBannerOffer3 from '../../assets/slide-show-banner/Offer3.jpg';

const slideImages = [
    ImageBannerOffer1,
    ImageBannerOffer2,
    ImageBannerOffer3
];

const properties = {
    duration: 3000,
    autoplay: true,
    transitionDuration: 500,
    arrows: true,
    infinite: true,
    easing: "ease-in",
    indicators: (i) => <div className="indicator"></div>
};

class SlideShowContainer extends React.Component {
    render() {
        return (
            <SlideShow properties={properties} images={slideImages} />
        );
    }
};

export default SlideShowContainer;