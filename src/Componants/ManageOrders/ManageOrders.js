import React, { useState } from 'react';
import './ManageOrders.css';

const ManageOrders = () => {
    const [manageOrders,setManageOrders]=useState([]);
    fetch(`https://glacial-badlands-93719.herokuapp.com/manageorder`)
        .then((res) => res.json())
        .then((data) => setManageOrders(data));
    // const handleUpdateStatus =(id)=>{
    //     const url = `http://localhost:5000/status/${id}`;
    //     fetch(url,{
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         }
    //     })
    //     .then(res=>res.json())
    //     .then(data=>{
    //         console.log(data);
    //     })
    // }
    return (
        <div className="manageorders d-flex mx-auto justify-content-center">
            {
                manageOrders.map(order=>(
                    <div className="w-25">
                        <div className="card single-order">
                            <img src={order.img} />
                            <h3>{order.name}</h3>
                            <p>{order.title}</p>
                            <p className="desc">{order.description}</p>
                            <p>{order.designation}</p>
                            <button className="btn btn-danger py-2 mb-3">{order.status}</button>
                            <button  className="btn btn-success py-2 mb-3">Aprove</button>
                        </div>
                    </div>

                ))
            } 
        </div>
    );
};

export default ManageOrders;