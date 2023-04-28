import React from "react";
import ReactPlayer from "react-player";

import "./footer.css";
import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";

const StyleIconLinkedin = { color: "#0A66C2", fontSize: "x-large" };

const StyleIconGit = { color: "#161B22", fontSize: "x-large" };

const StyleIconFacebook = { color: "#1877F2", fontSize: "x-large" };

const Footer = () => {
  return (
    <div>
       {/* <div className="player">
        <span>
          <ReactPlayer
            width="100%"
            height="73%"
            url="https://youtu.be/Nk42Y0MgFLc"
          />
        </span>
        <span>
          <ReactPlayer
            width="100%"
            height="73%"
            url="https://youtu.be/b0IuTL3Z-kk"
          />
        </span>
        <span>
          <ReactPlayer
            width="100%"
            height="73%"
            url="https://youtu.be/CcDikE5Dr1E?autoplay=1&mute=1"
          />
        </span>
      </div> */}

      <div className="iocnFooter">
        <a href="http://linkedin.com/in/yehooda-ishta-ba9a9a202">
          <FaLinkedin style={StyleIconLinkedin} />
        </a>

        <a href="https://github.com/yehooda">
          <FaGithubSquare style={StyleIconGit} />
        </a>

        <a href="https://www.facebook.com/yehooda">
          <FaFacebookSquare style={StyleIconFacebook} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
