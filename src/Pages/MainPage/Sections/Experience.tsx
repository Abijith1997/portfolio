import { motion } from "framer-motion";
import "./Css/Experience.css";
import { useRef, useState, useEffect } from "react";
import { IconBriefcase2Filled } from "@tabler/icons-react";

export const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const descriptionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const containerTop = container.getBoundingClientRect().top;

      const visibility = descriptionRefs.map((ref) => {
        const element = ref.current;
        if (!element) return Number.POSITIVE_INFINITY;
        const rect = element.getBoundingClientRect();
        return Math.abs(rect.top - containerTop);
      });

      const closestIndex = visibility.indexOf(Math.min(...visibility));
      setVisibleIndex(closestIndex);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.addEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <motion.div
      className="sm:p-4  flex flex-col items-center justify-start text-white w-full  border-b-2 border-gray-700"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="rounded-md  py-2 px-2 md:py-6 md:px-8 z-20 relative min-h-full  flex flex-col gap-5 w-full">
        <div className="bg-gradient-to-r from-gray-700 to-gray-800 py-2 border-blue-400 border-b-2 flex items-center justify-start gap-2 md:px-5 px-2">
          <IconBriefcase2Filled />
          <h2 className="text-2xl font-bold text-white px-4">
            Professional Journey
          </h2>
        </div>

        <div className="inner-experience relative flex gap-1 sm:gap-5 rounded-md shadow-md bg-gray-500 bg-gradient-to-br  dark:from-gray-700 dark:to-gray-800 lg:pt-10 items-center justify-center h-full w-full">
          <div className="hidden lg:block line-column  sm:h-[45dvh] w-20 relative z-1 ">
            <div
              className={`line absolute right-2 bg-gradient-to-b from-blue-400 via-cyan-400 to-purple-500 w-0.5 transition-all duration-500 ease-in-out
              ${visibleIndex > 0 ? "h-1/2" : "h-0"}
              ${visibleIndex > 1 ? "h-full" : "bg-gray-800"}`}
            ></div>
            <div
              className={`top-circle absolute top-0 right-0.5 w-[15px] h-[15px] border-2 rounded-full border-blue-500
    transition-all duration-500 ease-in-out
    ${
      visibleIndex >= 0
        ? "bg-blue-500 opacity-100 scale-100"
        : "bg-gray-800 opacity-0 scale-0"
    }`}
            ></div>

            <div
              className={`middle-circle absolute top-1/2 right-0.5 w-[15px] h-[15px] border-2 rounded-full 
    transition-all duration-500 ease-in-out
     ${
       visibleIndex >= 2
         ? "bg-cyan-500 border-cyan-500 opacity-100 scale-100"
         : visibleIndex >= 1
         ? "bg-purple-500 border-purple-500 opacity-100 scale-100"
         : "bg-gray-800 border-blue-500 opacity-0 scale-0"
     }
  `}
            ></div>

            <div
              className={`bottom-circle absolute bottom-0 right-0.5 w-[15px] h-[15px] border-2 rounded-full
    transition-all duration-500 ease-in-out
    ${
      visibleIndex >= 2
        ? "bg-purple-500 border-purple-500 opacity-100 scale-100"
        : "bg-gray-800 opacity-0 scale-0"
    }`}
            ></div>
          </div>

          <div
            ref={containerRef}
            className="description-column cursor-default h-[70dvh] md:h-[70dvh] w-full md:w-[90%] scroll-smooth overflow-y-scroll snap-y snap-mandatory sm:px-4 flex lg:flex-col flex-col-reverse"
          >
            <div
              ref={descriptionRefs[0]}
              className="snap-center h-full flex-shrink-0 flex flex-col justify-center gap-5 lg:px-20"
            >
              <div className="all-experience pl-4 shadow-neutral-800 rounded-md bg-gradient-to-r from-blue-900 to-gray-700  to-95% sm:py-5 py-1">
                <h2 className="md:text-xl font-semibold text-blue-400">
                  Content Programmer
                </h2>
                <h3 className="md:text-lg font-medium text-gray-400">
                  Ansrsource
                </h3>
              </div>
              <ul className="list-none text-xs sm:text-sm list-inside text-gray-300 leading-relaxed w-full flex flex-col gap-0.5">
                <li className="job-point">
                  Designed and maintained dynamic, user-friendly web pages using
                  React.js for multiple client projects at Ansrsource.
                </li>
                <li className="job-point">
                  Worked closely with cross-functional teams to ensure
                  high-quality standards and seamless functionality across all
                  web applications.
                </li>
                <li className="job-point">
                  Consistently delivered 100% quality and productivity, earning
                  a promotion to a full-time position based on performance.
                </li>
                <li className="job-point">
                  Successfully adapted to the company's workflow and culture,
                  contributing effectively to fast-paced project timelines.
                </li>
              </ul>
            </div>

            <div
              ref={descriptionRefs[1]}
              className="snap-start h-full flex-shrink-0 flex flex-col justify-center gap-5 lg:px-20"
            >
              <div className="all-experience pl-4 shadow-neutral-800 rounded-md bg-gradient-to-r from-cyan-900 to-gray-700  to-95% sm:py-5 py-1">
                <h2 className="md:text-xl font-semibold text-blue-400">
                  Frontend Developer
                </h2>
                <h3 className="md:text-lg font-medium text-gray-400 ">
                  Ansrsource
                </h3>
              </div>

              <ul className="list-none text-xs sm:text-sm list-inside text-gray-300 leading-relaxed flex flex-col gap-0.5">
                <li className="job-point">
                  Developed and maintained responsive, user-friendly web pages
                  for clients, ensuring seamless delivery of content and
                  functionality.
                </li>
                <li className="job-point">
                  Collaborated directly with clients and validators via JIRA to
                  gather requirements, clarify issues, and ensure high-quality
                  project deliverables.
                </li>
                <li className="job-point">
                  Led weekly team updates by posting detailed code blocks,
                  progress reports, and solutions to ongoing development
                  challenges.
                </li>
                <li className="job-point">
                  Mentored and trained new hires, sharing expertise in frontend
                  development and the team's coding standards to help them
                  integrate smoothly into the workflow.
                </li>
                <li className="job-point">
                  Acted as the primary point of contact for resolving technical
                  queries from team members, ensuring minimal disruptions and
                  maintaining productivity.
                </li>
                <li className="job-point">
                  Took on leadership roles by guiding junior developers and
                  fostering a culture of continuous learning and collaboration.
                </li>
              </ul>
            </div>

            <div
              ref={descriptionRefs[2]}
              className="snap-start h-full flex-shrink-0 flex flex-col justify-center gap-5 lg:px-20"
            >
              <div className="all-experience pl-4 shadow-neutral-800 rounded-md bg-gradient-to-r from-purple-900 to-gray-700  to-95% sm:py-5 py-1">
                <h2 className="md:text-xl font-semibold text-blue-400 ">
                  <span className="border-r-2 border-blue-400 inline-block pr-2">
                    Frontend Developer
                  </span>
                  <span className="pl-2">Team Analyst</span>
                </h2>
                <h3 className="md:text-lg font-medium text-gray-400">
                  Ansrsource
                </h3>
              </div>
              <ul className="list-none text-xs sm:text-sm list-inside text-gray-300 leading-relaxed gap-1 flex flex-col">
                <li className="job-point">
                  Utilized Excel and Power BI to analyze large datasets and
                  visualize performance trends for business reporting.
                </li>
                <li className="job-point">
                  Conducted code reviews and provided constructive feedback to
                  junior developers, promoting code quality and team growth.
                </li>
                <li className="job-point">
                  Served as a point of contact for resolving technical issues
                  and ensuring project continuity within the team.
                </li>
                <li className="job-point">
                  Maintained and monitored quality control dashboards to track
                  team KPIs and uphold performance standards.
                </li>
                <li className="job-point">
                  Mentored and trained new team members, fostering a
                  knowledge-sharing culture and enhancing team efficiency.
                </li>
                <li className="job-point">
                  Compiled and analyzed weekly reports to track progress and
                  identify areas of improvement within the team.
                </li>
                <li className="job-point">
                  Designed and delivered engaging presentations during weekly
                  team meetings to align goals and drive accountability.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
