"use client";
import { useState } from "react"; // Import useState for handling menu toggle
import Image from "next/image"; // Import Image from next/image

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu visibility

  // Toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu (for back button)
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <section id="home" className="w-full min-h-[95vh] flex flex-col justify-center items-center bg-[#eceae6] rounded-b-[120px] shadow-lg relative">
      {/* Header Inside Hero */}
      <header className="absolute top-0 left-0 w-full flex justify-between items-center px-6 py-6 sm:px-10">
        {/* Email + Copy + CV (Blended into Background) */}
        <div className="flex space-x-6 items-center">
          {/* Clickable Email with Hover Effect */}
          <a 
            href="mailto:mohithpupppala@gmail.com" 
            className="hover:text-teal-600 transition-colors duration-300 cursor-pointer"
          >
            Mail
          </a>

          {/* Resume Download Button */}
          <a 
            href="\Untitled (2).pdf"
            download="Mohith_Resume.pdf"
            className="px-4 py-1 border rounded-full hover:bg-teal-500 transition"
          >
            Resume
          </a>
        </div>

        {/* Navigation Links with Scroll Functionality */}
        <nav className="sm:flex sm:space-x-6 sm:items-center sm:flex-row hidden">
          <ul className="flex space-x-6 items-center">
            <li>
              <a href="#home" className="hover:text-teal-600 transition-colors duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-teal-600 transition-colors duration-300">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-teal-600 transition-colors duration-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Hamburger Icon for Mobile */}
        <div className="sm:hidden flex items-center">
          <button onClick={toggleMenu} className="text-black">
            <span className="block w-6 h-1 bg-black mb-1"></span>
            <span className="block w-6 h-1 bg-black mb-1"></span>
            <span className="block w-6 h-1 bg-black"></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="sm:hidden absolute top-0 left-0 right-0 bg-white shadow-lg py-4 px-6">
          {/* Back Button */}
          <button 
            onClick={closeMenu} 
            className="absolute top-4 left-4 text-black font-bold text-lg"
          >
            Back
          </button>

          <ul className="flex flex-col space-y-4 text-center">
            <li>
              <a href="#home" className="hover:text-teal-600 transition-colors duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-teal-600 transition-colors duration-300">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-teal-600 transition-colors duration-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}

      {/* Main Content */}
      <div className="text-center flex flex-col items-center">
        {/* Profile Image & Name Tag */}
        <div className="relative">
          {/* Name Tag (Now Touching the Profile Picture) */}
          <span className="absolute top-1/2 left-[92%] transform -translate-y-1/2 -rotate-12 bg-white px-3 py-1 rounded-full shadow-lg text-sm font-medium flex items-center space-x-1 w-[87%]">
            P.V.Mohith
            <span className="text-lg">👋</span>
          </span>

          {/* Profile Picture */}
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-gray-300 shadow-lg">
            <Image
              src="/profile1.jpg"  // Use Image component
              alt="Your Name"
              width={128}  // Set width
              height={128}  // Set height
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Main Heading (Correct Line Breaks & Spacing) */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.5] mt-10">
          <span className="block mb-2">I am Mohith a,</span>
          <span className="block mb-2">
            <span className="text-black">Front-End</span> 
          </span>
          <span className="block">developer.</span>
        </h1>

        {/* Call-to-Action Button */}
        <button className="mt-10 px-6 py-3 bg-black text-white rounded-full shadow-md hover:bg-teal-600 transition duration-300 ease-in-out">
          Latest Projects ↗
        </button>
      </div>
    </section>
  );
};

export default Hero;
