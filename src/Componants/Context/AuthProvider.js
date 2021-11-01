import React, { createContext } from 'react';
import Login from '../Login/Login';
import { useFirebase } from './useFirebase';

export const AuthContext = createContext();
const AuthProvider = ({children}) => {

    const allContext =  useFirebase();

    return (
        
            <AuthContext.Provider value={allContext}>
                    {children}
            </AuthContext.Provider>
            
        
    );
};

export default AuthProvider;