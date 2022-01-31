import React from 'react';
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getVegetable, updateVegetable, deleteVegetable } from '../../services/vegetables';
import { Link } from 'react-router-dom'
import "./EditVeg.css"

export default function EditVeg() {
  const [veg, setVeg] = useState({
    name: "",
    description: "",
    sunlight: "",
    care: "",
    image: "",
    tips: "",
    zone: "",
  });

  const [deleteToggle, setDeleteToggle] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchVeg = async () => {
      const veg = await getVegetable(id);
      setVeg(veg);
    };
    fetchVeg();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVeg({
      ...veg,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateVegetable(id, veg)
    navigate(`/vegetables/${id}`)
  }

  const handleDelete = () => {
    deleteVegetable(id);
    navigate("/");
  }

  return (
    <div>
      <div className='form-title'>
        <h1>Edit Vegetable</h1>
        </div>
    <div className="form-container">
      <form className="create-form" onSubmit={handleSubmit}>
        <div className="inner-create-form">
          <input value={veg.name} name="name" placeholder="Name" onChange={handleChange} />
          <input value={veg.description} name="description" onChange={handleChange} placeholder="Description" />
          <input value={veg.sunlight} name="sunlight" onChange={handleChange} placeholder="Sunlight" />
          <input value={veg.care} name="care" onChange={handleChange} placeholder="Care" />
          <input value={veg.tips} name="tips" onChange={handleChange} placeholder="Tips and Considerations" />
          <input value={veg.image} name="image" onChange={handleChange} placeholder="Image" />
          <select
            name="zone"
            value={veg.zone}
            onChange={handleChange}
            >
            <option>Zone</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12 and 13">12 and 13</option>
          </select>
        </div>
        </form>

        {deleteToggle ? (
          <div className='delete-edits'>
            <h3 >Are You Sure you would like to delete this vegetable?</h3>
            <button className='edit-btn' onClick={() => setDeleteToggle(false)}>No, Do not delete {veg.name}</button>
            <button className='edit-btn' onClick={handleDelete}>{`Yes, Delete ${veg.name}`}</button>
            
          </div>
        ) : (
            <div className='delete-edits'>
        <button className="edit-btn" onClick={handleSubmit}>Save Edits</button>
              <button className="edit-btn" onClick={() => setDeleteToggle(true)}>Delete Vegetable</button>
              </div>
        )}
    </div>
  </div>
  

  )
  
}



