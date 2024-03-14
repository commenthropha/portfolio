import { CardData } from "../public";

const TechCard = ({ title, image, background, text }: CardData) => {
    return (
      <div className="m-1 md:m-3">
        <div
          id="content"
          className={`${background} ${text} rounded-xl flex flex-col justify-center items-center p-2 sm:p-4`}
        >
          <img
            id="image"
            className="h-[2rem] md:h-[3rem] m-5 sm:m-3"
            src={image}
            alt="React Logo"
          />
          <div className="hidden md:block font-mono font-bold">
            {title}
          </div>
        </div>
      </div>
    );
  };
  
  export default TechCard;
  