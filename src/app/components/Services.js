"use client";

const projects = [
  {
    title: "SIH 2024",
    description: "A Frontend project for emergency distress signal website for women/men.",
    link: "https://raksha-project-beta.vercel.app/", // Replace with actual URL
  },
  {
    title: "Task manager",
    description: "A simple task manager app to manage your daily tasks using Reactjs.",
    link: "https://taskerflow.vercel.app/", // Replace with actual URL
  },
  {
    title: "Project 3",
    description: "A detailed description of Project 3 goes here.",
    link: "https://example.com/project3", // Replace with actual URL
  },
  {
    title: "Project 4",
    description: "A detailed description of Project 4 goes here.",
    link: "https://example.com/project4", // Replace with actual URL
  },
];

const Services = () => {
  return (
    <section id="projects" className="w-full py-32 pb-48 bg-[#f3f2ef]">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
        <span className="text-black">Projects that reflect my skills </span>
        <br />
        <span>and creativity in action.</span>
      </h2>

      {/* Services Button with Black Lines */}
      <div className="flex items-center justify-center mt-6">
        <div className="w-1/3 h-[2px] bg-black"></div>
        <div className="mx-4 transform rotate-6 bg-white shadow-lg px-6 py-2 rounded-full border border-gray-300 text-gray-900 font-semibold">
          Projects
        </div>
        <div className="w-1/3 h-[2px] bg-black"></div>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 px-4 sm:px-8 md:px-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:shadow-blue-400"
          >
            {/* Clickable Project Title */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-bold text-gray-900 hover:text-blue-600"
            >
              {project.title}
            </a>
            <p className="text-gray-600 mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
