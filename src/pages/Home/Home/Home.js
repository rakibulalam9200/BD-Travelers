import React from 'react';
import { Helmet } from 'react-helmet';
import Banner from '../Banner/Banner';
import Offers from '../Offers/Offers';

const Home = () => {
    return (
        <div>
            <Helmet><title>BD Travelers</title></Helmet>
            <Banner></Banner>
            <Offers></Offers>
        </div>
    );
};

export default Home;