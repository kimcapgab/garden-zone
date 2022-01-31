import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createZone } from "../../services/zones";
import "./CreateZone.css";

export default function CreateZone({ setToggle }) {
  const [zone, setZone] = useState({
    name: "",
    description: "",
    intro: "",
    vegetables: []
  });

  const nav = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setZone({
      ...zone,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createZone(zone);
    nav('/')
  };

  return (
    <div>
      <div className='form-title'>
        <h1>Add Zone</h1>
        </div>
      <div className="form-container">
        <form className="create-form" onSubmit={handleSubmit}>
          <div className="inner-create-form">
            <input value={zone.name} name="name" placeholder="Name" onChange={handleChange} />
            <input value={zone.description} name="description" onChange={handleChange} placeholder="Description" />
            <input value={zone.sunlight} name="intro" onChange={handleChange} placeholder="Intro" />
          </div>
          <div className="create-container">
            <button className="create-btn" >Create Zone</button>
            </div>
        </form>
      </div>
    </div>
  );
}