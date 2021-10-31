import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner1.jpg'
import banner2 from '../../../images/banner2.jpg'
import banner3 from '../../../images/banner3.jpg'
const Banner = () => {
    return (
        <div id="home">
        <Carousel className= "h-50"  variant="primary">
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100"
                src={banner1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Explore to Natural Beauties</h3>
                <p>Tress and water are most important things for lives and refreshement of metal health.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={500}>
                <img
                className="d-block w-100"
                src={banner2}
                alt="Second slide"
                />
                <Carousel.Caption>
                <h3>Green is Color of Nature</h3>
                <p>Adventure is enjoyable in the vacation to refresh mind after huge workload</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src={banner3}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Travelling is good for Mental Health</h3>
                <p>A beach offers a gorgeous view of the land and sea and reduce mental depression.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        
    </div>
);
};

export default Banner;