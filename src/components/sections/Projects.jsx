import { FaGithub } from "react-icons/fa"; // Import GitHub icon
import { RevealOnScroll } from "../ReviewOnScroll";

export const Projects = () => {
  const projects = [
    {
      name: "Chatify: Real-Time Chat Application",
      date: "Jan 2024",
      description:
        "Built a real-time chat app using MERN stack and Socket.io. Features include real-time messaging, Zustand for state management, and a responsive UI with Tailwind CSS and Daisy UI.",
      technologies: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Socket.io",
        "Zustand",
        "Tailwind CSS",
        "Daisy UI",
      ],
      link: "https://github.com/KRISHNAKUMARPS2002/MERN-CHAT-APP.git",
    },
    {
      name: "Hotel Booking Backend",
      description:
        "Developed a backend for a hotel booking application with RESTful APIs and MongoDB. Integrated AWS S3 for image uploads, Twilio for messaging, and JWT for authentication.",
      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "AWS S3",
        "Twilio",
        "JWT",
        "Nodemailer",
      ],
      link: "https://github.com/KRISHNAKUMARPS2002/BACKEND_REAL_OTP.git",
    },
    {
      name: "Tubeify - YouTube Clone",
      description:
        "A fully functional YouTube clone built with React, Material-UI, and RapidAPI. Features video search, playback, and an intuitive UI.",
      technologies: ["React", "Material-UI", "RapidAPI"],
      link: "https://relaxed-me", // Add correct deployment link here
      github: "https://github.com/KRISHNAKUMARPS2002/Tubiefy.git",
    },
    {
      name: "Zoom Clone - Video Conferencing App",
      description:
        "A high-performance Zoom alternative built with Next.js, TypeScript, and getStream. Features real-time video calls, authentication with Clerk, and a sleek UI with ShadCN and Tailwind CSS.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Clerk",
        "getStream",
        "ShadCN",
        "Tailwind CSS",
      ],
      link: "", // Add a live demo link if available
      github: "https://github.com/KRISHNAKUMARPS2002/zoom_clone.git",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
              >
                <h3 className="text-xl font-bold mb-1">{project.name}</h3>
                {project.date && (
                  <p className="text-gray-400 text-sm mb-2">{project.date}</p>
                )}
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Centered Buttons */}
                <div className="flex justify-center items-center gap-4 mt-4">
                  {/* View Project (Text Only) */}
                  <span className="text-blue-400 text-lg font-medium">
                    View Project →
                  </span>

                  {/* GitHub Link Button */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                  >
                    <FaGithub className="text-lg" />
                    <span>GitHub Link</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
