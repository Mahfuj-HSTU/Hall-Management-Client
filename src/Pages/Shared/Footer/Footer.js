import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-slate-900 text-white text-start py-10'>
      <footer class='bg-white dark:bg-gray-900'>
        <div class='mx-auto w-full max-w-screen-xl'>
          <div class='grid grid-cols-2 gap-8 px-2 py-1 lg:py-1 md:grid-cols-6'>
            <div>
              <h2 class='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
                The University
              </h2>
              <ul class='text-gray-500 dark:text-gray-400 font-medium'>
                <li class='mb-4'>
                  <Link
                    to=''
                    class=' hover:underline'>
                    About HSTU
                  </Link>
                </li>
                <li class='mb-4'>
                  <Link
                    to=''
                    class='hover:underline'>
                    Exam Results
                  </Link>
                </li>
                <li class='mb-4'>
                  <Link
                    to=''
                    class='hover:underline'>
                    HSTU Wikipedia
                  </Link>
                </li>
                <li class='mb-4'>
                  <Link
                    to=''
                    class='hover:underline'>
                    Admin Bodies
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 class='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
                Academic
              </h2>
              <ul class='text-gray-500 dark:text-gray-400 font-medium'>
                <li class='mb-4'>
                  <Link
                    to=''
                    class='hover:underline'>
                    Faculties & Departments
                  </Link>
                </li>
                <li class='mb-4'>
                  <Link
                    to=''
                    class='hover:underline'>
                    Undegraduate Programme
                  </Link>
                </li>
                <li class='mb-4'>
                  <Link
                    to=''
                    class='hover:underline'>
                    Postgraduate Programme
                  </Link>
                </li>
                <li class='mb-4'>
                  <Link
                    to=''
                    class='hover:underline'>
                    Academic Council
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 class='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
                Useful Links
              </h2>
              <ul class='text-gray-500 dark:text-gray-400 font-medium'>
                <li class='mb-4'>
                  <Link
                    to=''
                    class='hover:underline'>
                    Admission
                  </Link>
                </li>
                <li class='mb-4'>
                  <Link
                    to=''
                    class='hover:underline'>
                    IQAC
                  </Link>
                </li>
                <li class='mb-4'>
                  <Link
                    to=''
                    class='hover:underline'>
                    IT Cell
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 class='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
                International Affairs Section
              </h2>
              <ul class='text-gray-500 dark:text-gray-400 font-medium'>
                <li class='mb-4'>
                  <Link
                    to=''
                    class='hover:underline'>
                    Degree Offered
                  </Link>
                </li>
                <li class='mb-4'>
                  <Link
                    to=''
                    class='hover:underline'>
                    Academic Requirements
                  </Link>
                </li>
                <li class='mb-4'>
                  <Link
                    to=''
                    class='hover:underline'>
                    How to Apply
                  </Link>
                </li>
                <li class='mb-4'>
                  <Link
                    to=''
                    class='hover:underline'>
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 class='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
                Campus
              </h2>
              <ul class='text-gray-500 dark:text-gray-400 font-medium'>
                <li class='mb-4'>
                  <Link
                    to=''
                    class='hover:underline'>
                    News and Events
                  </Link>
                </li>
                <li class='mb-4'>
                  <Link
                    to=''
                    class='hover:underline'>
                    Medical
                  </Link>
                </li>
                <li class='mb-4'>
                  <Link
                    to=''
                    class='hover:underline'>
                    Library
                  </Link>
                </li>
                <li class='mb-4'>
                  <Link
                    to=''
                    class='hover:underline'>
                    Muktijuddho corner
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 class='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
                Contact
              </h2>
              <ul class='text-gray-500 dark:text-gray-400 font-medium'>
                <li class='mb-4'>
                  <Link
                    to=''
                    class='hover:underline'>
                    Hajee Mohammad Danesh Science and Technology University
                    (HSTU),
                  </Link>
                </li>
                <li class='mb-4'>
                  <Link
                    to=''
                    class='hover:underline'>
                    Dinajpur-5200, Bangladesh
                  </Link>
                </li>
                <li class='mb-4'>
                  <Link
                    to=''
                    class='hover:underline'>
                    Phone: +880-531-61355
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
