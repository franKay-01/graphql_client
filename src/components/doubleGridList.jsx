import React from 'react';

const DoubleItemList = ({ item1, item2 }) => {
  return (
    // <div className="overflow-x-auto">
      <div className="inline-block">
        <div className="grid grid-row-2 gap-4">
          <div className="flex flex-col">
            <img className='image-width' src={item1.image}/>
            {item1.name}
          </div>
          <div className="flex flex-col">
            <img className='image-width' src={item2.image}/>
            {item2.name}
          </div>
        </div>
      </div>
    // </div>
  );
};

export default DoubleItemList;
