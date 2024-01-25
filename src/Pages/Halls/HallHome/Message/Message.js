import React from 'react';
import { FcBusinessman } from 'react-icons/fc';

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
            src={<FcBusinessman />}
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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
          veniam ab officia dolore, error beatae, maxime eum distinctio, quaerat
          iusto libero iure quae porro! Temporibus soluta ex perferendis
          debitis, molestiae culpa impedit voluptate, atque doloribus molestias
          quis maxime adipisci repudiandae enim facilis! Aspernatur omnis animi
          at eveniet, facere enim temporibus, suscipit eaque accusamus non
          libero voluptatum laudantium quod eum in maiores eligendi? Culpa,
          exercitationem sunt repellendus ipsum possimus, blanditiis consequatur
          praesentium libero molestiae atque perspiciatis iure neque nam
          reprehenderit. Molestiae?
          <br /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Corporis blanditiis fuga iste alias expedita deserunt non, velit
          molestias aliquam iusto in? Architecto expedita nemo est voluptatibus,
          eos quos omnis odit? Dolores earum numquam dolorem error aspernatur
          explicabo facere. Aliquid deleniti nam omnis saepe, in sed quod
          voluptatibus vitae odio tempore veritatis explicabo provident
          doloremque maxime suscipit minima ratione reprehenderit impedit! Magni
          ipsa quis quos, veritatis ut quaerat unde! Maiores tenetur corrupti
          dicta ab magnam veritatis sunt ratione voluptatibus, minus quos modi
          consequatur. Nihil minus mollitia quisquam rem consectetur sapiente
          quam, corrupti similique asperiores deserunt, nisi ea animi odio
          eveniet rerum. <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          nihil quis amet aspernatur harum, vel sint ex hic dolore reiciendis
          beatae numquam nostrum ab iure sapiente alias optio. Ipsam aliquid
          voluptates autem eius neque at dicta totam qui error. Iure, laborum.
          Amet libero atque iure, ad voluptatibus vero consequuntur voluptatum.
        </p>
      </div>
    </div>
  );
};

export default Message;
