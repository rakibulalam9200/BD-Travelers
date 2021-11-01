import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Volunteer from "../Volunteer/Volunteer";

const Volunteers = () => {
  const [volunteers, setVolunteers] = useState([]);
  useEffect(() => {
    const url = "https://dry-gorge-55109.herokuapp.com/volunteers";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setVolunteers(data));
  }, []);
  return (
    <div>
      <div className="container py-5" id="volunteers">
        <h2 className="text-center text-primary">Our Volunteers</h2>
        <Row xs={2} md={3} lg={4} className="g-4">
          {volunteers.map((volunteer) => (
            <Volunteer key={volunteer._id} volunteer={volunteer}></Volunteer>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Volunteers;
