// src/components/Layout.js
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="d-flex">
        <Sidebar />
        <main className="p-4" style={{ flexGrow: 1 }}>
          <div className="card">
            <div className="card-header">
              <h3>PET FOOD Add</h3>
              </div>
              
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
