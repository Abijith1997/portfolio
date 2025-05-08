import { Icons } from "./Components/Icons";
import "./Css/About.css";
import { ProfessionalBio } from "./Intro";
import ProfileImg from "../../../SVG/profile.jpeg";
import { Experience } from "./Experience";
import { Education } from "./Education";
import { Certifications } from "./Certifications";

export const About = () => {
  return (
    <div className="items-center justify-center dark:text-white text-gray-800 gap-2 about-pagefull rounded-md bg-[var(--background)] dark:bg-gray-950 shadow-md z-20 relative sm:p-14 flex flex-col md:w-[90%] w-full">
      <div className="flex lg:flex-row gap-5 items-stretch bg-[var(--color-2)] dark:bg-gray-800  border-gray-700 flex-col-reverse lg:p-10 rounded-md items-center pt-5 lg:w-auto">
        <div className="left-column flex flex-col items-start justify-start w-1/2">
          <ProfessionalBio />
        </div>
        <div className="right-column w-1/2 h-fit-content flex flex-col items-center justify-center bg-gray-500 dark:bg-transparent rounded-md lg:p-10 shadow-md shadow-black/20">
          <div className="photo-wrapper relative flex items-center justify-center rounded-full p-1 h-[100px] w-[100px] sm:h-[150px] sm:w-[150px] lg:h-[200px] lg:w-[200px]">
            <div className="rotating-bg absolute inset-0 rounded-full  p-2 bg-gradient-to-br from-violet-300 from-30% to-blue-900 animate-rotate z-0" />
            <img
              src={ProfileImg}
              alt="Profile"
              className="relative z-10 rounded-full object-contain w-full h-full shadow-md shadow-white/20"
            />
          </div>
          <div className="skill-belt flex flex-wrap gap-10 px-10 basis-1/2">
            {<Icons />}
          </div>
        </div>
      </div>
      <div className="experience-container w-full z-20 relative min-h-full p-5 sm:p-10 flex flex-col items-center justify-center gap-5 bg-[var(--color-2)] dark:bg-gray-800 h-full rounded-md md:min-w-[80%]">
        <Experience />
        <Education />
        <Certifications />
      </div>
    </div>
  );
};
