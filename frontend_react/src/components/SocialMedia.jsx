import React from "react";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
const SocialMedia = () => {
  return (
    <div className="app__social_mobile">
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
            <a href="https://twitter.com/Madhumj623" target="blank">
            <FaSquareXTwitter />
            </a>
          </div>
    </div>
  );
};

export default SocialMedia;
