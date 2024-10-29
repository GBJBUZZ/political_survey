import { useState } from "react";
import { PlusCircle, Share2, BarChart2, Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link

const PollSurveyCreator = () => {
  const [pollQuestion, setPollQuestion] = useState(
    "Raju Karemore is a great Leader"
  );

  return (
    <div className="max-w-full px-4 sm:px-8 lg:px-40">
      <div className="pt-10 pb-10">
        <h1 className="text-2xl font-bold text-center mb-7">
          Create a Poll & Survey
        </h1>
        <p className="text-center text-gray-600 mb-20">
          <span className="text-black">Create a Poll and survey </span> to
          accurately gauge public opinion on politics, including topics like
          demographics, party affiliation, key issues, candidate evaluation,
          voting intentions, media habits, and trust in government
          institutions.
        </p>

        <div className="bg-white border rounded-lg border border-blue-700 shadow-sm p-6 mx-auto my-8 max-w-3xl">
          <h2 className="font-semibold text-xl mb-2">{pollQuestion}</h2>
          <p className="text-sm text-gray-500 mb-6">by a guest · 10 minutes ago</p>

          <div className="space-y-2 mb-8">
            <p className="text-sm text-gray-500 mb-6">Make a Choice: </p>
            <div className="flex items-center">
              <input type="radio" id="yes" name="choice" className="mr-2" />
              <label htmlFor="yes">Yes</label>
            </div>
            <div className="flex items-center">
              <input type="radio" id="no" name="choice" className="mr-2" />
              <label htmlFor="no">No</label>
            </div>
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-semibold mb-1 mt-2" htmlFor="name">
              Name
            </label>
            <input
              className="appearance-none border border-[#dee2e6] rounded w-full mb-5 py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
              id="name"
              type="text"
              placeholder="Enter Your Name"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center">
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md flex items-center mr-4 mb-2 sm:mb-0">
              Vote <span className="ml-1">→</span>
            </button>
            <div className="flex items-center space-x-4 mr-4">
              <Link to="/show-result">
                <button className="text-gray-600 flex items-center">
                  <BarChart2 size={18} className="mr-1" /> Show results
                </button>
              </Link>
            </div>
            <button className="text-gray-600">
              <Share2 size={18} />
            </button>
          </div>
        </div>

        {/* Share section */}
        <div className="bg-white border rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Share</h3>
            <span className="text-sm text-gray-500">Only visible to you</span>
          </div>
          <div className="mb-4">
            <p className="text-sm mb-2">Share the link</p>
            <div className="flex items-center">
              <input
                type="text"
                value="https://PoliticalSurvey.com/RUyNz9B5eyR"
                className="flex-grow border rounded-l px-3 py-2 text-sm"
                readOnly
              />
              <button className="bg-gray-100 border border-l-0 rounded-r px-3 py-2">
                <Share2 size={18} />
              </button>
            </div>
          </div>
          <div className="flex space-x-4">
            <Mail size={20} />
            <MessageCircle size={20} />
            {/* Add other share icons here */}
          </div>
        </div>

        {/* Comments section */}
        <div className="bg-white border rounded-lg shadow-sm p-6 mb-8">
          <h3 className="font-semibold mb-4">Comments</h3>
          <div className="bg-blue-50 p-4 rounded mb-4">
            <p className="text-sm text-blue-800">
              No comments yet. Be the first to write one!
            </p>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
            <div className="flex-grow">
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border rounded px-3 py-2 mb-2"
              />
              <textarea
                className="w-full border rounded px-3 py-2 mb-2"
                rows="3"
              ></textarea>
              <button className="bg-indigo-600 text-white rounded px-2 py-1 text-sm">
                Add comment
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold">Create Your Own Poll</h3>
            <p className="text-sm text-gray-600 w-3/4">
              Want to create your own poll? With Political Survey anyone can
              easily create an online poll in seconds.
            </p>
          </div>

          <Link to="/create-a-poll">
            <button className="bg-indigo-600 text-white w-32 px-1 py-3 rounded text-xs">
              Create a poll
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PollSurveyCreator;
