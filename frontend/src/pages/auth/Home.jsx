import { useEffect,useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './css/home.css';

const Home = () => {

  
  
return (
     <div className="home">
         <div className='navHome'>
          <div className='nav-frontHome'>
            {/* <h2>Light<span>Code</span></h2> */}
        </div>
          <div className='nav-endHome'>
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
         <div className="main">
            <div className="m-left">
              <div className='m-left-up'>
                <div className='profile'>
                  <img src="" alt="" />
                
                </div>
                <div>User</div>
              </div>
              <div className='m-left-down'>

               
                  <button>hello</button>
                  <button>hi</button>
                  <button>hey</button>

                
              </div>
            </div>
             <div className="m-right">
             <h1>Welcome</h1>
             <button>Get Start</button>
             </div>
         </div>
         <div className="bottom">
             <div className="item-1"></div>
             <div className="item-2"></div>
             <div className="item-3"></div>
         </div>
     </div>
    
)
}
export default Home;