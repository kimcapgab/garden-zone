import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getZone } from '../../services/zones';
import { getVegetables } from '../../services/vegetables';
import './ZoneDetails.css'


export default function ZoneDetails() {
  const [zone, setZone] = useState([]);
  const [vegetablesAll, setVegetablesAll] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchZone = async () => {
      const zonedets = await getZone(id)
      setZone(zonedets)
    }
    fetchZone();
  }, [id])

  const { name, description, intro, vegetables } = zone;

  useEffect(() => {
    const fetchVegetables = async () => {
      const allVegs = await getVegetables()
      setVegetablesAll(allVegs)
    }
    fetchVegetables();
  }, [])
  
  console.log(vegetablesAll)
  const zoneVeg = vegetablesAll.forEach(function (item) {
    console.log(item.name)
  })

  console.log(zoneVeg)

  return (
    <div >
      {zone &&
        <div className='zone-container'>
          <h1 className='zone-name'>Zone {name}</h1>
          <p>{description}</p>
          <h1 className='zone-name'>Recommended Vegetables</h1>
          <p>{intro}</p>
          
          {vegetables &&
            vegetables.map((veg) => (
              <div>
                <p >{veg}</p>
              </div>
            ))}
          
          {/* {vegetablesAll && vegetables &&
            vegetablesAll.forEach(function (item) {
              vegetables.map((veg) => (
                if (item.zone === veg) {
                  
                }
                console.log(veg)
              ))
              console.log(item.name)
              
              // if (item.zone === { vegetables })
              //   console.log("yay")
            })
          } */}
        </div>
      }
      <div className='z-contain-btn'>
      <button className='z-btn' >Add Vegetable</button>
      </div>

    </div>
  );
}
