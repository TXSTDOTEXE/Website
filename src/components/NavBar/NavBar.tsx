import './NavBar.css';
import { Link } from "react-router-dom";

function NavBar()
{
   return (
     <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
           <Link to="./" className="navbar-brand">.EXE</Link>
           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">

          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="./src/assets/testing.pdf">Other</Link>
          </li>
          
          <li className="nav-item">
            <Link className="nav-link" to="https://github.com/TXSTDOTEXE/Website" target="_blank">GitHub</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="./members">Members</Link>
          </li>
          

          <li className="nav-item">
            <Link className="nav-link" to= "" target="_blank">Links</Link>
          </li>

         </ul>
      </div>
        </div>
      </nav>
     </> 
   );  
}

export default NavBar;