const { createContext , useState, useEffect} = require("react");
import { useNavigate } from "react-router-dom";
import {baseUrl} from "../baseUrl" ;

export const MyContext = createContext();

export function MyContextProvider({children}){

  const [quote , setQuote] = useState("");
  const [savedQuotes , setSavedQuotes] = useState([]);

  const navigate = useNavigate();

  const fetchQuotes = async () =>{
    try{
      const res = await fetch(baseUrl);
      const out = await res.json();
      setQuote(out);
      console.log(out);
    }
    catch(e){
      setQuote("");
      console.log(e);
    }
  }
  
  const generateNew = () => {
    fetchQuotes();
  }

  const addtoList = () => {
    setSavedQuotes([...savedQuotes , quote]);
    console.log(savedQuotes);
  }
    
    useEffect(()=>{
        fetchQuotes();
    },[])

    const value = {
        navigate , 
        quote , setQuote , 
        savedQuotes , setSavedQuotes ,
        fetchQuotes , generateNew , addtoList 
    }

    return <MyContext.Provider value = {value}> {children} </MyContext.Provider>
}

