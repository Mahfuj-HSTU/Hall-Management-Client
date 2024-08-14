import React from 'react';
// import vc from '../../../images/prof_kamruzzaman.jpg';

const Message = () => {
  return (
    <div className='my-10 card card-compact bg-base-100 shadow-2xl rounded-2xl'>
      <h2 className='text-center text-2xl text-white bg-blue-700 font-semibold py-2'>
        Vice Chancellor's Message
      </h2>
      <div className='p-6 px-10'>
        <span className='float-left pr-6 pb-2'>
          <img
            src={'vc'}
            width={250}
            height={150}
            alt='vice chanchellor'
          />
          <b>Vice Chanchellor</b>
        </span>
        <p className='text-justify text-black'>
          Welcome to the website of Hajee Mohammad Danesh Science and Technology
          University (HSTU) which is the first Science and Technology University
          in the northern region of Bangladesh. It stands away from the urban
          din and bustle at a beautiful and scenic location some 13 km north of
          Dinajpur town by the side of the intercity highway that links Dinajpur
          to Dhaka, the capital of Bangladesh. I feel great pleasure in
          expressing my heartiest congratulations and best wishes for the
          gradual but steady development of the HSTU, Dinajpur.
          <br /> It is a matter of satisfaction for us that the university has
          made steady progress in a relatively short period of time in terms of
          expansion of its physical infrastructure and academic programmes. The
          HSTU has been growing rapidly in terms of quality, recognition,
          activities, number of courses, student intake, staff, outreach and
          research during the recent years. The university provides
          multidiscipline education. We have eight faculties such as
          Agriculture, Computer Science and Engineering, Business Studies,
          Fisheries, Engineering, Veterinary and Animal Science, Science, Social
          Science and Humanities and one Post-graduate Studies. Now we have 45
          departments under nine faculties including post graduate studies.
          Presently 195 international students (undergraduate-179 and
          postgraduate-16) are studying in this university; they are from Nepal,
          Bhutan, India, Djibouti, Nigeria and Somalia. We are proud for our
          international students as the number is the highest among the public
          universities in Bangladesh. <br />
          In the continuing task of nation building, HSTU is trying to promote
          excellence in higher education for a vibrant and inclusive society
          through knowledge creation and dissemination. It is making sincere
          efforts to contribute its mite by providing the right kind of human
          resources. It is striving hard to impart quality education to meet
          national and global challenges, towards accomplishing its mission. For
          students, the degree represents certification of competence, and a
          passport to advanced education or gainful employment, and livelihood
          and prosperity.
        </p>
      </div>
    </div>
  );
};

export default Message;
