import React from 'react';
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getZone, updateZone, deleteZone } from '../../services/zones';


export default function EditZone() {
  const [zone, setZone] = useState({
    name: "",
    description: "",
    intro: "",
    vegetables: []
  });

  const [deleteToggle, setDeleteToggle] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchZone = async () => {
      const zone = await getZone(id);
      setZone(zone);
    };
    fetchZone();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setZone({
      ...zone,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateZone(id, zone)
    navigate(`/zones/${id}`)
  }

  const handleDelete = () => {
    deleteZone(id);
    navigate("/");
  }

  return (
    <div>
      <div className='form-title'>
        <h1>Edit Zone</h1>
        </div>
    <div className="form-container">
      <form className="create-form" onSubmit={handleSubmit}>
        <div className="inner-create-form">
          <input value={zone.name} name="name" placeholder="Name" onChange={handleChange} />
          <input value={zone.description} name="description" onChange={handleChange} placeholder="Description" />
          <input value={zone.intro} name="intro" onChange={handleChange} placeholder="Intro" />
        </div>
        </form>

        {deleteToggle ? (
          <div className='delete-edits'>
            <h3 >Are You Sure you would like to delete this Zone?</h3>
            <button className='edit-btn' onClick={() => setDeleteToggle(false)}>No, Do not delete {zone.name}</button>
            <button className='edit-btn' onClick={handleDelete}>{`Yes, Delete ${zone.name}`}</button>
            
          </div>
        ) : (
            <div className='delete-edits'>
        <button className="edit-btn" onClick={handleSubmit}>Save Edits</button>
              <button className="edit-btn" onClick={() => setDeleteToggle(true)}>Delete Zone</button>
              </div>
        )}
    </div>
  </div>
  

  )
  
}