import React from 'react';

const RazorpayPayment = () => {
  
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
      alert('Error creating order'+data.error);
      return;
    }

    const options = {
      key: 'rzp_live_PNnFNgbaGnOHfU', // Replace with your key
      amount: data.amount,
      currency: 'INR',
      name: 'Your Company Name',
      description: 'Test Transaction',
      image: 'https://yourlogo.com/logo.png',
      order_id: data.order_id,
      handler: (response) => {
        alert('Payment successful!');
        console.log(response);
        // Send payment response to your server for verification
      },
      prefill: {
        name: 'Customer Name',
        email: 'customer@example.com',
        contact: '9488870339',
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

  return (
    <div>
      <button onClick={loadRazorpay}>Pay Now</button>
    </div>
  );
};

export default RazorpayPayment;
