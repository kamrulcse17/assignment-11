import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../Context/useAuth';
import '../Login/Login.css';

     
const Login = () => {
const {handleGoogleSignIn} =  useAuth();
    const location = useLocation();
    const history= useHistory();
    const redirect_uri = location.state?.from || '/home';
    
    const handleGoogleLogin = ()=>{
            handleGoogleSignIn()
            .then((result) => {
            
                history.push(redirect_uri)
                
        })
        
    }
    return (
        <div className="mt-5 login py-5 my-5">
            
                <button onClick={handleGoogleLogin} type="submit" className="btn btn-secondary p-3">
                    <i className="fab fa-google px-2"></i>SignIn With Google</button>
            
        </div>
    );
    
};

export default Login;
