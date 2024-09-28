import React from "react";
const Head = () => {
  return (
    <div>
      <div className="flex flex-col items-center bg-white">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800 mt-10 mb-5">
            Create a Poll & Survey
          </h1>
        </div>
        <p className="text-gray-600 mb-6 text-center ml-10 mr-10">
          Create a Poll and survey to accurately gauge public opinion on
          politics, including topics like demographics, party affiliation,
          <br /> key issues, candidate evaluation, voting intentions, media
          habits, and trust in government institutions.
        </p>

        <button className="bg-indigo-600 text-white py-2 px-6 rounded-full hover:bg-indigo-700 transition duration-200">
          Create a Survey
        </button>
      </div>
    </div>
  );
};

export default Head;
