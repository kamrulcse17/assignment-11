import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="row footer justify-content-center mt-5">
            <div className="col-md-6">
                <p className="copyright">Copyright @ 2021 GhoriFiri.com</p>
            </div>
            <div className="col-md-6 justify-content-center footer-left">
                <ul>
                    <li><i class="fab fa-facebook"></i></li>
                    <li><i class="fab fa-twitter"></i></li>
                    <li><i class="fab fa-instagram-square"></i></li>
                    <li><i class="fab fa-github"></i></li>
                    <li><i class="fab fa-linkedin"></i></li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;