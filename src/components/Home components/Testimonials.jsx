import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const testimonials = [
  {
    name: 'John Doe',
    feedback: 'This platform has transformed my learning experience!',
    image: 'path/to/john-image.jpg'
  },
  {
    name: 'Jane Smith',
    feedback: 'The courses are well-structured and easy to follow.',
    image: 'path/to/jane-image.jpg'
  },
  {
    name: 'Sam Wilson',
    feedback: 'I love the interactive elements and community support.',
    image: 'path/to/sam-image.jpg'
  }
];

const Testimonials = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">What Our Students Say</h2>
      <Row>
        {testimonials.map((testimonial, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <Card.Img variant="top" src={testimonial.image} alt={testimonial.name} />
              <Card.Body>
                <Card.Title>{testimonial.name}</Card.Title>
                <Card.Text>{testimonial.feedback}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Testimonials;
