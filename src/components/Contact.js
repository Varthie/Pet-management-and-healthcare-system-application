import React from 'react';
import './Contact.css'
import Swal from 'sweetalert2'
import Header from './header';
function Contact()
{
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "9a2dfb01-7bd5-412b-8041-5122d23dfb66");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message send successfully!",
                icon: "success"
              });
        }
      };

    return(
        <div>
            <Header/>
            <div className="container-fluid img">
          <form >
          <div className="row">
            <div className="col-lg-6">
              <h3 className="text-center text-dark txt">Contact US</h3>
              <div className="row ">
                <div className="col-lg-3 mt-3 text-dark txt">Name</div>
                <div className="col-lg-9">
                  <input type="text" className="form-control shadow-none mt-3 "required/>
                </div>
                <div className="col-lg-3 mt-3 text-dark txt">Contact No</div>
                <div className="col-lg-9">
                  <input type="text" className="form-control mt-3 shadow-none"required />
                </div>
                <div className="col-lg-3 mt-3 text-dark txt">Email</div>
                <div className="col-lg-9">
                  <input type="text" className="form-control mt-3 shadow-none" required  />
                </div>
                <div className="col-lg-3 mt-3 text-dark txt">Message</div>
                <div className="col-lg-9">
                    <textarea className="form-control mt-3 shadow-none" required ></textarea>
                 
                </div>
               
                <div className="col-lg-5"></div>
                <div className="col-lg-3">
                  <input type="Submit" className="btn btn-success  mt-4  shadow-none" value="Submit"  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
            <img src="3.jpg" className='img-fluid' alt="" />
            </div>
          </div></form>
        </div>
        </div>
    );
}

export default Contact;