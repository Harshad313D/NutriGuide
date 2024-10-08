// import React from "react";

// const Contact = () => {
//   return (
//     <section className=" min-h-screen bg-white py-8">
//       <div className="flex items-center justify-center min-h-screen">
//         <div className=" bg-gradient-to-r from-blue-300 to-white shadow-lg rounded-lg p-8 max-w-lg w-full">
//           <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-6">
//             Contact Us
//           </h2>
//           <p className="text-center text-gray-500 mb-8">
//             Got a technical issue? Want to send feedback about a beta feature?
//             Need details about our Business plan? Let us know.
//           </p>
//           <form action="#" className="space-y-6">
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block mb-2 text-sm font-medium text-gray-900"
//               >
//                 Your email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-3"
//                 placeholder="name@gmail.com"
//                 required
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="subject"
//                 className="block mb-2 text-sm font-medium text-gray-900"
//               >
//                 Subject
//               </label>
//               <input
//                 type="text"
//                 id="subject"
//                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-3"
//                 placeholder="Let us know how we can help you"
//                 required
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="message"
//                 className="block mb-2 text-sm font-medium text-gray-900"
//               >
//                 Your message
//               </label>
//               <textarea
//                 id="message"
//                 rows="6"
//                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-3"
//                 placeholder="Leave a comment..."
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="w-full py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
//             >
//               Send message
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="mb-32 pt-18">
      {/* Google Map */}
      <div
        id="map"
        className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d222.920725509577!2d75.36721501556043!3d19.865447687386553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1725095304852!5m2!1sen!2sin"
          width="100%"
          height="480"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Contact Form and Information */}
      <div className="container px-6 md:px-12 ">
        <div className="block rounded-lg bg-[hsla(0,0%,100%,1)] px-6 pt-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300">
          <div className="flex flex-wrap">
            {/* Contact Form */}
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
              <form>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:border-blue-600 focus:text-blue-600 dark:border-neutral-600 dark:focus:border-blue-500"
                    id="name"
                    placeholder="Name"
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="email"
                    className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:border-blue-600 focus:text-blue-600 dark:border-neutral-600 dark:focus:border-blue-500"
                    id="email"
                    placeholder="Email address"
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <textarea
                    className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:border-blue-600 focus:text-blue-600 dark:border-neutral-600 dark:focus:border-blue-500"
                    id="message"
                    rows="4"
                    placeholder="Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="mt-4 sm:mt-6 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 rounded-2xl overflow-hidden text-sm sm:text-base font-medium text-gray-900 group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <span className="relative px-4 sm:px-5 py-2 sm:py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-2xl group-hover:bg-opacity-0">
                    Send
                  </span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="w-full shrink-0 grow-0 basis-auto md:px-3 lg:w-7/12 lg:px-6">
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <div className="mb-6">
                <p className="text-lg font-medium mb-2">
                  Email: NutriGuide@gmail.com
                </p>
                <p className="text-lg font-medium mb-2">
                  Developer: hdexamples@gmail.com
                </p>
                <p className="text-lg font-medium mb-2">Phone: 8624986532</p>
                <p className="text-lg font-medium">
                  Address: Chhatrapati Sambhaji Nagar-431001
                </p>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  <FaFacebookF size={24} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900"
                >
                  <FaLinkedinIn size={24} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-800"
                >
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
