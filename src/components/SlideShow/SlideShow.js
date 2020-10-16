import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './SlideShow.css';

class SlideShow extends React.Component {
    renderImageContainer(slideImage) {
        return (
            <div className="each-slide">
                <img src={slideImage} alt='offers' />
            </div>
        );
    }

    mapImages(slideImagesObject) {
        return slideImagesObject.map((element) => {
            return this.renderImageContainer(element);
        });
    }

    render() {
        return (
            <div className="slideshow">
                <Slide {...this.props.properties}>
                    {this.mapImages(this.props.images)}
                </Slide>
            </div>
        );
    }
};

export default SlideShow;