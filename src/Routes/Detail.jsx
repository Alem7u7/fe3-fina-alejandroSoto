import { useParams} from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import axios from "axios";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  const params = useParams();
  const url = "https://jsonplaceholder.typicode.com/users/" + params.id;
  const [datos, setDatos] = useState([]);

  useEffect(()=>{
        axios(url).then((res)=>{
            console.log(res.data);
            setDatos(res.data);
        })
    },[]);
  


  return (
    <>
      <h1>Detail Dentist ID: </h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{datos.name}</td>
            <td>{datos.email}</td>
            <td>{datos.phone}</td>
            <td>{datos.website}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Detail