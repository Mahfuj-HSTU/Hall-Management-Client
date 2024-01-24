import React from "react";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-slate-900 text-white text-center py-10">
      <footer class="bg-white dark:bg-gray-900">
        <div class="mx-auto w-full max-w-screen-xl">
          <div class="grid grid-cols-2 gap-8 px-2 py-1 lg:py-1 md:grid-cols-6">
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                The University
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="#" class=" hover:underline">
                    About HSTU
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Exam Results
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    HSTU Wikipedia
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Admin Bodies
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Academic
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Faculties & Departments
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Undegraduate Programme
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Postgraduate Programme
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Academic Council
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Useful Links
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Admission
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    IQAC
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    IT Cell
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                International Affairs Section
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Degree Offered
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Academic Requirements
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    How to Apply
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Gallery
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Campus
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    News and Events
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Medical
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Library
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Muktijuddho corner
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Contact
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Hajee Mohammad Danesh Science and Technology University
                    (HSTU),
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Dinajpur-5200, Bangladesh
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Phone: +880-531-61355
                  </a>
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
