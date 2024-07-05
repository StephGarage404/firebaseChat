import { useContext, useEffect, useState } from "react";





export const AuthContex = createContext();

export const AuthContexProvider = ({children})=>{
    const [user, setUser] = useState(null);
    const [isAuthentificated, setIsAuthentificated] = useState(undefined);

    useEffect (()=>{
        //onAuthStateChanged
    },[])

    const login = async (email, password)=>{
        try{

        }catch(e){

        }
    }

    const logout = async ()=>{
        try{

        }catch(e){
            
        }
    }

    const register = async (email, password,username, profileUrl)=>{
        try{

        }catch(e){

        }
    }

    return (
        <AuthContex.Provider value={{user, isAuthentificated, login, register, logout}}>
            {children}
        </AuthContex.Provider>
    )
}

export const useAuth = ()=>{
    const value = useContext(AuthContex);
    
    if(!value){
        throw new Error('useAuth must be wrapped inside AuthContextProvider');
    }
    return value;
}
