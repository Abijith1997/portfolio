import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export const Education = () => {
  return (
    <motion.div
      className="sm:p-4  flex flex-col items-center justify-start text-white w-full rounded-md"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="rounded-md  py-2 px-2 md:p-6 md:px-8 z-20 relative min-h-full  flex flex-col gap-5 w-full">
        <div className="bg-gradient-to-r from-gray-700 to-gray-800 py-2 border-blue-400 border-b-2 flex items-center justify-start gap-2 md:px-5 px-2">
          <GraduationCap size={"30px"} />
          <h2 className="text-2xl font-bold text-white px-8">Education</h2>
        </div>

        {/* Masters degree section */}
        <div className="education-inner bg-gray-500 dark:bg-gray-900 rounded-md relative flex flex-col px-4 gap-1 sm:gap-5  lg:pt-5 items-center justify-center h-full w-full">
          <div className="Masters  rounded-md mb-8  px-6 py-5">
            <h2 className="text-sm lg:text-2xl font-semibold text-blue-300">
              MSc. Data Analytics
            </h2>
            <h3 className="text-sm lg:text-lg font-medium text-gray-400 mb-3">
              Berlin School of Business and Innovation
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed md:text-sm">
              The Master's in Data Analytics provided a rigorous foundation in
              data science, combining theoretical knowledge with practical
              application across key areas such as statistical modeling, machine
              learning, data management, and visualization. The program
              emphasized real-world problem-solving through projects that
              involved analyzing large and complex datasets, developing
              predictive models, and transforming raw data into actionable
              insights. Through collaborative coursework and research-driven
              assignments, the curriculum fostered critical thinking, analytical
              reasoning, and the ability to communicate data-driven findings
              effectively to both technical and non-technical stakeholders.
            </p>
            <p className="text-sm md:text-lg items-center justify-start flex flex-wrap gap-0.5 text-gray-300 font-medium italic mt-4 tracking-wide bg-gray-800/50 py-3 px-4 rounded-md lg:rounded-[0 6px 6px 0] lg:border-l-4 lg:border-blue-500">
              Key tools and technologies used:
              <span className="text-xs text-blue-300 font-semibold bg-gray-900/60 px-2 py-1 rounded-md mx-1 inline-block">
                TensorFlow
              </span>
              <span className="text-xs text-blue-300 font-semibold bg-gray-900/60 px-2 py-1 rounded-md mx-1 inline-block">
                RStudio
              </span>
              <span className="text-xs text-blue-300 font-semibold bg-gray-900/60 px-2 py-1 rounded-md mx-1 inline-block">
                MySQL
              </span>
              <span className="text-xs text-blue-300 font-semibold bg-gray-900/60 px-2 py-1 rounded-md mx-1 inline-block">
                Tableau
              </span>
            </p>
          </div>

          {/* Bachelors degree section */}
          <div className="Bachelors rounded-md mb-8  px-6 py-5">
            <h2 className="text-sm lg:text-2xl font-semibold text-blue-300">
              B. Tech Electronics and Communication Engineering
            </h2>
            <h3 className="text-sm lg:text-lg font-medium text-gray-400 mb-3">
              National Institute of Technology, Calicut
            </h3>
            <p className="md:text-gray-300 leading-relaxed text-xs md:text-sm">
              Completed a Bachelor's degree in Electronics and Communication
              Engineering with a strong academic foundation in electronic
              circuits, signal processing, and communication systems. The
              program emphasized both theoretical concepts and practical
              applications across core engineering domains. The academic journey
              culminated in a thesis project focused on the TCAD simulation of a
              Schottky diode, enabling in-depth exploration of semiconductor
              device behavior through advanced simulation techniques and tools.
            </p>
            <p className="text-sm md:text-md items-center justify-start flex flex-wrap gap-0.5 text-gray-300 font-medium italic mt-4 tracking-wide bg-gray-800/50 py-3 px-4 rounded-md lg:rounded-[0 6px 6px 0] lg:border-l-4 lg:border-blue-500">
              Key skills and tools:
              <span className="text-xs text-blue-300 font-semibold bg-gray-900/60 px-2 py-1 rounded-md mx-1 inline-block">
                Electronic circuit design
              </span>
              <span className="text-xs text-blue-300 font-semibold bg-gray-900/60 px-2 py-1 rounded-md mx-1 inline-block">
                Signal analysis
              </span>
              <span className="text-xs text-blue-300 font-semibold bg-gray-900/60 px-2 py-1 rounded-md mx-1 inline-block">
                Communication systems
              </span>
              <span className="text-xs text-blue-300 font-semibold bg-gray-900/60 px-2 py-1 rounded-md mx-1 inline-block">
                TCAD simulation
              </span>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
