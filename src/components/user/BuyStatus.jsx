import React,{useEffect, useState} from "react";
import axios from'axios';
import {Link,useParams,useNavigate} from "react-router-dom";

import UserHeader from './UserHeader';
function BuyStatus()
{
    const navigate=useNavigate();
    const [values,setValue]=useState([])
    const {id} = useParams();
    const uuid=localStorage.getItem('uid')
    
    return(
        <div>
   <UserHeader/>
<div className="container">
    <div className="row">
    {str=='foodStaus'?
    <div className="table-response">
    <table className='table table-hover table-striped table-secondary' >
        <thead>
            <tr>
            <th>id</th>
            <th>Image</th>
            <th>Pet Type</th>
            <th>Breed Name</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>    
            </tr>
        </thead>
        <tbody>
            {
                values.map((data,i) => (
                    <tr id={i}>
                         <td>{data.id}</td> 
                        <td>
                            <img width={150} src={`http://localhost:5000/uploads/${data.img}`} alt="" />
                        </td>
                        <td>{data.ptype}</td>
                        <td>{data.bname}</td>
                        <td>{data.amt}</td>
                        <td>{data.dt}</td>
                        <td>{data.tm}</td>
                        <td>{data.st}</td>    
                        </tr>
                ))
            }
        </tbody>
    </table>
</div>            
    : <span></span>}
</div>
 </div>
 </div>
    )
}
export default BuyStatus