import { Link } from 'react-router-dom';
import '../Header/Header.css';

import React from 'react';
import useAuth from '../Context/useAuth';



const Header = () => {
    const {user,email,logOut} = useAuth();
    return (
        <div className="header">
            <div className="row">
                <div className="col-md-3 header-left">
                    
                     {/* <i class="fas fa-clinic-medical"></i> */}
                     <button className="p-3 mt-2 ghorifiri">GhoriFiri.com </button>
                    <h6> <span className="call"> Call:</span> +8801700000000 </h6>
                    <h6><span className="email"> Email:</span> GhoriFiri2021@gmail.com </h6>
                    
                </div>
                <div className="col-md-9">
                    <nav className="navbar navbar-expand-lg  navbar-light">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                                data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon">
                                     <i className="fas fa-bars"></i>
                                </span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link to="/home">
                                    <a className="nav-link" href="#">Home</a>
                                </Link>
                                <Link to="/about">
                                <a className="nav-link" href="#">About</a>
                                </Link>
                                <Link to="/service">
                                <a className="nav-link" href="#">Places</a>
                                </Link>
                               {user?.displayName?
                                <>
                                    <Link to="/addservice">
                                        <a className="nav-link" href="#">AddService</a>
                                    </Link> 
                                    <Link to="/myorder">
                                        <a className="nav-link text-info" href="#">MyOrders</a>
                                    </Link> 
                                    <Link to="/manageorders">
                                        <a className="nav-link text-info" href="#">manageOrders</a>
                                    </Link> 
                                    
                                    <Link to="/home"  onClick={logOut}>
                                        <a className="nav-link pl-5 text-danger">LogOut</a> 
                                    </Link>
                                     <h4 className="text-success">  {user.displayName}</h4>
                                    
                                </>
                                   :
                               <Link to="/login"> 
                                  <a className="nav-link px-5 text-info" href="#">Login</a>
                               </Link>}

                                    
                                    
                                    
                            </div>
                        
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;