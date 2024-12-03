import React,{useEffect, useState} from "react";
import axios from'axios';
import {Link,useParams} from "react-router-dom";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faTrashCan,faPenToSquare} from '@fortawesome/free-solid-svg-icons';

function UserHeader()
{
   
    return(
        <div className="menu">
           
       <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src='/logo.png' height="70px" alt="" /> 
        <span style={{paddingInlineStart:30}}>PAWPAL</span>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Product
          </a>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item"  to={`/FoodList/foodDisplay`}>Food</Link></li>
            <li><Link class="dropdown-item" to={`/FoodList/medicineDisplay`}>Medicine</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link class="dropdown-item" to={`/FoodList/necessitiesDisplay/`}>Necessities</Link></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Order Status
          </a>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item"  to={`/OrderList/foodStatus`}>Food Order</Link></li>
            <li><Link class="dropdown-item" to={`/OrderList/medicineStatus`}>Medicine Order</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link class="dropdown-item" to={`/OrderList/necessitiesStatus/`}>Necessities Order</Link></li>
          </ul>
        </li>
         
          <li class="nav-item">
          <Link class="nav-link active" to={`/UserLogin`}>Logout</Link>
           
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
        </div>
    )
}
export default UserHeader