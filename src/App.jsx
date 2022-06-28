import { useState, useEffect } from 'react';
import Header from './Header';
import PropertyCard from './PropertyCard';

function App() {
  const [properties, setProperties] = useState();

  useEffect(() => {
    const fetchPropertyData = async () => {
      const response = await fetch('/property-data.json');
      const json = await response.json();

      setProperties(json.result.properties.elements);
    };

    fetchPropertyData();
  }, []);

  return (
    <div className="container mx-auto my-5">
      <Header />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-5">
        {!!properties && properties.map((property) => <PropertyCard key={property.property_id} property={property} />)}
      </div>
    </div>
  );
}

export default App;
