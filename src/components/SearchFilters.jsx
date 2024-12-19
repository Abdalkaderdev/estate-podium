import React, { useState } from 'react';

    function SearchFilters({ onFilterChange }) {
      const [filters, setFilters] = useState({
        location: '',
        price: '',
        size: '',
        type: '',
        amenities: []
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters(prevFilters => ({
          ...prevFilters,
          [name]: value
        }));
      };

      const handleAmenityChange = (e) => {
        const { value, checked } = e.target;
        setFilters(prevFilters => ({
          ...prevFilters,
          amenities: checked
            ? [...prevFilters.amenities, value]
            : prevFilters.amenities.filter(amenity => amenity !== value)
        }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        onFilterChange(filters);
      };

      return (
        <form onSubmit={handleSubmit}>
          <input type="text" name="location" placeholder="Location" value={filters.location} onChange={handleChange} />
          <input type="text" name="price" placeholder="Price" value={filters.price} onChange={handleChange} />
          <input type="text" name="size" placeholder="Size" value={filters.size} onChange={handleChange} />
          <select name="type" value={filters.type} onChange={handleChange}>
            <option value="">Type</option>
            <option value="apartment">Apartment</option>
            <option value="villa">Villa</option>
            <option value="office">Office</option>
          </select>
          <div>
            <label>
              <input type="checkbox" name="amenities" value="pool" checked={filters.amenities.includes('pool')} onChange={handleAmenityChange} />
              Pool
            </label>
            <label>
              <input type="checkbox" name="amenities" value="gym" checked={filters.amenities.includes('gym')} onChange={handleAmenityChange} />
              Gym
            </label>
            <label>
              <input type="checkbox" name="amenities" value="parking" checked={filters.amenities.includes('parking')} onChange={handleAmenityChange} />
              Parking
            </label>
          </div>
          <button type="submit">Search</button>
        </form>
      );
    }

    export default SearchFilters;
