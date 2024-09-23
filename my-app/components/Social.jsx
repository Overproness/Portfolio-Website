import Link from "next/link";

import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://www.github.com/Overproness/" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/muntazar-ds/" },
  { icon: <FaYoutube />, path: "https://www.github.com/Overproness/" },
  { icon: <FaTwitter />, path: "https://www.linkedin.com/in/muntazar-ds/" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
