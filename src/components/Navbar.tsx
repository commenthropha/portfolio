import { AiFillLinkedin } from "react-icons/ai";
//@ts-ignore
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "../ThemeContext";

const Navbar = () => {
  const { light, toggle } = useTheme();

  return (
    <div className="max-w-[80rem] mx-auto flex flex-row items-center justify-between p-2 px-4">
        <DarkModeSwitch
          checked={!light}
          onChange={(checked:boolean) => {
            if (checked !== !light) toggle();
          }}
          size={24}
          sunColor="rgb(120 113 108)"
          moonColor="rgb(120 113 108)"
        />
        <a href="X" rel="noopener noreferrer">
          <AiFillLinkedin
            size="28px"
            className="text-stone-500 hover:text-stone-300 dark:hover:text-stone-300 transition-colors duration-200"
          />
        </a>
    </div>
  );
};

export default Navbar;