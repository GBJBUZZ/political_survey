import React from "react";

const DonationSection = () => {
  return (
    <div className="bg-[#DFE9FF] p-8 rounded-lg mb-12">
      <h2 className="text-m text-blue-700 font-bold mb-5">Donation</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="pr-10">
          <h3 className="text-3xl font-semibold mb-7">
            Strengthen Politary with Your Support
          </h3>
          <p className="text-s font-normal text-gray-600 mb-4">
            Your support is crucial in strengthening Politary and driving
            positive change. Join us in making a lasting impact by contributing
            your voice, efforts, and donations.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <svg
                className="w-10 h-10 text-indigo-600 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="pl-4">
                <h4 className="font-bold text-gray-700">
                  Clear Vision and Mission
                </h4>
                <p className="text-sm text-gray-600">
                  We are dedicated to understanding and fulfilling the
                  requirements of the political ecosystem.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <svg
                className="w-10 h-10 text-indigo-600 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="pl-4">
                <h4 className="font-bold text-gray-700">
                  Transparency and Accountability
                </h4>
                <p className="text-sm text-gray-600">
                  Transparency and accountability are the cornerstones of our
                  commitment to fostering trust and ensuring responsible
                  actions.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <svg
                className="w-10 h-10 text-indigo-600 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="pl-4">
                <h4 className="font-bold text-gray-700">
                  Ability to Move Forward
                </h4>
                <p className="text-s text-gray-600">
                  Our ability to move forward is driven by adaptability,
                  innovation, and a forward-thinking approach.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="bg-white flex flex-col items-center p-4 shadow-md">
          <form className="w-full max-w-lg mx-auto  sm:px-4 sm:py-6">
            <div className="text-center mb-4">
              <h2 className="text-xl sm:text-2xl font-bold mb-2 text-center">
                Make a Donation
              </h2>
              <p className="text-gray-600 text-xs sm:text-sm px-2">
                Make a donation to support our political initiatives and help
                drive positive change in our community.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {/* Amount */}
              <div>
                <label
                  className="block text-gray-700 text-sm font-medium mb-1.5"
                  htmlFor="amount"
                >
                  Amount
                </label>
                <input
                  className="w-full px-3 py-2.5 text-sm rounded-lg border border-gray-300 bg-[#f0efff] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  id="amount"
                  type="number"
                  placeholder="Enter donation amount"
                />
              </div>

              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label
                    className="block text-gray-700 text-sm font-medium mb-1.5"
                    htmlFor="first-name"
                  >
                    First Name
                  </label>
                  <input
                    className="w-full px-3 py-2.5 text-sm rounded-lg border border-gray-300 bg-[#f0efff] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    id="first-name"
                    type="text"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-700 text-sm font-medium mb-1.5"
                    htmlFor="last-name"
                  >
                    Last Name
                  </label>
                  <input
                    className="w-full px-3 py-2.5 text-sm rounded-lg border border-gray-300 bg-[#f0efff] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    id="last-name"
                    type="text"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              {/* Contact Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label
                    className="block text-gray-700 text-sm font-medium mb-1.5"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full px-3 py-2.5 text-sm rounded-lg border border-gray-300 bg-[#f0efff] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-700 text-sm font-medium mb-1.5"
                    htmlFor="phone"
                  >
                    Phone Number
                  </label>
                  <input
                    className="w-full px-3 py-2.5 text-sm rounded-lg border border-gray-300 bg-[#f0efff] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              {/* Note */}
              <div>
                <label
                  className="block text-gray-700 text-sm font-medium mb-1.5"
                  htmlFor="note"
                >
                  Note
                </label>
                <textarea
                  className="w-full px-3 py-2.5 text-sm rounded-lg border border-gray-300 bg-[#f0efff] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                  id="note"
                  placeholder="Leave a note (optional)"
                  rows="4"
                />
              </div>

              {/* Submit Button */}
              <div className="mt-4 sm:mt-6 text-center">
                <button className="w-full md:w-auto md:px-10 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition duration-300 shadow-sm">
                  Donate Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DonationSection;
