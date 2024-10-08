// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './SignUp'; // Adjust path as needed
import LoginPage from './LoginPage';   // Adjust path as needed
import PasswordRecovery from './PasswordRecovery';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/PasswordRecovery" element={<PasswordRecovery />} />
      </Routes>
    </Router>
  );
}
export default App;
