import React from 'react';
import imageUrl from '../../../../images/avater.png';

const Message = ({ hall }) => {
  const { name } = hall;
  return (
    <div className='my-10 card card-compact bg-base-100 shadow-2xl rounded-2xl max-w-screen-xl mx-auto'>
      <h2 className='text-center text-2xl text-white bg-blue-600 font-semibold py-2'>
        Hall Super Message
      </h2>
      <div className='p-6 px-10'>
        <span className='float-left pr-6 pb-2'>
          <img
            src={imageUrl}
            width={250}
            height={200}
            alt='hall super'
          />
          <b>
            Hall Super <br />
            {name}
          </b>
        </span>
        <p className='text-justify text-black'>
          Greetings and welcome to {name} of Hajee Mohammad Danesh Science &
          Technology University (HSTU), Dinajpur, Bangladesh. Behind every
          successful man, there is a woman. When it comes to the success of the
          Father of the Nation, Bangabandhu Sheikh Mujibur Rahman, everyone
          confidently also names a woman for inspiring him throughout his life –
          Sheikh Fazilatunnesa Mujib, the wife of Bangabandhu. Bangamata Sheikh
          Fazilatunnesa Mujib always remained behind the scenes and encouraged
          Bangabandhu for the independence of Bangladesh. This hall
          “Fazilatunnesa Mujib Hall” was named after for showing respect on her
          in August 20, 2011. FMH is the first female accommodation of HSTU
          campus, with a vision to provide a safe and comfortable living
          environment that enhances the academic success and achievements of the
          students. <br /> Living in a residential hall is one thing that
          students should not miss during their university days as halls are not
          only places of accommodation but also important platforms to grow and
          learn together outside the classrooms. The residence life experience
          in FMH hall is designed to support the students through their academic
          career as you learn about themselves and about living in a community
          with others. This is a valuable part of our educational experience,
          and we work hard to maintain an environment that fosters social
          inclusiveness, responsibility, self-governance and accountability,
          academic achievement, community development, and personal fulfilment.
          Currently, 2881 students are attached to this hall, while 621 are
          living in-house, including 35 international students from Somalia,
          Nepal, and Bhutan. <br /> Residents from various national and cultural
          backgrounds embrace the opportunity for new experiences, ideas, and
          even the challenges to learn living together and yet, independently.
          One three-storied and two new five-storied building with furnished
          student rooms, reading rooms, prayer rooms, separate canteen & dining,
          kitchen and guest room provide an environment for holistic learning
          and interpersonal growth. To ensure a living-learning experience; all
          residents are encouraged to participate in co-curricular activities as
          sports competitions, cultural programs and student feast arranged by
          hall authority. At present, with assistance by the university
          authority, a team including the Hall Super, three Assistant Hall
          Supers, and four staffs are working on the further development of a
          healthy, serene and supportive atmosphere for the residents. Whenever
          a student needs, we are available for resource and referral
          information as well as specific requests. We seek to build tomorrows
          leaders with prosperous life experiences and future goals.
        </p>
      </div>
    </div>
  );
};

export default Message;
