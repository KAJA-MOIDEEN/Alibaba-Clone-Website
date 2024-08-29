import React, { useState } from 'react';
import './FormPage.css';

const FormPage = () => {

    const initialvalue = {
        "name" : "",
        "email" : "",
        "phone" : "",
        "company" : "",
        "message" : "",
        "country" : "",
    }
    const [getData,SetData] = useState(initialvalue);
    
    const handleChange = (e)=>{

        const { name , value} = e.target
        SetData({...getData, [name]:value})
    }
  
    console.log("grtDaTA", getData)

    const handelSubmit = () =>{

    }
    
    return (
        <div className="container">
            <header className="form-header">
                <h1>Alibaba Form Page</h1>
            </header>

            <main className="main-form-content">
                <form className="form">
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input type="text"
                        id="name"
                        name="name"
                        value={getData.name}
                        placeholder="Enter your full name"
                        onChange={handleChange}
                         required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email"
                         id="email" 
                         name="email"
                         value={getData.email} 
                         placeholder="Enter your email address"
                         onChange={handleChange} 
                         required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" 
                        id="phone" 
                        name="phone"
                        value={getData.phone} 
                        placeholder="Enter your phone number"
                        onChange={handleChange} 
                        required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="company">Company Name</label>
                        <input type="text" 
                        id="company" 
                        name="company"
                        value={getData.company} 
                        placeholder="Enter your company name"
                        onChange={handleChange} 
                        required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                    <textarea 
                        id="message" 
                        name="message"
                        value={getData.message} 
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

                    <div className="form-group">
                        <button type="submit" className="btn-submit">Submit</button>
                    </div>
                </form>
            </main>
        </div>
    );
}

export default FormPage;
