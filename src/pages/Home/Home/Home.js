import React from 'react';
import { Helmet } from 'react-helmet';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Offers from '../Offers/Offers';
import Volunteers from '../Volunteers/Volunteers';

const Home = () => {
    return (
        <div>
            <Helmet><title>BD Travelers</title></Helmet>
            <Banner></Banner>
            <Offers></Offers>
            <Volunteers></Volunteers>
            <Contact></Contact>
        </div>
    );
};

export default Home;