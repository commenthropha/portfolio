import logo from "../logo.webp";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import styles from "./styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className="max-w-[100rem] mx-auto flex flex-row items-center justify-between p-2 px-4">
      <div id="logo" className="justify-center flex flex-column w-12 h-12">
        <img src={logo} alt="Logo" />
      </div>
      <div id="icons" className="flex flex-row">
        <a href="https://github.com/commenthropha" rel="noopener noreferrer">
          <div className={`${styles.icon}`}>
            <AiFillGithub size="40px" />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/anees-haroon"
          rel="noopener noreferrer"
        >
          <div className={`${styles.icon}`}>
            <AiFillLinkedin size="40px" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
