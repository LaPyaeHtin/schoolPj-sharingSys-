import './css/home.css';
import Nav from '../../components/Nav';

const Home = () => {

  
  
return (
     <div className="home">
         
    <Nav/> 
           <div className="mainHome">
            <div className="m-left">
              <div className='m-left-up'>
                <div className="profile">
                  <img src="" alt="" />
                
                </div>
              <p>User</p>
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