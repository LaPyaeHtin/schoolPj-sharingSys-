import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import EmailVerification from './pages/EmailVerification';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<h1>sdfadsssf</h1>} />
        <Route path='/verify-email/:token' element={<EmailVerification />} />
      </Routes>
    </Router>
  );
}

export default App;
