import React, { useState } from 'react';
import useAuth from '../Context/useAuth';



const MyOrders = () => {
    const [myOrders,setMyOrders]=useState([]);
    const {user}= useAuth();
    const email=user.email;
    fetch(`https://glacial-badlands-93719.herokuapp.com/myorder/:${email}`)
        .then((res) => res.json())
        .then((data) => setMyOrders(data));

//Delete Handler
// const [isDeleted,setIsDeleted]= useState(null);
// const handleDelete = (id) =>{
//     const deleteId = JSON.stringify(id);
//     fetch( `http://localhost:5000/deleteService/:${deleteId}`,{
//         method: "DELETE",
//         headers: {"content-type" : "application/json"},
//     })
//     .then((res) => res.json())
//     .then((result) => {
//         if(result.deletedCount){
//             setIsDeleted(true);
//         }else{
//             setIsDeleted(false);
//         }
//     });
    

    return (
        <div className="myorders d-flex mx-auto justify-content-center">
            {
                    myOrders.map(order=>(
                        <div className="w-25">
                            <div className="card single-order">
                                <img src={order.img} />
                                <h3>{order.name}</h3>
                                <p className="desc">{order.description}</p>
                                <p>{order.price}</p>
                                <button className="btn btn-success py-2 mb-3">Cancel Order</button>
                            </div>
                        </div>

                    ))
                } 
        </div>
    );
 }
export default MyOrders;