import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardHome from './pages/DashboardHome';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Header from './componets/Header';
import Sidebar from './componets/Sidebar';


function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Router>

      <div className="dashboard-layout" style={{ display: 'flex' }}>
        <Header toggleDrawer={toggleDrawer} />
        <Sidebar isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
        <main style={{ flexGrow: 1, padding: '20px', marginTop: '64px' }}>
          <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
      
    </Router>
  );
}

export default App;