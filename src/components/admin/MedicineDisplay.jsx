import React,{useEffect, useState} from "react";
import axios from'axios';
import {Link,useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrashCan,faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import Header from './Header';
import Sidebar from './Sidebar';
function MedicineDisplay()
{
    const [values,setValue]=useState([])
    // const username=localStorage.getItem('username')
    useEffect(()=>{
        axios.get('http://localhost:5000/medicineDisplay')
        .then(res =>{
            setValue(res.data)
        })
        .catch(err=>
            console.log("Error:"+err))
    },[])
    const navigate=useNavigate();
    function handleDelete(id){
        axios.delete("http://localhost:5000/medicineDelete/"+id)
    .then (res =>{
        console.log("Result1: " +res.data)
        navigate('/MedicineDisplay')
        axios.get('http://localhost:5000/medicineDisplay')
        .then(res =>{
            setValue(res.data)
        })
        .catch(err=>
            console.log("Error:"+err))
        alert("Medicine Delete Successfully")
    })
    .catch(err =>
        console.log("Error: "+err))
    }
    return(
        <div>
            <Header />
      <div className="d-flex">
        <Sidebar />
        <main className="p-4" style={{ flexGrow: 1 }}>
        <div className="card">
            <div className="card-header">
              <h4>MEDICINE DISPLAY</h4>
              </div>
            <div className="table-response">
                <table className='table table-hover table-striped table-secondary' >
                    <thead>
                        <tr>
                        <th>id</th>
                            <th>Pet Type</th>
                            <th>Breed Name</th>
                            <th>Medicine Name</th>
                            <th>Description</th>
                            <th>Price</th>           
                            <th>Image</th>
                            <th></th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {
                            values.map((data,i) => (
                                <tr id={i}>
                                     <td>{data.id}</td>
                                    <td>{data.ptype}</td>
                                    <td>{data.bname}</td>
                                    <td>{data.mname}</td>
                                    <td>{data.desc1}</td>
                                   
                                    <td>{data.amt}</td>
                                   
                                    <td>
                                        <img width={150} src={`http://localhost:5000/uploads/${data.img}`} alt="" />
                                    </td>
                                   
                                    <td>
                                        
                                    <button onClick={() => handleDelete(data.id)} className="btn faTrashCan">
                                        <FontAwesomeIcon icon={faTrashCan} beatFade></FontAwesomeIcon>
                                        </button>
                                    </td>
                                    {/* <td>
                                        <Link to={`/Update/${data.id}`}>
                                        <FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon>
                                        
                                        </Link>
                                    </td> */}
                                    
                                    </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            </div>
            </main>
      </div>
    </div>
       
    )
}
export default MedicineDisplay