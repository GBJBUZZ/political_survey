import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import CreateSurvey from "./CreatePollSurvey/CreateSurvey/CreateSurvey";
import PollSurvey from "./PollSurvey/PollSurvey";
import BuildForm from "./PollSurvey/components/BuildForm";
import SurveyResults from "./PollSurvey/components/SurveyResults";
import RajuKaremore from "./Constitunency/RajuKaremore";
import NarendraBondkar from "./Constitunency/NarendraBondkar";
import UpcomingEventsPage from "./UpcomingEvents/UpcomingEventsPage";
import Webpage from "./UpcomingEvents/Webpage";
import "./App.css";
import CreatePollSurveyHome from "./CreatePollSurvey/CreatePollSurveyHome";
import CreatePoll from "./CreatePollSurvey/CreatePoll/CreatePoll";
import PollSurveyCreator from "./CreatePollSurvey/CreatePoll/createpollcomponent/PollSurveyCreator";
import PollSurveyResults from "./CreatePollSurvey/CreatePoll/createpollcomponent/PollSurveyResults";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Blog from "./Blogs/Blog";
import BlogPost from "./Blogs/BlogPost";
import PollComponent from "./CreatePollSurvey/CreatePoll/createpollcomponent/PollComponent";
import PollComponentResult from "./CreatePollSurvey/CreatePoll/createpollcomponent/PollComponentResult";
import PollSurveyCreationPage from "./Home/components/PollSurveyCreationPage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<PollSurveyCreationPage />} />
          <Route path="/create-poll" element={<CreatePollSurveyHome />} />
          <Route path="/poll-survey" element={<PollSurvey />} />
          <Route path="/buildform/:type/:id" element={<BuildForm />} />
          <Route path="/surveyresult/:id" element={<SurveyResults />} />
          <Route path="/raju-karemore" element={<RajuKaremore />} />
          <Route path="/narendra-bondkar" element={<NarendraBondkar />} />
          <Route path="/upcoming-events" element={<UpcomingEventsPage />} />
          <Route path="/event-details" element={<Webpage />} />
          <Route path="/create-a-survey" element={<CreateSurvey />} />
          <Route path="/results" element={<PollSurveyCreator />} />
          <Route path="/create-a-poll" element={<CreatePoll />} />
          <Route path="/show-result" element={<PollSurveyResults />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-post" element={<BlogPost />} />
          <Route path="/rankingpoll" element={<PollComponent />} />
          <Route path="/rankingpollresult" element={<PollComponentResult />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
