import React from 'react';
import { Row } from 'react-bootstrap';
import useOffers from '../../../hooks/useOffers';
import Offer from '../Offer/Offer';


const Offers = () => {
    const [offers] = useOffers();
    return (
        <div className="container py-5" id="offers">
            <h2 className="text-center text-primary">Our Upcoming Offers</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                {offers.map((offer) => (
                <Offer key={offer._id} offer={offer}></Offer>
                ))}
            </Row>
        </div>
    );
};

export default Offers;
