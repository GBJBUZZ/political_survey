import React from "react";
import { Link } from "react-router-dom";
import PollAndSurvey from "./components/pollandsurvey";
import Navbar from "../Navbar";
import Footer from "../Footer";
const PollSurvey = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto pl-[130px] pr-[130px] pt-[80px]  ">
        <PollAndSurvey />
      </div>
    </div>
  );
};

export default PollSurvey;
