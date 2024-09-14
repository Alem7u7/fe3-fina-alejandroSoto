import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Components/utils/context"; 

const Card = ({ dato }) => {
  
  const { dispatch } = useGlobalContext(); 
  const addFav = () => {
    //setFavs((favs) => [...favs, { dato }]);
    dispatch({type: "ADD_FAV", payload: dato})
  };
  

  return (
    <div className="card">
      <img src="/images/doctor.jpg" alt='doctor' />
      <Link to={'/dentist/' + dato.id}><h3>{dato.name}</h3></Link>
      <p>{dato.username}</p>
      <p>ID: {dato.id}</p>
      <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;