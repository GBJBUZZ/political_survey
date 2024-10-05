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
        <div className="bg-white flex flex-col items-center p-10 shadow-md">
          <h3 className="text-xl font-semibold mb-3">Make a Donation</h3>
          <p className="text-gray-600 mb-4 text-xs text-center">
            Make a donation to support our political initiatives and help drive
            positive change in our community.
          </p>
          <form className="w-full max-w-lg">
            <div className="mb-2">
              <label
                className="block text-gray-700 text-sm font-semibold mb-1 mt-2"
                htmlFor="amount"
              >
                Amount
              </label>
              <input
                className="appearance-none border border-[#dee2e6] rounded w-full py-2 px-3 bg-[#f0efff] text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
                id="amount"
                type="number"
                placeholder="Enter donation amount"
                style={{ fontSize: "0.75rem" }} // xs size
              />
            </div>

            {/* First Name and Last Name */}
            <div className="flex flex-col sm:flex-row justify-between mb-2">
              <div className="w-full sm:w-1/2 mr-2 mb-2 sm:mb-0">
                <label
                  className="block text-gray-500 text-xs font-semibold mb-1 mt-2"
                  htmlFor="first-name"
                >
                  First Name
                </label>
                <input
                  className="appearance-none border border-[#dee2e6] rounded w-full py-2 px-3 bg-[#f0efff] text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
                  id="first-name"
                  type="text"
                  placeholder="Enter your first name"
                  style={{ fontSize: "0.75rem" }}
                />
              </div>
              <div className="w-full sm:w-1/2 ml-2">
                <label
                  className="block text-gray-500 text-xs font-semibold mb-1 mt-2"
                  htmlFor="last-name"
                >
                  Last Name
                </label>
                <input
                  className="appearance-none border border-[#dee2e6] rounded w-full py-2 px-3 bg-[#f0efff] text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
                  id="last-name"
                  type="text"
                  placeholder="Enter your last name"
                  style={{ fontSize: "0.75rem" }}
                />
              </div>
            </div>

            {/* Email and Phone Number */}
            <div className="flex flex-col sm:flex-row justify-between mb-2">
              <div className="w-full sm:w-1/2 mr-2 mb-2 sm:mb-0">
                <label
                  className="block text-gray-500 text-xs font-semibold mb-1 mt-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="appearance-none border border-[#dee2e6] rounded w-full py-2 px-3 bg-[#f0efff] text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  style={{ fontSize: "0.75rem" }}
                />
              </div>
              <div className="w-full sm:w-1/2 ml-2">
                <label
                  className="block text-gray-500 text-xs font-semibold mb-1 mt-2"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <input
                  className="appearance-none border border-[#dee2e6] rounded w-full py-2 px-3 bg-[#f0efff] text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  style={{ fontSize: "0.75rem" }}
                />
              </div>
            </div>

            {/* Note */}
            <div className="mb-2">
              <label
                className="block text-gray-500 text-xs font-semibold mb-1 mt-2"
                htmlFor="note"
              >
                Note
              </label>
              <textarea
                className="appearance-none border border-[#dee2e6] rounded w-full py-2 px-3 bg-[#f0efff] text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
                id="note"
                placeholder="Leave a note (optional)"
                rows="4"
                style={{ fontSize: "0.75rem" }}
                resize="none" // Prevent resizing
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-4">
              <button className="bg-indigo-600 text-white py-2 px-20 rounded-md hover:bg-indigo-700 transition duration-300">
                Donate Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DonationSection;
