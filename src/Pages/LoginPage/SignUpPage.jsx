import React, { useState } from 'react';
import axios from 'axios';
import './SignUpPage.css';
import { toast } from 'react-toastify';

const SignUp = () => {
    const [formData, setFormData] = useState({
        userName:'',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });

    const [message, setMessage] = useState('');
    console.log(message);
    const handleChange = (e) => {
        const { name, value } = e.target;
        
        setFormData({...formData,[name]: value});
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
        const { password, confirmPassword } = formData;

        if (password !== confirmPassword) {
            setMessage('Passwords do not match');
            return;
        }

        await axios.post('https://appsail-50022145562.development.catalystappsail.in/v1/register',formData).then((res)=>console.log(res.data));
        toast('user created');
        } catch (error) {
            toast.error(error.response.data.message);
            
        }
    };

    return (
        <div className="LoginPage">
            <div className="container">
                <h2 className="heading">SignUp</h2>
                <form onSubmit={handleSubmit} className="form">
                <div className="inputGroup">
                        <label htmlFor="user" className="label">User Name:</label>
                        <input
                            type="string"
                            name="userName"
                            value={formData.userName}
                            onChange={handleChange}
                            required
                            className="input"
                            id='user'
                        />
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="email" className="label">Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="input"
                            id='email'
                        />
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="phone" className="label">Phone:</label>
                        <input
                            type="string"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="input"
                            id='phone'
                            min={10}
                        />
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="password" className="label">Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="input"
                            id='password'
                        />
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="confirmPassword" className="label">Confirm Password:</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                            className="input"
                            id='confirmPassword'
                        />
                    </div>
                    <button type="submit" className="button">Sign Up</button>
                    
                </form>
            </div>
        </div>
    );
};

export default SignUp;
