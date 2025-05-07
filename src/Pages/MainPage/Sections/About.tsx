import { Icons } from "./Components/Icons";
import "./Css/About.css";
import { ProfessionalBio } from "./Intro";
import ProfileImg from "../../../SVG/IMG_6378.png";
import { Experience } from "./Experience";
import { Education } from "./Education";
import { Certifications } from "./Certifications";

export const About = () => {
  return (
    <div className="items-center justify-center dark:text-white text-gray-800 gap-2 about-pagefull rounded-md bg-[var(--background)] dark:bg-gray-950 shadow-md z-20 relative sm:p-14 flex flex-col md:w-[90%] w-full">
      <div className="flex lg:flex-row gap-5 lg:grid-rows-1 bg-[var(--color-2)] dark:bg-gray-800  border-gray-700 flex-col-reverse lg:p-10 rounded-md items-center pt-5 lg:w-auto">
        <div className="left-column flex flex-col items-start justify-start ">
          <ProfessionalBio />
        </div>
        <div className="right-column w-[90%] h-fit-content flex flex-col items-center justify-center bg-gray-500 dark:bg-transparent rounded-md lg:p-10 shadow-md shadow-black/20">
          <div className="photo basis-1/2 object-contain flex items-end justify-end pt-10">
            <img
              src={ProfileImg}
              alt="Profile"
              className="max-h-full w-auto object-contain rounded-md shadow-md shadow-white/20 sm:h-[250px] h-[100px]"
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
