import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getZone } from '../../services/zones';
import { Link } from 'react-router-dom'
import './ZoneDetails.css'


export default function ZoneDetails() {
  const [zone, setZone] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchZone = async () => {
      const zonedets = await getZone(id)
      setZone(zonedets)
    }
    fetchZone();
  }, [id])

  const { name, description, intro, vegetables } = zone;
  
  return (
    <div >
      {zone &&
        <div className='zone-container'>
          <h1 className='zone-name'>Zone {name}</h1>
          <p>{description}</p>
          <h1 className='zone-name'>Recommended Vegetables</h1>
          <p>{intro}</p>
          
          {vegetables &&
            vegetables.map((veggie) => {
              return (
                <div>
                <Link to={`/vegetables/${veggie.id}`} className='underline'  >
                  <p className='veggie-details'>{veggie.name}</p>
                </Link>
                </div>
              )
            })
            }
        </div>
      }
      <div className='z-contain-btn'>
      <Link to={`/vegetables/create`} className='underline'>
      <button className='z-btn'> Add Vegetable</button>
      </Link>
      </div>

    </div>
  );
}
