import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const Volunteer = ({volunteer}) => {
    const {name,img,age,profession,mobile}= volunteer;
  return (
    <div>
      <Card className="shadow rounded">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="text-center text-primary">{name}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem className="fw-bold">
            Age: <span className="text-success"> {age}</span>
          </ListGroupItem>
          <ListGroupItem className="fw-bold text">
             Mobile: <span className="text-success"> {mobile}</span>
          </ListGroupItem>
          <ListGroupItem className="fw-bold">
          Profession: <span className="text-success"> {profession}</span>
          </ListGroupItem>
        </ListGroup>
      </Card>
    </div>
  );
};

export default Volunteer;
