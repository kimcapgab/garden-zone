import React from 'react';
import { getZones } from '../../services/zones';
import { useState, useEffect } from 'react'
import './Home.css'

export default function Home() {
  const [zones, setZones] = useState([])

  useEffect(() => {
    const fetchZones = async () => {
      const allZones = await getZones()
      setZones(allZones)
      
    }
    fetchZones()
    console.log(zones)
  }, [])



  return (
    <div>
      <h1 className='home-zone'>Select a Zone</h1>
      <div className='home-buttons'>
        {zones &&
          zones.map((zone) => (
            <button className='zone-buttons'>Zone {zone.name}</button>
          ))}
      </div>
    </div>
  
    )
}
