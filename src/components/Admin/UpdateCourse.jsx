import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
 
function UpdateCourse() {
    const [course, setCourses] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
 
    const fetchData = async () => {
        try {
            const resp = await axios.get(`http://localhost:8082/api/courses/${id}`);
            setCourses(resp.data);
        } catch (error) {
            console.log(error);
        }
    }
 
    useEffect(() => {
        fetchData();
    }, []);
 
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const resp = await axios.put(`http://localhost:8082/api/courses/${id}`, course);
            if (resp.status === 201) {
                alert("Updated Successfully");
                navigate('/admin/dashboard');
            } else {
                alert("Error in updation");
            }
        } catch (error) {
            console.log(error);
        }
    }
 
    return (
        <Container>
            <h2 className="text-center my-4">Update Course</h2>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formTitle">
                        <Form.Label><b>Title</b></Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Title"
                            value={course.title || ''}
                            onChange={(e) => setCourses({ ...course, title: e.target.value })}
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formDescription">
                        <Form.Label><b>Description</b></Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Description"
                            value={course.description || ''}
                            onChange={(e) => setCourses({ ...course, description: e.target.value })}
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formInstructor">
                        <Form.Label><b>Instructor</b></Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Instructor"
                            value={course.instructor || ''}
                            onChange={(e) => setCourses({ ...course, instructor: e.target.value })}
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formDuration">
                        <Form.Label><b>Duration</b></Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Duration"
                            value={course.duration || ''}
                            onChange={(e) => setCourses({ ...course, duration: e.target.value })}
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formPrice">
                        <Form.Label><b>Price</b></Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Price"
                            value={course.price || ''}
                            onChange={(e) => setCourses({ ...course, price: e.target.value })}
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formImage">
                        <Form.Label><b>Image</b></Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Image"
                            value={course.imgUrl || ''}
                            onChange={(e) => setCourses({ ...course, image: e.target.value })}
                        />
                    </Form.Group>
                </Row>
                <Button variant="primary" type="submit" className="w-100">Edit</Button>
            </Form>
        </Container>
    );
}
 
export default UpdateCourse;