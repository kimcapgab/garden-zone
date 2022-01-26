import React from 'react';
import { getZones } from '../../services/zones';
import { useState, useEffect } from 'react'

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
      <h1>HOME PAGE! testing  see if this works</h1>
      <div>
        {zones &&
          zones.map((zone) => (
            zone.name
          ))}
      <p>Should see the zone names above</p>
      </div>
    </div>
  
    )
}
