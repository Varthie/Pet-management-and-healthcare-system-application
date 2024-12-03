import React,{useEffect, useState} from "react";
import axios from'axios';
import {Link,useParams,useNavigate} from "react-router-dom";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrashCan,faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import UserHeader from './UserHeader';

function FoodList()
{
    const [values,setValue]=useState([])
    const [flag,setFlag]=useState('')
    // const username=localStorage.getItem('username')
    const {str} = useParams();
    useEffect(()=>{
        setFlag(str)
        const url='http://localhost:5000/'+str
        console.log(url)
        axios.get(url)
        .then(res =>{
            setValue(res.data)
        })
        .catch(err=>
            console.log("Error:"+err))
    })
    const navigate=useNavigate();
  
    return(
        <div>
            <UserHeader />
            {str=='foodDisplay'?
        <div className="card">
            <div className="card-header">
              <h4>FOOD LIST</h4>
              </div>
              <div className="container mt-2 mb-2">
                <div className="row">
                    {
                values.map((data,i) => (
                    <div className="col-lg-3">
                        <div className="card">
                            <img src={`http://localhost:5000/uploads/${data.img}`} style={{height:200}} className="card-img-top"/>
                            <div className="card-body text-center">
                            <h5 className="card-text">{data.ptype}</h5>
                            <h6 className="card-text">{data.fname}</h6>
                                <p>&#8377;{data.amt}/-</p>
                                <Link  to={`/FoodView/FoodView/${data.id}`}  className="btn btn-warning">View Detail</Link>
                            </div>
                        </div>
                    </div>
                ))
            }
                </div>
              </div>
            
                           
            </div>
           : <span></span>}
            {str=='medicineDisplay'?
        <div className="card">
            <div className="card-header">
              <h4>MEDICINE LIST</h4>
              </div>
              <div className="container mt-2 mb-2">
                <div className="row">
                    {
                values.map((data,i) => (
                    <div className="col-lg-3">
                        <div className="card">
                            <img src={`http://localhost:5000/uploads/${data.img}`} style={{height:200}} className="card-img-top"/>
                            <div className="card-body text-center">
                            <h5 className="card-text">{data.ptype}</h5>
                            <h6 className="card-text">{data.mname}</h6>
                                <p>&#8377;{data.amt}/-</p>
                                <Link  to={`/FoodView/MedicineView/${data.id}`}  className="btn btn-warning">View Detail</Link>
                            </div>
                        </div>
                    </div>
                ))
            }
                </div>
              </div>
            
                           
            </div>
           : <span></span>}
           {str=='necessitiesDisplay'?
        <div className="card">
            <div className="card-header">
              <h4>PET ACCESSORIES LIST</h4>
              </div>
              <div className="container mt-2 mb-2">
                <div className="row">
                    {
                values.map((data,i) => (
                    <div className="col-lg-3">
                        <div className="card">
                            <img src={`http://localhost:5000/uploads/${data.img}`} style={{height:200}} className="card-img-top"/>
                            <div className="card-body text-center">
                            <h5 className="card-text">{data.ptype}</h5>
                            <h6 className="card-text">{data.aname}</h6>
                                <p>&#8377;{data.amt}/-</p>
                                <Link  to={`/FoodView/NecessitiesView/${data.id}`}  className="btn btn-warning">View Detail</Link>
                            </div>
                        </div>
                    </div>
                ))
            }
                </div>
              </div>
            
                           
            </div>
           : <span></span>}
    </div>
       
    )
}
export default FoodList