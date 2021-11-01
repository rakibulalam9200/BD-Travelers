import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
const OfferInfo = () => {
  const { offerId } = useParams();
  const [offer, setOffer] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/offers/${offerId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOffer(data));
  }, []);

  return (
    <div className="container d-flex justify-content-center my-3">
      {offer && (
        <Card style={{ width: "24rem" }}>
          <Card.Img variant="top" src={offer.img} />
          <Card.Body>
            <Card.Title>{offer.name}</Card.Title>
            <Card.Text>{offer.description}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem className="fw-bold">
              Duration: {offer.tripDuration}
            </ListGroupItem>
            <ListGroupItem className="fw-bold">Fee: {offer.fee}</ListGroupItem>
            <ListGroupItem className="fw-bold">
              Date and Time: {offer.tripDate}
            </ListGroupItem>
          </ListGroup>
          <Card.Body className="d-flex justify-content-around">
            <Link to="/home">
              <Button>Go Home</Button>
            </Link>
            <Link to={`/book/${offerId}`}>
              <Button className="bg-success"><i className="fas fa-cart-plus"></i> Add To Book</Button>
            </Link>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default OfferInfo;
