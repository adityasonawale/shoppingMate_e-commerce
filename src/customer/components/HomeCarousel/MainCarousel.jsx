import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouseldata } from './MainCarouselData';




const MainCarousel = () => {

    const items = mainCarouseldata.map((item) => <img className='cursor-pointer -z-10' role='presentation' src={item.image} alt='' />)

    return (
        < AliceCarousel
            items={items}
            disableButtonsControls
            autoPlay
            autoPlayInterval={3000}
            infinite
        />
    )
}

export default MainCarousel;