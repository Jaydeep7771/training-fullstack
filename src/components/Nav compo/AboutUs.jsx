import React, { useState } from 'react';
import { Card, Col, Container, Row, Form, Button } from 'react-bootstrap';

function AboutUs() {
  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback({
      ...feedback,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle feedback form submission logic here
    console.log('Feedback submitted:', feedback);
  };

  return (
    <Container className="my-5" style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>About Us</Card.Title>
              <Card.Text>
                Welcome to our online learning platform! We are dedicated to providing high-quality educational content to help you achieve your learning goals. Our team of experienced educators and industry professionals work tirelessly to create engaging and informative courses across a wide range of subjects.
              </Card.Text>
              <Card.Text>
                Our mission is to make education accessible to everyone, everywhere. Whether you're looking to advance your career, learn a new skill, or simply explore a new hobby, we have something for you. Join us on this journey of knowledge and growth!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title>Feedback</Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="feedbackName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={feedback.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="feedbackEmail" className="mt-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={feedback.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="feedbackMessage" className="mt-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    value={feedback.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Enter your feedback"
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-3">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;
