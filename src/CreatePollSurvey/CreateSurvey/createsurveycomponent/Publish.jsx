import { useState } from "react";
import { Link, Mail, Settings } from "lucide-react";

const Publish = () => {
  const [emailInvite, setEmailInvite] = useState("");

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <div className="bg-green-500 p-2 rounded-lg mr-3">
            <Link className="text-white" size={24} />
          </div>
          <div>
            <h2 className="text-lg font-semibold">DIRECT LINK OF YOUR FORM</h2>
            <p className="text-sm text-gray-500">
              Your form is securely published and ready to use at this address
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mr-2">
              Public Form
            </span>
            <Settings className="text-blue-500" size={20} />
            <span className="text-blue-500 text-sm ml-1">Settings</span>
          </div>
        </div>

        <div className="flex items-center bg-white rounded-lg overflow-hidden border border-gray-300">
          <span className="px-3 text-gray-500">
            <Link size={20} />
          </span>
          <input
            type="text"
            value="https://form.political.survey.com/242571489465468"
            readOnly
            className="flex-grow p-2 text-sm outline-none"
          />
          <button className="bg-green-500 text-white px-4 py-2 text-sm font-medium">
            COPY LINK
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 text-sm font-medium">
            OPEN IN NEW TAB
          </button>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2 flex items-center">
          INVITE BY EMAIL
          <span className="ml-2 bg-gray-200 rounded-full p-1">
            <Mail size={16} />
          </span>
        </h3>
        <div className="flex items-center bg-white rounded-lg overflow-hidden border border-gray-300">
          <span className="px-3 text-gray-500">
            <Mail size={20} />
          </span>
          <input
            type="email"
            placeholder="Enter email addresses to send invitation with permissions."
            className="flex-grow p-2 text-sm outline-none"
            value={emailInvite}
            onChange={(e) => setEmailInvite(e.target.value)}
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">SHARE FORM</h3>
        <p className="text-sm text-gray-500 mb-4">
          Share your form link in various social posts and through email.
        </p>
        <div className="flex space-x-4">
          <button className="bg-blue-600 text-white p-2 rounded">
            <span className="sr-only">Share on Facebook</span>f
          </button>
          <button className="bg-green-500 text-white p-2 rounded">
            <span className="sr-only">Share on WhatsApp</span>W
          </button>
          <button className="bg-blue-700 text-white p-2 rounded">
            <span className="sr-only">Share on LinkedIn</span>
            in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Publish;
