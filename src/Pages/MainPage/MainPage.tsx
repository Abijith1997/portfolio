import { Connect } from "./Sections/Connect";
import { About } from "./Sections/About";
import { Landing } from "./Sections/LandingSection";
import { Footer } from "../../Components/Footer/Footer";

export const MainPage = () => {
  return (
    <>
      <div className="landing-main relative flex flex-col items-center justify-center ">
        <div className="landing blur-md blur-background"></div>
        <Landing />
        <About />
        <Connect />
        <Footer />
      </div>
    </>
  );
};
