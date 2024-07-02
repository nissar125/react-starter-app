import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderFooter from './components/Headerfooter';
import About from './components/About';
import MyGridComponent from './components/MyGridComponent'; 
import './styles/HeaderFooter.scss'; // Assuming you have global styles here
import 'antd/dist/reset.css'; // Ant Design styles

const App: React.FC = () => {
  return (
    <Router>
      <HeaderFooter /> {/* This now includes both header and footer */}
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/grid" element={<MyGridComponent />} />
        <Route path="/" element={<div>Home Page</div>} />
      </Routes>
    </Router>
  );
};

export default App;