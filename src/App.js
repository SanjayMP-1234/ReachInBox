import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'; 
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import Mail from './Components/Mail'; // Ensure these components are correctly defined
import EmailReply from './Components/EmailReply';
import Login from './Components/Login';
import Navbar from "./Components/Navbar"


function App() {
  return (
  // <>
  //   <Navbar />
  //   <Login />
  //   </>
  <>
    <Router>
      <div className="App flex h-screen">
        {/* Sidebar */}
        <Sidebar />
       
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <Header />

          {/* Routing */}
          <div className="flex-1 flex justify-center items-center">
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/friends" element={<Mail />} />
              <Route path="/envelope" element={<Mail />} />
              <Route path="/plane" element={<EmailReply />} />
              <Route path="/Mail" element={<Mail />} />
              <Route path="/chart" element={<Mail />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
    </>
  );
}

export default App;
