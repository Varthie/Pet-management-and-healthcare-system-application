import React,{useEffect, useState} from "react";
import axios from'axios';
import {Link,useNavigate,useParams} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrashCan,faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import Header from './Header';
import Sidebar from './Sidebar';
function AdminOrderList()
{
    const [values,setValue]=useState([])
    const [st,setSt]=useState([])
    
    const {str} = useParams();
    useEffect(()=>{
        const url='http://localhost:5000/'+str
        console.log("Url:"+url)
        axios.get(url)
        .then(res =>{
            setValue(res.data)
        })
        .catch(err=>
            console.log("Error:"+err))
    })
    const navigate=useNavigate();
    function handleUpdate(tbl,id,st){
        axios.put("http://localhost:5000/statusUpdate/"+id,{tbl,st})
    .then (res =>{
        console.log("Result1: " +res.data)
        navigate('/AdminOrderList/'+str)
        const url='http://localhost:5000/'+str
        axios.get(url)
        .then(res =>{
            setValue(res.data)
        })
        .catch(err=>
            console.log("Error:"+err))
        alert("Status Updated Successfully")
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
        {str=='foodOrder'?
    <div className="col-lg-12">
        <h5 className="card card-header text-center">PET FOOD ORDER STATUS</h5>
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
                        
                        <td>
                        {data.st=='Ordered'? 
                        <span class="badge bg-danger text-white">{data.st}</span>
                        :(
                            data.st=='Packed'?
                            <span class="badge bg-warning text-white">{data.st}</span>
                            : <span class="badge bg-success text-white">{data.st}</span>
                        )
                        
                        }
                    
                            </td>
                            <td>
                        {data.st!='Delivered'? 
                            <select name=""  onChange={e=>handleUpdate('buyfood',data.id,e.target.value)} id="">
                        <option>{data.st}</option>
                        <option>Ordered</option>
                        <option>Processing</option>
                        <option>Shipped</option>
                        <option>Delivered</option>
                            
                        </select>
                        :
                        <span></span>
                        }
                            </td>    
                        </tr>
                ))
            }
        </tbody>
    </table>
</div>    
</div>        
    : <span></span>}
    {str=='medicineOrder'?
    <div className="col-lg-12">
        <h5 className="card card-header text-center">PET MEDICINE ORDER STATUS</h5>
    <div className="table-response">
    <table className='table table-hover table-striped table-secondary' >
        <thead>
            <tr>
            <th>id</th>
            <th>Image</th>
            <th>Pet Type</th>
            <th>Breed Name</th>
            <th>Medicine Name</th>
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
                        <td>{data.mname}</td>
                        <td>{data.amt}</td>
                        <td>{data.dt}</td>
                        <td>{data.tm}</td>
                        <td>
                        {data.st=='Ordered'? 
                        <span class="badge bg-danger text-white">{data.st}</span>
                        :(
                            data.st=='Packed'?
                            <span class="badge bg-warning text-white">{data.st}</span>
                            : <span class="badge bg-success text-white">{data.st}</span>
                        )
                        
                        }
                    
                            </td>
                            <td>
                        {data.st!='Delivered'? 
                            <select name=""  onChange={e=>handleUpdate('buymedicine',data.id,e.target.value)} id="">
                        <option>{data.st}</option>
                        <option>Ordered</option>
                        <option>Processing</option>
                        <option>Shipped</option>
                        <option>Delivered</option>
                            
                        </select>
                        :
                        <span></span>
                        }
                            </td>     
                        </tr>
                ))
            }
        </tbody>
    </table>
</div>    
</div>        
    : <span></span>}
    {str=='necessitiesOrder'?
    <div className="col-lg-12">
        <h5 className="card card-header text-center">PET ACCESSORIES ORDER STATUS</h5>
    <div className="table-response">
    <table className='table table-hover table-striped table-secondary' >
        <thead>
            <tr>
            <th>id</th>
            <th>Image</th>
            <th>Accessories Name</th>
            <th>Price</th>
            
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
                        <td>{data.aname}</td>
                        <td>{data.amt}</td>
                        
                        <td>{data.dt}</td>
                        <td>{data.tm}</td>
                        <td>
                        {data.st=='Ordered'? 
                        <span class="badge bg-danger text-white">{data.st}</span>
                        :(
                            data.st=='Packed'?
                            <span class="badge bg-warning text-white">{data.st}</span>
                            : <span class="badge bg-success text-white">{data.st}</span>
                        )
                        
                        }
                    
                            </td>
                            <td>
                        {data.st!='Delivered'? 
                            <select name=""  onChange={e=>handleUpdate('buynecessities',data.id,e.target.value)} id="">
                        <option>{data.st}</option>
                        <option>Ordered</option>
                        <option>Processing</option>
                        <option>Shipped</option>
                        <option>Delivered</option>
                            
                        </select>
                        :
                        <span></span>
                        }
                            </td>      
                        </tr>
                ))
            }
        </tbody>
    </table>
</div>    
</div>        
    : <span></span>}
            
            
            </div>
            </main>
      </div>
    </div>
       
    )
}
export default AdminOrderList