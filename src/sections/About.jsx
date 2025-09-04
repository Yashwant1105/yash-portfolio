import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          {/* Mobile */}
          <img
            src="assets/messi.jpg"
            alt="Messi Mobile"
            className="absolute object-cover scale-[1.75] block md:hidden"
          />

          {/* Laptop/Desktop */}
          <img
            src="assets/messi1.jpg"
            alt="Ankara Messi"
            className="absolute object-cover object-center md:scale-[1] lg:scale-[1.2] hidden md:block"
          />

          <div className="z-10">
            <p className="headtext">Hi, I'm Yashwant Sahoo</p>
            <p className="subtext">
              A pre-final year IT undergraduate with over a year of experience
              in mobile application development, currently expanding my skills
              in the field of data.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-tech-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-amber-600">
              LOGIC IN MOTION
            </p>
            <Card
              style={{ rotate: "-35deg", bottom: "15%", left: "65%" }}
              text="Cloud Computing"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "70%", right: "50%" }}
              image="assets/logos/cplusplus.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "15%", left: "65%" }}
              text="Big Data"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "35deg", bottom: "15%", right: "65%" }}
              text="Data Engineering"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "15%", right: "65%" }}
              text="SQL"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "70%", left: "55%" }}
              image="assets/logos/python.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "10%", left: "50%" }}
              image="assets/logos/flutter.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-60deg", top: "10%", right: "55%" }}
              image="assets/logos/azure.svg"
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">Local to Earth, open to working globally</p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 5 */}
        <div className="grid-tech-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Tech Stack</p>
            <p className="subtext">
              I have sound knowledge of multiple languages, frameworks, and
              tools that support the creation of dependable and adaptable
              software solutions.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
        {/* Grid 4 */}
        <div className="grid-black-color grid-4 flex items-center justify-center p-4 sm:p-6">
          <div className="flex flex-col items-center gap-3 w-full max-w-sm text-center pb-6">
            {/* Copy Email */}
            <div className="flex flex-col items-center gap-2">
              <p className="headtext">Get in Touch</p>
              <CopyEmailButton />
            </div>
            {/* Divider */}
            <div className="w-full h-[1px] bg-gray-300 opacity-15" />
            {/* Resume*/}
            <div className="flex flex-col items-center gap-2">
              <p className="headtext">My Resume</p>
              <a
                href="/assets/Yash_Resume.pdf"
                download="Yashwant Sahoo Resume.pdf"
                className="px-6 py-3 bg-amber-600 text-white font-semibold rounded-2xl shadow-md hover:bg-amber-700 transition-all"
              >
                Download
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
