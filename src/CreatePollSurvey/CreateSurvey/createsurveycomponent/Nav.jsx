import React from "react";

const Nav = ({ selectedTab, setSelectedTab }) => {
  return (
    <div className="flex space-x-4 bg-[#ADA8F8] p-2  w-full justify-center">
      <button
        className={`py-2 px-6 ${
          selectedTab === "Build"
            ? "bg-[#4F46E5] text-white"
            : "bg-[#ADA8F8] text-gray-800"
        } rounded-full hover:bg-purple-400`}
        onClick={() => setSelectedTab("Build")}
      >
        Build
      </button>
      <button
        className={`py-2 px-6 ${
          selectedTab === "Settings"
            ? "bg-[#4F46E5] text-white"
            : "bg-[#ADA8F8] text-gray-800"
        } rounded-full hover:bg-purple-400`}
        onClick={() => setSelectedTab("Setting")}
      >
        Settings
      </button>
      <button
        className={`py-2 px-6 ${
          selectedTab === "Publish"
            ? "bg-[#4F46E5] text-white"
            : "bg-[#ADA8F8] text-gray-800"
        } rounded-full hover:bg-purple-400`}
        onClick={() => setSelectedTab("Publish")}
      >
        Publish
      </button>
    </div>
  );
};

export default Nav;
