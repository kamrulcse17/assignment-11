import React, { useState,useEffect } from 'react';
import initializeAuthentication from '../firebase/firebase.init';
import {getAuth,signInWithPopup, GoogleAuthProvider,
     signOut,onAuthStateChanged } from "firebase/auth";

     
     initializeAuthentication();

export const useFirebase = ()=>{
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    
    const [displayName,setDisplayName]= useState('');
    const [user,setUser]= useState('');
   
   

    const handleGoogleSignIn = ()=>{
      return  signInWithPopup(auth, googleProvider);
        
    }
    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user);
            }else{
                setUser({})
            }
        });
        return ()=> unsubscribed;
    },[])
    
   
    const logOut = ()=>{
        signOut(auth)
        
        .then(()=>{
            
        });
    }
    return{
    logOut,
    handleGoogleSignIn,
    displayName,
    user
    }
    

    


}
export default useFirebase;