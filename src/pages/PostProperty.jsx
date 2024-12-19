import React, { useState } from 'react';

    function PostProperty({ onPost }) {
      const [property, setProperty] = useState({
        title: '',
        description: '',
        price: '',
        size: '',
        location: '',
        amenities: [],
        contact: '',
        image: ''
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setProperty(prevProperty => ({
          ...prevProperty,
          [name]: value
        }));
      };

      const handleAmenityChange = (e) => {
        const { value, checked } = e.target;
        setProperty(prevProperty => ({
          ...prevProperty,
          amenities: checked
            ? [...prevProperty.amenities, value]
            : prevProperty.amenities.filter(amenity => amenity !== value)
        }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        onPost(property);
      };

      return (
        <form onSubmit={handleSubmit}>
          <input type="text" name="title" placeholder="Title" value={property.title} onChange={handleChange} required />
          <textarea name="description" placeholder="Description" value={property.description} onChange={handleChange} required></textarea>
          <input type="text" name="price" placeholder="Price" value={property.price} onChange={handleChange} required />
          <input type="text" name="size" placeholder="Size" value={property.size} onChange={handleChange} required />
          <input type="text" name="location" placeholder="Location" value={property.location} onChange={handleChange} required />
          <input type="text" name="contact" placeholder="Contact" value={property.contact} onChange={handleChange} required />
          <input type="text" name="image" placeholder="Image URL" value={property.image} onChange={handleChange} required />
          <div>
            <label>
              <input type="checkbox" name="amenities" value="pool" checked={property.amenities.includes('pool')} onChange={handleAmenityChange} />
              Pool
            </label>
            <label>
              <input type="checkbox" name="amenities" value="gym" checked={property.amenities.includes('gym')} onChange={handleAmenityChange} />
              Gym
            </label>
            <label>
              <input type="checkbox" name="amenities" value="parking" checked={property.amenities.includes('parking')} onChange={handleAmenityChange} />
              Parking
            </label>
          </div>
          <button type="submit">Post Property</button>
        </form>
      );
    }

    export default PostProperty;
