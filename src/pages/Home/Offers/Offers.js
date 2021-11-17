import React from "react";
import { Row, Spinner } from "react-bootstrap";
import useOffers from "../../../hooks/useOffers";
import Offer from "../Offer/Offer";

const Offers = () => {
  const [isLoading, offers] = useOffers();
  console.log(offers);
  return (
    <div className="container py-5" id="offers">
      <h2 className="text-center text-primary">Our Upcoming Offers</h2>
       {isLoading ? 
        <div className="text-center"><Spinner animation="border" variant="primary" /></div>
       :  
        <div>
          <Row xs={1} md={2} lg={3} className="g-4">
            {
                offers.map(offer => <Offer 
                    key = {offer._id}
                    offer = {offer}></Offer>)
            }
          </Row>
        </div>
         }
    </div>
  );
};

export default Offers;
