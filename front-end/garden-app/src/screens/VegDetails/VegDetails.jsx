import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './VegDetails.css'
import { getVegetable } from '../../services/vegetables';

export default function VegDetails() {
  const [veggie, setVeggie] = useState([])
  const {id} = useParams()

  useEffect(() => {
    const fetchVegetable = async () => {
      const vegetable = await getVegetable(id)
      setVeggie(vegetable)
    }
    fetchVegetable();
  }, [id])
  const { name, description, sunlight, care, image, tips } = veggie;

  return (
    <div>
      {veggie &&
        <div className='veggie-container'>
          <h1>{name}</h1>
          <img className='veggie-image' src={image} alt='veggie' />
          <p>{description}</p>
          <h2>Sunlight</h2>
          <p>{sunlight}</p>
          <h2>Care</h2>
          <p>{care}</p>
          <h2>Tips and Considerations</h2>
          <p>{ tips}</p>
        </div>

      }
    </div>
)}
