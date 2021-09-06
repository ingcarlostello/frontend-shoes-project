import React from 'react';

// @Components
import Card from '../Card/Card';



const MenSection = () => {
    return (
      <div>
        <div class="grid grid-cols-4 gap-4 mx-16">
          <div className="bg-blue-200">
              <Card />
          </div>
          <div className="bg-blue-200"><Card /></div>
          <div className="bg-blue-200"><Card /></div>
          <div className="bg-blue-200"><Card /></div>
        </div>
      </div>
    );
};

export default MenSection;