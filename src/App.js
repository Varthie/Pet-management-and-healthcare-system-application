import React, { useState } from 'react'
import { Route, Routes,BrowserRouter } from 'react-router-dom';
import './App.css'
import Home from './components/Home'
import Product from './components/Product'
import Contact from './components/Contact';
import Breeds from './components/Breeds'
import About from './components/About'
import Cart from './components/Cart'
import FileUpload from './components/FileUpload'
import Layout from './components/admin/Layout'
import FoodAdd from './components/admin/FoodAdd'
import MedicineAdd from './components/admin/MedicineAdd'
import NecessitiesAdd from './components/admin/NecessitiesAdd'
import FoodDisplay from './components/admin/FoodDisplay'
import MedicineDisplay from './components/admin/MedicineDisplay'
import NecessitiesDisplay from './components/admin/NecessitiesDisplay'
import UserLogin from './components/user/UserLogin'
import Signup from './components/user/Signup'
import AdminLogin from './components/admin/AdminLogin'
import UserList from './components/admin/UserList'
import FoodList from './components/user/FoodList'
import FoodView from './components/user/FoodView'
import Payment from './components/user/Payment'
import OrderList from './components/user/OrderList'
import AdminOrderList from './components/admin/AdminOrderList'
import PaymentForm from './components/user/PaymentForm'
import RazorpayPayment from './components/user/RazorpayPayment'


function App({cart, setCart}) {
    const [detail, view] = useState()
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product' element={<Product detail={detail} view={view}/>} />
            <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/breed' element={<Breeds/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/FileUpload' element={<FileUpload/>} />
            <Route path='/Layout' element={<Layout/>} />
            <Route path='/FoodAdd' element={<FoodAdd/>} />
            <Route path='/MedicineAdd' element={<MedicineAdd/>} />
            <Route path='/NecessitiesAdd' element={<NecessitiesAdd/>} />
            <Route path='/FoodDisplay' element={<FoodDisplay/>} />
            <Route path='/MedicineDisplay' element={<MedicineDisplay/>} />
            <Route path='/NecessitiesDisplay' element={<NecessitiesDisplay/>} />
            <Route path='/UserLogin' element={<UserLogin/>} />
            <Route path='/Signup' element={<Signup/>} />
            <Route path='/AdminLogin' element={<AdminLogin/>} />
            <Route path='/UserList' element={<UserList/>} />
            <Route path='/FoodList/:str' element={<FoodList/>} />
            <Route path='/FoodView/:str/:id' element={<FoodView/>} />
            <Route path='/Payment' element={<Payment/>} />
            <Route path='/OrderList/:str' element={<OrderList/>} />
            <Route path='/AdminOrderList/:str' element={<AdminOrderList/>} />
            <Route path='/About' element={<About/>} />
            <Route path='/PaymentForm' element={<PaymentForm/>} />
            <Route path='/RazorpayPayment' element={<RazorpayPayment/>} />

            
        </Routes>
        </BrowserRouter>
    )
} 
export default App;