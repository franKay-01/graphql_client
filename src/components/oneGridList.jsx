import React from 'react';

const ItemList = ({ item }) => {
  return (
    // <div className="overflow-x-auto">
      <div className="inline-block">
        <div className="grid grid-cols-1 gap-4">
          <div className="flex flex-col grid-item-height">
            <img className='image-width' src={item.image}/>
            {item.name}
          </div>
        </div>
      </div>
    // </div>
  );
};

export default ItemList;
