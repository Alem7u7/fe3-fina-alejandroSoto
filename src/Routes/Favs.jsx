import React from "react";
import Card from "../Components/Card";
import { useGlobalContext } from '../Components/utils/context';


const Favs = () => {

  const {state} = useGlobalContext()

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
      {state.favs.map((dato) => (
            <Card key={dato.id} dato={dato} />
          ))}
      </div>
    </>
  );
};

export default Favs;
