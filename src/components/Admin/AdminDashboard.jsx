import { useEffect, useState } from "react";
import courses from '../courses.json';
import axios from "axios";
import CourseDetail from "../CourseDetails";
// import CourseDetail from "/CourseDetails";
 
function AdminDashboard() {
 
    const [courses,setCourses] = useState([])
    const [student,setStudent] = useState({})
 
    // const handleAddCourse = async (e) => {
    //     e.preventDefault();
    //     try{
    //         const resp = await axios.get("http://localhost:8080/api/student/1",student);
            // console.log(resp);
            // if(resp.status == 200){
            //     alert("Course Added Successfully");
 
            //     setStudent(student)
        //         console.log(resp.data);
               
        //         // navigate("/home")
        //     }
        // } catch(error){
        //     alert("Error adding course...please try after some time");
        //     console.log(error);
        // }
       
    // }
    // useEffect(()=>{
    //     console.log(student);
    // },[student])
 
    const [newCourse,setNewCourse] = useState({title:'',description:''});
    const handleAddCourse = ()=>{
        const newId = courses.length ? courses[courses.length-1].id+1 : 1;
        setCourses([...courses,{id:newId,...newCourse}]);
        setNewCourse({title:'',description:''});
    };
 
    const handleDeleteCourse = (id) =>{
        setCourses(courses.filter(courses => courses.id !== id))
    }
    return (
        <div>
            <div className="container">
                <h2>Admin Dashboard</h2>
                <div className="mt-3">
                    <h4>Add a New Course</h4>
                    <input type="text" placeholder="Course Title" value={newCourse.title}
                    onChange={(e) => setNewCourse({...newCourse, title:e.target.value})}
                    className="form-control my-2"/>
 
                    <input type="text" placeholder="Course Description" value={newCourse.description}
                    onChange={(e) => setNewCourse({...newCourse, description:e.target.value})}
                    className="form-control my-2"/>
 
                    <button className="btn btn-success" onClick={handleAddCourse}> Add Course</button>
                </div>
 
                <h4 className="mt-5">Course List</h4>
                <ul className="list-group mt-3">
                    {courses.map((course) => (
                        <li key={course.id} className="list-group-item d-flex justify-content-between align-items-center">
                            <span>
                                <strong>{course.title}</strong> : {course.description}
                            </span>
                            <button className="btn btn-danger" onClick={()=>handleDeleteCourse(course.id)}>
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <CourseDetail/>
        </div>
     );
}
 
export default AdminDashboard;