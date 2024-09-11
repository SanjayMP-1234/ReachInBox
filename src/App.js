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
import { ThemeProvider } from './provider/theme-provider';


function App() {
  return (
  <>
   
  
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

    <Router>
      <div className="App flex h-screen">
        {/* Sidebar */}
        
       
        <div className="flex-1 flex flex-col">
          {/* Header */}
          

          {/* Routing */}
          <div className="flex-1 flex justify-center items-center">
            <Routes>
              <Route path="/" element={ <><div className="App flex w-full h-screen"><div className="flex-1 flex flex-col"><Navbar /><Login/></div></div>  </>}/>
              
              <Route path="/Home" element={<><div className="App flex w-full h-screen"><Sidebar /><div className="flex-1 flex flex-col"><Header />  <MainContent /></div></div>  </>} />
              <Route path="/friends" element={<><div className="App flex w-full h-screen"><Sidebar /><div className="flex-1 flex flex-col"><Header />  <Mail /></div></div>  </>} />
              <Route path="/envelope" element={<><div className="App flex w-full h-screen"><Sidebar /><div className="flex-1 flex flex-col"><Header />  <Mail /></div></div>  </>} />
              <Route path="/plane" element={<><div className="App flex w-full h-screen"><Sidebar /><div className="flex-1 flex flex-col"><Header />  <Mail /></div></div>  </>} />
              <Route path="/Mail" element={<><div className="App flex w-full h-screen"><Sidebar /><div className="flex-1 flex flex-col"><Header />  <Mail /></div></div>  </>} />
              <Route path="/chart" element={<><div className="App flex w-full h-screen"><Sidebar /><div className="flex-1 flex flex-col"><Header />  <Mail /></div></div>  </>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  </ThemeProvider>
    </>
  );
}

export default App;
