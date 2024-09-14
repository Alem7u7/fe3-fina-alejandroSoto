import { createContext, useContext, useState, useEffect, useReducer } from "react";
import axios from "axios";
import { reducer } from "../../reducers/reducer";

const GlobalContext = createContext();
const lsFavs = JSON.parse(localStorage.getItem("favs"))||[];
const initialState= {
  favs: lsFavs,
  data: [],
  theme: ''
}


const Context = ({ children }) => { 
  
  const [state,dispatch] = useReducer(reducer,initialState);

  const apiUrl = "https://jsonplaceholder.typicode.com/users"; 

  useEffect(() => {
    axios(apiUrl).then((res) => {
      console.log(res.data);
      dispatch({type:"GET_DATA", payload: res.data})
    });
  }, []);
 
  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs))    
  },[state.favs]);

  const toggleTheme = () => {
    const newTheme = state.theme === "light" ? "dark" : "light";
    dispatch({ type: "THEME", payload: newTheme });
};


  
  
  return (
    <GlobalContext.Provider value={{ state, dispatch, toggleTheme }}>
      {children}  
    </GlobalContext.Provider>
  );
};

export default Context;

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
