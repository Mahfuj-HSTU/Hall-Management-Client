import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../images/hallbanner.jpg';

const HallCard = ({ hall }) => {
  // console.log(hall);
  const { _id, name, img } = hall;
  return (
    <Link
      to={`/hall/${_id}`}
      target='blank'
      className='card w-96 bg-base-100 shadow-xl'>
      <figure>
        <img
          className='h-52 w-full'
          src={img || banner}
          alt='hall images'
        />{' '}
      </figure>
      <div className='card-body text-start'>
        <h2 className='card-title'>{name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </Link>
  );
};

export default HallCard;
