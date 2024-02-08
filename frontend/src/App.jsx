import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Nav from './nav';
import ShortenUrlApp from './pages/url/Url';
import Dash from './dashboard/dashboard';
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
import { FileUploadPage, FileDownloadPage } from './pages/file/index';
import { Url, RedirectPage } from './pages/url/index';
import { Host } from './pages/host/index';
<<<<<<< HEAD
import DashboardLayout from './dashboard/DashboardLayout';

function App() {
  return (
    <div className='App'>
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
          {/* <Route path='/files' element={<FileUploadPage />} />
           <Route path='/url' element={<Url />} />
          </Route>  */}
          {/* <Route path='/dashboard/*' element={<Dash />}>
            <Route path='url' element={<ShortenUrlApp />} />
          </Route> */}
          <Route path='/url' element={<Url />} />
          <Route path='/url/:shortUrl' element={<RedirectPage />} />
          <Route path='/host' element={<Host />} />
          <Route path='/files/:shortId' element={<FileDownloadPage />} />
          {/* <Route path='/dashboard' element={<Dash />} /> */}

          <Route path='/dashboard/*' element={<Dash />}>
            {/* <Route index element={<Home />} /> */}
            <Route path='url' element={<ShortenUrlApp />} />
            <Route path='files' element={<FileUploadPage />} />
            {/* <Route path='*' element={<Home />} /> */}
          </Route>
        </Routes>
      </Router>
=======
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
>>>>>>> 252d54ef396372efa7cb5dd5fbe941e917df5e5d
    </div>
  );
}

export default App;
