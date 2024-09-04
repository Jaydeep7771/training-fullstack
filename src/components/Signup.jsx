import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";




function Signup() {
    const [student, setStudent] = useState({ name:'',email: '', password:'' });
    const navigate=useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const resp = await axios.post('http://localhost:8082/api/student',student);
            if(resp.status == 201){
                alert("Registered  IN");
                navigate("/login");
            }}
            catch(error){
                alert("Error Occured");
                console.log(error);
                
    
            }
        
        
    }
    return (  
        <div>
            {/* <div className="container"> */}
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <h2 className="text-center mt-5">SignUp</h2>
                        <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label for="name">Name</label>
                            <input type="text" className="form-control" id="name" value={student.name}
                            onChange={(e)=>setStudent({... student,name:e.target.value})} required/>
                        </div>
                        <div className="form-group">
                            <label for="email">Email Address</label>
                            <input type="email" className="form-control" id="email" value={student.email}
                            onChange={(e)=>setStudent({... student,email:e.target.value})} required/>
                        </div>
                        <div className="form-group">
                            <label for="password">Password</label>
                            <input type="password" className="form-control" id="password" value={student.password}
                            onChange={(e)=>setStudent({...student,password: e.target.value})} required/>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block mt-4">Signup</button>

                        </form>
                        <p className="text-center mt-3">
                            <Link to="/login">Login here !</Link>

                        </p>

                    </div>

                </div>

            {/* </div> */}
        </div>

    );
}

export default Signup;