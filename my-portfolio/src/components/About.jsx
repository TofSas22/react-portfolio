import React from "react";

const About = () => {
  return (
    <div id="about" className="flex items-center space-x-6 p-4 mt-12">
      {/* Lottie Animation */}
      <div className="w-1/2">
        <lottie-player
          src="https://lottie.host/3b0bc4f2-e498-459d-a6a5-c1345cc34d68/nCdHjFDrc9.json"
          background="#000"
          speed="1"
          style={{ width: "100%", height: "100%" }}
          loop
          autoplay
          direction="1"
        ></lottie-player>
      </div>

      {/* About Text Section */}
      <div className="w-1/2 text-white">
        <h1 className="text-3xl font-bold mb-4">More About Me</h1>
        <p className="text-lg">
          I’m passionate about tech and driven by the challenge of constantly
          learning and growing in web development. With a strong foundation in
          frontend technologies and a growing interest in backend skills, my
          goal is to create intuitive and impactful digital experiences.
          <br />
          <br />I thrive on setting ambitious goals and working hard to achieve
          them. But what I love most is collaborating with a team, sharing the
          journey, and celebrating our successes together. There’s nothing
          better than achieving something great as a unit!
        </p>
      </div>
    </div>
  );
};

export default About;
