import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './VegDetails.css'
import { getVegetable } from '../../services/vegetables';
import { Link } from 'react-router-dom'

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
    <div className="veg-details-all">
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
      <div className='edit-btn-container'>
      <Link to={`/vegetables/edit/${id}`} className='underline'>
      <button className='z-btn'> Edit Vegetable</button>
        </Link>
        <img className="plant" src="https://res.cloudinary.com/dn2x2ldxj/image/upload/v1643603166/Project%204/Plant_Gardening_Instagram_Post_2_fomq0y.png" alt="edit-image" />
        </div>
    </div>
)}
