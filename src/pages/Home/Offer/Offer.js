import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Offer = ({offer}) => {
    const { name, tripDuration,tripDate,fee, description,img, _id } = offer;
    return (
        <div>
            <Card className="shadow rounded">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                <Card.Title className="text-center">{name}</Card.Title>
                <Card.Title className="mb-2 text-muted">
                    Duration: {tripDuration}
                </Card.Title>
                <Card.Title className="mb-2 text-success ">
                    Date and Time: {tripDate}
                </Card.Title>
                <Card.Text className="text-warp">{(description.length>150)?(description.slice(0, 150)):description}</Card.Text>
                <div className="d-flex justify-content-around my-2">
                    <Card.Title className="mb-2 text-muted">Fee: {fee}/Person</Card.Title>
                </div>

                <div className="d-flex justify-content-center my-2">
                    <Link to={`/offers/${_id}`}>
                        <Button className="mx-5" variant="outline-success">
                        {" "}
                        Details
                        </Button>
                    </Link> 
                </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Offer;