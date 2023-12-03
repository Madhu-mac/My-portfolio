import React from "react";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://www.linkedin.com/in/madhulokesh/" target="blank">
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/madhul0kesh/" target="blank">
          <BsInstagram />
        </a>
      </div>
      <div>
        <a href="https://github.com/Madhu-mac" target="blank">
          <BsGithub />
        </a>
      </div>
      <div>
      </div>
    </div>
  );
};

export default SocialMedia;
