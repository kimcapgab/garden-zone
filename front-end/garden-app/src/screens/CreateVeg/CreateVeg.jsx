import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createVegetable } from "../../services/vegetables";
import "./CreateVeg.css";

export default function CreateVeg({ setToggle }) {
  const [veg, setVeg] = useState({
    name: "",
    description: "",
    sunlight: "",
    care: "",
    image: "",
    tips: "",
    zone: "",
  });

  const nav = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVeg({
      ...veg,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createVegetable(veg);
    setToggle((e) => !e);
    nav(`/`)
  };

  return (
    <div>
      <div className='form-title'>
        <h1>Add Vegetable</h1>
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
              <option value="9">5</option>
              <option value="10">6</option>
              <option value="11">7</option>
              <option value="12">8</option>
              <option value="13">9</option>
              <option value="14">10</option>
              <option value="15">11</option>
              <option value="16">12 and 13</option>
            </select>
          </div>
          <div className="create-container">
            <button className="create-btn" >Create Vegetable</button>
            </div>
        </form>
      </div>
    </div>
  );
}
