import React from 'react';
import { getZones } from '../../services/zones';
import { useState, useEffect } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout/Layout';

export default function Home(props) {
  const [zones, setZones] = useState([])

  useEffect(() => {
    const fetchZones = async () => {
      const allZones = await getZones()
      setZones(allZones)
    }
    fetchZones()
    
  }, [])



  return (
  
    <div>
      <h1 className='home-zone'>Select a Zone</h1>
      <div className='home-buttons'>
        {zones &&
          zones.map((zone) => (
            <div>
            <Link to={`/zones/${zone.id}`} className='zone-link'>
            <button className='zone-buttons' key={zone.id}>Zone {zone.name}</button>
            </Link>  
            </div>
          ))}
      </div>
    </div>

  
    )
}
