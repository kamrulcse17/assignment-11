import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Services/service.css'

const Service = () => {
    const [Services, setServices] = useState([]);
    useEffect(() => {
      fetch("https://glacial-badlands-93719.herokuapp.com/services")
        .then((res) => res.json())
        .then((data) => setServices(data));
    }, []);
    
    
    return (
        
        <div className="service text-center">

            <h1 className="p-5">Places We Offers</h1>
            <div className="row px-3">
                {
                    Services.map(Service=>(
                        <div className="col-md-4 ">
                            <div className="card single-service">
                                <img src={Service.img} />
                                <h3>{Service.name}</h3>
                                <p>{Service.title}</p>
                                <p className="desc">{Service.description}</p>
                                <p>{Service.designation}</p>
                                <Link to={`/details/${Service._id}`}>
                                    <button className="btn btn-success py-2 mb-3">BookNow</button>
                                </Link>
                            </div>
                        </div>

                    ))
                } 
            </div>
            

        </div>
    );
};

export default Service;