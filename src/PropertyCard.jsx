import React from 'react';
import { FaBookmark } from 'react-icons/fa';
import ImagePlaceholder from './components/ImagePlaceholder';

function PropertyCard({ 
  property, 
  isBookmarked, 
  toggleBookmark 
}) {

  const { photos, property_id, price, display_address } = property;

  const getBookmarkCss = () => isBookmarked ? 'text-red-600' : 'text-yellow-400';

  return (
    <figure className="relative border-2 rounded-lg">

      <div className='relative w-full h-5/6'>
       {photos.length 
          ? <img src={`https://mr0.homeflow.co.uk/${photos[0]}`} alt={display_address} className='rounded-t-lg object-cover h-full w-full' /> 
          : <ImagePlaceholder />
        }
        <button 
          className="absolute -top-2 right-2" 
          title="Click to bookmark this property"
          onClick={() => toggleBookmark(property_id)}
        >
          <FaBookmark className={getBookmarkCss()} size="40" />
        </button>
        <p className="absolute bottom-0 right-0 px-2 py-1 border-t border-l bg-gray-50">{price}</p>
      </div>

      <figcaption className="bg-gray-50 bottom-6 px-4 text-lg h-1/6 rounded-b-lg flex items-center">
        <p className='truncate' title={display_address}>
          {display_address}
        </p>
      </figcaption>

    </figure>
  );
};

export default PropertyCard;
