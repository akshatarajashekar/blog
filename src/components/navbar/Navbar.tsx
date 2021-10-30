import {  Link } from "react-router-dom";

const Navbar= () =>{
  return (
    <div>
      <nav className='navbar navbar-dark navbar-expand-lg'>
        <div className='container'>
          <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div className='navbar-nav ml-auto'>
              <div className='nav-item nav-link'>
                <Link to="/home">Home</Link>
              </div>
              <div className='nav-item nav-link'>
                <Link to="/about">About</Link>
              </div>
              <div className='nav-item nav-link'>
                <Link to="/contact">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;