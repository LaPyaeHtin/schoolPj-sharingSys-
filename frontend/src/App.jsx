import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Register,
  Home,
  EmailVerification,
  Login,
  Logout,
  ForgotPassword,
  ResetPassword,
  ChangePassword,
  
} from './pages/auth/index';
import { FileUploadPage } from './pages/file/index';
import { Url, RedirectPage } from './pages/url/index';
import { Host } from './pages/host/index';
import Test from './components/Test';
// import Nav from './nav'


function App() {
  return (
    <div>
      {/* <Nav/> */}
    <Router>
      <Routes>
      <Route path='/home' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/verify-email/:token' element={<EmailVerification />} />
        <Route path='/change-password' element={<ChangePassword />} />
        <Route path='/logout' element={<Logout />} />
        
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/reset-password/:token' element={<ResetPassword />} />
     
        <Route path='/files' element={<FileUploadPage />} />
        <Route path='/url' element={<Url />} />
        <Route path='/url/:shortUrl' element={<RedirectPage />} />
        <Route path='/host' element={<Host />} />
        <Route path='/test' element={<Test/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
