import React from "react";

const Footer = () => {
  return (
    <footer className="text-center backdrop-blur-lg bg-gray-950 bg-opacity-30 py-20 mt-12">
      <p className="text-white text-sm">
        &copy; {new Date().getFullYear()} Tofiek Sasman. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;