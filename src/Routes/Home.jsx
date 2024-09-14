import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import { useGlobalContext } from '../Components/utils/context';



const Home = () => {
  
  const { state } = useGlobalContext(); 
  
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {state.data.map((dato) => (
          <Card key={dato.id} dato={dato} />
        ))}
      </div>
    </main>
  )

}

export default Home;
