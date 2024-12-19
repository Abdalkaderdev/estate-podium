import React, { useState } from 'react';
    import PropertyList from '../components/PropertyList.jsx';
    import SearchFilters from '../components/SearchFilters.jsx';

    const initialProperties = [
      {
        id: 1,
        title: 'Luxury Villa',
        description: 'A beautiful villa with a pool and garden.',
        price: '$500,000',
        size: '3000 sq ft',
        location: 'Baghdad',
        amenities: ['pool', 'garden'],
        contact: 'Agent A',
        image: 'path/to/image1.jpg'
      },
      {
        id: 2,
        title: 'Modern Apartment',
        description: 'A modern apartment with a balcony.',
        price: '$200,000',
        size: '1500 sq ft',
        location: 'Erbil',
        amenities: ['balcony', 'parking'],
        contact: 'Agent B',
        image: 'path/to/image2.jpg'
      }
    ];

    function Listings() {
      const [properties, setProperties] = useState(initialProperties);

      const handleFilterChange = (filters) => {
        const filteredProperties = initialProperties.filter(property => {
          return (
            property.location.includes(filters.location) &&
            property.price.includes(filters.price) &&
            property.size.includes(filters.size) &&
            (filters.type ? property.title.includes(filters.type) : true) &&
            filters.amenities.every(amenity => property.amenities.includes(amenity))
          );
        });
        setProperties(filteredProperties);
      };

      return (
        <div>
          <h1>Property Listings</h1>
          <SearchFilters onFilterChange={handleFilterChange} />
          <PropertyList properties={properties} />
        </div>
      );
    }

    export default Listings;
