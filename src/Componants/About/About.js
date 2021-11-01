import React from 'react';
import img from './about.jpg';
import './About.css';

const About = () => {
    return (
        <div className="about text-center">
            
            <h1 className="pt-5">About Us</h1>
            <div className="row m-5">
                <div className="col-md-5 about-left">
                    <img src={img} />
                </div>
                <div className="col-md-7 about-right">
                    <p>
                    You have booked your flights and hotels, now the next thing you seek to
                     is scour through tour packages and book one. If it is domestically you
                     n to travel, you will find innumerable holiday packages, but very few
                      that match your requirement, or for that matter your interests and
                       personality. Enter Yatra and you can now choose from an array of
                        holiday packages in India that span across the length and breadth of
                         the country, taking you into breathtaking tea estates, hill resorts 
                         to splendid backwater retreats. By booking your India tour with Yatra,
                          you get to customise your holiday to suit your requirement, and more importantly 
                    can avail some attractive discounts and offers from time to time.
                                </p>
                </div>
            </div>
            
        </div>
    );
};

export default About;