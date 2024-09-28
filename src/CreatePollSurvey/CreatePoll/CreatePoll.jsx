import React from "react";
import FormCreation from "./createpollcomponent/FormCreation";
const CreatePoll = () => {
  return (
    <div className="pb-20">
      <div className="max-w-7xl mx-auto pl-[130px] pr-[130px] pt-[80px]  ">
        <h1 className="text-2xl font-bold text-center mb-7">
          Create a Poll & Survey
        </h1>
        <p className="text-center text-gray-600 mb-20">
          <span className="text-black">Create a Poll and survey </span> to
          accurately gauge public opinion on politics, including topics like
          demographics, party affiliation, key issues, candidate evaluation,
          voting intentions, media habits, and trust in government institutions.
        </p>
      </div>
      <FormCreation />
    </div>
  );
};

export default CreatePoll;
