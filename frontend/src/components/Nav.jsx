import { Link } from "react-router-dom";
import './nav.css'

const Nav = () => {
    return (
        <div className='nav'>
      <div className='nav-front'>
        <div className="content">
            <h2>Light<span>Code</span></h2>
            {/* <h2>Light<span>Code</span></h2> */}
            </div>
        </div>
          <div className='nav-end'>
            <ul>
              <li><Link to='/home' className='LinkLine'>Home</Link></li>
              <li><Link to='/files' className='LinkLine'>File Upload</Link></li>
              <li><Link to='/url' className='LinkLine'>Url</Link></li>
              <li><Link to='/url/:shortUrl' className='LinkLine'>Url Short</Link></li>
              <li><Link to='/host' className='LinkLine'>Host</Link></li>
              <li><Link to='/register' className='LinkLine'>Register</Link></li>
            </ul>
          </div>
        </div>
    )
}
export default Nav;