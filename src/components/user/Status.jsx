import React from 'react'
import {useState} from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import axios from 'axios';
import {Link} from "react-router-dom";
import Header from '../header';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
function UserLogin() {
  const [values,setValue]=useState([])
  const[uname,setUname]=useState('')
  const[psword,setPsword]=useState('')
  const navigate=useNavigate();
  function handleSubmit(event){
    event.preventDefault()
    axios.post('http://localhost:5000/UserLogin',{uname,psword})
    .then(res=>{
      // console.log(res.data[0].id)
      console.log(res)
      
      if(res.data==='Failed')
      {

      }
      
    else
    {
      setValue(res.data)
      console.log(res.data[0].id)
      localStorage.setItem('uid', res.data[0].id);
      localStorage.setItem('cno', res.data[0].cno);

      navigate('/FoodList/foodDisplay')
    }
    
      
     

    })
    .catch(err=>console.log(err))
  }
  return (
    <div>
      <Header/>
      <div className="status">
        <div className="step completed">
            <div className="icon"><FontAwesomeIcon icon={faShoppingCart} /></div>
            <p>Order Placed</p>
        </div>
        <div className="step completed">
            <div className="icon"><FontAwesomeIcon icon={faBox} /></div>
            <p>Processing</p>
        </div>
        <div className="step">
            <div className="icon"><FontAwesomeIcon icon={faTruck} /></div>
            <p>Shipped</p>
        </div>
        <div className="step">
            <div className="icon"><FontAwesomeIcon icon={faCheckCircle} /></div>
            <p>Delivered</p>
        </div>
    </div>
    </div>

  )
}

export default UserLogin 