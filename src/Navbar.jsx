import React from "react";
import { NavLink } from "react-router-dom";
import "./App.css";

const Navbar = () => {
  return (
    <div>
      <div className="bg-[#4F46E5] text-white">
        <ul className="flex max-w-4xl mx-auto p-6 items-center justify-evenly">
          <li>
            <NavLink
              exact
              to="/"
              className="hover-underline-animation"
              activeClassName="active-underline"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/poll-survey"
              className="hover-underline-animation"
              activeClassName="active-underline"
            >
              Poll & Survey
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/upcoming-events"
              className="hover-underline-animation"
              activeClassName="active-underline"
            >
              Upcoming Political Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/create-poll"
              className="hover-underline-animation"
              activeClassName="active-underline"
            >
              Create Poll & Survey
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className="hover-underline-animation"
              activeClassName="active-underline"
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="hover-underline-animation"
              activeClassName="active-underline"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
