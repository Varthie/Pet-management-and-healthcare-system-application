import React,{useEffect, useState} from "react";
import axios from'axios';
import {Link,useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrashCan,faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import Header from './Header';
import Sidebar from './Sidebar';
function FoodDisplay()
{
    const [values,setValue]=useState([])
    // const username=localStorage.getItem('username')
    useEffect(()=>{
        axios.get('http://localhost:5000/foodDisplay')
        .then(res =>{
            setValue(res.data)
        })
        .catch(err=>
            console.log("Error:"+err))
    },[])
    const navigate=useNavigate();
    function handleDelete(id){
        axios.delete("http://localhost:5000/foodDelete/"+id)
    .then (res =>{
        console.log("Result1: " +res.data)
        navigate('/FoodDisplay')
        axios.get('http://localhost:5000/foodDisplay')
        .then(res =>{
            setValue(res.data)
        })
        .catch(err=>
            console.log("Error:"+err))
        alert("Food Delete Successfully")
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
              <h4>FOOD DISPLAY</h4>
              </div>
            <div className="table-response">
                <table className='table table-hover table-striped table-secondary' >
                    <thead>
                        <tr>
                        <th>id</th>
                            <th>Pet Type</th>
                            <th>Breed Name</th>
                            <th>Food Name</th>
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
                                    <td>{data.fname}</td>
                                    <td>{data.desc1}</td>
                                   
                                    <td>{data.amt}</td>
                                   
                                    <td>
                                        <img width={150} src={`http://localhost:5000/uploads/${data.img}`} alt="" />
                                    </td>
                                   
                                    <td>
                                        
                                    <button onClick={() => handleDelete(data.id)} className="btn faTrashCan">
                                        <FontAwesomeIcon icon={faTrashCan} beatFade/>
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
export default FoodDisplay