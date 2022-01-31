import React from 'react';
import { getZones } from '../../services/zones';
import { useState, useEffect } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

export default function Home({loggedIn, setLoggedIn, toggle, setToggle   }) {
  const [zones, setZones] = useState([])

  useEffect(() => {
    const fetchZones = async () => {
      const allZones = await getZones()
      setZones(allZones)
    }
    fetchZones()
    
  }, [toggle])



  return (
    <div>
      
        <div>
    
      <h1 className='home-zone'>Select a Zone</h1>
      <h3 className='hone-link'>Click <a className='link-zip' href='https://planthardiness.ars.usda.gov/' target="_blank"  rel="noreferrer" >here</a> to find out what zone you live in.</h3>
      <div className='home-buttons'>
        {zones &&
          zones.map((zone) => (
            <div  className={zone.id}>
            <Link to={`/zones/${zone.id}`} className='zone-link'>
            <button className='zone-buttons' key={zone.id}>Zone {zone.name}</button>
            </Link>  
            </div>
          ))}
          </div>
          
      </div>  
      
      
        <div>
          <h1 className='home-into'>USDA Plant Hardiness Zone Map is the standard by which gardeners and growers can determine which plants are most likely to thrive at a location.</h1>
          <h1 className='home-into'>Login or create an account now to join the gardening community in order to add vegetables and make any edits. </h1>
          <div className='home-image-container'>
          <img className='home-image' src="https://res.cloudinary.com/dn2x2ldxj/image/upload/v1643603025/Project%204/Plant_Gardening_Instagram_Post_1_hyzons.png" alt="home-gardeners" />
          </div>
        </div>
      
      



      
    </div>

  
    )
}
