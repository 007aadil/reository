  import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './SignUp';
import LoginPage from './LoginPage';
import PasswordRecovery from './PasswordRecovery';
import DonorAcceptorPage from './DonorAcceptorPage';
import DonorDetailsPage from './DonorDetailsPage'; // Import the new DonorDetailsPage
import AcceptorDetailsPage from './AcceptorDetailsPage'; // Import the new AcceptorDetailsPage
import Home from './Home';
import { Dashboard } from './dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/password-recovery" element={<PasswordRecovery />} />
        <Route path="/donor-acceptor" element={<DonorAcceptorPage />} />
        <Route path="/donor-details" element={<DonorDetailsPage />} /> {/* Existing route */}
        <Route path="/acceptor-details" element={<AcceptorDetailsPage />} /> {/* Add the new route */}
        <Route path='/donor-dashboard' element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
