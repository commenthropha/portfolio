import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { Fragment, useEffect, useRef, useState } from "react";
import { Project } from "../public";
import { FaArrowRight } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

const Card = ({ title, link, description, icons }: Project) => {
  const [isCardOpened, setIsCardOpened] = useState(false);
  const [cardDimensions, setCardDimensions] = useState({ width: 0, height: 0 });
  const card = useRef(null);

  useEffect(() => {
    if (isCardOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isCardOpened]);

  return (
    <Fragment>
      <CardLink
        className={`p-6 xl:p-12 rounded-lg bg-[#000000] text-[#D69400] ${!isCardOpened ? 'hover:cursor-pointer' : ''}`}
        ref={card}
        opened = {isCardOpened}
        layout
        onClick={() => {
          setIsCardOpened(true);
          if (!isCardOpened) {
            setCardDimensions({
              //@ts-ignore
              width: card.current?.clientWidth,
              //@ts-ignore
              height: card.current?.clientHeight
            });
          }
        }}
      >
        {isCardOpened && (
          <div id="Test" onClick={(e) => { e.stopPropagation(); setIsCardOpened(false); }} className="flex text-xl flex-col items-end mb-5 text-white">
            <RxCross1 className="hover:cursor-pointer"/>
          </div>
        )}
        <motion.div className="flex mb-1" layout="position">
          {icons.map(([Icon, color]) => (
            <Icon color={color} size={24} className="mr-1"/>
          ))}
        </motion.div>
        <motion.h1 className="text-xl font-bold" layout="position">
          {title}
        </motion.h1>
        {isCardOpened && (
          <div>
            {link ? <p className="font-mono mt-1">Link: <a className ="text-[#61DAFB] visited:text-purple-400 underline" href={link}>GitHub Page</a></p> : <p className="mt-1 font-mono">Link: Closed-Source</p>}
            <div className="text-white">
              {description.split('\n').map((line, i) => (
                <p className="m-3" key={i}>{line}</p> 
              ))}
            </div>
          </div>
        )}
        {!isCardOpened && (
          <p className="text-white mt-8 text-sm flex items-center">See more about this project<FaArrowRight className="ml-1 text-[#785EF0]"/></p>
        )}
      </CardLink>
      {isCardOpened && (
        <Fragment>
          <div
            style={{
              width: cardDimensions.width,
              height: cardDimensions.height
            }}
          ></div>
          <CardBackground
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
        </Fragment>
      )}
    </Fragment>
  );
}

const CardLink = styled(motion.div)<{ opened: boolean }>`
  height: 100%;
  width: 100%;
  ${(props) =>
    props.opened &&
    css`
      border: 1px solid #322763; 
      width: min(40rem, 95%);
      height: calc(100% - 10rem);
      overflow-y: auto;
      overflow-x: hidden;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      z-index: 20;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;

      @media (max-width: 450px) {
        width: 100%;
        height: 100%;
        border: none;
        overflow-y: visible;
      }
    `}
`;

const CardBackground = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 15;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(10, 10, 10, 0.7);
`;

export default Card