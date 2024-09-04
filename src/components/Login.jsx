import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";




function Login({setLoggedIn}) {
    const [student, setStudent] = useState({ email: 'jay@gmail.com', password:'123',role:'' });
    const navigate=useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const resp = await axios.post('http://localhost:8082/api/student/login',student);
            if(resp.status == 200){
               
                    // navigate("/admin");
                    localStorage.setItem("sid",resp.data.id);
                    localStorage.getItem("loggedIn",true);
                    setLoggedIn(true);
                    console.log(resp.data.role);
                    console.log("loggedin");
                    
                    if(resp.data.role == true){
                        navigate("/admin")
                }
                else{
                    navigate("/dashboard/userdashboard");
                }
            }
        }
            catch(error){
                alert("invalid credentials");
                console.log(error);
                
    
            }
        
        
    }
    return (  
        <div>
            {/* <div className="container"> */}
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <h2 className="text-center mt-5">Login</h2>
                        <form onSubmit={handleSubmit}>
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

                        <button type="submit" className="btn btn-primary btn-block mt-4">Login</button>
                        {/* <div className="form-group mt-3 d-flex justify-content-center align-items-center">
                            <label className="d-block"> Select Role: </label>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="role" value='admin' checked={student.role === 'admin'} onChange={(e)=>setStudent({...student,role:e.target.value})}/>
                            <label className="form-check-label" htmlFor="admin">
                                Admin
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="role" value='user' checked={student.role === 'user'} onChange={(e)=>setStudent({...student,role:e.target.value})}/>
                            <label>
                                User
                            </label>
                        </div>
                        </div> */}

                        </form>
                        <p className="text-center mt-3">
                            <Link to="/signup">Signup Here !</Link>

                        </p>

                    </div>

                </div>

            {/* </div> */}
        </div>

    );
}

export default Login;