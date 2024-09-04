import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, ListGroup, Card } from 'react-bootstrap';

function AdminHome() {
  return (
    <Container className="mt-4" style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Welcome to the Admin Dashboard</Card.Title>
              <Card.Text>
                Here you can manage courses and users. Use the buttons below to navigate to the respective sections.
              </Card.Text>
            </Card.Body>
          </Card>
          <ListGroup className="text-center">
            <ListGroup.Item>
              <Link to="/admin/courses" className="btn btn-success w-100">
                Manage Courses
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="/admin/users" className="btn btn-warning w-100">
                Manage Users
              </Link>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminHome;
