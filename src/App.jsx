import React, { useState, useEffect } from 'react';
import Header from './Header';
import PropertyCard from './PropertyCard';

function App() {
  const [properties, setProperties] = useState();
  const [searchTerm, setSearchTerm] = useState('');

  // use this state to keep track of the user's saved/bookmarked properties
  const [savedPropertiesIds, setSavedPropertiesIds] = useState([]);

  useEffect(() => {
    const fetchPropertyData = async () => {
      const response = await fetch('/property-data.json');
      const json = await response.json();

      setProperties(json.result.properties.elements);
    };

    fetchPropertyData();
  }, []);

  const toggleBookmark = (propertyId) => {
    if(savedPropertiesIds.includes(propertyId)) {
      setSavedPropertiesIds(savedPropertiesIds.filter(id => id !== propertyId))
    } else {
      setSavedPropertiesIds([
        ...savedPropertiesIds,
        propertyId
      ])
    }
  }

  const getFilteredProperties = () => {
    const filterCallback = p => 
      p.short_description 
        ? p.short_description.toLowerCase().includes(
            searchTerm.toLowerCase()
          ) 
        : false;

    return searchTerm 
      ? properties.filter(filterCallback) 
      : properties;
  }

  return (
    <div className="container mx-auto my-5">
      <Header setSearchTerm={setSearchTerm} />

      <div className="grid grid-cols-1 gap-4 mt-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {!!properties && getFilteredProperties().map((property) => 
          <PropertyCard 
            key={property.property_id} 
            property={property} 
            isBookmarked={savedPropertiesIds.includes(property.property_id)} 
            toggleBookmark={toggleBookmark} 
          />)
          }
      </div>
    </div>
  );
}

export default App;
