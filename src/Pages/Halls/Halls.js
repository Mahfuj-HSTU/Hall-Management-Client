import React, { useEffect, useState } from 'react';

const Halls = () => {
  const [Hall, setHall] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => setHall(data));
  }, []);
  console.log(Hall);

  return (
    <div>
      <h2>All Halls</h2>
    </div>
  );
};

export default Halls;
