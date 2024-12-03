import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useParams, useNavigate } from "react-router-dom";

// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faTrashCan,faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import UserHeader from './UserHeader';
function PetView() {
    // Payment
    // ****************************************

    const loadRazorpay = () => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onerror = () => {
            alert('Razorpay SDK failed to load. Are you online?');
        };
        script.onload = () => {
            handlePayment();
        };
        document.body.appendChild(script);
    };

    const handlePayment = async () => {
        // Call your backend to get the payment order_id
        const response = await fetch('http://localhost:5000/create-order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                amount: 100, // Example amount in INR
                currency: 'INR',
                receipt: 'receipt_id',
            }),
        });

        const data = await response.json();

        if (data.error) {
            alert('Error creating order' + data.error);
            return;
        }

        const options = {
            key: 'rzp_live_PNnFNgbaGnOHfU',
            amount: data.amount,
            currency: 'INR',
            name: 'i-tech Software Academy',
            description: 'Buy Product',
            image: 'https://yourlogo.com/logo.png',
            order_id: data.order_id,
            handler: (response) => {
                alert('Payment successful!');
                console.log(response);

            },
            prefill: {
                name: 'Customer Name',
                email: 'customer@example.com',
                // contact: '9488870339',
                contact:localStorage.getItem('cno')
            },
            notes: {
                address: 'Corporate Office',
            },
            theme: {
                color: '#3399cc',
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };

    //   **************************************************
    const [values, setValue] = useState([])
    const [flag, setFlag] = useState('')
    const { str, id } = useParams();
    const currentDate = new Date();
    const dt = currentDate.toLocaleDateString('en-GB');
    const tm = currentDate.toLocaleTimeString();
    const st = "Ordered"
    console.log(dt, tm)
    const uuid = localStorage.getItem('uid')
    useEffect(() => {
        setFlag(str)
        console.log(id)
        console.log("Flag : " + str)

        axios.get('http://localhost:5000/' + str + '/' + id)
            .then(res => {
                setValue(res.data)
                console.log(values[0])
            })
            .catch(err =>
                console.log("Error:" + err))
    }, [])
    const navigate = useNavigate();
    function buy() {

        if (str == "FoodView") {
            buyFood()

        }
        else if (str == "MedicineView") {
            buyMedicine()
        }
        else if (str == "NecessitiesView") {
            buyNecessities()
        }
        loadRazorpay()

    }
    function buyFood() {
        const ptype = values[0].ptype;
        const bname = values[0].bname;
        const amt = values[0].amt;
        const img = values[0].img;

        const uid = uuid;

        axios.post('http://localhost:5000/buyFood', { ptype, bname, amt, img, uid, st, dt, tm })
            .then(res => {
                console.log(res)
                // navigate('/Payment')

            })
            .catch(err => console.log(err))
    }
    function buyMedicine() {
        const ptype = values[0].ptype;
        const bname = values[0].bname;
        const mname = values[0].mname;

        const amt = values[0].amt;
        const img = values[0].img;

        const uid = uuid;

        axios.post('http://localhost:5000/buyMedicine', { ptype, bname, mname, amt, img, uid, st, dt, tm })
            .then(res => {
                console.log(res)
                // navigate('/Payment')

            })
            .catch(err => console.log(err))
    }
    function buyNecessities() {
        const aname = values[0].aname;

        const amt = values[0].amt;

        const img = values[0].img;

        const uid = uuid;

        axios.post('http://localhost:5000/buyNecessities', { aname, amt, img, uid, st, dt, tm })
            .then(res => {
                console.log(res)
                // navigate('/Payment')

            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <UserHeader />

            {str == 'MedicineView' ?
                <div className="container">
                    {
                        values.map((data, i) => (
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="card card-header text-cente">
                                        <h5>PET MEDICINE DETAILS</h5>
                                    </div>
                                </div>
                                <div className="col-lg-6" id={i}>

                                    <img className="img-fluid" src={`http://localhost:5000/uploads/${data.img}`} alt="..." />

                                </div>
                                <div className="col-lg-6">
                                    <div className="row">
                                        <div className="col-lg-4  mt-4">Pet Type</div>
                                        <div className="col-lg-8 fw-bold mt-4">{data.ptype}</div>
                                        <div className="col-lg-4 mt-4">Bread Name</div>
                                        <div className="col-lg-8 fw-bold mt-4">{data.bname}</div>
                                        <div className="col-lg-4 mt-4">Food Name</div>
                                        <div className="col-lg-8 fw-bold mt-4">{data.fname}</div>
                                        <div className="col-lg-4 mt-4">Description</div>
                                        <div className="col-lg-8 fw-bold mt-4">{data.desc1}</div>
                                        <div className="col-lg-4 mt-4">Price</div>
                                        <div className="col-lg-8 fw-bold mt-4">{data.amt}</div>

                                        <div className="col-lg-4 mt-4"></div>
                                        <div className="col-lg-8 fw-bold mt-4">
                                            <input type="button" className="btn btn-success" onClick={buy} value="Buy Now" />
                                        </div>

                                    </div>
                                </div>


                            </div>
                        ))
                    }
                </div>


                : <span></span>}

            {str == 'NecessitiesView' ?
                <div className="container">
                    {
                        values.map((data, i) => (
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="card card-header text-cente">
                                        <h5>PET ACCERIERS DETAILS</h5>
                                    </div>
                                </div>
                                <div className="col-lg-6" id={i}>

                                    <img className="img-fluid" src={`http://localhost:5000/uploads/${data.img}`} alt="..." />

                                </div>
                                <div className="col-lg-6">
                                    <div className="row">
                                        <div className="col-lg-4  mt-4">Acceries Name</div>
                                        <div className="col-lg-8 fw-bold mt-4">{data.aname}</div>

                                        <div className="col-lg-4 mt-4">Description</div>
                                        <div className="col-lg-8 fw-bold mt-4">{data.desc1}</div>
                                        <div className="col-lg-4 mt-4">Price</div>
                                        <div className="col-lg-8 fw-bold mt-4">{data.amt}</div>

                                        <div className="col-lg-4 mt-4"></div>
                                        <div className="col-lg-8 fw-bold mt-4">
                                            <input type="button" className="btn btn-success" onClick={buy} value="Buy Now" />
                                        </div>

                                    </div>
                                </div>


                            </div>
                        ))
                    }
                </div>


                : <span></span>}
            {str == 'FoodView' ?
                <div className="container">
                    {
                        values.map((data, i) => (
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="card card-header text-center">
                                        <h5>PET FOOD DETAILS</h5>
                                    </div>
                                </div>
                                <div className="col-lg-6" id={i}>

                                    <img className="img-fluid" src={`http://localhost:5000/uploads/${data.img}`} alt="..." />

                                </div>
                                <div className="col-lg-6">
                                    <div className="row">
                                        <div className="col-lg-4  mt-4">Pet Type</div>
                                        <div className="col-lg-8 fw-bold mt-4">{data.ptype}</div>
                                        <div className="col-lg-4 mt-4">Bread Name</div>
                                        <div className="col-lg-8 fw-bold mt-4">{data.bname}</div>
                                        <div className="col-lg-4 mt-4">Food Name</div>
                                        <div className="col-lg-8 fw-bold mt-4">{data.fname}</div>
                                        <div className="col-lg-4 mt-4">Description</div>
                                        <div className="col-lg-8 fw-bold mt-4">{data.desc1}</div>
                                        <div className="col-lg-4 mt-4">Price</div>
                                        <div className="col-lg-8 fw-bold mt-4">{data.amt}</div>

                                        <div className="col-lg-4 mt-4"></div>
                                        <div className="col-lg-8 fw-bold mt-4">
                                            <input type="button" className="btn btn-success" onClick={buy} value="Buy Now" />
                                        </div>

                                    </div>
                                </div>


                            </div>
                        ))
                    }
                </div>


                : <span></span>}

        </div>
    )
}
export default PetView