import {
  BsFillHouseFill,
  BsFillInfoSquareFill,
  BsFillPersonVcardFill,
} from "react-icons/bs";
import { GrCertificate } from "react-icons/gr";
import { FaBook } from "react-icons/fa";
import { BiSolidBriefcaseAlt2 } from "react-icons/bi";
import styled from "styled-components";
import { Wrapper } from "../styles/Navbar";
import { useState } from "react";

const Navbar = () => {
  const [iconName, setIconName] = useState(null);
  const handleHover = (e) => {
    let name = e.currentTarget.href.split("#")[1];
    if (name === "hero") name = "home";
    setIconName(name);
  };
  return (
    <Wrapper>
      <div className="nav-center">
        <a
          onMouseLeave={() => setIconName(null)}
          onMouseOver={handleHover}
          href="#hero"
        >
          <BsFillHouseFill className="icon" />
        </a>
        <a
          onMouseLeave={() => setIconName(null)}
          onMouseOver={handleHover}
          href="#about"
        >
          <BsFillInfoSquareFill className="icon" />
        </a>
        <a
          onMouseLeave={() => setIconName(null)}
          onMouseOver={handleHover}
          href="#skills"
        >
          <FaBook className="icon" />
        </a>
        <a
          onMouseLeave={() => setIconName(null)}
          onMouseOver={handleHover}
          href="#certifications"
        >
          <GrCertificate className="icon" />
        </a>
        <a
          onMouseLeave={() => setIconName(null)}
          onMouseOver={handleHover}
          href="#projects"
        >
          <BiSolidBriefcaseAlt2 className="icon" />
        </a>
        <a
          onMouseLeave={() => setIconName(null)}
          onMouseOver={handleHover}
          href="#contact"
        >
          <BsFillPersonVcardFill className="icon" />
        </a>
      </div>
      {iconName && <div className="icon-name">{iconName}</div>}
    </Wrapper>
  );
};
export default Navbar;
