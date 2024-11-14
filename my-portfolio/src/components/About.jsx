import React from "react";

const About = () => {
  return (
    <div className="flex items-center space-x-6 p-4 mt-12">
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
          I'm passionate about tech, constantly learning and growing in the
          field of web development. With a background in JavaScript, React,
          and backend skills, I aim to build intuitive and impactful digital
          experiences. Outside of coding, I enjoy [mention hobbies or other
          personal details that highlight your personality or interests].
        </p>
      </div>
    </div>
  );
};

export default About;