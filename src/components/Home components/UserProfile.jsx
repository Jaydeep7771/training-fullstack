import { Accordion, Col, Container, Row } from "react-bootstrap";
import CircularProgress from "../CircularProgress";
import { useEffect, useState } from "react";
import axios from "axios";

function UserProfile() {
  const [percentage, setPercentage] = useState(75); // Example percentage
  const [sid,setSid] = useState(localStorage.getItem("sid"))
  const [name,setName]=useState("");
  const [courses,setCourses] = useState([])
  const fetchCourses = async () =>{
    try {
      const resp = await axios.get(`http://localhost:8082/api/student/${sid}`)
      setCourses(resp.data.courses)
      setName(resp.data.name);
    } catch (error) {
      console.log(error);
      
    }
  }
  useEffect(()=>{
    fetchCourses()
  },[])
    return (  
        <Container>
      <Row>
        <Col>
        <h1>Welcome {name}</h1>
        <hr />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, nostrum.</p>

        <br />
        <h3>Courses Enrolled</h3>
        <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
            {courses.map((item,index)=>{
              return <>
              <Accordion.Header>{item.title}</Accordion.Header>
                <Accordion.Body>
                  {item.description}
                </Accordion.Body>
              </>

            })}
          </Accordion.Item>
        </Accordion>
        
        
        </Col>
        <Col>
        
        <div className="container">
      <h1>Course Progress</h1>
      <CircularProgress percentage={percentage} />
    </div>
        
        
        </Col>
      </Row>
         </Container>

    );
}

export default UserProfile;