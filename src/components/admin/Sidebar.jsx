// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrashCan,faPenToSquare,faDog,faRightFromBracket,faUser} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className="sidemenu" style={{ minHeight: '100vh',maxHeight:'auto', padding: '20px', width: '290px' }}>
      <ul className="nav flex-column">
       
        <li className="nav-item">
          <Link className="nav-link" to="/FoodAdd">
          <span className='menuicon'><FontAwesomeIcon icon={faDog} /></span>Pet Food
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/MedicineAdd">
          <span className='menuicon'><FontAwesomeIcon icon={faDog} /></span>Medicine</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/NecessitiesAdd">
          <span className='menuicon'><FontAwesomeIcon icon={faDog} /></span>Necessities</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/FoodDisplay">
          <span className='menuicon'><FontAwesomeIcon icon={faDog} /></span>View Pet Food</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/MedicineDisplay">
          <span className='menuicon'><FontAwesomeIcon icon={faDog} /></span>View Medicine</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/NecessitiesDisplay">
          <span className='menuicon'><FontAwesomeIcon icon={faDog} /></span>View Necessities</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/AdminOrderList/foodOrder">
          <span className='menuicon'><FontAwesomeIcon icon={faDog} /></span>Food Order Status</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/AdminOrderList/medicineOrder">
          <span className='menuicon'><FontAwesomeIcon icon={faDog} /></span>Medicine Order Status</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/AdminOrderList/necessitiesOrder">
          <span className='menuicon'><FontAwesomeIcon icon={faDog} /></span>Accessories Order Status</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/UserList">
          <span className='menuicon'><FontAwesomeIcon icon={faUser} /></span>User List</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/AdminLogin">
          <span className='menuicon'><FontAwesomeIcon icon={faRightFromBracket} /></span>Logout</Link>
        </li>
        
      </ul>
    </div>
  );
};

export default Sidebar;
