import React from 'react';

    function PropertyCard({ property }) {
      return (
        <div className="property-card">
          <img src={property.image} alt={property.title} />
          <h2>{property.title}</h2>
          <p>{property.description}</p>
          <p>Price: {property.price}</p>
          <p>Size: {property.size}</p>
          <p>Location: {property.location}</p>
          <p>Amenities: {property.amenities.join(', ')}</p>
          <p>Contact: {property.contact}</p>
        </div>
      );
    }

    export default PropertyCard;
