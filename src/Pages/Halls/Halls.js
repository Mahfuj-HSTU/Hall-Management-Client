import React, { useEffect, useState } from 'react';
import HallCard from './HallCard';

const Halls = () => {
  const [Halls, setHalls] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => setHalls(data));
  }, []);
  // console.log(Halls);

  return (
    <div>
      <h2>All Halls</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6'>
        {Halls.map((hall) => (
          <HallCard
            hall={hall}
            key={hall.id}></HallCard>
        ))}
      </div>
    </div>
  );
};

export default Halls;
