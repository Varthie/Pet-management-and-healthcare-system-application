import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Sidebar from './Sidebar';

const FoodAdd = () => {
    const [bname,setbname]=useState('')
    const [ptype,setptype]=useState('')
    const [fname,setfname]=useState('')
    const [desc1,setdesc1]=useState('')
    const [amt,setamt]=useState('')
    
    const [img,setimg]=useState('')

    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('http://localhost:5000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data.message);
            setimg(response.data.message)
            const img1=response.data.message
            const st="Available"
            // alert(img)
            axios.post('http://localhost:5000/foodAdd',{ptype,bname,fname,desc1,amt,img1})
            .then(res=>{
            console.log(res)
            // navigate('/Login')

            })
            .catch(err=>console.log(err))
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    return (
        <div>
      <Header />
      <div className="d-flex">
        <Sidebar />
        <main className="p-4" style={{ flexGrow: 1 }}>
        <div className="card">
            <div className="card-header">
              <h4>PET FOOD ADD</h4>
              </div>
              
              <div className="container mb-3 mt-2">
                <div className="row">
                    
                    <div className="col-lg-6">
                    
                    <form  onSubmit={handleSubmit}>
                        <div className="row">
                        
                        <div className="col-lg-4 mt-2">
                                Pet Type
                            </div>
                            <div className="col-lg-8 mt-2">
                                <select className='form-select' name=""  onChange={e=>setptype(e.target.value)}>
                                <option>-Select-</option>
                                <option>Dogs</option>
                                <option>Cats</option>
                                <option>Fish</option>
                                <option>Birds</option>
                                <option>Reptiles</option>
                                <option>Rodents</option>
                                <option>Rabbit</option>
                                <option>
                                Ferret</option>
                                <option>Guinea pig</option>
                                
                                </select>

                            </div>
                            <div className="col-lg-4 mt-2">
                                Breed Name
                            </div>
                            <div className="col-lg-8 mt-2">
<input type="text" className='form-control'  onChange={e=>setbname(e.target.value)} required/>
                            </div>
                            <div className="col-lg-4 mt-2">
                                Food Name
                            </div>
                            <div className="col-lg-8 mt-2">
<input type="text" className='form-control'  onChange={e=>setfname(e.target.value)} required/>
                            </div>
                            <div className="col-lg-4 mt-2">
                                Description
                            </div>
                            <div className="col-lg-8 mt-2">
                            <textarea  className='form-control'  onChange={e=>setdesc1(e.target.value)} required id=""></textarea>
                            </div>
                            <div className="col-lg-4 mt-2">
                                Price
                            </div>
                            <div className="col-lg-8 mt-2">
<input type="text" className='form-control'  onChange={e=>setamt(e.target.value)} required/>
                            </div>
                           
                            <div className="col-lg-4 mt-2">
                                Image
                            </div>
                            <div className="col-lg-8 mt-2">
<input type="file" className='form-control' onChange={handleFileChange} required/>
                            </div>
                            <div className="col-lg-4 mt-2">
                                
                            </div>
                            <div className="col-lg-8 mt-2">
                            <button className='btn btn-success' type="submit">Save</button>
                            </div>
                            
                        </div>
                        </form>
                    </div>
                    <div className="col-lg-6">
                    <img src="4.jpg" className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
          </div>
        </main>
      </div>
    </div>


    );
};

export default FoodAdd;