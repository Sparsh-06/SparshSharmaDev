import React from "react";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 h-full md:grid-cols-2 lg:h-190 justify-center items-center container px-16">
      <div className="text-center md:text-left text-white">
        <span className="text-lg md:text-xl after:content-['👍']">Hello</span>
        <h2 className="text-5xl my-2 text-[#01d293]">Welcome to my space</h2>
        <p className="text-lg md:text-lg lg:text-xl my-4">Software Developer</p>
        <p className="text-[#808dad]">
          Passionate and innovative Full Stack Website and Python
          programmer/developer with experience of 3+ years with the ability to
          establish and maintain excellent communication and relationships with
          clients. Proficient in various platforms, languages, and embedded
          systems. A creative thinker, adept in software development and working
          with various data structures.
        </p>
      </div>
      <img
        src="/dp.jpg"
        alt="dpimage"
        loading="lazy"
        className="justify-self-center md:justify-self-end  mt-8 rounded-full"
        width={300}
        height={300}
      />
    </div>
  );
};

export default Hero;
