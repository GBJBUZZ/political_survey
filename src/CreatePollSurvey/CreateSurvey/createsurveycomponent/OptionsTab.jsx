import React, { useState } from "react";
import Nav from "./Nav";
import BuildForm from "../../../PollSurvey/components/BuildForm";
import Setting from "./Setting";
import Publish from "./Publish";

const OptionsTab = () => {
  const [selectedTab, setSelectedTab] = useState("Build");

  return (
    <div className="flex flex-col justify-center bg-gray-50 mt-10 ml-80 mr-80 mb-20">
      {/* NavBar */}
      <Nav selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

      {/* Content Area */}
      <div className="w-[800px] mx-auto p-6 mt-20 bg-white border border-gray-300 rounded-sm">
        {selectedTab === "Build" && <BuildForm />}
        {selectedTab === "Setting" && <Setting />}
        {selectedTab === "Publish" && <Publish />}
      </div>
    </div>
  );
};

export default OptionsTab;
