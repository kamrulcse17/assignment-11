import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) =>{
        fetch(`https://glacial-badlands-93719.herokuapp.com/addService`,{
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(data),
         })
         .then((res)=> res.json())
         .then((result) => console.log(result));
    } ;
        
    return (
        <div> 
            <h3 className="mt-5 text-center">Add a New Product</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="my-5 mx-auto text-center">
                <input type="text" className="p5 m-2 w-50" placeholder="Name" {...register("name", { required: true })} /> <br/>
      
                <input type="number" className="p2 m-2 w-50" placeholder="Price" {...register("price", { required: true })} /><br/>
                <input type="textarea" className="p2 m-2 w-50" placeholder="Description" {...register("description", { required: true })} /><br/>
                <input type="url" className="p2 m-2 w-50" placeholder="Service Image Url" {...register("img", { required: true })} /><br/>

                {errors.exampleRequired && <span>This field is required</span>}
      
               <input className="p2 m-2 w-25" type="submit" />
            </form>
       </div>
    );
};

export default AddProduct;