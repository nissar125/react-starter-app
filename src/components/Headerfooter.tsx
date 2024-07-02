import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import '../styles/HeaderFooter.scss'; 

const menuItems = [
  { key: 'home', label: <Link to="/">Home</Link> },
  { key: 'about', label: <Link to="/about">About</Link> },
  { key: 'grid', label: <Link to="/grid">Grid</Link> },
];

const HeaderFooter: React.FC = () => {
  return (
    <>
      {/* Header Section */}
      <div className="app-header">
        Application Name
      </div>
      <Menu  mode="horizontal" items={menuItems} />

      {/* Footer Section */}
      <footer className="footer-container">
      © 2024 AT&T. All Rights Reserved.
      </footer>
    </>
  );
};

export default HeaderFooter;