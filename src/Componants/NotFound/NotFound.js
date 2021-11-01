import React from 'react';
import { Link } from 'react-router-dom';
import notfoundimg from '../NotFound/404.jpg';
import './NotFound.css';
const NotFound = () => {
    return (
        <div className="notfound">
            <img src={notfoundimg} />
            <br/>
            <br/>
            <Link to="home"><a>Go Home!</a></Link>
        </div>
    );
};

export default NotFound;