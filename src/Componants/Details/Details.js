import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../Context/useAuth';
import '../Details/Details.css'

const Details = () => {
    const {detailsId} = useParams();
    const [Services, setServices] = useState([]);
    const [Service, setService] = useState({});
    const {user} = useAuth();
    useEffect(() => {
      fetch("https://glacial-badlands-93719.herokuapp.com/services")
        .then((res) => res.json())
        .then((data) => setServices(data));
    }, []);
    const singleService = Services.find(Service => Service._id === detailsId);
    
        
    
    const handlePlaceOrder = ()=>{
        fetch(`https://glacial-badlands-93719.herokuapp.com/placeorder/:${user.email}`,{
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(singleService),
         })
         .then((res)=> res.json())
         .then((result) => console.log(result));
    } ;
    
    
   
    return (
        
        <div className="service">
            <div className="px-3">
                    <div className="">
                            <div className="card">
                                <img src={singleService?.img} />
                                <h3>{singleService?.name}</h3>
                                <p>{singleService?.description}</p>
                                <p>{singleService?.price}</p>
                                
                                    <button onClick={handlePlaceOrder} className="btn btn-success py-2">PlaceOrder</button>
                                
                            </div>
                        </div>
            </div>
            

        </div>
    );
};

export default Details;