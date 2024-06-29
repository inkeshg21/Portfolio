import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { works } from "../data/Static";

const Work = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <div name="work" className="w-full bg-gradient-to-l from-[#21073C] to-[#3A1078] py-32">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center  h-full text-white">
        <div>
          <h1 className="text-4xl font-bold inline border-b-4 border-[#00FFCA]">Recent Works</h1>
          <p className="text-xl py-6">During my experience as a self-taught developer, I have created many projects and shared them on LinkedIn and GitHub. I am always on the lookout for new and challenging projects to work on.</p>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 mt-7">
          {/* Map over the works array and render each work */}
          {works.map((work) => (
            <a
              href={work.workUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-slate-200 rounded-lg overflow-hidden"
              key={work.title} data-aos="fade-up" data-aos-duration={work.duration} data-aos-easing="linear"
            >
              {/* Work image */}
              <img
                src={work.imgUrl}
                alt="work"
                className="w-full h-36 md:h-48 object-cover"
              />
              {/* Work details */}
              <div className="w-full p-5 text-black">
                <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
                  {work.title}
                </h3>
                {/* Technologies */}
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm ">
                  {work.tech.map((item) => (
                    <span
                      key={item}
                      className="inline-block px-2 py-1 bg-slate-300 rounded-md"
                    >
                      {item}
                    </span>
                  ))}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;