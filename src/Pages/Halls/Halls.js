import React from 'react';
import HallCard from './HallCard';
import { ServerLink } from '../../Hooks/useServerLink';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Shared/Loading/Loading';

const Halls = () => {
  const { data: Halls = [], isLoading } = useQuery({
    queryKey: ['halls'],
    queryFn: () => fetch(`${ServerLink}/api/halls`).then((res) => res.json()),
  });
  // console.log(Halls);

  if (isLoading) {
    <Loading></Loading>;
  }

  return (
    <div className='max-w-screen-xl mx-auto mb-9'>
      <h2 className='text-start px-4 py-6 text-blue-900 text-lg'>
        Students admitted to the faculties reside in or are attached to a hall
        of residence. The university has{' '}
        <span className='font-bold italic'>nine</span> halls of residence{' '}
        <span className='font-bold italic'>four</span> for male students,{' '}
        <span className='font-bold italic'>four</span> for female students and{' '}
        <span className='font-bold italic'>one</span> for international
        students. Halls are headed by a provost (called Hall Super) who is
        assisted by house tutors and assistant house tutors. The administration
        of a dormitory is controlled by a Hall President and his/her assistants.
      </h2>
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
