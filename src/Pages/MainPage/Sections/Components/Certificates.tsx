export const Certificates = () => {
  const certificates = [
    {
      name: "Google Data Analytics Professional Certificate",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
          <path d="M2 17l10 5 10-5"></path>
          <path d="M2 12l10 5 10-5"></path>
        </svg>
      ),
      color: "from-blue-500 to-cyan-400",
    },
    {
      name: "Microsoft Azure AZ-900 Cloud Fundamentals",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path d="M7 16.5L13 7.5L22 20"></path>
          <path d="M2 19.5L7 16.5L13 19.5"></path>
        </svg>
      ),
      color: "from-blue-600 to-indigo-500",
    },
    {
      name: "Microsoft Power BI PL-300 Data Analyst Specialization",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
          <path d="M6 8h.01M9 8h.01"></path>
          <rect x="12" y="8" width="6" height="3"></rect>
          <rect x="6" y="12" width="3" height="3"></rect>
          <rect x="12" y="12" width="6" height="3"></rect>
        </svg>
      ),
      color: "from-yellow-500 to-amber-400",
    },
    {
      name: "React Essential Training",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <circle cx="12" cy="12" r="2"></circle>
          <path d="M12 18.7C7.5 18.7 3.8 15.7 3.8 12S7.5 5.3 12 5.3 20.2 8.3 20.2 12s-3.7 6.7-8.2 6.7"></path>
          <path d="M12 14.9c-4.5 0-8.2-7.9-8.2-7.9s3.7-7.9 8.2-7.9 8.2 7.9 8.2 7.9-3.7 7.9-8.2 7.9"></path>
        </svg>
      ),
      color: "from-cyan-500 to-blue-500",
    },
    {
      name: "Building Modern Projects with React",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      ),
      color: "from-green-500 to-emerald-400",
    },
  ];

  return (
    <div className="bg-gray-500 dark:bg-gray-900 rounded-xl p-6 border border-gray-800 relative overflow-hidden w-full">
      {/* Abstract background pattern */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-green-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>

      {/* Certificate icon */}
      <div className="absolute top-6 right-6 text-gray-700 opacity-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-24 h-24"
        >
          <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
          <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
          <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
        </svg>
      </div>

      {/* Section title */}
      <h3 className="text-2xl font-bold text-white mb-4 relative inline-block ">
        Professional Certifications
        <span className="block h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-2"></span>
      </h3>

      {/* Description text - original content preserved */}
      <p className="text-gray-300 leading-relaxed text-sm mb-6 relative z-10 max-w-2xl">
        I have completed several certifications to enhance my skills and
        knowledge in data analytics and web development. These certifications
        cover a range of topics, including data analysis, cloud fundamentals,
        and modern web technologies. They have equipped me with the tools and
        techniques needed to excel in my field and stay updated with the latest
        industry trends.
      </p>

      {/* Certificate list - original content preserved */}
      <ul className="space-y-3 relative z-10">
        {certificates.map((cert, index) => (
          <li key={index} className="flex items-center gap-3 group">
            <div
              className={`flex-shrink-0 p-2 rounded-lg bg-gradient-to-br ${cert.color} group-hover:shadow-lg transition-all duration-300`}
            >
              {cert.icon}
            </div>
            <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
              {cert.name}
            </span>
          </li>
        ))}
      </ul>

      {/* Decorative dots */}
      <div className="absolute bottom-4 right-4 flex space-x-1">
        <div className="w-1 h-1 rounded-full bg-blue-500"></div>
        <div className="w-1 h-1 rounded-full bg-purple-500"></div>
        <div className="w-1 h-1 rounded-full bg-cyan-500"></div>
      </div>
    </div>
  );
};
