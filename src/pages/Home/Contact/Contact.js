import Button from "@restart/ui/esm/Button";
import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";
const Contact = () => {
  
  return (
    <div className="mb-5 container">
        <div className="container middle-container pt-5 bg-dark" id="contact">
          <h2 className="text-light text-center py-2">Contract with Us</h2>
          <FloatingLabel
            controlId="floatingInput"
            label="Enter your Email address"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="" />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingName"
            label="Enter Your Name"
            className="mb-2"
          >
            <Form.Control type="text" placeholder="Name" />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingTextarea2"
            label="Comments"
            className="mb-2"
          >
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
            />
          </FloatingLabel>
          <div className="py-3">
            <Button variant="info" type="submit">
              Submit
            </Button>
          </div>
        </div>
      </div>
  );
};

export default Contact;
