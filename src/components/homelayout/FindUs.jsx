import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Find Us on</h2>
      <div className="">
        <div className="join join-vertical w-full">
          <a
            href="https://www.facebook.com"
            target="_blank"
            className="btn bg-base-100 justify-start join-item"
          >
            <FaFacebook /> Facebook
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            className="btn bg-base-100 justify-start join-item"
          >
            <FaTwitter /> Twitter
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            className="btn bg-base-100 justify-start join-item"
          >
            <FaInstagram /> Instagram
          </a>
        </div>
      </div>

    </div>
  );
};

export default FindUs;
