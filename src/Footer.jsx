import React from "react";
import Logo from "../src/assets/images/Footer1.jpeg"; // This is your main image for the girl
import BackgroundImage from "../src/assets/images/Background.png"; // Your background image
import girl from "../src/assets/images/girl.png"; // This is your main image for the girl

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white">
      {/* Subscribe Section */}
      <div className="container mx-auto bg-blue-100">
        <div className="container mx-auto px-4 py-12 w-9/12 gap-3 justify-center flex flex-row items-center">
          <img
            src={Logo}
            alt="Subscribe"
            className="rounded-lg shadow-md w-5/12 h-auto"
          />
          {/* Share Your Poll Anywhere Section */}
          <div className="p-6 rounded-lg w-full">
            <h3 className="text-2xl font-bold mb-4">
              Share Your Polls Anywhere
            </h3>
            <p className="mb-4">
              Get more votes by publishing your poll where your audience can see
              it. Embed your poll in your website, send email invitations, or
              share it on social media with ease.
            </p>
            <Link to="/create-a-poll">
              <button className="bg-orange-500 rounded text-white px-4 py-2 font-medium block ">
                + Create a Poll
              </button>{" "}
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="bg-indigo-600 text-white">
        <div className="container w-8/12 mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About Company</h3>
              <div className="text-sm">
                <p className="mb-4"></p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Our Links</h3>
              <ul className="text-sm">
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Poll and Survey
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Upcoming Events
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Create Poll and Survey
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {[
                  "facebook",
                  "twitter",
                  "instagram",
                  "linkedin",
                  "youtube",
                ].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="bg-white p-2 rounded-full"
                  >
                    <img
                      src={`/api/placeholder/24/24?text=${social}`}
                      alt={social}
                      className="w-6 h-6"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-indigo-900 text-white py-4 text-center">
        <p>
          &copy; Copy Right - All Right Reserved - Designed &hearts; by GBJ buzz
        </p>
      </div>
    </footer>
  );
};

export default Footer;
