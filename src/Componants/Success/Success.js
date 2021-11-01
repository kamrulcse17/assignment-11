import React from 'react';
import { Link } from 'react-router-dom';
import '../Success/Success.css'

const Success = () => {
    return (
        <div>
            <div className="success">
            <h4>Your Order Placed Successfully <i className="far fa-check-circle text-success"></i></h4>
            <Link to="/home">
                <button className="btn btn-success py-2 mb-3">Go Home</button>
            </Link>
            </div>
        </div>
    );
};

export default Success;