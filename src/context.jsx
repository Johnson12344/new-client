import { useEffect } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import axios from "axios"

export const UserContext = createContext();

const initialState = {
    userInfo: {
        email: "uwagboeolusoga@gmail.com", //receiver's email
        accountType: "Checking",
        name: "Timothy A Roberts", //acct name
        balance: localStorage.getItem("balance") ? JSON.parse(localStorage.getItem("balance")): 14964.36 
    }, //acct balance
    formInfo: [],
    otp: 920453,
    transferForm: []
}

const reducer = (state, action)=>{
if(action.type === "SETUSER"){
return {...state, userInfo: localStorage.setItem("user",JSON.stringify(action.payload))}
}

if(action.type === "GET_OTP"){
    return {...state, otp: action.payload}
    }

}

const UseContextProvider = ({children})=>{
   const [state, dispatch] = useReducer(reducer, initialState)
   
    const getOTP = async()=>{
        const res = await axios.get("https://new-api-kappa.vercel.app/api/verify") 
        dispatch({type:"GET_OTP", payload:res.data})
    }

 return (
    <UserContext.Provider value={{...state, getOTP}}>
        {children}
    </UserContext.Provider>
 )   
}

export {UseContextProvider}
