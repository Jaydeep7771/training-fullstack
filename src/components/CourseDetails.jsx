import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
 
function CourseDetails() {
    const {id}=useParams();
    const [course, setCourse]= useState([]);
    const navigate=useNavigate();
    const [sid,setSid] = useState(localStorage.getItem("sid"))
    console.log(sid);
    // console.log(cid);
    
 
    useEffect(() => {
        const fetchCourses = async () => {
            try{
                const resp = await axios.get(`http://localhost:8082/api/course/${id}`);
                setCourse(resp.data);
            } catch(error){
                alert("Error in fetching data");
            }
        };
        fetchCourses();
    },[id]);
    const handleRegister=async()=>{
        try {
            const resp = await axios.get(`http://localhost:8082/api/student/add/${sid}/course/${id}`)
            if(resp.status==201)
            {
                navigate('/dashboard/user')
            }

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <img src={course.imgUrl} className="card-img" alt={course.title} height={350} />
            <h1><b>{course.title}</b></h1>
            <p>{course.description}</p>
            <p><b>Instructor:</b> {course.instructor}</p>
            <p><b>Duration:</b>{course.duration}</p>
            <button onClick={handleRegister}>Register</button>
        </div>
     );
}
 
export default CourseDetails;