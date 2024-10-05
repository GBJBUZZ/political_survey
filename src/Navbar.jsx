import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./App.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#4F46E5] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-7 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-semibold">Logo</h1>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <NavLink
                  exact
                  to="/"
                  className="hover-underline-animation text-lg md:text-base"
                  activeClassName="active-underline"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/poll-survey"
                  className="hover-underline-animation text-lg md:text-base"
                  activeClassName="active-underline"
                >
                  Poll & Survey
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/upcoming-events"
                  className="hover-underline-animation text-lg md:text-base"
                  activeClassName="active-underline"
                >
                  Upcoming Political Events
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/create-poll"
                  className="hover-underline-animation text-lg md:text-base"
                  activeClassName="active-underline"
                >
                  Create Poll & Survey
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className="hover-underline-animation text-lg md:text-base"
                  activeClassName="active-underline"
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="hover-underline-animation text-lg md:text-base"
                  activeClassName="active-underline"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button
              className="text-white bg-indigo-600 p-2 rounded-md"
              onClick={() => setIsOpen(!isOpen)}
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open menu</span>
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <ul className="space-y-4 p-4">
            <li>
              <NavLink
                exact
                to="/"
                className="hover-underline-animation text-lg md:text-base"
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/poll-survey"
                className="hover-underline-animation text-lg md:text-base"
                onClick={() => setIsOpen(false)}
              >
                Poll & Survey
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/upcoming-events"
                className="hover-underline-animation text-lg md:text-base"
                onClick={() => setIsOpen(false)}
              >
                Upcoming Political Events
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/create-poll"
                className="hover-underline-animation text-lg md:text-base"
                onClick={() => setIsOpen(false)}
              >
                Create Poll & Survey
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className="hover-underline-animation text-lg md:text-base"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="hover-underline-animation text-lg md:text-base"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
