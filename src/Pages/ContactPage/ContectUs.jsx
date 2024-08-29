import React from 'react';
import '../ContectUs/ContactUs.css'

const ContactUs = () => {
    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <p>If you have any questions, feel free to reach out to us!</p>

            <div className="contact-details">
                <div className="contact-info">
                    <h2>Our Office</h2>
                    <p>Alibaba Group,</p>
                    <p>123 E-commerce Street,</p>
                    <p>Shanghai, China</p>
                </div>

                <div className="contact-form">
                    <h2>Send Us a Message</h2>
                    <form>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />

                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />

                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" required></textarea>

                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
