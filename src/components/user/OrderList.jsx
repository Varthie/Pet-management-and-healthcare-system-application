import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBox, faTruck, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import UserHeader from './UserHeader';
function OrderList() {
    const navigate = useNavigate();
    const [values, setValue] = useState([])
    const [st, setSt] = useState()
    const { str } = useParams();
    const uid = localStorage.getItem('uid')
    useEffect(() => {
        axios.get('http://localhost:5000/' + str + "/" + uid)
            .then(res => {
                setValue(res.data)
                console.log("Loading -")
            })
            .catch(err =>
                console.log("Error:" + err))
    })
    const handleStatus = (st) => {
        setSt(st)

    };
    return (
        <div>
            <UserHeader />
            <div className="container">
                <div className="row">
                    {str == 'foodStatus' ?
                        <div className="col-lg-12">
                        <h5 className="card card-header text-center">PET FOOD ORDER STATUS</h5>
                        <div className="container">
                            {
                                values.map((data, i) => (
                                    <div className=" p-2 mt-3" key={i}>
                                        <div className="row">
                                            <div className="col-lg-5">
                                                <img width={150} src={`http://localhost:5000/uploads/${data.img}`} alt="" />
                                            </div>
                                            <div className="col-lg-7">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div style={{ fontWeight: 'bold', fontSize: 20 }}>Pet type</div>
                                                        <div className="mb-3">{data.ptype}</div>
                                                        <div style={{ fontWeight: 'bold', fontSize: 20 }}>Bread Name</div>
                                                        <div className="mb-3">{data.bname}</div>
                                                        
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div style={{ fontWeight: 'bold', fontSize: 20 }}>Food Price</div>
                                                        <div className="mb-3">&#x20b9; {data.amt}/-</div>
                                                        <div style={{ fontWeight: 'bold', fontSize: 20 }}>Booking Date</div>
                                                        <div className="mb-3">{data.dt}</div>
                                                        <div style={{ fontWeight: 'bold', fontSize: 20 }}>Booking Time</div>
                                                        <div className="mb-3">{data.tm}</div>
                                                    </div>
                                                </div>


                                                {data.st == 'Ordered' ?
                                                    <div class="status">
                                                        <div className="step completed">
                                                            <div class="icon"><FontAwesomeIcon icon={faShoppingCart} /></div>
                                                            <p>Order Placed</p>
                                                        </div>
                                                        <div class="step">
                                                            <div class="icon"><FontAwesomeIcon icon={faBox} /></div>
                                                            <p>Processing</p>
                                                        </div>
                                                        <div class="step">
                                                            <div class="icon"><FontAwesomeIcon icon={faTruck} /></div>
                                                            <p>Shipped</p>
                                                        </div>
                                                        <div class="step">
                                                            <div class="icon"><FontAwesomeIcon icon={faCheckCircle} /></div>
                                                            <p>Delivered</p>
                                                        </div>
                                                    </div>
                                                    :
                                                    (
                                                        data.st == 'Processing' ? 
                                                        <div class="status">
                                                        <div className="step completed">
                                                            <div class="icon"><FontAwesomeIcon icon={faShoppingCart} /></div>
                                                            <p>Order Placed</p>
                                                        </div>
                                                        <div class="step completed">
                                                            <div class="icon"><FontAwesomeIcon icon={faBox} /></div>
                                                            <p>Processing</p>
                                                        </div>
                                                        <div class="step">
                                                            <div class="icon"><FontAwesomeIcon icon={faTruck} /></div>
                                                            <p>Shipped</p>
                                                        </div>
                                                        <div class="step">
                                                            <div class="icon"><FontAwesomeIcon icon={faCheckCircle} /></div>
                                                            <p>Delivered</p>
                                                        </div>
                                                    </div>
                                                    :
                                                    (
                                                        data.st == 'Shipped' ?
                                                        <div class="status">
                                                        <div className="step completed">
                                                            <div class="icon"><FontAwesomeIcon icon={faShoppingCart} /></div>
                                                            <p>Order Placed</p>
                                                        </div>
                                                        <div class="step completed">
                                                            <div class="icon"><FontAwesomeIcon icon={faBox} /></div>
                                                            <p>Processing</p>
                                                        </div>
                                                        <div class="step completed">
                                                            <div class="icon"><FontAwesomeIcon icon={faTruck} /></div>
                                                            <p>Shipped</p>
                                                        </div>
                                                        <div class="step">
                                                            <div class="icon"><FontAwesomeIcon icon={faCheckCircle} /></div>
                                                            <p>Delivered</p>
                                                        </div>
                                                    </div>
                                                    :
                                                    <div class="status">
                                                        <div className="step completed">
                                                            <div class="icon"><FontAwesomeIcon icon={faShoppingCart} /></div>
                                                            <p>Order Placed</p>
                                                        </div>
                                                        <div class="step completed">
                                                            <div class="icon"><FontAwesomeIcon icon={faBox} /></div>
                                                            <p>Processing</p>
                                                        </div>
                                                        <div class="step completed">
                                                            <div class="icon"><FontAwesomeIcon icon={faTruck} /></div>
                                                            <p>Shipped</p>
                                                        </div>
                                                        <div class="step completed">
                                                            <div class="icon"><FontAwesomeIcon icon={faCheckCircle} /></div>
                                                            <p>Delivered</p>
                                                        </div>
                                                    </div>
                                                    )
                                                    )
                                                
                                                }





                                            </div>
                                        </div>
                                        <hr />
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                        : <span></span>}
                    {str == 'medicineStatus' ?
                        <div className="col-lg-12">
                            <h5 className="card card-header text-center">PET MEDICINE ORDER STATUS</h5>
                            <div className="container">
                                {
                                    values.map((data, i) => (
                                        <div className=" p-2 mt-3" key={i}>
                                            <div className="row">
                                                <div className="col-lg-5">
                                                    <img width={150} src={`http://localhost:5000/uploads/${data.img}`} alt="" />
                                                </div>
                                                <div className="col-lg-7">
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <div style={{ fontWeight: 'bold', fontSize: 20 }}>Pet type</div>
                                                            <div className="mb-3">{data.ptype}</div>
                                                            <div style={{ fontWeight: 'bold', fontSize: 20 }}>Bread Name</div>
                                                            <div className="mb-3">{data.bname}</div>
                                                            <div style={{ fontWeight: 'bold', fontSize: 20 }}>Medicine Name</div>
                                                            <div className="mb-3">{data.mname}</div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div style={{ fontWeight: 'bold', fontSize: 20 }}>Medicine Price</div>
                                                            <div className="mb-3">&#x20b9; {data.amt}/-</div>
                                                            <div style={{ fontWeight: 'bold', fontSize: 20 }}>Booking Date</div>
                                                            <div className="mb-3">{data.dt}</div>
                                                            <div style={{ fontWeight: 'bold', fontSize: 20 }}>Booking Time</div>
                                                            <div className="mb-3">{data.tm}</div>
                                                        </div>
                                                    </div>


                                                    {data.st == 'Ordered' ?
                                                        <div class="status">
                                                            <div className="step completed">
                                                                <div class="icon"><FontAwesomeIcon icon={faShoppingCart} /></div>
                                                                <p>Order Placed</p>
                                                            </div>
                                                            <div class="step">
                                                                <div class="icon"><FontAwesomeIcon icon={faBox} /></div>
                                                                <p>Processing</p>
                                                            </div>
                                                            <div class="step">
                                                                <div class="icon"><FontAwesomeIcon icon={faTruck} /></div>
                                                                <p>Shipped</p>
                                                            </div>
                                                            <div class="step">
                                                                <div class="icon"><FontAwesomeIcon icon={faCheckCircle} /></div>
                                                                <p>Delivered</p>
                                                            </div>
                                                        </div>
                                                        :
                                                        (
                                                            data.st == 'Processing' ? 
                                                            <div class="status">
                                                            <div className="step completed">
                                                                <div class="icon"><FontAwesomeIcon icon={faShoppingCart} /></div>
                                                                <p>Order Placed</p>
                                                            </div>
                                                            <div class="step completed">
                                                                <div class="icon"><FontAwesomeIcon icon={faBox} /></div>
                                                                <p>Processing</p>
                                                            </div>
                                                            <div class="step">
                                                                <div class="icon"><FontAwesomeIcon icon={faTruck} /></div>
                                                                <p>Shipped</p>
                                                            </div>
                                                            <div class="step">
                                                                <div class="icon"><FontAwesomeIcon icon={faCheckCircle} /></div>
                                                                <p>Delivered</p>
                                                            </div>
                                                        </div>
                                                        :
                                                        (
                                                            data.st == 'Shipped' ?
                                                            <div class="status">
                                                            <div className="step completed">
                                                                <div class="icon"><FontAwesomeIcon icon={faShoppingCart} /></div>
                                                                <p>Order Placed</p>
                                                            </div>
                                                            <div class="step completed">
                                                                <div class="icon"><FontAwesomeIcon icon={faBox} /></div>
                                                                <p>Processing</p>
                                                            </div>
                                                            <div class="step completed">
                                                                <div class="icon"><FontAwesomeIcon icon={faTruck} /></div>
                                                                <p>Shipped</p>
                                                            </div>
                                                            <div class="step">
                                                                <div class="icon"><FontAwesomeIcon icon={faCheckCircle} /></div>
                                                                <p>Delivered</p>
                                                            </div>
                                                        </div>
                                                        :
                                                        <div class="status">
                                                            <div className="step completed">
                                                                <div class="icon"><FontAwesomeIcon icon={faShoppingCart} /></div>
                                                                <p>Order Placed</p>
                                                            </div>
                                                            <div class="step completed">
                                                                <div class="icon"><FontAwesomeIcon icon={faBox} /></div>
                                                                <p>Processing</p>
                                                            </div>
                                                            <div class="step completed">
                                                                <div class="icon"><FontAwesomeIcon icon={faTruck} /></div>
                                                                <p>Shipped</p>
                                                            </div>
                                                            <div class="step completed">
                                                                <div class="icon"><FontAwesomeIcon icon={faCheckCircle} /></div>
                                                                <p>Delivered</p>
                                                            </div>
                                                        </div>
                                                        )
                                                        )
                                                    
                                                    }





                                                </div>
                                            </div>
                                            <hr />
                                        </div>
                                    ))
                                }
                            </div>

                        </div>
                        : <span></span>}
                    {str == 'necessitiesStatus' ?
                        <div className="col-lg-12">
                        <h5 className="card card-header text-center">PET ACCESSORIES ORDER STATUS</h5>
                        <div className="container">
                            {
                                values.map((data, i) => (
                                    <div className=" p-2 mt-3" key={i}>
                                        <div className="row">
                                            <div className="col-lg-5">
                                                <img width={150} src={`http://localhost:5000/uploads/${data.img}`} alt="" />
                                            </div>
                                            <div className="col-lg-7">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        
                                                        <div style={{ fontWeight: 'bold', fontSize: 20 }}>Accessories Name</div>
                                                        <div className="mb-3">{data.aname}</div>
                                                        <div style={{ fontWeight: 'bold', fontSize: 20 }}>Price</div>
                                                        <div className="mb-3">&#x20b9; {data.amt}/-</div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                       
                                                        <div style={{ fontWeight: 'bold', fontSize: 20 }}>Booking Date</div>
                                                        <div className="mb-3">{data.dt}</div>
                                                        <div style={{ fontWeight: 'bold', fontSize: 20 }}>Booking Time</div>
                                                        <div className="mb-3">{data.tm}</div>
                                                    </div>
                                                </div>


                                                {data.st == 'Ordered' ?
                                                    <div class="status">
                                                        <div className="step completed">
                                                            <div class="icon"><FontAwesomeIcon icon={faShoppingCart} /></div>
                                                            <p>Order Placed</p>
                                                        </div>
                                                        <div class="step">
                                                            <div class="icon"><FontAwesomeIcon icon={faBox} /></div>
                                                            <p>Processing</p>
                                                        </div>
                                                        <div class="step">
                                                            <div class="icon"><FontAwesomeIcon icon={faTruck} /></div>
                                                            <p>Shipped</p>
                                                        </div>
                                                        <div class="step">
                                                            <div class="icon"><FontAwesomeIcon icon={faCheckCircle} /></div>
                                                            <p>Delivered</p>
                                                        </div>
                                                    </div>
                                                    :
                                                    (
                                                        data.st == 'Processing' ? 
                                                        <div class="status">
                                                        <div className="step completed">
                                                            <div class="icon"><FontAwesomeIcon icon={faShoppingCart} /></div>
                                                            <p>Order Placed</p>
                                                        </div>
                                                        <div class="step completed">
                                                            <div class="icon"><FontAwesomeIcon icon={faBox} /></div>
                                                            <p>Processing</p>
                                                        </div>
                                                        <div class="step">
                                                            <div class="icon"><FontAwesomeIcon icon={faTruck} /></div>
                                                            <p>Shipped</p>
                                                        </div>
                                                        <div class="step">
                                                            <div class="icon"><FontAwesomeIcon icon={faCheckCircle} /></div>
                                                            <p>Delivered</p>
                                                        </div>
                                                    </div>
                                                    :
                                                    (
                                                        data.st == 'Shipped' ?
                                                        <div class="status">
                                                        <div className="step completed">
                                                            <div class="icon"><FontAwesomeIcon icon={faShoppingCart} /></div>
                                                            <p>Order Placed</p>
                                                        </div>
                                                        <div class="step completed">
                                                            <div class="icon"><FontAwesomeIcon icon={faBox} /></div>
                                                            <p>Processing</p>
                                                        </div>
                                                        <div class="step completed">
                                                            <div class="icon"><FontAwesomeIcon icon={faTruck} /></div>
                                                            <p>Shipped</p>
                                                        </div>
                                                        <div class="step">
                                                            <div class="icon"><FontAwesomeIcon icon={faCheckCircle} /></div>
                                                            <p>Delivered</p>
                                                        </div>
                                                    </div>
                                                    :
                                                    <div class="status">
                                                        <div className="step completed">
                                                            <div class="icon"><FontAwesomeIcon icon={faShoppingCart} /></div>
                                                            <p>Order Placed</p>
                                                        </div>
                                                        <div class="step completed">
                                                            <div class="icon"><FontAwesomeIcon icon={faBox} /></div>
                                                            <p>Processing</p>
                                                        </div>
                                                        <div class="step completed">
                                                            <div class="icon"><FontAwesomeIcon icon={faTruck} /></div>
                                                            <p>Shipped</p>
                                                        </div>
                                                        <div class="step completed">
                                                            <div class="icon"><FontAwesomeIcon icon={faCheckCircle} /></div>
                                                            <p>Delivered</p>
                                                        </div>
                                                    </div>
                                                    )
                                                    )
                                                
                                                }





                                            </div>
                                        </div>
                                        <hr />
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                        : <span></span>}
                </div>
            </div>




        </div>
    )
}
export default OrderList