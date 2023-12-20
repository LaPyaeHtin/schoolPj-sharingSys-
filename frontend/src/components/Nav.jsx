//import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import {useState} from 'react';
import './nav.css';
function Nav(){
  const [visible,setVisible]=useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  const toggleMenu = () => {
    setVisible(!visible);
  };
return(
  <nav>
  <Link to="/" className="title">Website</Link>
  <div className="menu">
  <i className={visible ? 'bi bi-x bar' : 'bi bi-list bar'} onClick={toggleMenu}></i>
  </div>
  
    <ul className={visible ? 'up' : 'drop'}>
    <li><Link to="/home" onClick={toggleMenu}>home</Link></li>
      <li><Link to="/dashboard" onClick={toggleMenu}>dashboard</Link></li>
      <li><Link to="/examples" onClick={toggleMenu}>examples</Link></li>
      <li><Link to="/about us" onClick={toggleMenu}>about us</Link></li>
      <li><Link to="/store" onClick={toggleMenu}>store</Link></li>
    </ul>
   <div className="dropdown" onClick={toggleDropdown}>
        <i className="bi bi-person lgsu"></i>
        {dropdownVisible && (
          <div className="dropdown-content">
            <Link to="/Login" className="sl">Login</Link>
            <div className="under"/>
            <Link to="/Signup" className="sl">Signup</Link>

          </div>
        )}
      </div> 

  </nav>
);
}
export default Nav;