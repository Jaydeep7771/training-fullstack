import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row, Navbar, Nav, Card, Button } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";

function Engineering() {
  const [courses, setCourses] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const resp = await axios.get('http://localhost:8082/api/course');
        setCourses(resp.data);
      } catch (error) {
        console.log(error);
        alert("Error fetching the data");
      }
    };
    fetchCourses();
  }, [id]);

  return (
    <>
        
      
      <Container>
        <br />
        <div className="text-center">
          <h1>Engineering Courses</h1>
        </div>
        <br />
        <Row>
          {courses.map(course => (
            <Col key={course.id} xs={12} md={4} lg={4} className="mb-4">
              <Card className="h-100">
                <Card.Img variant="top" src={course.imgUrl} alt={course.title} />
                <Card.Body>
                  <Card.Title>{course.title}</Card.Title>
                  <Card.Text>{course.description}</Card.Text>
                  <Card.Text>Price: ${course.price}</Card.Text>
                  <Link to={`/courses/${course.id}`}>
                    <Button variant="primary" block>View Course</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      
      <footer className="bg-dark text-white text-center py-3">
        <Container>
          <p>© 2024 Course Catalog. All rights reserved.</p>
        </Container>
      </footer>
    </>
  );
}

export default Engineering;
