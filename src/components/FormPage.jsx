import React, { useState } from 'react';
import './FormPage.css';
import axios from 'axios';
import { toast } from 'react-toastify';


const FormPage = () => {

    const initialvalue = {
        "fullName" : "",
        "email" : "",
        "phone" : "",
        "company" : "",
        "message" : "",
        "country" : "",
    }
    const [formData,SetData] = useState(initialvalue);
    
    const handleChange = (e)=>{
        const { name , value} = e.target
        SetData({...formData, [name]:value})
    }
  
    console.log("getDaTA", formData)

    const handelSubmit = async(e) =>{
        e.preventDefault();

        await axios.post("http://localhost:5000/v1/form",formData)
        .then((res)=>{
            if(res.data){
                SetData(initialvalue)
                toast.success(res.data.message)
            }
            
        })
        .catch((err)=>{
              console.log(err);
        })
    }

    const handelReset = async(e) =>{
        SetData(initialvalue)
    }
    
    return (
        <div className="container flex-wrap">
            <header className="form-header">
                <h1 className='' >Contact Us</h1>
            </header>

            <main className="main-form-content">
                <form className="form" onSubmit={handelSubmit} onReset={handelReset}>
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input type="text"
                        id="name"
                        name="fullName"
                        value={formData.fullName}
                        placeholder="Enter your full name"
                        onChange={handleChange}
                         required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email"
                         id="email" 
                         name="email"
                         value={formData.email} 
                         placeholder="Enter your email address"
                         onChange={handleChange} 
                         required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" 
                        id="phone" 
                        name="phone"
                        value={formData.phone} 
                        placeholder="Enter your phone number"
                        onChange={handleChange} 
                        required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="company">Company Name</label>
                        <input type="text" 
                        id="company" 
                        name="company"
                        value={formData.company} 
                        placeholder="Enter your company name"
                        onChange={handleChange} 
                        required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                    <textarea 
                        id="message" 
                        name="message"
                        value={formData.message} 
                        placeholder="Enter your message"
                        onChange={handleChange} 
                        rows="5" 
                        required>        
                    </textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="country">Country/Region</label>
                        <select id="country" name="country" onChange={handleChange} required>
                            <option value="">Select your country/region</option>
                            <option value="china">China</option>
                            <option value="india">India</option>
                            <option value="usa">United States</option>
                            <option value="germany">Germany</option>
                        </select>
                    </div>
                    <div className='form-btn'>
                    <div className="form-group">
                        <button type="submit" className="btn-submit">Submit</button>
                    </div>
                    <div className="form-group">
                        <button type="reset" className="btn-submit">Reset</button>
                    </div>
                    </div>
                </form>
            </main>
        </div>
    );
}

export default FormPage;
