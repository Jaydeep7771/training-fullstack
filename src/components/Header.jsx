import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";


function Header({ loggedIn, setLoggedIn }) {
  const Navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("sid");
    setLoggedIn(false);
    Navigate("/login") 
    
  }
  const login =()=>{
    Navigate("/login") 

  }


  return (
    <>
    
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Mind-Sprint</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" ><Link to="">Home</Link></a>
              </li>

              <li className="nav-item">
                <a className="nav-link"><Link to="aboutus">About Us</Link></a>
              </li>
              {/* <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li> */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Explore Courses
                </a>


                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" ><Link to="engineering">Engineering</Link></a></li>
                  <li><a className="dropdown-item" ><Link to="automation">Automation</Link></a></li>
                  <li><a className="dropdown-item" ><Link to="management">Management</Link></a></li>
                </ul>
              </li>

              {
                loggedIn ? <>
                  <li className="nav-item">
                    <button className="nav-link" onClick={logout}>Logout</button>
                  </li> </>
                  :
                  <>
                    <li className="nav-item">
                      <button className="nav-link" onClick={login} >Login</button>
                    </li>
                  </>
              }
            </ul>
            </div>
      {/* <button className="btn" type="" > <Link to="/login">Login</Link></button> */}
  </div>
          </nav>
        </>
        );
}

        export default Header;