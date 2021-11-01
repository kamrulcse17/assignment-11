import React from 'react';
import '../Contact/Contact.css'

const Contact = () => {
    return (
        <div className="w-50 mx-auto">
            <form>
                <div className="form-group mt-3">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Email"/>
                </div>
                
                
                <div className="form-group mt-3">
                    <label for="exampleFormControlTextarea1">Your Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                
                </div>
                <button type="submit" className="btn btn-secondary mt-3">Submit</button>
            </form>
        </div>
    );
};

export default Contact;