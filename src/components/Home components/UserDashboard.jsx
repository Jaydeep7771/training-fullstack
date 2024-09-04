import React, { useEffect, useState } from 'react'
import { Accordion, Col, Container, Row } from "react-bootstrap";
import CircularProgress from "../CircularProgress";
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
const courses = [
    {
        id: 1,
        title: "Complete React Development Course",
        description: "Learn React from scratch and become a pro developer.",
        content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
        id: 2,
        title: " Mastering Python for Data Science",
        description: "Get hands-on experience with Python in data science.",
        content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
        id: 3,
        title: "Inroduction to Machine Learning",
        description: "Learn the basics of machine learning and AI.",
        content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
        id: 4,
        title: " Complete Python Course",
        description: "Learn Python from scratch and become a pro developer.",
        content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
        id: 5,
        title: "Complete MERN Stack Course",
        description: "Learn Full Stack from scratch and become a pro developer.",
        content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
        id: 6,
        title: "Complete Java Course",
        description: "Learn Java in 1 hour",
        content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
];
const UserDashboard = () => {
    const [courses, setCourses] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();
    const fetchCourses = async () => {
        try {
            const resp = await axios.get('http://localhost:8082/api/course');
            setCourses(resp.data);
            console.log(resp);
            
        } catch (error) {
            console.log(error);
            alert("Error fetching the data");
        }
    };
    useEffect(() => {
        fetchCourses();
    }, []);

    return (
        <Container>
           
                    

                    <br />
                    <h3>Courses</h3>

                    <div className="row row-cols-3">

                        {
                            courses.map(course => (
                                <div key={course.id} className="course-card">
                                    <div className="col-12 col-md-4 col-lg-4">
                                        <div class="card" style={{ width: "18rem" }}>
                                            <img src={course.imgUrl} className="card-img-top" alt={course.title}></img>
                                            <div class="card-body">
                                                <h3 className="card-title">{course.title}</h3>
                                                <p className="card-text">{course.description}</p>
                                                <p className="card-text">Price: ${course.price}</p>
                                                <Link to={`/courses/${course.id}`} className="btn btn-primary btn-block">View Course</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                    </div>

             
        </Container>
    )
}

export default UserDashboard