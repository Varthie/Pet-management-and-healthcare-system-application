import React from 'react';

import pawppy from '../components/images/pup.jpg'
import food from '../components/images/treat.png'
import medicine from '../components/images/medicine.png'
import collar from '../components/images/collar.png'
import { FaTruck, FaHeadset } from 'react-icons/fa6';
import { FaRupeeSign } from 'react-icons/fa';
import { HiOutlineReceiptPercent } from 'react-icons/hi2';
import kitten from '../components/images/kit.png'
import './Home.css'
import Header from './header';
function Home() {
 return (
        <>
<Header/>
            <div className='top_banner'>
                <div className='containe'>
                    <div className='detail'>
                        <h2>50% off on Puppy Foods</h2>
                      
                    </div>
                    <div className='img_box'>
                        <img src={pawppy} alt='slidering'></img>
                    </div>
                </div>
            </div>
            <div className='product_type' >
                <div className='contain'>
                    <div className='box'>
                        <div className='img_box'>
                            <img src={food} alt='Pet food' ></img>
                        </div>
                        <div className='detail'>
                            <p>10 products</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='img_box'>
                            <img src={medicine} alt='Pet Medicine' ></img>
                        </div>
                        <div className='detail'>
                            <p>12 products</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='img_box'>
                            <img src={collar} alt='Pet necessities' ></img>
                        </div>
                        <div className='detail'>
                            <p>20 products</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='about'>
                <div className='container'>
                    <div className='box'>
                        <div className='icon'>
                            <FaTruck />
                        </div>
                        <div className='detail'>
                            <h3>Free shipping</h3>
                            <p>Order above ₹5000</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='icon'>
                            <FaRupeeSign />
                        </div>
                        <div className='detail'>
                            <h3>Return & Refund</h3>
                            <p>Money back guaranteed</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='icon'>
                            <HiOutlineReceiptPercent />
                        </div>
                        <div className='detail'>
                            <h3>Memeber discount</h3>
                            <p>On every Order</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='icon'>
                            <FaHeadset />
                        </div>
                        <div className='detail'>
                            <h3>Customer Support</h3>
                            <p>All time Service</p>
                        </div>
                    </div>
                </div>
            </div>
            
           <div className='banner'>
            <div className='contamination'>
            <div className='detail'>
                <h4>NEW PURR-FECT SAVINGS</h4>
                <h3>Perfect Cat box for your Naughty Cats</h3>
                <p>Starts only at ₹900</p>
            </div>
            <div className='img_box'>
                <img src={kitten} alt='slidering'></img>
            </div>
           </div>
           </div>
        </>
    )
}

export default Home;